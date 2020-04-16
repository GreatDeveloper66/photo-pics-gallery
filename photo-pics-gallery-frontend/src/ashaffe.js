var current_user = null;
const usersURL = "http://localhost:3000/users";
const likesURL = "http://localhost:3000/likes"
const registerHeader = document.querySelectorAll('[data-tab="first"]')[0];
const registerTab = document.querySelectorAll('[data-tab="first"]')[1];
const loginButton =   `<button class="ui button" type="submit" id='login_button'>Submit</button>`;
const logoutButton =  `<button class="negative ui button" id="logout_button">Logout</button>`
const deleteButton = `<button class="negative ui button" id="delete_button">Delete</button>`;
const likeButtons = document.querySelectorAll('.like-button');



$('.menu .item')
  .tab()
;

function renderRegister() {
  const register_form =
  `
  <form class="ui form" id="register_form">
    <div class="field">
      <label>First Name</label>
      <input type="text" name="firstname" placeholder="First Name">
    </div>
    <div class="field">
      <label>Last Name</label>
      <input type="text" name="lastname" placeholder="Last Name">
    </div>
    <button class="ui button" type="submit" id='login_button'>Submit</button>
  </form>
  `;


  registerTab.innerHTML = register_form;
}

renderRegister();
registerSubmit();
document.querySelectorAll('[data-tab="fourth"]')[1].innerHTML = `<h1>Nobody Logged In</h1>`;
function registerSubmit(){
  document.getElementById('register_form').addEventListener('submit', function(event){
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
    renderProfile();
    fetch(usersURL, configObj)
      .then(response => response.json())
      .then(data => {
        current_user = {id: data.id, username: data.username};
        renderFavorites(data);
      })
      .catch(error => console.log(error));
      registerHeader.innerHTML = `LOGOUT`;
      document.getElementById('login_button').remove();
      document.getElementById('register_form').innerHTML += logoutButton;
      document.getElementById('logout_button').addEventListener('click', function(){
        document.querySelectorAll('[data-tab="fourth"]')[1].innerHTML = `<h1>Nobody Logged In</h1>`;
        current_user = null;
        document.getElementById('logout_button').remove();
        document.getElementById('register_form').innerHTML += loginButton;
        registerHeader.innerHTML = `Register/Login`;

      });

      profileSubmit();

    });
  }

function profileSubmit() {
  document.getElementById('profile-form').addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.id === 'delete_button'){
      console.log('delete');
      fetch(`${usersURL}/${current_user.id}`, {method: 'DELETE'})
        .then(response => console.log(response.json()))
        .then(data => {
          current_user = null;
          renderRegister();
          registerSubmit();
          document.querySelectorAll('[data-tab="fourth"]')[1].innerHTML = `<h1>Nobody Logged In</h1>`;
          registerHeader.innerHTML = `Register/Login`;
        });
    }
    else {
      if(event.target.id == 'submit'){
        console.log('submit')

        const username = `${event.target.parentNode.firstname.value} ${event.target.parentNode.lastname.value}`;
        current_user.username = username;
        const configObj = {
           method: "PATCH",
           headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
           },
           body: JSON.stringify({username: username})
         };
         fetch(`${usersURL}/${current_user.id}`, configObj)
            .then(response => console.log(response.json()))
            .then(data => {
              console.log(data);
            })
            .catch(error => console.log(error));
      }
    }
  });
}

 function renderFavorites(data){
   const id = data.id;
   const favorites = document.querySelectorAll('[data-tab="second"]')[1];
   fetch(`${usersURL}/${id}`)
        .then(resp => resp.json())
        .then(data => {
          data.liked_pictures.forEach(pic => {
            favorites.innerHTML += pic.img_url;
          });

        });
//   if(current_user){
//   const favorites = document.querySelectorAll('[data-tab="second"]')[1];
//   fetch(`${usersURL}/${data.id}`)
//     .then(resp => resp.json())
//     .then(info => { console.log(info)
//       // const liked_pics = info.like_pictures;
//       // liked_pics.forEach(pic => {
//       //   favorites.innerHTML +=
//       //   `
//       //   favorites.innerHTML += <div class="ui medium images content">
//       //       <img class="picture left floated" src="${pic.img_url}">
//       //   </div>
//       //   `;
//       })
//
//     });
//   }
 }

function renderProfile() {
  const profile = document.querySelectorAll('[data-tab="fourth"]')[1];
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
    <button class="ui button" type="submit" id="submit">Submit</button>
    <button class="negative ui button" id="delete_button">Delete</button>
  </form>
  `;
  profile.innerHTML = profile_form;

}

function addLikeListeners() {
  document.getElementById('pictures-view').addEventListener('click', function(event){
    if(event.target.className === 'like-button'){
      const picture_id = event.target.previousElementSibling.previousElementSibling.dataset.id;
      const user_id = current_user.id;
      console.log(picture_id);
      console.log(user_id);
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify({user_id: user_id,picture_id: picture_id})
      };
       fetch(likesURL, configObj)
         .then(response => response.json())
         .then(data => console.log(data));
    }
  });
}

addLikeListeners();
