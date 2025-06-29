
import * as fs from "fs"; 
import path from "path";
import { pathToFileURL } from "url";

const riddlesArr = importData();

async function importData(){
    let riddlesArr1 = await dataAS();
    console.log(riddlesArr1);
    return riddlesArr1;
}


async function dataAS(){ 
    
    const riddles = []; // מערך של שאלות
    
    let iForFile = 1;
    
    const pathFolder = path.resolve('./'); // מכיוון שהקובץ מורץ מה app אז אני צריך להגדיר משם
    
    let flag = true;
    while(flag){
        
        const fileName = `r${iForFile}.js`; // מקבל את שם הקובץ
        const filePath = path.join(pathFolder, fileName); // סטרינג קובץ
        // מחפש אם הקובץ קיים
        if(fs.existsSync(filePath)){
            try{
                const module = await import(pathToFileURL(filePath).href).then(module => module.obj);
                riddles.push(module);
                    console.log("module",module.obj);

                }catch(err){
                    console.log(`Error importing ${filePath}: {err.message}`);
                }
               
                iForFile++;
        
        } else{
            flag = false; // אם לא קיים קובץ אז לצאת מהלולאה
        }
       
    }
    return riddles;
}


export { riddlesArr }; 