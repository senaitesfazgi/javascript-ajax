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
      //prepare for HTML list
      const peopleUl = document.createElement("ul");
      //Let's grap those people
      const people = data.people;
      for (const person of people)
      {
          //Prepare LI for the person
        const personLi = document.createElement("LI");
        //Add some text content(Using text literal to inject our values)
        personLi.textContent = `${person.name} is currently aboard ${person.craft}.`;
        // Add this <LI> to Our <UL>
        peopleUl.appendChild(personLi); 
      }
      //Add our UL to the Body element 
      document.body.appendChild(peopleUl);
  })
   
