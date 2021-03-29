<html>
<head>
	<meta charset="utf-8">
	<title>Добавление объекта</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
</head>
<body style='background-color:#f45f45'>
	<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarContent">
				<ul class="navbar-nav mr-auto ml-auto mb-2">
					<li class="nav-item">
						<a href="index.php" class="nav-link">Главная</a>
					</li>
					<li class="nav-item">
						<a href="facilities.php" class="nav-link">Объекты</a>
					</li>
					<li class="nav-item">
						<a href="apartments.php" class="nav-link">Квартиры</a>
					</li>
					<li class="nav-item">
						<a href="reports.php" class="nav-link">Отчёты</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<br>
	<br>
	<br>
	<div class="form-wrap">
		<h3 class="text-center mb-2">Добавление объекта</h3>
	</div>
	<form method="post" action="facility_add.php">
		<div class="container">
			<div class="row ml-auto mr-auto">
				<div class="col-sm ml-auto mr-auto">
					<input type="text" class="form-control" id="formGroupExampleInput" name="organization" placeholder="Организация" required>
					<br>
					<input type="text" class="form-control" id="formGroupExampleInput" name="facility" placeholder="Объект" required>
					<br>
					<input type="text" class="form-control" id="formGroupExampleInput" name="address" placeholder="Адрес" required>
					<br>
					<input type="text" class="form-control" id="formGroupExampleInput" name="phones" placeholder="Номера телефонов" required>
					<br>
					<input type="text" class="form-control" id="formGroupExampleInput" name="contruct_number" placeholder="Номер договора" required>
					<br>
					<input type="date" class="form-control" id="date" name="contruct_date" placeholder="Дата договора" required>
					<br>
					<input type="text" class="form-control" id="price" name="price" placeholder="Стоимость в месяц" required>
					<br>
					<input type="date" class="form-control" id="price_date" name="price_date" placeholder="Дата введения тарифа" required>
					<br>
					<select name="ownership_type">
						<option value="1">Государственная</option>
						<option value="2">Прочая</option>
					</select>
					<br>

				</div>
				<div class="col-sm ml-auto mr-auto">

				</div>
			</div>
			<div class="row ml-auto mr-auto">
				<div class="col-sm">
					<br>
					<button type="submit" class="btn btn-success ml-auto mr-auto">Записать</button>
				</div>
			</div>
		</div>
	</form>
	<?php
	include 'connection.php';
	$link = mysqli_connect($host, $user, $password, $database)
		or die("Ошибка " . mysqli_error($link));
	mysqli_set_charset($link, "utf8");

	if (isset($_POST["organization"]) && isset($_POST["facility"]) && isset($_POST["address"])) {
		$organization = $_POST['organization'];
		$facility = $_POST['facility'];
		$address = $_POST['address'];
		$sql = "INSERT INTO facilities (organization,facility,address) 
						VALUES ('$organization','$facility','$address')";
		if (mysqli_query($link, $sql)) {
			//header('Location: done.php');
			//exit();
			echo "<p>Данные успешно добавлены в таблицу.</p>";
		} else {
			echo "<p>Произошла ошибка: " . mysqli_error($link) . "</p>";
		}
	}
	?>
	
</body>
<script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
<script src="/node_modules/jquery/dist/jquery.min.js" type="text/javascript"></script>
<script src="/node_modules/jquery.maskedinput/src/jquery.maskedinput.min.js" type="text/javascript"></script>
</html>