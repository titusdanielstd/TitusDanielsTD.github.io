# TitusDanielsTD.github.io
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>My Presentation</title>

<style>
body {
  margin: 0;
  background: #111;
  font-family: Arial, sans-serif;
}

.slide {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  padding: 20px;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

audio {
  position: fixed;
  bottom: 20px;
  left: 20px;
}
</style>
</head>

<body>

<div class="slide">
  <img src="images/photo1.jpg">
  <img src="images/photo2.jpg">
  <img src="images/photo3.jpg">
  <img src="images/photo4.jpg">
</div>

<audio controls>
  <source src="audio/presentation.mp3" type="audio/mpeg">
</audio>

</body>
</html>
