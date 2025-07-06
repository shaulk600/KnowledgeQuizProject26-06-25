
import  * as fs from "fs";

const obj1 = {
    'id' : 1 ,
    'name' : 'Easy Math' ,
    'taskDescription' : "What is 5 + 3?" ,
    'correctAnswer' : '8'
}
const obj2 = {
    'id' : 2 ,
    'name' : 'Riddle of Sound' ,
    'taskDescription' : "I speak without a mouth. What am I?" ,
    'correctAnswer' : 'echo'
}

// Documentation: To simulate a dataset of questions, this function writes a string of objects to a TXT file
function writeFile(){
    // fs.writeFile('path' , 'dataString' , 'callBack-Error-No Param callback') - exemple to function

    const dataString = ConvertingObjectToString();
    try{
        fs.writeFile('./riddle.txt' , dataString ,"utf-8", ((Err) =>{
            if(Err){
                console.log(`Error in the function 'writeFile' ${Err}`);
            }
        
            
        })//end CallBack

        )//end writeFile function
    
    }//end try
    catch(Err){
        console.log('Error in the function \'writeFile\' ' , Err);
    }

}   
/// Documentation - תיעוד: function takes objects and inserts them into an array and returns them as a string.
function ConvertingObjectToString(){
    const Arr1 = [];
    Arr1.push(obj1);
    Arr1.push(obj2);
    // console.log(`${Arr1[0]} \n ${Arr1[1].id}`); //test

    const dataString = JSON.stringify(Arr1);
    // console.log(`${dataString}`);
    return dataString;
}

//main:
// writeFile();
