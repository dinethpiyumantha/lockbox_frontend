const BASE_URL= 'https://localhost:5000/api/v1';

const APIS = {
    file: {
        CREATE: BASE_URL+'/file',
        DELETE: BASE_URL+'/file',
        GET_ALL: BASE_URL+'/file',
        DOWNLOAD: BASE_URL+'/file/download/',
        GET_BY_ID: BASE_URL+'/file/info/'
    },
    message: {
        CREATE: BASE_URL+'/message',
        GET_BY_ID: BASE_URL+'/message/',
        DELETE: BASE_URL+'/message/',
        GET_ALL: BASE_URL+'/message'
    }
}

export default APIS