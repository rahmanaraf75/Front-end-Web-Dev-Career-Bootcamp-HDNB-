// JavaScript code

const apiUrl = 'https://reqres.in/api/users';
const usersContainer = document.getElementById('usersContainer');

// Task 1: Simulate an API call with getData
function getData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}
getData((message) => {
    console.log(message); // This will log "Data received" after 2 seconds.
  });
  
 

// Task 2: isUserLoggedIn promise
function isUserLoggedIn(userInput) {
    return new Promise((resolve, reject) => {
      if (userInput.toLowerCase() === "yes") {
        resolve("User is logged in");
      } else if (userInput.toLowerCase() === "no") {
        reject("User is not logged in");
      } else {
        reject("Invalid input. Please enter 'yes' or 'no'.");
      }
    });
  }
  
 
  isUserLoggedIn("yes")
    .then((message) => console.log(message)) 
    .catch((error) => console.error(error));
  

// Task 3: getNumber with squared result
function getNumber(){
    return new Promise((resolve) =>{
      setTimeout(()=>{
        const randomNumber = Math.floor(Math.random()*10)+1;
        resolve(randomNumber);
  
      },1000);
  
    });
  }
  getNumber()
  .then((number)=> {
    console.log("Random Number :",number);
    return number * number;
  })
  .then((squared)=>{
    console.log("Squared : ",squared)
  });
// Task 4: delayedMessage
function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay * 1000);
}

// Task 5: Countdown function
function countdown(startNumber) {
  const interval = setInterval(() => {
    console.log(startNumber); 
    if (startNumber === 0) {
      clearInterval(interval);  
    }
    startNumber--; 
  }, 1000); 
}
countdown(5);
  

// Task 6: Real-time clock
function realTimeClock() {
  const intervalId = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 10000);
}
realTimeClock();
// Task 7: CRUD operations using fetch

// READ: Fetch and display users
async function getUsers() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    data.data.forEach((user) => displayUser(user));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// CREATE: Add a new user
async function createUser() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ first_name: firstName, last_name: lastName, email }),
    });

    const user = await response.json();
    displayUser(user);
    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// UPDATE: Update an existing user by ID
async function updateUser() {
  const userId = document.getElementById('userId').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ first_name: firstName, last_name: lastName, email }),
    });

    const user = await response.json();
    document.getElementById(`user-${userId}`).innerHTML = `
      <div>
        <h3>Name: ${user.first_name} ${user.last_name}</h3>
        <p>Email: ${user.email}</p>
      </div>
    `;
    console.log("User updated:", user);
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

// DELETE: Delete a user by ID
async function deleteUser() {
  const userId = document.getElementById('userId').value;

  try {
    await fetch(`${apiUrl}/${userId}`, { method: 'DELETE' });
    document.getElementById(`user-${userId}`).remove();
    console.log("User deleted with ID:", userId);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

// Helper: Display a user in the UI
function displayUser(user) {
  const userDiv = document.createElement('div');
  userDiv.classList.add('user');
  userDiv.id = `user-${user.id}`;

  userDiv.innerHTML = `
    <div>
      <h3>Name: ${user.first_name} ${user.last_name}</h3>
      <p>Email: ${user.email}</p>
    </div>
  `;

  usersContainer.appendChild(userDiv);
}

// Initial call to display users
getUsers();
