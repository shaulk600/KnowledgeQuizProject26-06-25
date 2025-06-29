
import { valid } from "./Riddle";

const arrA = riddlesObjArr = valid();
export default function ask(){
    if(!Array.isArray(arrA) ){
       const arrA = riddlesObjArr = valid();
    }
    if(arrA.length < 1){
        throw new Error("Error - empty");
         new Error("Error = empty");
    }
    do{
        let num = Math.floor(Math.random() * 11); //1 - 10
    }while(num > riddlesObjArr.length);

    return riddlesObjArr[num]; // מחזיר שאלה רנדומלית
}