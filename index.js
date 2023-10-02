// Code your solution here

const array = [`John`, `Bob`, `Smith`, `Sarah`];

function findMatching(arrayOfNames, findValue) {
    return arrayOfNames.filter((name) => name.toLowerCase() === findValue.toLowerCase())
}

function fuzzyMatch(arrayOfNames, findValue) {
    return arrayOfNames.filter((name) => name.startsWith(findValue, 0))
}

function matchName(arrayOfObjects, findValue) {
    return arrayOfObjects.filter((value) => value.name === findValue)
}