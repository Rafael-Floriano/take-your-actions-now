import mercadoFacilClient from "./MercadoFacilClientConfig"

interface LoginRequest {
    email: string;
    password: string;
}

const login = (email:string, password:string) => {
    const loginRequestObj:LoginRequest = {'email': email, 'password': password};
    mercadoFacilClient.post("/api/Login/login", loginRequestObj).then(
        (resp) => console.log(resp) 
    ).catch((error) => {
        console.log("Erro: " + error);
    });
}

export default login;