console.log('hi')


       $('#kanye').on('click', function(){      
        $.ajax({
                method: 'get',
                url: 'https://api.kanye.rest/'
            })      
          .then(response => {
              console.log(response.quote)

              $('#quote').text(response.quote) 
      })
    })
