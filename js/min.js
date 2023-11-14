// querySelector est une methode pour afficher le contenu de l input (récupérer les valeurs des champs du formulaire)
const fullName = document.querySelector('.fullName');
const dateOfBirth = document.querySelector('.dateOfBirth');
const gender = document.querySelector('select[name="gender"]');
const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');
//récupérer les bouttons
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');
//validation rules fullName

//input full name
function validateFullName(fullName){
    //check if the full name is required.
    if(!fullName){
        return "Full Name is required .";
    }
    //check the length of the full name.
    if(fullName.lenght < 3 || fullName.lenght > 20){
        return "Full Name must be between 3 and 20 characters long.";
    }
    //check the format of the full name.
    if(!/^[a-zA-Z]+$/.test(fullName)){
        return "Full Name must contain only letters and spaces";
    }
    //if the full name passes all of the validations rules , return null.
    return null;
}