//Init Github
const github = new Github;

//Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listner
searchUser.addEventListener('keyup',(e)=>{
//Get input text
    const userText = e.target.value;

    if(userText !== ''){
//Make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //Show alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                }else{
                    //Show profile
                    ui.showProfile(data.profile);
                }
            })
    }else{
        //Clear profile
        ui.clearProfile();
    }
});