
function LogOutFull(){
    window.sessionStorage.removeItem("session")
    window.localStorage.removeItem('login')
    window.localStorage.removeItem('imgProfile')
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('passwordCrypt')
    window.location.reload()
    
}

export default LogOutFull;