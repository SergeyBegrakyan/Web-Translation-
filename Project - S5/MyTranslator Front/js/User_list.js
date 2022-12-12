let j =1;
for (let i = 0; i < 5; i++) {


    var UserData = document.createElement("div");
    UserData.classList.add("UserData");
    var a = document.createElement("img");
    var Numbers = document.createElement("div");
    Numbers.classList.add("Numbers");
    UserData.appendChild(Numbers);
    var FirstName = document.createElement("div");
    FirstName.classList.add("FirstName");
    UserData.appendChild(FirstName);
    var LastName = document.createElement("div");
    LastName.classList.add("LastName");
    UserData.appendChild(LastName);
    var Email = document.createElement("div");
    Email.classList.add("Email");
    UserData.appendChild(Email);

    const Names = [];
    Names[0]= "Sergey";
    Names[1]= "Mariam";
    Names[2]= "Lilit";
    Names[3]= "Nonna";
    Names[4]= "Armine";
    const emails = [];
    emails[0]= "sergey.begrakyan@mail.com";
    emails[1]= "mariam@mail.com";
    emails[2]= "lilit@mail.com";
    emails[3]= "nonna@mail.com";
    emails[4]= "Armine@mail.com";


        const number = j + ".";
        Numbers.innerHTML = number;
        const name = Names[i];
        FirstName.innerHTML = name;
        const email = "mariam@mail.com";
        Email.innerHTML = emails[i];
        const lastname = "Grigoryan";
        LastName.innerHTML = lastname;
        document.body.appendChild(UserData);





//Css for UserData
        UserData.style.overflow = "hidden";
        UserData.style.display = "flex";
        UserData.style.gap = "20px";
        UserData.style.padding = "20px";
//CSS for img
        a.style.marginLeft = "360px";
        a.style.marginTop = "-65px";
        a.style.borderRadius = "50px";
        j++;


}





