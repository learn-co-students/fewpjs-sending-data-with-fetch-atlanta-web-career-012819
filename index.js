function registerSelf(){
  return fetch("http://guestbook.example.com/register", {
    "method": "POST",
    "body": {
      "firstName": "Megan",
      "registryMessage": "You have been added to the guest book"
    }
  })
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    return json.message;
});
}

function errorSelf(){
  return fetch("http://guestbook.example.com/register-error", {
    "method": "POST",
    "body": {
      "firstName": "Megan",
      "registryMessage": "You have been added to the guest book"
    }
  })
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    return json.message;
  })
  .catch(function(error){
    return ":(";
  });
}