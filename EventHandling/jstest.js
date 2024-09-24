let button = document.querySelector('#button')


// function networkRequest(url, callBack){
    
//     let xhr = new XMLHttpRequest()

//     xhr.addEventListener('load', callBack)

//     xhr.open('GET', 
//         url)
//     xhr.send()
// }

// function buttonClickHandler(evt){   
//     // console.log(evt)
//     let xhr = new XMLHttpRequest()

//     xhr.addEventListener('load', evt => {
//         console.log(xhr.responseText)
//     })

//     xhr.open('GET', 
//         'https://jsonplaceholder.typicode.com/posts')
//     xhr.send()
//     }

// function buttonClickHandler(evt){
//     networkRequest('https://jsonplaceholder.typicode.com/posts').then(res => {
//         console.log(res)
//         let response = JSON.parse(res)
//         return networkRequest('https://jsonplaceholder.typicode.com/posts/1')
//     }).then(res => {
//         console.log(JSON.parse(res).title)
//     }).catch(err => {
//         console.error(err)
//     })
// }

// function buttonClickHandler(evt){
//     networkRequest('https://jsonplaceholder.typicode.com/posts', evt => {
//         console.log(this)
//     })
// }

// button.addEventListener('click', buttonClickHandler)

function buttonClickHandler(evt){
    console.log(evt.clientX)
}

// button.addEventListener('mouseover', evt => {
//     console.log(evt.clientX)
// })

// button.addEventListener('mousemove', evt => {
//     console.log(evt.clientX)
// })

button.addEventListener('click', buttonClickHandler)

window.addEventListener('load', evt => {
    console.log('Window Loaded')
})