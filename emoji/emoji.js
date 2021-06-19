// Acessing DOM
const emojiDisplayArea = document.querySelector(".emoji-display-area");
const appContainer = document.querySelector(".app");
const modeToggleButton = document.querySelector("#mode-switch");
const searchInput = document.querySelector(".emoji-search-box");
const searchButton = document.querySelector(".emoji-search-btn");
console.log(searchInput);

// Public Access Key -Not private
const access_key = "703a1b02ca24b0c6be3e02a89abb83b61bf07dc1";

// Function to switch dark mode
const toggleDarkMode = () => {
  appContainer.classList.toggle("dark");
};

// Function to Load emojis from end-point
function loadEmoji() {
  fetch(`https://emoji-api.com/emojis?access_key=${access_key}`)
    .then((response) => response.json())
    .then((data) => displayEmoji(data))
    .catch((error) => console.log(error));
}

// Function to Load emojis from end-point
function searchEmoji(e) {
  e.preventDefault();
  const searchKeyword = searchInput.value;
  const dataNotFound = [
    {
      character: "😭",
      unicodeName: `${searchKeyword} not found`,
      group: "Try angry, sweet, laugh",
      subGroup: "",
    },
  ];
  fetch(
    `https://emoji-api.com/emojis?search=${searchKeyword}&access_key=${access_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        displayEmoji(data);
      } else {
        displayEmoji(dataNotFound);
      }
    })
    .catch((error) => console.log(error));
}

// Function to populate emojis to the screen
const displayEmoji = (emojis) => {
  let tempHolder = "";
  emojis.map(({ character, group, subGroup, unicodeName, slug }) => {
    return (tempHolder += `
            <div class="col-sm-3 emoji">
                <div class="card h-100">
                    <div class="character">${character}</div>
                    <div class="card-body">
                        <h5 class="name">${unicodeName}</h5>
                        <p class="card-text"></p>
                        <p class="group"><small class="text-muted">${group} ${subGroup}</small></p>
                    </div>
                </div>
            </div>
          `);
  });

  emojiDisplayArea.innerHTML = tempHolder;
};

/* EventListeners */

// Fetch the emojis when the window is fully loaded
window.addEventListener("load", loadEmoji);

// Bind toggleDrakMode function to switch
modeToggleButton.addEventListener("click", toggleDarkMode);

// Bind search function to the search input
searchButton.addEventListener("click", searchEmoji);
