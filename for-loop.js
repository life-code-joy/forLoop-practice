// console.log('kkkkk');

// for (let loop = 0; loop <= 20; loop = loop + 2) {
//   console.log(`This is a 20 times repeated loop ${loop}`);
// }

// for (let loop = 15; loop >= 0; loop--) {
//   console.log(`This is a 20 times repeated loop ${loop}`);
// }

const darArray = [
  'dar',
  'Obrian',
  2037 - 23,
  'teacher',
  ['mike', 'harriet', 'lucy']
];

// console.log(darArray[0]);
// console.log(darArray[1]);
// console.log(darArray[2]);
// console.log(darArray[3]);
// const types = [];

// for (let i = 0; i < darArray.length; i++) {
//   // console.log(darArray[i], typeof darArray[i]);

//   types.push(darArray[i], typeof darArray[i])
//   console.log(types);
// }

const years = [1992, 2009, 2000, 2033];
const ages = [];

for (let i = 0; i < years.length; i++) {

  ages.push(2037 - years[i]);

  // console.log(ages);

}



//BREAK

// const breakArray = [
//   'dar',
//   true,
//   2037 - 23,
//   'teacher',
//   ['mike', 'harriet', 'lucy']
// ];

// for (let i = 0; i < breakArray.length; i++) {

//   if (typeof breakArray[i] === 'boolean') break;

//   console.log(breakArray[i]);
// }


//CONTINUE
const continueArray = [
  'dar',
  true,
  2037 - 23,
  'teacher',
  ['mike', 'harriet', 'lucy']
];

for (let i = 0; i < continueArray.length; i++) {

  if (typeof continueArray[i] === 'boolean') continue;

  console.log(continueArray[i]);
}