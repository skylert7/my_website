import axios from 'axios';

class RouteToBackend {
  URL = "http://skylerlt.com:4000";
  // URL = "http://127.0.0.1:8000"; //localhost

    sendEmail(content){
        return new Promise((resolve, reject) => {
            return axios.post(
              this.URL + '/sendEmail/',
          )
                .then(resp => {
                  // console.log(resp.data);
                  resolve(resp.data)})
                .catch(resp => reject(resp));
        })
    }

}

export default UserFunctions;
