const testVar = {}

function testFunc() {
  return "hi"
}

let configObj = {
  "method": "POST",
  "body": {
    "firstName": "Will",
    "registryMessage": ">:("
  }
}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', configObj)
  .then(resp => resp.json())
  .then(json => json.message)
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', configObj)
  .then(resp => resp.json())
  .then(json => json.message)
  .catch(function(error) {
    alert("Page does not exist!")
    return ":("
  })
}