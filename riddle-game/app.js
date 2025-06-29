

import { question} from "readline-sync";

// import { valid } from "./classes/Riddle.js";
import { ask } from "./classes/Question.js";
import { Player ,timeMessage } from "./classes/Player.js";


const name = question("Enter your name: ");
console.log(`Welcome ${name} to the Riddle Game!`);
const play = new Player(name);
while(true){
    timeMessage(ask);
    if ("yes" === question("Continue for another round?")){
        break;
    }
}
console.log(`the total time to enser: ${play.showTotalTime()}, and average is: ${play.showAverageTime()}`);



