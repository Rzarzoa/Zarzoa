'use strict';



class App{
	constructor(){

	}
	render(html, component){
		/* Override */
		component.innerHTML += html;
	}
}
class Component extends App{
	constructor(){
		super();
	}
	wholePage(){
		this.render(
`

<!--start slideshow design-->
<script type="text/javascript">
<!-->
var image1=new Image()
image1.src="Images/img_1.gif"
var image2=new Image()
image2.src="Images/img_2.jpg"
var image3=new Image()
image3.src="Images/img_3.jpg"
var image4=new Image()
image4.src="Images/img_4.jpg"
//-->
</script>



<!--start design SlideShow-->
<img class="slide_show" src="Images/img_1.gif" name="slide">
<script type="text/javascript">
<!--
var step=1
function slideit(){
document.images.slide.src=eval("image"+step+".src")
if(step<4)
step++
else
step=1
setTimeout("slideit()",4000)
}
slideit()
//-->
</script>

        


<style>
body
{
	background-color: #e8e8e8;
	background:url("Images/bg.jpg");
	background-repeat: no-repeat;
}
</style>


  <div  style="z-index: 10;" class="navbar-fixed">
  <nav>
    <div class="nav-wrapper #1976d2 blue darken-2">
      <ul class="left hide-on-med-and-down">
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="">Destinations</a></li>
        <li><a href="">Hotels</a></li>
        <li><a href="">Packages</a></li>
        <li><a href="">Promos</a></li>
      </ul>
    </div>
  </nav>
  </div>



<div style="
position: fixed;
z-index: 10; 
top: 64px;
left: -1px;
background-color: #E7B25E;
height: 10px;
width: 1440px;
margin: 0 auto;
margin-left: auto;
margin-right: auto;
width: 100%;
"> </div>
  
<div style="
position: absolute;
z-index: 5; 
top: 775px;
left: 620px;
margin: 0 auto;
margin-left: auto;
margin-right: auto;
">
<img  height="190px" width="190px" src="Images/logo.png">
</div>

<font face="impact" size="5" color="white">
<div style="
position: fixed;
z-index: 30; 
top: 1px;
left: 980px;
margin: 0 auto;
margin-left: auto;
margin-right: auto;
">
<img src="Images/g2.png">
</div>
</font>

<font face="impact" size="5" color="white">
<div style="
position: absolute;
z-index: 1; 
top: 110px;
left: 1065px;
background-color: ;
height: 400px;
width: 300px;
margin: 0 auto;
margin-left: auto;
margin-right: auto;
">Why Travel with us?<br><br></font>
<font face="Arial" size="5" color="white">
When it comes to extraordinary travel experiences in Asia, we are the experts. With dedicated teams and offices in each of our destination countries and over 5 years of experience building unforgettable holidays, we are a travel companion with a difference.</div>

<font face="impact" size="5" color="white">
<div style="
position: absolute;
z-index: 1; 
top: 505px;
left: 575px;
background-color: ;
height: 500px;
width: 400px;
margin: 0 auto;
margin-left: auto;
margin-right: auto;
">24-HOUR ON THE GROUND SUPPORT<br><br></font>
<font face="Arial" size="5" color="white">
Travel can be unpredictable, so our teams are dedicated to providing you with support every hour of the day. Whether you need to confirm a booking, make a change or add to your itinerary, our teams are here to help 24/7.</div>




<img class="fb" src="Images/fb.png">
<img class="twit" src="Images/twit.png">


<img id="f_1" src="Images/f_1.png">
<img id="f_2" src="Images/f_2.png">
<img id="f_3" src="Images/f_3.png">

<video id="vid1" width="500" controls autoplay>
  <source src="Images/vid_1.mp4" type="video/mp4">
</video>


<div style="
position: absolute;
z-index: 10; 
top: 1450px;
left: 3px;
background-color: #E7B25E;
height: 10px;
width: auto;
margin: 0 auto;
margin-left: auto;
margin-right: auto;
width: 100%;
"> </div>



<center>
<font face="impact" size="3" color="#2d2d2d">
<div style="
position: absolute;
z-index: 2; 
top: 1470px;
height: 10px;
margin: 0 auto;
margin-left: auto;
margin-right: auto;
width: 100%;
">Copyright &copy; 2016 The Go2 Travel Agency.</div>
</font>
</center>

<center>
<font face="impact" size="3" color="#2d2d2d">
<div style="
position: absolute;
z-index: 2; 
top: 1490px;
height: 10px;
margin: 0 auto;
margin-left: auto;
margin-right: auto;
width: 100%;
"> <br><br><br></div>
</font>
</center>
</div>










`,document.getElementById('app'));
	}
}



let component = new Component();
component.wholePage();	








	