document.getElementById("addBtn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    console.log("Username:", username);
    if (username) {
    window.open(`https://www.instagram.com/${username}`, "_blank");
    } else {
    alert("Please enter a username!");
    }
});