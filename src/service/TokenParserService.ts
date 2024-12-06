import { jwtDecode } from "jwt-decode";


interface DecodedToken {
  nameid:string,
  email:string,
  role:string,
}

function parseJWT(token:string):DecodedToken|null {
  try {
    const decoded = jwtDecode(token);
    console.log("Decoded JWT:", decoded);
    return <DecodedToken>decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}

export const getUserID = (token:string):string => {
  const decodedToken: DecodedToken|null = parseJWT(token);
  if (decodedToken == null) {
    console.warn("NÃO FOI POSSÍVEL PEGAR O USUÁRIO POIS ELE ESTÁ NULO");
    return '';
  }
  return decodedToken.nameid;
}
