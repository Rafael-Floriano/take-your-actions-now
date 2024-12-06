import mercadoFacilClient from "./MercadoFacilClientConfig";
import { StockData } from "./PaginationGateway";

const findActionBySymbol = async (symbol: string):Promise<StockData | null> => {
    try {
        const token = localStorage.getItem('token');
        const response = await mercadoFacilClient.get(`/Share/${symbol}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("findActionBySymbol");
        console.log(response.data as StockData);
        return response.data as StockData;
    } catch (errorMessage:any) {
        console.log(errorMessage);
        return null;
    }
}

export default findActionBySymbol;