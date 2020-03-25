class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // display user profile
    showProfile(user) {
        // console.log(user);
        this.profile.innerHTML = `
        <div class = "card card-body mb-3">
            <div class = "row">
                <div class="col-md-3">
                    <img class ="rounded img-thumbnail img-fluid mb-2" src ="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="my-4 btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class ="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class ="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class ="badge badge-danger">Public Followers: ${user.followers}</span>
                    <span class ="badge badge-warning">Public Following: ${user.following}</span>
                    <br><br>
                    <ul class = "list-group">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Created At: ${user.created_at}</li>
                    </ul>
                </div> 
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>`
    }

    // show repos of user
    showRepos(repos) {
        let output = '';
        repos.forEach(function (repo) {
            output += `
            <div class="card card-body mb-2>
                <div class="row">
                    <div class="col-md-6">
                        <a class="btn btn-outline-dark font-weight-bold" style="text-decoration:none;"  href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class ="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class ="badge badge-secondary">Watchers: ${repo.watchers}</span>
                        <span class ="badge badge-danger">Forks: ${repo.form_count}</span>
                    </div>
                </div>
            </div>`;
        });

        // output repos
        document.getElementById('repos').innerHTML = output;
    }

    // show alert message
    showAlert(msg, className) {
        // clear any remaining alerts
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add class
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(msg));
        // get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);
        // timeout after 2 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 2500);
    }

    // clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}