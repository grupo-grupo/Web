
function parseJWT () {
    try {
        let token = atob(sessionStorage.getItem("token"));
        return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
        console.log(error);
    }
}

//test3

export default parseJWT;