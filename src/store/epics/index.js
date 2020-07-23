import { combineEpics } from "redux-observable";
import { RequestAuthentication } from "./epicAuthentication";

const setupEpic = combineEpics(
    // MODULES VARIABLE
    RequestAuthentication,
    
)

export default setupEpic