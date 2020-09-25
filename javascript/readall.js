fetch('http://jsonplaceholder.typicode.com/posts')
    .then(
        //checks for error codes on fetching of data
        //if any error code is found, prints to console
        function(response){
            if (response.status !== 200){
                console.log('Error ' + response.status);
            return;
            }
        }
    )