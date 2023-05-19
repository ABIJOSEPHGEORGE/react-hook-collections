import jwtDecode from 'jwt-decode'

function GetAndDecode(key){
    const keyItem = JSON.stringify(localStorage.getItem(key))
    return jwtDecode(keyItem)
}

export default GetAndDecode