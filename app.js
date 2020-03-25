// init Github class here
const github = new Github;

// init UI class
const ui = new UI;

// search input 
const searchUser = document.getElementById('searchUser');

// Search input event listner
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        // console.log(userText);
        // Make http call
        github.getUser(userText)
            .then(data => {
                console.log(data);
                // as we saw when we reach to the point where the user does not exist the message turns out to be "Not Found"
                if (data.profile.message === "Not Found") {
                    // show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                    console.clear();
                }
                else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch(err => console.log(err));
    }
    else {
        // Clear profile
        ui.clearProfile();
    }
})