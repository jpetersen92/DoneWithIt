import { create } from 'apisauce';

const apiClient = create({
    baseURL:'http://192.168.68.126:9000/api'
});

apiClient.get('/listings').then(response => {
    if(!response.ok) {
        response.problem
    }
});

export default apiClient;