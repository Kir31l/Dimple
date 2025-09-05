<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Dimple Star Transport</title>
<link rel="stylesheet" type="text/css" href="style.css" />
<link rel="icon" href="images/icon.ico" type="image/x-con">
<script src="slide/js/jquery.js"></script>
<script src="slide/js/amazingslider.js"></script>
<script src="slide/js/initslider-1.js"></script>
</head>
<body>
<div id="wrapper">
    <div id="header">
        <h1>Dimple Star Transport</h1>
    </div>
    <ul id="mainnav">
    <li class="nav-logo">
        <a href="index.php"><img src="images/logo.png" class="logo" alt="Dimple Star Transport" /></a>
    </li>
    <li class="current"><a href="index.php">Home</a></li>
    <li><a href="about.php">About Us</a></li>
    <li><a href="terminal.php">Terminals</a></li>
    <li><a href="routeschedule.php">Routes / Schedules</a></li>
    <li><a href="contact.php">Contact</a></li>
    <li><a href="book.php">Book Now</a></li>
    <li class="nav-login">
        <?php
            session_start();
            if(isset($_SESSION['email'])){
                echo "Welcome, " . $_SESSION['email'] . "! <a href='logout.php'>Logout</a>";
            } else {
                echo "<a href='signlog.php'>SignUp / Login</a>";
            }
        ?>
    </li>
    </ul>
    <div id="content">
    	<div id="gallerycontainer">
			<div style="margin:10 auto; padding:30px 20px 20px 20px;">	
				<div class="login">
					<div id="right">
					</div>
				</div>
				<div style="margin:0px auto;max-width:1024px;">
					<div id="amazingslider-1">
						<ul class="amazingslider-slides" style="display:none;">
						<li><img src="slide/images/b1.png" /> </li>
						<li><img src="slide/images/b2.png" /></li>
						<li><img src="slide/images/b3.png" /></li>
						<li><img src="slide/images/b4.png" /></li>
						</ul>
					</div>
				</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
	Contact us at:
	<h2>0929 209 0712</h2>
	Block 1 lot 10, southpoint Subd.<br>
	Brgy Banay-Banay, Cabuyao, Laguna<br>

	<div id="right">
		<h3><?php include_once("php_includes/date_time.php"); ?></h3>
	</div>			
				<div class="column-clear"></div>
            </div>
				<div class="clearfix"></div>
        </div>
    </div>    
<div id="footer">
	<a href="index.php"><img src="images/footer-logo.jpg" alt="Dimple Star Transport" /></a>
	<p>&copy;Dimple Star Transport<br /></p>
</div>

</div>
</body>
</html>