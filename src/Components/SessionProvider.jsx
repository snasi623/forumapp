import { doHttpGet } from '../util.js'

function sessionProvider() {
    const getSessionId = () => {
        return sessionStorage.getItem('sessionId');
    };

    const setSessionId = sessionId => {
        sessionStorage.setItem('sessionId', sessionId);
    };

    const clearSessionId = sessionId => {
        sessionStorage.removeItem('sessionId');
    };

    const getMe = (sessionId) => {
        return doHttpGet('/user/me', sessionId)
    }

    return {
        getSessionId,
        setSessionId, 
        clearSessionId,
        getMe
    }
}

export default sessionProvider;
