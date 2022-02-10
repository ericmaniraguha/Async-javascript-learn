fetch('data-api.json')
.then(res => {
    if(res.ok){
        console.log('Success');
    }else{
        console.log("Not successful");
    }
})
.then(data => console.log(data))
.catch(error => console.log("Error"));