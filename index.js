const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', {
    method: "POST",
    body: {
      "firstName": "Spike",
      "registryMessage": "This seems like a strange idea"
    }
  })
  .then(r => r.json())
  .then(json => json["message"]);
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', {
    method: "POST",
    body: {
      "firstName": "Spike",
      "registryMessage": "This seems like a strange idea"
    }
  })
  .then(r => r.json())
  .catch(e => ":(");
}
