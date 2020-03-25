class Github {
    constructor() {
        this.client_id = 'f7ac4ff67b2b504c0e50';
        this.client_secret = '5cb7bffc2c08170ea48b4cf3ade0a4820894e9dc';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            // in es5 and before
            // profile: profileData
            // in es6 and + instead of writing profile:profile u can write
            profile,
            repos
        }
    }
}