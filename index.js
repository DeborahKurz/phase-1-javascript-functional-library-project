//3 categories: Array Functions, Object Functions, & functions that work with either type.
//For the 1st set of functions, you will need to figure out how to make them work with either arrays or objects. DO this by by determinging whether the collection is an object or array, and if it is an object, use a JavaScript Object method ot create an array that contains the object's values. (Don't use if statmeent). SO... you only need to write code that process an array, regardless of what data structure is passed in to your funciton. 

//Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    const toArray = Array.isArray(collection) ? collection : Object.values(collection);
  
    toArray.forEach(element => {
      callback(element);
    });
  
    return collection;
}
    // console.log("CHECKING collection: ",collection)
    // console.log("CHECKING callbacks: ",callback)
    // console.log(toArray)


function myMap(collection, callback){
    const toArray = Array.isArray(collection) ? collection : Object.values(collection);
    const newArray = toArray.map(element => {
        return callback(element)
    });
    return newArray
}
    // console.log(toArray)
    // console.log(newArray)

function myReduce(collection, callback, acc) {
    let toArray = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
        [acc, ...toArray] = toArray;
    }
    const reducedValue = toArray.reduce((accumulator, element) => {
        return callback(accumulator, element);
    }, acc);
    return reducedValue;
}
    // console.log("Checking collection: ", collection)
    // console.log("Checking callback: ", callback)
    // console.log("Checking acc: ", acc)

function myFind(collection, predicate){
    let toArray = Array.isArray(collection) ? collection : Object.values(collection);
    const result = toArray.find(element => {
        return predicate(element);
    })
    return result;
}

function myFilter(collection, predicate){
    let toArray = Array.isArray(collection) ? collection : Object.values(collection);
    const resultArray = toArray.filter(element => {
        return predicate(element);
    })
    return resultArray;
}

function mySize(collection){
    let toArray = Array.isArray(collection) ? collection : Object.values(collection);
    const length = toArray.length;
    return length;
}

//Array-only Functions
function myFirst(array, n) {
    if (n) {
      return array.slice(0, n);
    } else {
      return array[0];
    }
}

function myLast(array, n) {
    if (n) {
      return array.slice(-n);
    } else {
      return array[array.length - 1];
    }
}

//Object-only Functions
function myKeys(object){
    const keys = Object.keys(object);
    return keys;
}
    //console.log(keys)

function myValues(object){
    const values = Object.values(object);
    return values;
}
    //console.log(values)