

// (CRUD) GET, POST, DELETE, UPDATE



const url = "https://6023a8436bf3e6001766b514.mockapi.io/app-inventory"

let displayDatabase = document.querySelector("#display")
let inputButton = document.querySelector("#inputButton")



function summonDOM(param) {

   displayDatabase.innerHTML="";
    
    param.forEach( (items) => {

        let cards = document.createElement("DIV")
        
        cards.innerHTML = `${items.nama}`

        displayDatabase.appendChild(cards)

        creatingButton(items.id)
        

    });

}



// GET 
const readDatabase = async () => {

    const option = {
                    method : "GET"
                   }

          
    let data = await fetch (url, option)
    
    data = await data.json()
   
    
    summonDOM(data)

}

readDatabase()


// POST
const postDatabase = () => {

        let inputForm = document.querySelector("#inputForm").value
        let inputObj = {
                       nama : inputForm
                       }
        let dataJSON = JSON.stringify(inputObj)

        fetch (url , {
            method : "POST",
            headers: {'Content-Type' : 'application/json'},
            body: dataJSON
           })

        .then(hasil => readDatabase())
       // .then(data => readDatabase())
        .catch(err => console.log(err))
    

}

inputButton.addEventListener("click", postDatabase);


const creatingButton = (param) => {

    // delete
    let btnDelete = document.createElement("button");
    let btnText = document.createTextNode("Delete");

    btnDelete.appendChild(btnText)
    displayDatabase.appendChild(btnDelete)

    // update
    let btnUpdate = document.createElement("button");
    let btnText2 = document.createTextNode("Update");

    btnUpdate.appendChild(btnText2)
    displayDatabase.appendChild(btnUpdate)

    btnDelete.addEventListener ("click" , () => {

        // alert(  url+"/"+param  )

        const option = {
                        method : "DELETE"
                       }

        

        fetch (url+"/"+param , option)

        .then(hasil => readDatabase())
        // .then(data => readDatabase())
         .catch(err => console.log(err)) 

    } )



    btnUpdate.addEventListener ("click" , () => {

        // alert(  url+"/"+param  )

        let isiPrompt = prompt("asd");
        let isiPromptObj = {
                            nama : isiPrompt
                           }
        let isiPromptJSON = JSON.stringify(isiPromptObj);


                           console.log(isiPromptJSON);

        const option = {
                        method : "PUT",
                        headers: {'Content-Type' : 'application/json'},
                        body : isiPromptJSON
                       }


        fetch (url+"/"+param , option)


        .then(hasil => readDatabase())
        .catch(err => console.log(err)) 

    
    } )

}





