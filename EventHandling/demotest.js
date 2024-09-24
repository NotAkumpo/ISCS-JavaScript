let button = document.querySelector('#button')

function networkRequest(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.addEventListener('load', evt => {
      resolve(xhr.responseText)
    })
    xhr.addEventListener('error', evt => {
      reject(xhr)
    })
  })
}

function buttonClickHandler(evt) {
  networkRequest('https://jsonplaceholder.typicode.com/posts').then(res => {
    console.log(res)
    let response = JSON.parse(res)
    return Promise.all([
      networkRequest(`https://jsonplaceholder.typicode.com/posts/${response[1].id}`),
      networkRequest(`https://jsonplaceholder.typicode.com/posts/${response[2].id}`),
      networkRequest(`https://jsonplaceholder.typicode.com/posts/${response[3].id}`)
    ])
    //return networkRequest(`https://jsonplaceholder.typicode.com/posts/${response[1].id}`)
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.error(err)
  })
}

function fetchOnClick(evt) {
  fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
    console.log(res)
    return res.json()
  }).then(res => {
    console.log(res)
  })
}

button.addEventListener('click', fetchOnClick )


window.addEventListener('load', evt => {
  console.log('loaded')
})