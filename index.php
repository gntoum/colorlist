<html>
	<head>
		<title>Color Pallete App</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<link rel="stylesheet" href="style.css" type="text/css" media="all" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script type='text/javascript' src='assets/app.js'></script>
	</head>

	<body>
		<div class="container">			
				<div class="row main-title">
					<div class="col-xl-12">
						<h1 class="form-title">Create Your Color Pallete</h1>
					</div>
				</div>		
				<div class="row">
					<div class="col-md-12 col-lg-12">
						<p class="name">
							<label for="name">Add your hex color code</label>
							<input type="text" name="hexcolor" id="hexcolor" placeholder="#ececec" class="form-control" />
							<input type="button" id="AddColor" value="Add to Color List" />
							<input type="button" id="SaveColor" value="Save new color" disabled />
							<input type="button" id="DeleteColor" value="Delete from List" disabled />
						</p>
					</div>
					<div id="colorlist" class="col-md-12 col-lg-12 colorpallete">
			
					</div>
				</div>
		</div>
	</body>
</html>
