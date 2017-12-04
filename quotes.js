/*global $ quote*/
$(document).ready(function() {
	$('.getQuote').on('click', function(e) {
		e.preventDefault();
		$.ajax({
			url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
			success: function(data) {
				var post = data.shift(); // The data is an array of posts. Grab the first one.
				$('#quote-title').text(post.title);
				$('#quote-content').html(post.content);
				// If the Source is available, use it. Otherwise hide it.
				if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
					$('#quote-source').html('Source:' + post.custom_meta.Source);
				} else {
					$('#quote-source').text('');
				}
                //go into twitter
                $(".tweet").click(function(){
                $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quote);
                });
                //twitter 
                function tweetIt () {
                var phrase = document.getElementById('.getQuote').innerText;
                var tweetUrl = 'https://twitter.com/share?text=' +
                encodeURIComponent(phrase) + '.';
    
  window.open(tweetUrl);
}

                
			},
            
			cache: false
		});
	});
})


//$(document).ready(function() {
// 	var quote,
// 		author;
// 	// this is where I will get the API
// 	function getNewQuote() {
// 		$.ajax({
// 			url: 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en',
// 			jsonp: 'jsonp',
// 			data: {
// 				method: 'getQuote',
// 				lang: 'en',
// 				format: 'jsonp'
// 			},
// 			//sucess is to get data back
// 			success: function(res) {
// 				console.log(res);
// 				quote = res.quoteText;
// 				author = res.quoteAuthor;
// 				$('#quote').text(quote);
// 				if (author) {
// 					$('#author').text('Author: ' + author);
// 				} else {
// 					$('#author').text('Author: unknown');
// 				}
// 			}
// 		});
// 	}
	
	
// 	getNewQuote();
// 	$('.getQuote').on('click', function(event) {
// 		event.preventDefault();
// 		getNewQuote();
// 	}),
// })