
import { Riddle , valid} from "./Riddle.js";

const arrA = valid();
export default function ask(){
    if(!Array.isArray(arrA) ){
       const arrA = valid();
    }
    if(arrA.length < 1){
        throw newError("Error - empty");
    }
    
    let num = 0;
    do{
         num = Math.floor(Math.random() * 10); //1 - 10
    }while(num > arrA.length);

    // if(typeof(arrA[num]) === Object){
        arrA[num].question();
    // }
    return 
}

// function test(){
//     console.log(Math.floor(Math.random() * 10));
//     console.log(ask()._showQueshtion());
    
// }
// test()