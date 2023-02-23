class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //Display profile in UI
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3 bg-secondary">
        <div class="row">
          <div class="col-md-3 text-center">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary bg-light">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success bg-success">Followers: ${user.followers}</span>
            <span class="badge badge-info bg-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group ">
              <li class="list-group-item text-dark">Company: ${user.company}</li>
              <li class="list-group-item text-dark">Website/Blog: ${user.blog}</li>
              <li class="list-group-item text-dark">Location: ${user.location}</li>
              <li class="list-group-item text-dark">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3 text-center">Latest Repos</h3>
      <div id="repos"></div>
        `;
    }


    //Show alert message
    showAlert(message, className){
//Clear any remaining alerts
        this.clearAlert();
//Create div
        const div = document.createElement('div');
//Add clasess
        div.className = className;
//Add text
        div.appendChild(document.createTextNode(message));
//Get parent
        const container = document.querySelector('.searchContainer');
//Get search box
        const search = document.querySelector('.search');
//Insert alert
        container.insertBefore(div,search);
//Timeout after 3sec
        setTimeout(()=>{
            this.clearAlert();
        },3000);
    }
    //Clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    //clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }

}