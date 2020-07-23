import { mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { Services } from 'service'

export const RequestAuthentication = action$ =>
    action$.pipe(
        ofType('REQUEST_AUTH', 'REQUEST_LOGIN_INFO'),
        mergeMap(async action => {
            try {
                switch (action.type) {
                    case 'REQUEST_AUTH':
                        const rawResponseToken = await Services().post('/api/login', action.payload.properties)
                        
                        return dispatch => {
                            dispatch({
                                type: 'AUTH_SUCCESS',
                                payload: {
                                    token: rawResponseToken.data.token,
                                },
                            })
                        }
                    case 'REQUEST_LOGIN_INFO':
                        const getInfo = await Services().get('/api/profile')
                        return dispatch => {
                            dispatch({
                                type: 'GET_LOGIN_INFO',
                                payload: {
                                    data: getInfo.data,
                                },
                            })
                        }
                    default:
                        break
                }
            } catch (e) {
                const { title } = e
                return dispatch => {
                    dispatch({ type: "AUTH_FAILED" })
                    dispatch({ type: 'ALERT_ERROR', payload: { message: title } })
                }
            }
        }),
    )
