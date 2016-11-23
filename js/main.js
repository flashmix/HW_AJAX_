(function(){
	$('#getData').click(function(){

		$.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos',
			type: 'GET',
			beforeSend: function(){
    		   $('#content').append('<img id="gif" src="img/loader.gif" alt="">')
  			},
			success: function( res ){   
				$('#gif').hide();
                for( var i = 0;i < 50; i++ ){
				$('#content').append('<div><img src="'+res[i].thumbnailUrl+'"></div>')
				}
			}
		})
    });
}())


