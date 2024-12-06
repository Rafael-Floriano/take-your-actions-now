import mercadoFacilClient from "./MercadoFacilClientConfig";

const FindObservedSharesbyUserId = async (userId: String):Promise<string | null> => {
    try {
        const token = localStorage.getItem('token');
        const response = await mercadoFacilClient.get(`/User/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return <string>response.data.get("observedShares");
    } catch (errorMessage:any) {
        console.log(errorMessage);
        return null;
    }
}

export default FindObservedSharesbyUserId;