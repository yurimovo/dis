<html>
	<head>
		<meta charset="utf-8">
		<title>Объекты</title>
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
			$query ="SELECT facility_id,organization,facility,address FROM facilities ORDER BY organization";
			$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
			if($result)
			{
				$rows = mysqli_num_rows($result);
				echo "<br>";
				echo "<br>";
				echo "<br>";
				echo "<h3 align='center'>Объекты по состоянию на<br>";
				echo "".date("d.m.y")." </h3>";
				echo "<p align='center'><a href='facility_add.php'><img src='/pics/add.png'></a></p>";
				echo "<table class='table table-bordered border-success table-dark table-striped'>";
				echo "<thead class='table-dark table-bordered border-success'>";
					echo "<tr>";
						echo "<th scope='col' width=360px, align='center'>Организация</th>"; 
						echo "<th scope='col' width=360px, align='center'>Объект</th>"; 
						echo "<th scope='col' width=80px, align='center'></th>";
						echo "<th scope='col' width=360px, align='center'>Адрес</th>";
					echo "</tr>";
				echo "</thead>";
				while ($row = mysqli_fetch_row($result)) {
					echo "<tr>";
						echo "<td width=360px, align='left'>$row[1]</td>";
						echo "<td width=360px, align='left'><a href='facility_info.php?obj_id=$row[0]' class='link-light'>$row[2]</a></td>";
						echo "<td width=80px, align='center'><a href='facility_edit.php?obj_id=$row[0]'><img src='/pics/edit.png'></a><img src='/pics/delete2.png'></td>";
						echo "<td width=360px, align='left'>$row[3]</td>";
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