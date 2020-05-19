export class Xhr {
  constructor() {
  }

  get(url, param) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function (res) {
        console.log(res);
        
      }
      xhr.open('GET', url)
      xhr.send(new URLSearchParams(param))
    })

  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function (res) {
        console.log(res);
        
      }
      xhr.open('POST', url)
      xhr.send(JSON.stringify(data))
    })
  }

  throwRequired() {
    throw '参数必填'
  }

  ajax({ url, data, method = 'get' } = throwRequired()) {
    if (method === 'get') {
      this.get(url, data)
    } else if (method === 'post') {
      this.post(url, data)
    } else {

    }

  }
}

