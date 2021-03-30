<html>
	<head>
		<meta charset="utf-8">
		<title>Принятые-расторгнутые объекты</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
	</head>
	<body style='background-color: #f45f45'>		
		<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
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
			$obj_id=0;
			require_once 'connection.php';
			$link = mysqli_connect($host, $user, $password, $database) 
				or die("Ошибка " . mysqli_error($link));
			mysqli_set_charset($link, "utf8");
			$query ="SELECT * FROM facilities WHERE YEAR(contruct_date)=2021 ORDER BY contruct_date";
			$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
			if($result)
			{
				$rows = mysqli_num_rows($result);
				echo "<br>";
				echo "<br>";
				echo "<br>";
				echo "<h3 align='center'>Принятые объекты в 2021 году</h3>";
				echo "<table class='table table-bordered border-success table-secondary'>";
				echo "<thead class='table-success table-bordered border-success'>";
					echo "<tr>";
						echo "<th scope='col' width=40px, align='center'>Форма собственности</th>"; 
						echo "<th scope='col' width=40px, align='center'>Категория</th>"; 
						echo "<th scope='col' width=100px, align='center'>Организация</th>";
						echo "<th scope='col' width=100px, align='center'>Адрес</th>";
                        echo "<th scope='col' width=100px, align='center'>№ договора, дата заключения</th>";
						echo "<th scope='col' width=100px, align='center'>Техническое обслуживание</th>";
						echo "<th scope='col' width=100px, align='center'>Вид охраны</th>";
						echo "<th scope='col' width=100px, align='center'>Тариф и дата введения</th>";
						echo "<th scope='col' width=100px, align='center'>Время охраны</th>";
						echo "<th scope='col' width=100px, align='center'>Монтажная организация</th>";
						echo "<th scope='col' width=100px, align='center'>СПИ и оборудование</th>";
						echo "<th scope='col' width=100px, align='center'>Пультовый №</th>";
					echo "</tr>";
				echo "</thead>";
				while ($row = mysqli_fetch_row($result)) {
					echo "<tr>";
						echo "<td width=360px, align='left'>$row[13]</td>";
						echo "<td width=360px, align='left'>$row[14]</td>";
						echo "<td width=360px, align='left'>$row[1]</td>";
                        echo "<td width=360px, align='left'>$row[3]</td>";
                        echo "<td width=360px, align='left'>$row[7] от $row[22]</td>";
						echo "<td width=360px, align='left'>$row[15]</td>";
						echo "<td width=360px, align='left'>$row[5]</td>";
						echo "<td width=360px, align='left'>$row[12] с $row[21]</td>";
						echo "<td width=360px, align='left'>$row[10]</td>";
						echo "<td width=360px, align='left'>$row[16]</td>";
						echo "<td width=360px, align='left'>$row[11] $row[17]</td>";
						echo "<td width=360px, align='left'>$row[4]</td>";
					echo "</tr>";
				}
				echo "</table>";
				mysqli_free_result($result);
			}

            $query ="SELECT * FROM archive_facilities WHERE YEAR(termination_date)=2021 ORDER BY termination_date";
			$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
			if($result)
			{
				$rows = mysqli_num_rows($result);
				echo "<br>";
				echo "<br>";
				echo "<br>";
				echo "<h3 align='center'>Расторгнутые объекты в 2021 году</h3>";
				echo "<table class='table table-bordered border-success table-secondary'>";
				echo "<thead class='table-success table-bordered border-success'>";
					echo "<tr>";
						echo "<th scope='col' width=40px, align='center'>Форма собственности</th>"; 
						echo "<th scope='col' width=40px, align='center'>Категория</th>"; 
						echo "<th scope='col' width=100px, align='center'>Организация</th>";
						echo "<th scope='col' width=100px, align='center'>Адрес</th>";
                        echo "<th scope='col' width=100px, align='center'>№ договора, дата заключения</th>";
						echo "<th scope='col' width=100px, align='center'>Техническое обслуживание</th>";
						echo "<th scope='col' width=100px, align='center'>Вид охраны</th>";
						echo "<th scope='col' width=100px, align='center'>Тариф и дата введения</th>";
						echo "<th scope='col' width=100px, align='center'>Время охраны</th>";
						echo "<th scope='col' width=100px, align='center'>Монтажная организация</th>";
						echo "<th scope='col' width=100px, align='center'>СПИ и оборудование</th>";
						echo "<th scope='col' width=100px, align='center'>Пультовый №</th>";
					echo "</tr>";
				echo "</thead>";
				while ($row = mysqli_fetch_row($result)) {
					echo "<tr>";
						echo "<td width=360px, align='left'>$row[13]</td>";
						echo "<td width=360px, align='left'>$row[14]</td>";
						echo "<td width=360px, align='left'>$row[1]</td>";
                        echo "<td width=360px, align='left'>$row[3]</td>";
                        echo "<td width=360px, align='left'>$row[7] от $row[22]</td>";
						echo "<td width=360px, align='left'>$row[15]</td>";
						echo "<td width=360px, align='left'>$row[5]</td>";
						echo "<td width=360px, align='left'>$row[12] с $row[21]</td>";
						echo "<td width=360px, align='left'>$row[10]</td>";
						echo "<td width=360px, align='left'>$row[16]</td>";
						echo "<td width=360px, align='left'>$row[11] $row[17]</td>";
						echo "<td width=360px, align='left'>$row[4]</td>";
					echo "</tr>";
				}
				echo "</table>";
				mysqli_free_result($result);
			}

			mysqli_close($link);
		?>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
	</body>
</html>