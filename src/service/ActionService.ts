import FindObservedSharesbyUserId from "../client/FindObservedSharesGateway"
import { getUserIDInStorage } from "./LocalStorageService"
import SaveObservedSharesbyUserId from "../client/SaveObservedShareGateway";

export const saveAction = (symbol:string) => {
    const userID:string|null = getUserIDInStorage();
    if (userID === null) {
        console.warn("USER ID NULO");
        return;
    }

    let actionsObserveds:string = findAllActionsByUser(userID);

    actionsObserveds += `, ${symbol}`;

    SaveObservedSharesbyUserId(userID, actionsObserveds);
}

export const findAllActionsByUser = (userID:string):string => {
    let actionsObserveds:string|null = FindObservedSharesbyUserId(<string>getUserIDInStorage());
    if (actionsObserveds === null) {
        actionsObserveds = "";
    }
    return actionsObserveds;
}