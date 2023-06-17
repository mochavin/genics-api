const fetchData = async (endpoint) => {
  const data = await fetch(endpoint);
  const json = await data.json();
  console.log(json);
};

const fetchData2 = async (endpoint) => {
  try {
    const data = await fetch(endpoint);
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

async function logUrlResult(url) {
  try {
    const response = await fetch(url);
    console.log('URL:', url);
    console.log('Status Code:', response.status);
    const responseJSON = await response.json();
    console.log('Response Content:');
    // console.log(responseJSON);
    console.log(JSON.stringify(responseJSON, null, 2));
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

const logUrlResult2 = async (url) => {
  try {
    const response = await fetch(url);
    console.log('URL:', url);
    console.log('Status Code:', response.status);
    const responseJSON = await response.json();
    console.log('Response Content:');
    // console.log(responseJSON);
    console.log(JSON.stringify(responseJSON, null, 2));
    return responseJSON;
  } catch (error) {
    console.log('An error occurred:', error);
  }
};


// Pilihan dari API yang tersedia
const endpoint = 'https://jsonplaceholder.typicode.com/todos/';
const apiURL = 'https://randomuser.me/api/';


// Pilihan dari function

// fetchData(endpoint);
// fetchData2(endpoint);
// logUrlResult(endpoint);
// logUrlResult2(endpoint);

// Pemanggilan function

logUrlResult(apiURL);
// logUrlResult2(endpoint);


// Contoh fetch tanpa function

// const response = fetch(apiURL);
// response.then((data) => data.json()).then((data) => console.log(data));
