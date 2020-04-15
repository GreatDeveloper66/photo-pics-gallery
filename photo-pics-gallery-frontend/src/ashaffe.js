let current_user = null;
const usersURL = "http://localhost:3000/users";

$('.menu .item')
  .tab()
;

const register_form =
`
<form class="ui form" id="register-form">
  <div class="field">
    <label>First Name</label>
    <input type="text" name="firstname" placeholder="First Name">
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="text" name="lastname" placeholder="Last Name">
  </div>
  <button class="ui button" type="submit">Submit</button>
</form>
`;

const login_form =
`
<form class="ui form" id="login-form">
  <div class="field">
    <label>First Name</label>
    <input type="text" name="firstname" placeholder="First Name">
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="text" name="lastname" placeholder="Last Name">
  </div>
  <button class="ui button" type="submit">Submit</button>
</form>
`;

const profile_form =
`
<form class="ui form" id="profile-form">
  <div class="field">
    <label>First Name</label>
    <input type="text" name="firstname" placeholder="First Name">
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="text" name="lastname" placeholder="Last Name">
  </div>
  <button class="ui button" type="submit">Submit</button>
</form>
`;

document.querySelectorAll('[data-tab="first"]')[1].innerHTML = register_form;
document.querySelectorAll('[data-tab="second"]')[1].innerHTML = login_form;
document.querySelectorAll('[data-tab="fourth"]')[1].innerHTML = profile_form

document.getElementById('register-form').addEventListener('submit', function(event){
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
  fetch(usersURL, configObj)
    .then(response => response.json())
    .then(data => {
      current_user = data;
      console.log(data);
    })
    .catch(error => console.log(error));
});

document.getElementById('login-form').addEventListener('submit', function(event){
  event.preventDefault();
  const fullname = `${event.target.firstname.value} ${event.target.lastname.value}`;
  const configObj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({username: fullname})
  };
  fetch(usersURL, configObj)
    .then(response => response.json())
    .then(data => {
      current_user = data;
      console.log(data);
    })
    .catch(error => console.log(error));
});


document.getElementById('profile-form').addEventListener('submit', function(event){
  event.preventDefault();
  const fullname = `${event.target.firstname.value} ${event.target.lastname.value}`;
  const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({username: fullname})
  };
  console.log(`${usersURL}/${current_user.id}`);
  console.log(configObj);

  fetch(`${usersURL}/${current_user.id}`, configObj)
     .then(response => console.log(response.json()))
     .then(data => console.log(data))
     .catch(error => console.log(error));
  });
