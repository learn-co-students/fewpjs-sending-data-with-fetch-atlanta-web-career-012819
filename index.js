// const testVar = {}

// function testFunc() {
//   return "hi"
// }

// async function registerSelf() {
//   const response = await fetch('http://guestbook.example.com/register', {
//     method: 'POST',
//     body: {
//       "firstName": "Cat",
//       "registryMessage": "You have been added to the guest book"
//     }
//   });
//   const json = await response.json();
//   return json.message;
// }

// async function errorSelf() {
//   try {
//     const response = await fetch('http://guestbook.example.com/register', {
//       method: 'POST',
//       body: {
//         "firstName": "Cat",
//         "registryMessage": ":("
//       }
//     });
//     const json = await response.json();
//     return json.message;
//   }
//   catch (x) {
//     return ":(";
//   }
// }

function registerSelf() {
  return fetch("http://guestbook.example.com/register", {
    "method": "POST",
    "body": {
      "firstName": "BYRONIUS KARBITUS MARIS",
      "registryMessage": "SALVETE AMICI!"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  });
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {
    "method": "POST",
    "body": {
      "firstName": "Byron the Poodle",
      "registryMessage": "Bite!"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  }).catch(function(x) {
    // console.log(x) // If you want to see the error message that came in
    return ":(";
  });
}
