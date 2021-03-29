<html>
	<head>
		<meta charset="utf-8">
		<title>Добавление квартиры</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
	</head>
	<body style='background-color: #f45f45'>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  			<div class="container">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
					aria-controls="navbarContent" aria-expanded="false">
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
		<h3 class="text-center mb-2">Добавление квартиры</h3>
			<form method="post" action="">		
				<div class="container">
					<div class="row ml-auto mr-auto">
						<div class="col-sm ml-auto mr-auto">
							<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ф.И.О. владельца" name="owner" required>
							<br>
							<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Адрес" name="address" required>
							<br>
							<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Телефон" name="phones" required>
							<br>
						</div>
						<div class="col-sm ml-auto mr-auto">
							Категория
							<select name="apartment_category">
								<option value="1">Гараж</option>
								<option value="2">Квартира</option>
								<option value="3">Частный дом</option>
							</select>
							<br>
							<br>
							<input type="text" class="form-control" id="formGroupExampleInput" placeholder="№ договора" name="contruct_number" required>
							<br>
							<input type="text" class="form-control" id="formGroupExampleInput" placeholder="№ договорного дела" name="contruct_file_number" required>
							<br>
							<input type="text" class="form-control" id="formGroupExampleInput" placeholder="№ литерного дела" name="lettered_file_number" required>
							<br>
						</div>
					</div>
					<div class="row ml-auto mr-auto">
						<div class="col-sm">
							<button type="submit" class="btn btn-success ml-auto mr-auto">Записать</button>
						</div>
					</div>
				</div>
				<?php
					require_once 'connection.php';
					$link = mysqli_connect($host, $user, $password, $database) 
						or die("Ошибка " . mysqli_error($link));
					mysqli_set_charset($link, "utf8");
					if (isset($_POST["owner"]) && isset($_POST["address"]) && isset($_POST["phones"]) && isset($_POST["apartment_category"]) 
						&& isset($_POST["contruct_number"]) && isset($_POST["contruct_file_number"]) && isset($_POST["lettered_file_number"]))
					{
						$owner=$_POST['owner'];
						$address=$_POST['address'];
						$phones=$_POST['phones'];
						$apartment_category=$_POST['apartment_category'];
						$contruct_number=$_POST['contruct_number'];
						$contruct_number_int=intval($contruct_number,'integer');
						$contruct_file_number=$_POST['contruct_file_number'];
						$contruct_file_number_int=intval($contruct_file_number,'integer');
						$lettered_file_number=$_POST['lettered_file_number'];
						$lettered_file_number_int=intval($lettered_file_number,'integer');
						$sql = mysqli_query($link, "INSERT INTO apartments (owner,address,phones,apartment_category,contruct_number,contruct_file_number,lettered_file_number) 
																		VALUES (".$owner.",".$address.",".$phones.",".$apartment_category.",".$contruct_number_int.",".$contruct_file_number_int.",".$lettered_file_number_int.")");
						if ($sql) {
							echo "<p>Данные успешно добавлены в таблицу.</p>";
						} 
						else {
							echo "<p>Произошла ошибка: " . mysqli_error($link) . "</p>";
						}
					}
				?>
			</form>	
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
	</body>
</html>