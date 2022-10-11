// task 1
let factory = {
  facName: "Volkswagen Wolfsburg Plant",
  calculateWorkload: function () {
    let workloadList =[];
    for(let i=0; i<this.employeeWeeklyWorkload.length; i++){
      workloadList.push(this.employeeWeeklyWorkload[i].workload)
    }
    return workloadList;
  },
  formatArray: function (name) {
    let data = [];
    for(let i=0; i<this.employees.length;i++){
      data.push({ name: this.employees[i].name, timeLeft: 5-this.employees[i].timeSpent });
    }
    return data;
  },
};

let factoryEmployees = {
  employees: [
    { name: "John", timeSpent: 1 },
    { name: "Sam", timeSpent: 3 },
    { name: "Maria", timeSpent: 2 },
    { name: "Dan", timeSpent: 4 },
    { name: "Lorelai", timeSpent: 5 },
  ],
  //  employeeNum: this.employees.length,
};

let workloadData = {
  employeeWeeklyWorkload: [
    { name: "John", workload: 40 },
    { name: "Sam", workload: 25 },
    { name: "Maria", workload: 28 },
    { name: "Dan", workload: 30 },
    { name: "Lorelai", workload: 31 },
  ],
};
 console.log(factory.calculateWorkload.bind(workloadData)());
 console.log(factory.formatArray.bind(factoryEmployees)());
//  task 2
function sumOfNumbers(){
    let sum=0;
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i];
     }
     return sum;
}
const result = sumOfNumbers.apply(null,[5,5,12,34]);
    console.log(result);
//Task 3
const Vehicle = {
    name: "Vehicle",
    type: "vehicle",
    start: function () {
      return `starting the ${this.name} ${this.type}`;
    },
    stop: function () {
      return `stopped the ${this.name} ${this.type}`;
    },
  };
  const car ={
    name: "BMW",
    type: "M3",
  }
  let result1= Vehicle.start.call(car);
  let result2= Vehicle.stop.call(car);
  console.log(result1);
  console.log(result2);
  
// task 4
let numArray = [3,14,63,105,6,9,22];
let max = Math.max.apply(null,numArray);
console.log(max);