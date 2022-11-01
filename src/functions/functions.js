/** 
 * @typedef {Object} fileData
 * @property {number} import
 * @property {string} start
 * @property {number} duration
 */

/**
 * @typedef {Object} outputData
 * @property {number} col The column number of the event
 * @property {number} computerDuration The readable duration of the event (if duration is equal to 30 then it will output 0.5 because 30 is the half of one hour)
 * @property {number} computerStart The readable start of the event
 * @property {number} height The height of the event in percent (for responsive)
 * @property {number} humanDuration The origin duration from the input JSON file 
 * @property {string} humanStart The origin start from the input JSON file 
 * @property {number} id The origin id from the input JSON file 
 * @property {number} width The width of the event in percent (for responsive)
 * @property {number} x The x position of the event in percent (for responsive)
 * @property {number} y The y position of the event in percent (for responsive)
 */


/**
 * Convert human minutes time into a readable value for computer (ex: 30 minutes return 0.5 because it is the half of one hour)
 * 
 * @param {number} minutes The input duration from the JSON file
 * @returns {number} The readable computer value (usefull for responsive)
 */
export function convertMinutes(minutes) {
    return (100 / 60) * (minutes / 100)
}

/**
 * Convert human time (the start key in the JSON file) into a readable value for computer (ex: "17:30" return 17.5)
 * 
 * @param {string} strTime The start time from the JSON file
 * @returns {number} The readable computer value (usefull for responsive)
 */
export function convertTime(strTime) {
    return parseFloat(`${strTime.split(':')[0]}.${(100 / 60) * parseInt(strTime.split(':')[1])}`)

}

/**
 * Convert array from the original JSON file into an efficient array with all data needed
 * 
 * @param {fileData[]} array The original JSON file array
 * @returns {outputData[]} The new object array we all usefull data needed
 */
export function convertArray(array) {

    // First we initialize our first element in the new Array
    const newArr = [{
        id: array[0].id,
        col: 0,
        humanStart: array[0].start,
        humanDuration: array[0].duration,
        computerStart: convertTime(array[0].start),
        computerDuration: convertMinutes(array[0].duration)
    }]
    let maxCol = 0
    for (let i = 0; i < array.length; i++) {
        const startTime = convertTime(array[i].start)
        const durationTime = convertMinutes(array[i].duration)
        const endTime = startTime + durationTime
        let column = 0
        for (let n = 0; n < newArr.length; n++) {

            // looping over the original array and the newArray to compare their values
            if (array[i].id !== newArr[n].id) {
                const actualEndTime = newArr[n].computerStart + newArr[n].computerDuration
                //To detect if the current event is already inside our new array
                const index = findObjectIndex(newArr, array[i].id)
                if (index === -1) {
                    //Detecting if the event is overlapping another event
                    if (((startTime >= newArr[n].computerStart && startTime <= actualEndTime) || (startTime <= newArr[n].computerStart && endTime >= actualEndTime)) && true) {
                        column++
                        if (column + 1 > maxCol) {
                            maxCol = column + 1
                        }
                    }
                    newArr.push(
                        {
                            id: array[i].id,
                            col: column,
                            humanStart: array[i].start,
                            humanDuration: array[i].duration,
                            computerStart: startTime,
                            computerDuration: durationTime
                        }
                    )
                }
                else {
                    //Detecting if the event is overlapping another event
                    if (((startTime >= newArr[n].computerStart && startTime <= actualEndTime) || (startTime <= newArr[n].computerStart && endTime >= actualEndTime)) && true) {
                        column++
                        if (column + 1 > maxCol) {
                            maxCol = column + 1
                        }
                    }
                    newArr[index] = {
                        id: array[i].id,
                        col: column,
                        humanStart: array[i].start,
                        humanDuration: array[i].duration,
                        computerStart: startTime,
                        computerDuration: durationTime
                    }
                }
            }
        }
    }
    const startValue = 9 // 9 o'clock is the top of our window screen
    const endValue = 21 // 21 o'clock is the height of our window screen

    //Finally we add usefull responsive data at our new array
    for (let i = 0; i < newArr.length; i++) {
        const y = Math.round((newArr[i].computerStart - startValue) * (100 / (endValue - startValue)))
        const height = Math.round(newArr[i].computerDuration * (100 / (endValue - startValue)))
        const x = Math.round(newArr[i].col * (100 / maxCol))
        const width = Math.round(100 / maxCol)
        newArr[i].width = width
        newArr[i].x = x
        newArr[i].height = height
        newArr[i].y = y
    }
    return newArr
}

/**
 * Get the index of an object inside an array using it's id key
 * 
 * @param {object[]} array Array of object containing an id key
 * @param {number} id The id value to find inside the array
 * @returns {number} The index of the object id key in the array
 */
export function findObjectIndex(array, id) {
    return array.map(e => e.id).indexOf(id)
}