

class Player{
    
    constructor(name){
        this.Name = name;
        this.Times = [];
        this.RecordTimes = [];
        this.NumberQuestion = 0;
    }
        
    recordTime(start , end){
        const obj1 = {
            'Start': start ,
            'End': end
        }
        if (this.RecordTimes === undefined){
            this.RecordTimes = [{obj1}];
        }
        else{this.RecordTimes.push(obj1);}
        
        
        if (this.Times === undefined){
            this.Times = [end - start];
        }
        else{this.Times.push(end - start);}
        ++this.NumberQuestion;
    }
    showTotalTime() { //display total and average time
        let total = 0;
        if(this.Times < 1){
            console.log('this empty');
        }
        else{
            this.Times.forEach(element => {
                total += element; // צריך לבדוק שהוא בא בתור number
            });
            return total; //number
        }
    }//end showTotalTime
    showAverageTime(){
        let average = 0;
        const total = this.showTotalTime();
        const len =  this.NumberQuestion;
        average = total / len;
        return average;
    }
}//end class

function timeMessage(player , fn){
   
    const now = Date.now();
    fn(); // question.ask
    const end = Date.now();

    player.recordTime(now, end);
}

// function test(){
//     const a = new Player("ggg");
//     timeMessage(a , m);
//     console.log(a);
//     timeMessage(a , m);
//      console.log(a);
// }
// function m(){
//     console.log("3");
// }
// test();

export  {Player , timeMessage};





 