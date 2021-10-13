console.log('hi')

// select the button
    //add clicl event for when button is clicked
       $('#kanye').on('click', function(){
//use ajax to request info         
        $.ajax({
                method: 'get',
                url: 'https://api.kanye.rest/'
            })      
    //successful add item
          .then(response => {
              console.log(response.quote)

              $('#quote').text(response.quote) 
      })
    })
   
  