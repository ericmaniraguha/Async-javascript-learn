
const getTodos =(resource, callback) =>{
    const request = new XMLHttpRequest();

   request.addEventListener('readystatechange',()=>{
    if(request.readyState === 4 && request.status === 200){
       const data = JSON.parse(request.responseText);
      
      
      callback(undefined,data);  //todo if we have data the error will be undefined then we call data

    }else if(request.readyState === 4){
                callback('Could not fetch data', undefined); // todo the second is undefined as we do not have data here, here we call message for telling us that not fetch data and then, resp is undefined
    }
  }) ;
    request.open('GET', resource);
    request.send();
}

//todo callback functiion
getTodos('todos/carla.json', (err, data)=>{ 
   console.log(data); 

   getTodos('todos/orane.json', (err, data) =>{
      console.log(data);
   })

   getTodos('todos/parker.json', (err, data) =>{
      console.log(data);
   })
});

