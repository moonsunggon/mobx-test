import axios from 'axios';

class TestRepository {
	
    URL = "http://localhost:8080/test";
    
    constructor(app) {
        
    }

    // 등록 폼 구성 (LOV)
    test() {
        return axios({
            method: 'get',  
            url: this.URL,
            headers: {
                ...this.COMMON_HEADER,
                'Content-Type' : 'application/json',
                'X-API-Id' : 'WFTP-INT-ADM-ACC-GC01'
            }
        }).then(response=> alert(response.data))
    }
}
export default TestRepository;  