
// שהגיע - קודם כל 
// 1. שהגיע בפורמט תקין
//  שאין שמות כפולים
// שאין ID כפולים
// אם יש למחוק את הכפולים ולקבל את הראשון

// וולידציה על הכל - טייפ - 

// לקבל את התשובה הנכונה בסטרינג !! 


import { question} from "readline-sync";
import {riddlesArr as data}  from "../riddles/module.js"


class Riddle {
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id; 
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    show(){
        return `Riddle: id: ${this.id}, name: ${this.name}, taskDescription: ${this.taskDescription}, correctAnswer: ${this.correctAnswer}`;
    }
    _showQueshtion(){
        return `The question is: ${this.taskDescription}`
    }
    _getCorrectAnswer(){
        return this.correctAnswer;
    }
    question(){
        console.log("");
        while(true){
            const anser = question(`${this._showQueshtion()} - Enter your anser: `);
            if(anser === this._getCorrectAnswer()){
                console.log(`You were right in answering - this anser is: ${this._getCorrectAnswer()}`);
                break;
            }
        }
    }

}//end class



function valid(){
    const riddlesObjArr = [];
    // console.log(data.length);
    for(let i = 0; i < data.length; i++){
        if(data[i] && typeof data[i] === 'object' && data[i].id && data[i].name && data[i].taskDescription && data[i].correctAnswer){
            const o =   new Riddle(data[i].id, data[i].name, data[i].taskDescription, data[i].correctAnswer);
            riddlesObjArr.push(o);
            // console.log(o);
            return riddlesObjArr;
        }
    }
}

export {Riddle , valid}
// function test(){
//    const arr = valid();
   
//    for(let i = 0 ; i<arr.length; i++){
//     console.log(typeof(arr[i]));
//     console.log(arr);
//    }
// }
// test();
