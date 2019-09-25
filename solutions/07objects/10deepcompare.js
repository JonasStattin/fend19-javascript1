function isObject(obj) {
  return typeof obj === "object" && obj != null
}

function deepCompare(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  } else if (isObject(obj1) && isObject(obj2)) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) { 
      return false
    }
    for (const prop in obj1) {
      if (deepCompare(obj1[prop], obj2[prop]) === false) {
        return false;
      }
    }
    return true
  }
  return false  
}

const objA = {
  a: {
    b: 'b',
    c: 'c',
    test: {
      a: 'a'
    }
  }
}
const objB = {
  a: {
    b: 'b',
    c: 'c',
    test: {
      a: 'a'
    }
  }
}
const objC = {
  a: {
    b: 'b',
    c: 'c',
    test: {
      d: 'd'
    }
  }
}

console.log(deepCompare(objA, objB)) // true
console.log(deepCompare(objA, objC)) // false

