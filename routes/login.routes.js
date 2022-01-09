const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

router.post(
    '/register', 
    [
        check('password', 'Minimal password length mus be 6 symbols')
            .isLength({ min: 6 })
    ],
    async(req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect registration data'
            })
        }

        const {userName, password} = req.body

        const candidate = await User.findOne({ username })

        if (candidate) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const hashedPasword = await bcrypt.hash(password, 33)
        const user = new User({
            userName,
            password: hashedPasword
        })

        await user.save()

        res.status(201).json({ message: 'User has been created' })

    } catch (e) {
        res.status(500).json({ message: 'Something wrong' })
    }
})

router.post(
    '/login',
    [
        check('password', 'Please, enter password').exists()
    ],
    async(req, res) => {
    try {
        const errors = validationResult(req)
    
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect authorization data'
            })
        }
    
        const {userName, password} = req.body

        const user = await User.findOne({ userName })

        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }

        const isMatch = await bcrypt.compare(password, hashedPasword)

        if (!isMatch) {
            return res.status(400).json({ message: 'Wrong password' })
        }

        const token = jwt.sign(
            { userId: user.id},
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )

        res.json({ token, userId: user.id })
    
    } catch (e) {
        res.status(500).json({ message: 'Something wrong' })
    }
})

module.exports = router