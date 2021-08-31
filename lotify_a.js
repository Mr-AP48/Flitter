function back() {
    window.location.replace("lotify_room.html")
}

function logout() {
    window.location = "index.html"
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}