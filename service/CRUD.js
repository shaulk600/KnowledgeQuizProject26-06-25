//וולידציה = לבדוק אם הקובץ פיזית נמצא

import * as fs from "fs";

function IsFileExist(path) {
    return fs.existsSync(path);
}

// Documentation: The function returns the data value if it is found in the file sent as a path if it exists there.
// Additionally, if the value in the folder is not of type array, the function takes care of returning it as an array.
export function readFileDB(path) {
    if (IsFileExist(path)) {
        return new Promise((resolve, rejects) => { //ככה הכנסתי גם את ה promise וגם את הפונקצייה ביחד
            fs.readFile(path, "utf-8", (Err, data) => {
                if (Err) {
                    rejects("error the function \'readFileDB\'", Err);
                }
                if ((data !== "" || data !== null) && data[0] === "[" && data[data.length - 1] === "]") {
                    const ArrData = JSON.parse(data);
                    console.log(ArrData);
                    resolve(ArrData);
                }else{
                    const ArrDataEmpty = [];
                    ArrDataEmpty.push(data);
                    resolve(ArrDataEmpty);
                }

            })
        })//end promise
    }//end if
}
// readFileDB("../DB/riddle.txt").then(data => console.log(data)).catch(Err => console.log(Err)); // test