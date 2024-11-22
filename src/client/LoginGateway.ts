import mercadoFacilClient from "./MercadoFacilClientConfig"

interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string|null
}

const login = async (email:string, password:string):Promise<LoginResponse | null> => {
    const loginRequestObj:LoginRequest = {'email': email, 'password': password};
    try {
        const response = await mercadoFacilClient.post("/api/Login/login", loginRequestObj);
        return response.data as LoginResponse;
    } catch (errorMessage:any) {
        console.log(errorMessage);
        return null;
    }
}

export default login;