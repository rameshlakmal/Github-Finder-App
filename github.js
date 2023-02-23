class Github{
    constructor(){
        this.client_id = '2d51fd99217329ffb8fb';
        this.client_secret = '74920fc8a2a4c7a0f6c38ad7726e922b4e4fa619';
    }

    async getUser(user){
        const profileResponse = await fetch (`https://api.github.com/users/${user} ? client_id=${this.client_id} & client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}