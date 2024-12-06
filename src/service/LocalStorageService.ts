import { getUserID } from "./TokenParserService";

const saveIdentifiers = (token:String)=> {
    if (token === undefined || token === null || token === '') {
        console.warn("TOKEN INVALIDO");
        return;
    }
    window.localStorage.setItem('token', <string>token);
    window.localStorage.setItem('userID', getUserID(<string>token));
}

export default saveIdentifiers;