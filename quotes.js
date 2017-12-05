/*global $*/
$(document).ready(function() {
    
    function getQuote (){
        $.ajax ({
            method: "GET",
            url : "https://got-quotes.herokuapp.com/quotes",
            success: function (response) {   // response can be anything, it's an argument
                $("#quote").text(response.quote); //to put the quote in website
                // document.getElementById("quote").innerHTML = response.quote;
                $("#character").text(response.character);
                // document.getElementById("character").innerHTML = response.character;
            }
        })
    }
    getQuote();
    
	$('#getQuote').on('click', function(event) { 
		getQuote();
		
	})
	
})
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));