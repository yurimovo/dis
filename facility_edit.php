<html>
	<head>
		<meta charset="utf-8">
		<title>Редактирование объекта</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
		<link rel="stylesheet" href="/styles/obj.css">
	</head>
	<body>
		<?php
			require_once 'connection.php';
			
			$link = mysqli_connect($host, $user, $password, $database) 
			or die("Ошибка " . mysqli_error($link));

			mysqli_set_charset($link, "utf8");
			
			$query ="SELECT * FROM dis WHERE obj_id=".$_GET['obj_id']." ORDER BY org";
 
			$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
			if($result)
			{
				$row = mysqli_fetch_row($result);
				echo "<h1 align='center'>Редактирование объекта: ".$row[3]."</h1><br>";
				echo "<table class='table table-success table-sm table-bordered border-primary'>";
				echo "<tr><td width=400px, align='left'>Организация: </td><td width=400px, align ='left'><input type='text' name='org' value="$row[1]"></input></td></tr>";
				/*echo "<tr><td width=400px, align='left'>Объект: </td><td width=400px, align ='left'>".$row[3]."</td>";
				echo "<tr><td width=400px, align='left'>Адрес: </td><td width=400px, align ='left'>".$row[4]."</td>";
				echo "<tr><td width=400px, align='left'>№ договора: </td><td width=400px, align ='left'>".$row[8]."</td>";
				echo "<tr><td width=400px, align='left'>Дата договора: </td><td width=400px, align ='left'>".$row[28]."</td>";
				echo "<tr><td width=400px, align='left'>Стоимость в месяц: </td><td width=400px, align ='left'>".$row[13]."</td>";
				echo "<tr><td width=400px, align='left'>Вид охраны: </td><td width=400px, align ='left'>".$row[6]."</td>";
				echo "<tr><td width=400px, align='left'>Категория: </td><td width=400px, align ='left'>".$row[16]."</td>";
				echo "<tr><td width=400px, align='left'>Пультовый №: </td><td width=400px, align ='left'>".$row[5]."</td>";
				echo "<tr><td width=400px, align='left'>Наименование СПИ: </td><td width=400px, align ='left'>".$row[12]."</td>";
				echo "<tr><td width=400px, align='left'>Объектовое оборудование: </td><td width=400px, align ='left'>".$row[21]."</td>";
				echo "<tr><td width=400px, align='left'>Часы охраны: </td><td width=400px, align ='left'>".$row[11]."</td>";*/
				echo "</table>";
				echo "<input type ='submit'  value = 'submit'>";
     
				mysqli_free_result($result);
			}
 
			mysqli_close($link);
		?>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
	</body>
</html>
