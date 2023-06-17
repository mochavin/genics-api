const person = {
  name: 'John Doe',
  age: 25,
  address: {
    country: 'USA',
    city: 'San Francisco',
  },
};

const number = [1, 2, 3, 4, 5];

const numberMap = number.map((num) => num * 2);
// console.log(numberMap);

const numberFilter = numberMap.filter((num) => num > 5);
// console.log(numberFilter);

const numberFind = number.find((num) => num > 2);
// console.log(numberFind);

const second = () => {
  console.log('Second');
};

const first = () => {
  console.log('First');
  second();
  console.log('The End');
};

// first();

const networkRequest = () => {
  setTimeout(() => {
    console.log('Async Code');
  }, 1);
};

const greeting = () => {
  console.log('Hello World');
};

// networkRequest();
// greeting();

// const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// console.log(response);

const endpoint = 'https://jsonplaceholder.typicode.com/todos/1';

const fetchData = async (endpoint) => {
  const data = await fetch(endpoint);
  const json = await data.json();
  console.log(json);
};
// console.log('Before');
// fetchData(endpoint);
// console.log('After');

const fetchData2 = async (endpoint) => {
  try {
    const data = await fetch(endpoint);
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

fetchData2(endpoint);