const chars = ['a', 'b', 'c'];
const nums = [1, 2, 3];

const zipList = (arr1, arr2) => {
  const zipArr = [];
  for (let i = 0; i < arr1.length; i++) {
    zipArr.push(arr1[i]);
    zipArr.push(arr2[i]);
  }
  return zipArr;
};

const zipListTheSimpleWay = (arr1, arr2) => _.zip(arr1, arr2);

console.log(zipList(chars, nums));
console.log(zipListTheSimpleWay(chars, nums));
