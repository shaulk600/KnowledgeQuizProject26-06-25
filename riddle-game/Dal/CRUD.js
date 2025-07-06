import * as fs from "fs";


export function readAllFile(path) {
    //ככה הכנסתי גם את ה 
    // promis
    // וגם את הפונקצייה ביחד
    return new Promise((resolve, rejects) => {
        fs.readFile(path, "utf-8", (Err, data) => {
            if (Err) { rejects("Error the function \'readFile\' in \'/Dal/CRUD.JS\'", Err); }
            resolve(data);
        })
    })
}
export function writeFile(path, strData) {

    return new Promise((resolve, rejects) => {
        fs.writeFile(path, strData, "utf-8", (Err) => {
            if (Err) { rejects("Error the function \'writeFile\' in \'/Dal/CRUD.JS\'", Err); }
            resolve("is seccessful")
        })
    })
}





export default {};
