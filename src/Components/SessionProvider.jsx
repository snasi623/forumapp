import axios from 'axios';
import baseUrl from './ApiPath';

function sessionProvider() {
    const getSessionId = () => {
        return sessionStorage.getItem('sessionId');
    };

    const setSessionId = sessionId => {
        sessionStorage.setItem('sessionId', sessionId);
    };

    const getMe = (sessionId) => {
        return axios.get(`${baseUrl}/me`, {
            headers: {
                'X-Forum-Session-Id': sessionId
            }
        }).then(res => {
            return res.data
        })
    }

    return {
        getSessionId,
        setSessionId, 
        getMe
    }
}

export default sessionProvider;
