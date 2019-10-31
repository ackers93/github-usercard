/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/ackers93')
  .then(data => {
    console.log('data: ', data)
    const myAccount = data.data;
    console.log('UserInfo: ', myAccount)

    const gitCards = document.querySelector('.cards')
    const gitCardInfo = githubCard(myAccount)
    gitCards.appendChild(gitCardInfo)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [

  'AndrewMaddocks',
  'Hail91',
  'vtellez1',
  'emilybruner',
  'kaihaskell'
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`).then(response => {
    const gitCard = githubCard(response.data)
    console.log(response.data.avatar_url);
    const gitCards = document.querySelector('.cards')
    gitCards.appendChild(gitCard)
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function githubCard(arg) {
  const gitCard = document.createElement("div"),
    gitProfPic = document.createElement("img"),
    gitCardInfo = document.createElement("div"),
    gitName = document.createElement("h3"),
    gitUserName = document.createElement("p"),
    gitLocation = document.createElement("p"),
    gitProfile = document.createElement("a"),
    gitFollowers = document.createElement("p"),
    gitFollowing = document.createElement("p"),
    gitBio = document.createElement("p");

  gitCard.appendChild(gitProfPic);
  gitCard.appendChild(gitCardInfo);
  gitCardInfo.appendChild(gitName);
  gitCardInfo.appendChild(gitUserName);
  gitCardInfo.appendChild(gitLocation);
  gitUserName.appendChild(gitProfile);
  gitCardInfo.appendChild(gitFollowers);
  gitCardInfo.appendChild(gitFollowing);
  gitCardInfo.appendChild(gitBio);

  gitProfPic.src = arg.avatar_url;
  gitName.textContent = arg.name;
  gitUserName.textContent = arg.login;
  gitLocation.textContent = arg.location;
  gitProfile.href = arg.html_url;
  gitFollowers.textContent = `Followers: ${arg.followers}`;
  gitFollowing.textContent = `Following: ${arg.following}`;
  gitBio.textContent = arg.bio;


  gitCard.classList.add("card");
  gitCardInfo.classList.add("card-info");
  gitName.classList.add("name");
  gitUserName.classList.add("username");

  return gitCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/