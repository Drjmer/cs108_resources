function validateName() {
    /*Check whether name is entered or not.
    Throw an error if name field is empty.
    Error message will be "Full name is required."*/
    let name_pattern=/^([a-zA-Z]+\s)*([a-zA-Z]+)$/
    let name=document.getElementById('fullName').value
    if(!(name_pattern.test(name))){
        throw "Error: Full Name is required."
    }

}

function validateEmail() {
    /*Check whether email is valid or not, as per the rules stated in problem statement.
    Use regex and test() function to validate the email address.
    Throw an error if email is invalid.
    Error message will be "Invalid Email Address."*/
    let email_pattern=/^([a-z0-9]+@{1}[a-z]+\.[a-z]{3})$/
    let email=document.getElementById('email').value
    if(!(email_pattern.test(email))){
        throw "Error: Invalid Email Address."
}
}

function validatePassword() {
    /*Check whether password is made of atleast 8 characters.
    /If not, throw an error.
    Error message will be "Password must be at least 8 characters"*/
    var pass_pattern=/^.{8,}$/
    let pass1=document.getElementById('password').value
    if(!(pass_pattern.test(pass1)))
    {
        throw "Error: Password must be at least 8 characters"
    }

}

function ConfirmPassword() {
    /*Check whether the re-entered password is same as the password entered first.
    If not, throw an error.
    Error message will be "Passwords do not match"*/
    
    let pass2=document.getElementById('confirmPassword').value
    let pass1=document.getElementById('password').value
    if(!(pass1===pass2))
    { throw "Error: Passwords do not match"

    }
}

function validateForm() {
    try {

        /*Check whether all fields are entered or not*/
        //Your code here
        var fields=["fullname","email","password","confirmPassword"]
        let pattern=/^(.)+$/
        for(i=0;i<4;i++)
        {
            let x=fields[i]
            if(!(pattern.test(x)))
            {
                throw "Error: All fields are required"
            }

        }

        validateName();
        validateEmail();
        validatePassword();
        ConfirmPassword();

        // Additional validation rules can be added here

        //After checking all the rules, if the program throws no error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the message "Registration successful!" in GREEN colour to the div container "feedback" in index.html.
        //Your code here
        document.getElementById('feedback').innerHTML="<span style='color:green'>Registration successful!</span>";
    } catch (error) {
        //After checking all the rules, if the program throws an error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the error message in RED colour to the div container "feedback" in index.html.
        //Your code here
        document.getElementById('feedback').innerHTML="<span style='color:red'>"+error+"</span>";
    }
}
