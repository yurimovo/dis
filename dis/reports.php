<html>
    <head>
		<meta charset="utf-8">
        <title>Отчёты</title>
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
		<div class="container mt-4">
			<div class="row ml-auto mr-auto">
				<div class="col-6 col-md-6">
                    <div class="btn-group-vertical btn-group-lg" role="group" aria-label="Basic example">
                        <a class="btn btn-success" href="facility_dis.php" role="button">Дислокация объектов</a>
                        <a class="btn btn-success" href="add-del_facilities.php" role="button">Принятые-расторгнутые объекты</a>
                    </div>
			    </div>
                <div class="col-6 col-md-6">
                    <div class="btn-group-vertical btn-group-lg" role="group" aria-label="Basic example">
                        <a class="btn btn-primary" href="apartment_dis.php" role="button">Дислокация квартир</a>
                        <a class="btn btn-primary" href="add-del_apartments.php" role="button">Принятые-расторгнутые квартиры</a>
                    </div>
			    </div>
			</div>
        </div>		
    </body>
</html>