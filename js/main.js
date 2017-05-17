/*Function for Full screen menu*/
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
}

/*Function for image slider*/
$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 5000
	})
    
    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
    
    
});


