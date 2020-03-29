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

/* ---- Start TicTacToe ---- */
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
                // console.log(resp.data);
                resolve(resp.data)})
              .catch(resp => reject(resp));
      })
    }

    tttGetWinner(board){
      let boardToSend = {board: board}
      return new Promise((resolve, reject) => {
          return axios.post(
            this.URL + '/tttGetWinner/', boardToSend
        )
              .then(resp => {
                // console.log(resp.data);
                resolve(resp.data)})
              .catch(resp => reject(resp));
      })
    }
/* ---- End TicTacToe ---- */

/* ---- Start Gomoku ---- */

    gmkSendMove(board, move){
      let boardAndMove = {board: board, move: move}
      return new Promise((resolve, reject) => {
          return axios.post(
            this.URL + '/gmkSendMove/', boardAndMove
        )
              .then(resp => {
                // console.log(resp.data);
                resolve(resp.data)})
              .catch(resp => reject(resp));
      })
    }
    gmkGetOpponentMove(board){
      let boardToSend = {board: board}
      return new Promise((resolve, reject) => {
          return axios.post(
            this.URL + '/gmkGetOpponentMove/', boardToSend
        )
              .then(resp => {
                // console.log(resp.data);
                resolve(resp.data)})
              .catch(resp => reject(resp));
      })
    }

    gmkGetWinner(board){
      let boardToSend = {board: board}
      return new Promise((resolve, reject) => {
          return axios.post(
            this.URL + '/gmkGetWinner/', boardToSend
        )
              .then(resp => {
                // console.log(resp.data);
                resolve(resp.data)})
              .catch(resp => reject(resp));
      })
    }
/* ---- End Gomoku ---- */

/*Slither API*/

/*Slither API ends*/


}

export default RouteToBackend;
