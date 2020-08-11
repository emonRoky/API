fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUsers(json))

  function displayUsers(users){
      const userName = users.map(user => user.username);
      const ul = document.getElementById("user-container");
      for(let i = 0;i<userName.length; i++){
        const user = userName[i];
        const li = document.createElement("li");
        li.innerText = user;
        ul.appendChild(li);

      }
  }