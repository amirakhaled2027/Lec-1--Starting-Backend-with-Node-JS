const fs = require('fs')

//create/update method 1
fs.appendFile('myfile1.txt', 'Hello there!', function(err){
    if (err) console.log(err)
    else console.log("saved")
})


//create/update method 2
fs.writeFile('myfile2.txt', 'Hello there', function(err){
    if(err) console.log(err)
    else console.log('saved')
})


//delete file
fs.unlink('myfile1.txt', function(err){
    if (err) console.log(err)
    else console.log("File Deleted!")
})



//rename file
fs.rename('myfile2.txt', 'mynewfile.txt', function(err){
    if(err) console.log(err)
    else console.log("File Renamed!")
})
