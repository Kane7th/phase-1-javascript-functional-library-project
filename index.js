function myEach(collection, callback) {
    for (let key in collection) {
        callback(collection[key], key, collection);
    }
    return collection;
}

function myMap(collection, callback) {
    let newArray = [];
    for (let key in collection) {
        newArray.push(callback(collection[key], key, collection));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let keys = Object.keys(collection);
    let index = 0;
    if (acc === undefined) {
        acc = collection[keys[0]];
        index = 1;
    }
    for (; index < keys.length; index++) {
        acc = callback(acc, collection[keys[index]], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key])) return collection[key];
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let newArray = [];
    for (let key in collection) {
        if (predicate(collection[key])) {
            newArray.push(collection[key]);
        }
    }
    return newArray;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
};
