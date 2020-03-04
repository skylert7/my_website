import axios from 'axios';

class RouteToBackend {
  // URL = "https://localhost:4000";
  URL = "https://skylerlt.com:4000";

    sendEmail(content){
        return new Promise((resolve, reject) => {
            return axios.post(
              this.URL + '/sendEmail/', content
          )
                .then(resp => {
                  // console.log(resp.data);
                  resolve(resp.data)})
                .catch(resp => reject(resp));
        })
    }

    tttSendMove(board, move){
      let boardAndMove = {board: board, move: move}
      return new Promise((resolve, reject) => {
          return axios.post(
            this.URL + '/tttSendMove/', boardAndMove
        )
              .then(resp => {
                // console.log(resp.data);
                resolve(resp.data)})
              .catch(resp => reject(resp));
      })
    }

    tttGetOpponentMove(board){
      let boardToSend = {board: board}
      return new Promise((resolve, reject) => {
          return axios.post(
            this.URL + '/tttGetOpponentMove/', boardToSend
        )
              .then(resp => {
                console.log(resp.data);
                resolve(resp.data)})
              .catch(resp => reject(resp));
      })
    }

}

export default RouteToBackend;
