const paramSerializer = (baseEndPoint, paramObj) => {
    let finalURL = baseEndPoint;
    Object.keys(paramObj).map((item, index) => {
        finalURL += ((index === 0) ? '?' : '&') + item + '=' + paramObj[item];
    });
    return finalURL;
};



const showErrorToast = (errorCode) => {
    let toastMsg = '';
    switch(errorCode){
        case 401:
        toastMsg = 'You are not authorized';
        break;
        default:
            break;
    }
    return toastMsg
}

export {paramSerializer,showErrorToast}