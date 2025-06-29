

import { question} from "readline-sync";


import ask from "./classes/Question.js";
import { Player ,timeMessage } from "./classes/Player.js";

let m = Date.now()
console.log(m);
const name = question("Enter your name: ");
console.log(`Welcome ${name} to the Riddle Game!`);
const play = new Player(name);
while(true){
    timeMessage(play, ask);
    if ("yes" !== question("Continue for another round?")){
        break;
    }
}
console.log(`the total time to enser: ${play.showTotalTime()}, and average is: ${play.showAverageTime()}`);



