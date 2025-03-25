console.log("home.js run\n")

window.onload = () => {
    let username = prompt("You Must Login \nIf you don't your name will character name will be 'null'", "username")
    localStorage.setItem("User", username);
    
}