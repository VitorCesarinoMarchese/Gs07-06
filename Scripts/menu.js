function OpenMenu(){
    const list = document.getElementById("nav-list")
    const menu = document.getElementById("menu")
    const close = document.getElementById("close")
    const logo = document.getElementById("logo")
    menu.classList.add("none")
    close.classList.remove("none")
    list.classList.add("open")
    logo.classList.add("none")
}
function CloseMenu(){
    const list = document.getElementById("nav-list")
    const menu = document.getElementById("menu")
    const close = document.getElementById("close")
    const logo = document.getElementById("logo")
    menu.classList.remove("none")
    close.classList.add("none")
    list.classList.remove("open")
    logo.classList.remove("none")
}