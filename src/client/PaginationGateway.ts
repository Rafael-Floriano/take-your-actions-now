import mercadoFacilClient from "./MercadoFacilClientConfig"

export interface PaginatedResponse<T> {
    items: T[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  }
  
export interface StockData {
    symbol: string;
    currency: string;
    twoHundredDayAverage: number;
    twoHundredDayAverageChange: number;
    twoHundredDayAverageChangePercent: number;
    marketCap: number;
    shortName: string;
    longName: string;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketTime: string;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayRange: string;
    regularMarketDayLow: number;
    regularMarketVolume: number;
    regularMarketPreviousClose: number;
    regularMarketOpen: number;
    averageDailyVolume3Month: number;
    averageDailyVolume10Day: number;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    priceEarnings: number | null;
    earningsPerShare: number;
    logourl: string;
    id: string;
    createdAt: string;
    updatedAt: string | null;
    active: boolean;
    isDeleted: boolean;
}


const pagination = async (page: number, resultsByPage: number):Promise<PaginatedResponse<StockData> | null> => {
    try {
        const token = localStorage.getItem('token');
        const response = await mercadoFacilClient.get(`/Share/${page}, ${resultsByPage}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data as PaginatedResponse<StockData>;
    } catch (errorMessage:any) {
        console.log(errorMessage);
        return null;
    }
}

export default pagination;