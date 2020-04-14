const userURL = "http://localhost:3000/users"
document.getElementById('login-form').addEventListener('submit', function(event){
  event.preventDefault();
  const fullname = `${event.target.firstname.value} ${event.target.lastname.value}`;
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({username: fullname})
  };
  fetch(userURL, configObj)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

});
