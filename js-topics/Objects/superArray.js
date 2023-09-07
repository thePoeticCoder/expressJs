// Example data
const aob = 
[
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' },
]
const superAob = (data, victim) => {

    const obj = {};
  
    data.forEach((data) => {
        if(data.hasOwnProperty(victim)){
            if(obj[data[victim]]){
                obj[data[victim]]++;
            }
            else{
                obj[data[victim]] = 1;
            }
        }
    })
  
    let superArrayOfObjects = [];
  
    for (const key in obj) {
        superArrayOfObjects = [...superArrayOfObjects, { victim: key, count: obj[key]}];
    }
  
    return superArrayOfObjects;
}

console.log(superAob(aob, 'framework'));

// output:-
// [
//     { victim: 'React.JS', count: 2 },
//     { victim: 'Angular', count: 1 },
//     { victim: 'Vue.JS', count: 1 },
//     { victim: 'JavaScript', count: 1 }
// ]

function flattenObject(obj, parentKey = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
      // Recursively flatten nested objects
      Object.assign(acc, flattenObject(obj[key], fullKey));
    } else {
      // Assign the flattened key-value pair to the result object
      acc[fullKey] = obj[key];
    }

    return acc;
  }, {});
}

const nestedObject = {
  a: {
    b: {
      c: 1,
      d: {
        e: 2,
      },
    },
  },
  f: 3,
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
