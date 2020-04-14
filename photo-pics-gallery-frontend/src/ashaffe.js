const userURL = "http://localhost:3000/users";
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
  fetch(userURL, configObj)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});
