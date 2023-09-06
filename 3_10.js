import fetch from 'node-fetch';

globalThis.fetch = fetch;


// Example-version.

// function fetchURLData(url) {
//     let fetchPromise = fetch(url).then(response => {
//     if (response.status === 200) {
//     return response.json();
//     } else {
//     throw new Error(`Request failed with status ${response.status}`);
//     }
// });
// return fetchPromise;
// }
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
// .then(data => console.log(data))
// .catch(error => console.error(error.message));


// Async-version.

async function fetchURLDataAsync(url) {

  let response = await fetch(url);
  
  if (response.status === 200) {
    let data = await response.json();
    return data;
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/2')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));

  // 10C.

  let arr = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    // 'https://jsonplaceholder.typicode.com/todos/asd' // Try with the faulty URL.
  ]

  async function fetchURLArray (urls) {

    let response;

    return Promise.all(urls.map(async element => {
      response = await fetch(element)
      if (response.status === 200) {
            return response.json();
          } else {
            throw new Error(`Request failed with status ${response.status} of url: ${element}`);
          }
    }))

    }

  fetchURLArray(arr)
  .then(data => console.log(data))
  .catch(error => console.error(error.message));


  
