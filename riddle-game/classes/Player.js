

class Player{
    constractor(name){
        this.name = name;
        this.times = []
        this.recordTimes = [];
        this.numberQuestion = 0;
    }
    recordTime(start, end){
        const obj = {
            Start: start ,
            End: end
        }
        this.recordTimes.push(obj);
        this.times.push(End - Start);
        ++this.numberQuestion;
    }
    showTotalTime() { //display total and average time
        let total = 0;
        if(this.times <1){
            console.log('this empty');
        }
        else{
            times.forEach(element => {
                total += element; // צריך לבדוק שהוא בא בתור number
            });
            return total; //number
        }
    }//end showTotalTime
    showAverageTime(){
        let average = 0;
        const total = showTotalTime();
        const len =  this.numberQuestion;
        average = total / len;
        return average;
    }
}//end class


export function timeMessage(fn){
    // const a = new Player(name);
    const now = Date.now();
    fn(); // question.ask
    const end = Date.now();
    this.recordTime(now, end);
}
export {Player , timeMessage};





 