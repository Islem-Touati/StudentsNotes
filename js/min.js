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
    if (!fullName){
        return "Full Name is required .";
    }
    //check the length of the full name.
    if (fullName.length < 3 || fullName.lenght > 20){
        return "Full Name must be between 3 and 20 characters long.";
    }
    //check the format of the full name.
    if (!/^[a-zA-Z]+$/.test(fullName)){
        return "Full Name must contain only letters and spaces";
    }
    //if the full name passes all of the validations rules , return null.
    return null;
}

//input date
function validateDate(date){
    //check if the date is required.
if (!date){
    return "date is required";
}
//check the format of the date.
if (!/^d{2}-\d{4}$/ .test(date)){
    return "date must be in the format DD/MM/YYYY";
}
//check the range of the date
const today = new Date();
const minDate = new Date (  today.getMonth(), today.getDate(), today .getFullYear());
const maxDate = new Date( today.getMonth(), today.getDate(), today.getFullYear() + 1);

if (date < minDate || date > maxDate){
    return "Date must be between today and one year from today.";}
    //if the date passes all the validation rules , return null.
return null;
}

//Afficher les valeurs des champs(function calculer).
submit.addEventListener('click', (event)=>{
if (validateFullName(fullName.value) !== null){
    alert(validateFullName(fullName.value))
    return;
}
if (validateDate(dateOfBirth.value) !== null){
    alert(validateDate(dateOfBirth.value))
    return;
}
if (validateGender(gender.value) !== null){
    alert(validateGender(gender.value))
    return;
}
if (validateMarksText(task1.value) !== null){
    alert(validateMarksText(task1.value))
    return;
}
if (validateMarksText(task2.value) !== null){
    alert(validateMarksText(task2.value))
    return;
}
if (validateMarksText(task3.value) !== null){
    alert(validateMarksText(task3.value))
    return;
}
})


function validateGender(gender){
    //check if the gender is required.
    if (!gender){
        return "Gender is required"
    }
    //check if the gender is a valid value.
    const validGenders = ["Male" , "Female"];
    if (!validGenders.includes(gender)){
        return "Gender must be a valid value.";
    }
    //if the gender passes all of the validation rules, return null.
    return null;
}

function validateMarksText(text){
    //check if the text is required
    if (!text){
        return "Marks text is required.";
    }
    //check the format of the text .
    if (!/^[0-9]+(\.[0-9]+)?$/.text(text)){
        return "Marks text must be a number or a percentage.";
    }
    //check the range of the text.
    const minMarks = 0;
    const maxMarks = 20;
    if (text < minMarks || text > maxMarks){
        return "Marks text must be between 0 and 20.";
    }
    //check the decimal places of the text. 
    if (text.includes(".") && text.split(".").length -1 > 2){
        return "Marks text must at most two decimal places.";
    }
    //if the text passes all of the validation rules, 
    return null;
}