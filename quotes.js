/*global $ X*/

$(document).ready(function() {
    // var x = getQuote()
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
    
    
    
	$('#getQuote').on('click', function(event) { //linking the button from html
		getQuote();
	})
	
	$("#tweet").on("click", function(){
		tweet();
		// window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("hello"));
	})
	
	function tweet () {
		console.log("tweet");
		var phrase = document.getElementById('quote').innerText;
		var tweetUrl = 'https://twitter.com/intent/tweet?text=' +
	    		encodeURIComponent(phrase);
		window.open(tweetUrl);
	}
	
	
	// document.getElementById("tweet").onclick = function() {
	// 	console.log("hello");
	// 	window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("hello")); 
	// }
	
	(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
	
})

