function getOne(){

    let ID = document.getElementById('ID').value;

    fetch('http://jsonplaceholder.typicode.com/posts/'+ID)
    .then(
        //checks for error codes on fetching of data
        //if any error code is found, prints to console
        function(response){
            if (response.status !== 200){
                console.log('Error ' + response.status);
            return;
            }
            //captures data from fetch, and outputs it
            //in the console
            response.json().then(function(data1){
                console.log("data: ",data1);
                let table = document.querySelector("table");
                let data = Object.keys(data1[0]);
                
                //calls the generate head 
                //and generate table functions
                generateTableHead(table,data);
                generateTable(table,data1);
            });
        }
    )
    //finds and prints any fetch errors to console
    .catch(function(error){
        console.log('Fetch Error: ',error)
    }
    );

    //creates the table collumns
    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          
          th.appendChild(text);
          row.appendChild(th);
        }
        //creates the extra collumn
        //for the view button to go into
        let th1 = document.createElement("th");
        let text1 = document.createTextNode("view");
        th1.appendChild(text1);
        row.appendChild(th1);
      }
      
      //creates the records in the table
      function generateTable(table, data) {
        for (let element of data) {
          let row = table.insertRow();
          for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
          //appends the extra button that 
          //isnt pulled straight from the json
            let cell1 = row.insertCell();
            let text1 = document.createElement("a");
            text1.innerHTML=("view")
            text1.className= ("btn btn-info")
            text1.href="https://jsonplaceholder.typicode.com/posts/"+element.id
            cell1.appendChild(text1);
        }
      }
      

      //no clue what this does
      const params = new URLSearchParams(window.location.search);

      console.log(params)
      
      for(const param of params){
        console.log(param);
      }
    }