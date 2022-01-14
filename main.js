function addUser(){
    localStorage.setItem(player_1 , 
        document.getElementById("P1Input").value);

        localStorage.setItem(player_2 , 
            document.getElementById("P2Input").value);

            window.location = "mainScreen.html";
}