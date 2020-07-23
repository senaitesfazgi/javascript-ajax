/**
 * AJAX Examples
 */
  //Retrieving an external resource (live JSON data)
  fetch("http://api.open-notify.org/astros.json")
  //we can use .then() to parse the response
  .then(response =>{
      if (response.status >= 200 && response.status <=299)
      {
        return response.json()//convert to JSON and convert the next step(.then())
      }
      else
      {//if it is another range we are unsuccessful
          throw Error(response.statusText);
      }
     
  })
  //Data has been formatted lets have a look inside
  .then(data => {
      //Out put data to console fot testing
      console.log(data);
  })
   
