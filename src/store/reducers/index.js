import { combineReducers } from 'redux';
import { authentication } from './auth';
import { setAlertsToast } from './alertToast';


const rootReducers = combineReducers({
    authentication,
    setAlertsToast,
})

export default rootReducers
