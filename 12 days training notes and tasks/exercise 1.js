const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

 // task 1 Print the name list - As an array

  const names = scores.map(s => s.name);
  console.log(names);

  const names1 = scores.map(({name})=>name);
  console.log(names1);

//task 2 >=40 pass.. find those student that passed (Use array method)

const  res = scores.filter(s => s.marks >= 40);
console.log(res);

const  res1 = scores.filter(({marks}) => marks >= 40);
console.log(res1);

//task 3 Find all the names who failed the exams

const  res2 = scores.filter(s => s.marks < 40);
const result= res2.map(s => s.name);
console.log(result);

const  res3 = scores.filter(({marks})=> marks< 40).map(({name})=>name);
console.log(res3);

//task 4 Find the Average marks
 
const len = scores.length;
const totalMarks = scores.reduce((acc,  curr) => acc + curr.marks, 0);
const averageMarks = totalMarks / len ;
console.log("Average marks:", averageMarks);

//task 5 Find the topper's naame

const topper = scores.reduce((acc, curr) =>(acc.marks > curr.marks) ? acc : curr);
console.log( topper.name);