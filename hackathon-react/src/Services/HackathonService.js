import axios from 'axios';

export class HackathonService{
    baseUrl = "http://localhost:8080/hackathon/";

    getAll(){
        return axios.get(this.baseUrl + "lista").then(res => {
            console.log(res)
        });
    }
}
