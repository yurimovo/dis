<html>
	<head>
		<meta charset="utf-8">
		<title>Информация по квартире</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
	</head>
	<body style='background-color:#f45f45'>
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
		<?php
			mysqli_set_charset(on, "utf8mb4");
			require_once 'connection.php';
			
			$link = mysqli_connect($host, $user, $password, $database) 
			or die("Ошибка " . mysqli_error($link));

			mysqli_set_charset($link, "utf8");
			
			$query ="SELECT * FROM apartments WHERE apartment_id=".$_GET['client_id']." ORDER BY owner";
 
			$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
			if($result)
			{
				$row = mysqli_fetch_row($result);
				echo "<h3 align='center'>Информация по квартире: ".$row[2]."</h3><br>";
				echo "<table class='table table-bordered border-success table-dark table-striped'><tr>";
				echo "<tr><td width=400px, align='left'>Ф.И.О. владельца: </td><td width=400px, align ='left'>".$row[2]."</td>";
				echo "<tr><td width=400px, align='left'>Адрес: </td><td width=400px, align ='left'>".$row[1]."</td>";
				echo "<tr><td width=400px, align='left'>Телефон: </td><td width=400px, align ='left'>".$row[4]."</td>";
				echo "<tr><td width=400px, align='left'>№ договора: </td><td width=400px, align ='left'>".$row[5]."</td>";
				echo "<tr><td width=400px, align='left'>Дата договора: </td><td width=400px, align ='left'>".$row[6]."</td>";
				echo "<tr><td width=400px, align='left'>Стоимость в месяц: </td><td width=400px, align ='left'>".$row[11]."</td>";
				echo "<tr><td width=400px, align='left'>Вид охраны: </td><td width=400px, align ='left'>".$row[3]."</td>";
				echo "<tr><td width=400px, align='left'>Категория: </td><td width=400px, align ='left'>".$row[12]."</td>";
				echo "<tr><td width=400px, align='left'>Пультовый №: </td><td width=400px, align ='left'>".$row[10]."</td>";
				echo "<tr><td width=400px, align='left'>Наименование СПИ: </td><td width=400px, align ='left'>".$row[16]."</td>";
				echo "<tr><td width=400px, align='left'>Объектовое оборудование: </td><td width=400px, align ='left'>".$row[17]."</td>";
				echo "</table>";
     
				mysqli_free_result($result);
			}
 
			mysqli_close($link);
		?>
	</body>
</html>
