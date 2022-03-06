import axios from 'axios';
import baseUrl from './Components/ApiPath';
import { useParams } from "react-router-dom";

function formatTime(timestamp) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric', 
        month: '2-digit',
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    }).format(timestamp)
}

function extractFormData(formRef) {
    const formData = new FormData(formRef.current)
    let entryData = {}
    for (let [key, value] of formData.entries()) { 
        entryData[key] = value
    }

    return entryData
}

function doHttpPost(path, entryData, sessionId = '') {
    return axios.post(`${baseUrl}${path}`, entryData, {
        headers: {
            'X-Forum-Session-Id': sessionId
        }
    }).then(res => {
        console.debug(`POST response from ${path}`, res)
        return res.data
    }).catch(e => {
        console.error(e);
        window.alert('Sorry, there was an error.')
    })
}

function doHttpDelete(path, sessionId = '') {
    return axios.delete(`${baseUrl}${path}`, {
        headers: {
            'X-Forum-Session-Id': sessionId
        }
    }).then(res => {
        console.debug(`DELETE response from ${path}`, res)
        return res.data
    }).catch(e => {
        console.error(e);
        window.alert('Sorry, there was an error.')
    })
}

function doHttpGet(path, sessionId = '') {
    return axios.get(`${baseUrl}${path}`, {
        headers: {
            'X-Forum-Session-Id': sessionId
        }
    }).then(res => {
        console.debug(`GET response from ${path}`, res)
        return res.data
    }).catch(e => {
        console.error(e);
        window.alert('Sorry, there was an error.')
    })
}

function doHttpPut(path, entryData, sessionId = '') {
    return axios.put(`${baseUrl}${path}`, entryData, {
        headers: {
            'X-Forum-Session-Id': sessionId
        }
    }).then(res => {
        console.debug(`PUT response from ${path}`, res)
        return res.data
    }).catch(e => {
        console.error(e);
        window.alert('Sorry, there was an error.')
    })
}

function withRouter(Children) {
    return(props) => {
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
}

export { formatTime, extractFormData, doHttpPost, doHttpDelete, doHttpGet, doHttpPut, withRouter }