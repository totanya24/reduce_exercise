/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
function extractValue(arr, key) {
  return arr.reduce((acc, next) => {
    // console.log('before push', acc)
    acc.push(next[key]);
    //console.log('after push', acc)
    return acc;
  }, []);
}
console.log(extractValue(arr, "name"));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  const vowels = "aeiou";
  return str.split("").reduce(function (acc, next) {
    if (vowels.indexOf.next !== -1) {
    }
  });
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/
const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

const result = addKeyAndValue(arr, "title", "Instructor");
console.log(result);

function addKeyAndValue(arr, key, value) {
  return arr.reduce((acc, next) => {
    const obj = {};
    obj[key] = value;
    obj["name"] = next.name;
    return acc.push(obj)
  }, []);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
*/
const partition = (arr, callback) => {
    return  arr.reduce((acc, next) => {
        callback(next) ? acc[0].push(next) : acc[1].push(next)
        return acc
    }, [[],[]])
}

function isEven(val) {
    return val % 2 === 0;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const result = partition(arr, isEven);
console.log(result)

const names = ["Elie", "Colt", "Tim", "Matt"];
console.log(partition(names, isLongerThanThreeCharacters));

function isLongerThanThreeCharacters(val) {
    return val.length > 3;
}

