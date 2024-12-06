import mercadoFacilClient from "./MercadoFacilClientConfig";

interface SaveObserverShare {
    id:string,
    observedShares: string
}

const SaveObservedSharesbyUserId = async (userId: string, observedShares: string):Promise<string | null> => {
    const saveObserverShare:SaveObserverShare = {'id': userId, 'observedShares': observedShares};

    try {
        const token = localStorage.getItem('token');
        const response = await mercadoFacilClient.post(`/User/`, saveObserverShare, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.get("observedShares");
    } catch (errorMessage:any) {
        console.log(errorMessage);
        return null;
    }
}

export default SaveObservedSharesbyUserId;