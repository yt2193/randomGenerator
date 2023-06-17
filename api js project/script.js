function fetchUser() {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        displayUser(data.results[0]);
      });
}
function displayUser(user) {
    const userDisplay = document.querySelector('#user');


userDisplay.innerHTML = `

  <img src="${user.picture.large}"/>
  <div>
    <p>
      <span>Name: </span>${user.name.first} ${user.name.last}
    </p>
    <p>
      <span>Email: </span> ${user.email}
    </p>
    <p>
      <span>Phone: </span> ${user.phone}
    </p>
    <p>
      <span>Location: </span> ${user.location.city} ${user.location.country}
    </p>
    <p ><span>Age: </span> ${user.dob.age}</p>
  </div>
</div>
</div>
`;
}

document.querySelector('#generate').addEventListener('click', fetchUser);

fetchUser();

