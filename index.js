const fs = require('fs');
const filename = "employees.json"

function writeEmployees(){
    fs.writeFile(filename, `{"name": "Employee 1 Name", "salary": 2000} `, 'utf8', (err)=>{
        if(err) console.log(err);
        else console.log("Writing employees.json done.")
    })

   
}

function readEmployees(){
    fs.readFile(filename,"utf8", (err, data)=>{
        if(err) console.log(err);
        else{
            console.log(data);
            console.log("Reading employees.json done.");
        }
    })

    
}

function updateEmployees(){
    fs.readFile(filename, 'utf8', (err,data) => {
        if (err) console.log(err);
        
        var result = data.replace(/2000/g, '2500');
      
        fs.writeFile(filename, result, 'utf8', (err) => {
           if (err) console.log(err);
           else console.log("Updating employees.json done.")
        });
    });

}

function deleteEmployees(){
    fs.unlink(filename,(err)=>{
        if(err) console.log(err);
        else console.log("Deleting employees.json done.")
    });
}

