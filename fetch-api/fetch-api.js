fetch('todos/carla.json').then((response) =>{
    console.log('resolved', response);
    return response.json();
}).then( data =>{
   console.log(data);
}).catch((err) =>{
   console.log('rejected', err);
})

//todo steps 1. fetch data,  2.take response, 3. return response