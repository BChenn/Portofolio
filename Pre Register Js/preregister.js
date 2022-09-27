function submitData(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let username = document.getElementById('username').value
    let phonenumber = document.getElementById('phonenumber').value
    let password = document.getElementById('password').value
    let day = document.getElementById('day').value
    let months = document.getElementById('months').value
    let year = document.getElementById('year').value
    let nationality = document.getElementById('nationality').value
    let agree = document.getElementById('agree').checked

    if(name.length == 0){
        document.getElementById('error').innerHTML = "Name Can't Be Empty!"
    }else if(username.length == 0){
        document.getElementById('error').innerHTML = "Username Can't Be Empty!"
    }else if(password.length == 0){
        document.getElementById('error').innerHTML = "Password Can't Be Empty!"
    }else if(password.length < 8){
        document.getElementById('error').innerHTML = "Password Must Be More Than 7 Characters!!"
    }else if(nationality.length == 0){
        document.getElementById('error').innerHTML = "Nationality Can't Be Empty!"
    }else if(email.length == 0){
        document.getElementById('error').innerHTML = "Email Can't Be Empty!"
    }else if(!email.endsWith('.com') || !email.includes('@') || email.indexOf('@') != email.lastIndexOf('@') ||
    email.indexOf('@')+1 == email.lastIndexOf('.com')){
        document.getElementById('error').innerHTML = "Wrong Email Format!"
    }else if(phonenumber.length == 0){
        document.getElementById('error').innerHTML = "Phone Number Can't Be Empty!"
    }else if(phonenumber.length > 15 && phonenumber.length < 8 && !phonenumber.beginsWith('+')){
        document.getElementById('error').innerHTML = "Wrong Phone Number Format!"
    }else if(day.length == 0){
        document.getElementById('error').innerHTML = "Day Can't Be Empty!"
    }else if
    (!day.includes('1') && !day.includes('2') && !day.includes('3') && !day.includes('4') &&
    !day.includes('5') && !day.includes('6') && !day.includes('7') && !day.includes('8') &&
    !day.includes('9') && !day.includes('10') && !day.includes('11') && !day.includes('12') &&
    !day.includes('13') && !day.includes('14') && !day.includes('15') && !day.includes('16') &&
    !day.includes('17') && !day.includes('18') && !day.includes('19') && !day.includes('20') &&
    !day.includes('21') && !day.includes('22') && !day.includes('23') && !day.includes('24') &&
    !day.includes('25') && !day.includes('26') && !day.includes('27') && !day.includes('28') &&
    !day.includes('29') && !day.includes('30') && !day.includes('31')){
        document.getElementById('error').innerHTML = "Wrong Day Format!"
    }else if(months.length == 0){
        document.getElementById('error').innerHTML = "Month Can't Be Empty!"
    }else if
    (!months.includes('1') && !months.includes('2') && !months.includes('3') && !months.includes('4') &&
    !months.includes('5') && !months.includes('6') && !months.includes('7') && !months.includes('8') &&
    !months.includes('9') && !months.includes('10') && !months.includes('11') && !months.includes('12')){
        document.getElementById('error').innerHTML = "Wrong Month Format!"
    }else if(year.length == 0){
        document.getElementById('error').innerHTML = "Year Can't Be Empty!"
    }else if(
        year.length != 4 || year.beginsWith('0') || year.beginsWith('3') || year.beginsWith('4')
        || year.beginsWith('5') || year.beginsWith('6') || year.beginsWith('7') || year.beginsWith('8')
        || year.beginsWith('9')){
        document.getElementById('error').innerHTML = "Wrong year Format!"
    }else if(agree = false){
        document.getElementById('error').innerHTML = "You Have To Agree To Terms And Conditions!"
    }else{
        document.getElementById('error').innerHTML = "Registration Success!"
        sweetAlert("Congratulations!", "Registration Success!")
    }
}