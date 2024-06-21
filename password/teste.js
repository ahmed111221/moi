document.getElementById("5").onclick=function (){

    const longuer = document.getElementById("0").value;
    const majuscule = document.getElementById("1").checked;
    const menuscule = document.getElementById("2").checked;
    const nomber = document.getElementById("3").checked;
    const characters = document.getElementById("4").checked;
    let Mess = document.getElementById("6");


    const Cmajuscule = "AZERTYUIOPQSDFGHJKLMWXCVBN";
    const Cmenuscule = "azertyuiopqsdfghjklmwxcvbn";
    const Cnomber = "0123456789";
    const Ccharacters = "&'( -_çà)#{[^@]}/\.!%$;,";
    let Mpass = "";
    let password = "";

    password += majuscule ? Cmajuscule : "";
    password += menuscule ? Cmenuscule : "";
    password += nomber ? Cnomber : "";
    password += characters ? Ccharacters : "";


    
        for(let i=0;i<longuer;i++)
        {
            let longuerOfPass = password.length;
            let numr = Math.floor(Math.random()*(longuerOfPass-1));

            Mpass += password.charAt(numr);
        }
        password = Mpass;

        Mess.innerHTML = password ;
    
}

