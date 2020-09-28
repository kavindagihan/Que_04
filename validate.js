<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		function formvalidation() {

			var email=document.getElementById('email').value;

			}else if (email.trim()  == " ") {
				alert("Empty value in email");
				return false;

		}
	</script>
</head>
<body>
	<h1>Enter email to Validate</h1>
	<form>
		

		<label>Enter email to Validate</label><br><br>
		<input type="text" name="" id="email"><br><br>

		<button type="button" value="submit" onclick="formvalidation()">Validate</button>
	</form>
</body>
</html>