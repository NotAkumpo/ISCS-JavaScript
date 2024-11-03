import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'

class PostsAPI {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/posts'
    })
  }
  getAllPosts() {
    return this.api.get('')
  }
  getPost(id) {
    return this.api.get(`${id}`)
  }
}

class UsersAPI {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/users'
    })
  }
  getAllUsers() {
    return this.api.get('')
  }
}

function hello() {
  console.log('hello')
}

const VALUES = ['a','b']

export {
  PostsAPI,
  UsersAPI,
  hello,
  VALUES
}
