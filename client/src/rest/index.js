import { applyUsersUpdate, loginSucceeded, loginFailed } from "../actions";

class RestAPI {
  /* LOGIN REQUESTS */
  registerUser = (dispatch, username, password, email) => {
    let url = "/api/accounts/register";
    let user = {
      name: username,
      email: email,
      password: password,
    };
    let body = JSON.stringify(user);
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = {
      method: "POST",
      body: body,
      headers: myHeaders,
      mode: "cors",
    };
    let promise = fetch(url, myInit);
    promise
      .then((response) => {
        return response.text();
      })
      .then(function (text) {
        console.log("register request completed: ", text);
      });
  };

  loginUser = (dispatch, username, password) => {
    console.log("loginUser: " + username);
    let url = "/api/accounts/login";
    let credenttials = { username: username, password: password };
    let body = JSON.stringify(credenttials);
    let headers = new Headers({ "Content-Type": "application/json" });
    var myInit = {
      method: "POST",
      body: body,
      headers: headers,
      mode: "cors",
    };

    fetch(url, myInit).then(
      (response) => {
        if (response !== "" && response.status === 200) {
          console.log("loginUser: SUCCESS");
          let action = loginSucceeded();
          dispatch(action);
        } else {
          console.log("loginUser: FAILURE");
          let action = loginFailed();
          dispatch(action);
        }
      },
      (error) => {
        console.log("loginUser: ERROR");
        let action = loginFailed();
        dispatch(action);
      }
    );
  };

  /* USER REQUESTS */
  getUsers = (dispatch) => {
    // var myInit = { method: 'GET', headers: this.myHeaders, mode: 'cors' };
    var myInit = { method: "GET", mode: "cors" };
    let promise = fetch("/api/users", myInit);
    promise
      .then((response) => {
        return response.text();
      })
      .then(function (text) {
        console.log("getUsers Request successful: ", text);
        let users = JSON.parse(text);
        dispatch(applyUsersUpdate(users));
      });
  };

  lookupUserByName = (username) => {
    let url = "/api/users/byname";
    let body = username;

    var myInit = {
      method: "POST",
      body: body,
      headers: this.myHeaders,
      mode: "cors",
    };
    let promise = fetch(url, myInit);
    let promise2 = promise.then(
      (response) => {
        console.log("lookupUserByName.promise2: ", JSON.stringify(response));
        return response.text();
      },
      (error) => {
        console.log("lookupUserByName.promise2.error: ", JSON.stringify(error));
        return error.text();
      }
    );
    return promise2;
  };

  postUser = (dispatch, user) => {
    let url = "/api/users/";
    let body = JSON.stringify(user);
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = {
      method: "POST",
      body: body,
      headers: myHeaders,
      mode: "cors",
    };
    let getusers = this.getUsers;
    let promise = fetch(url, myInit);
    promise
      .then((response) => {
        return response.text();
      })
      .then(function (text) {
        console.log("put request completed: ", text);
        getusers(dispatch);
      });
  };

  deleteUser = (dispatch, user) => {
    let url = "/api/users/" + user.id;
    var myInit = { method: "DELETE", headers: this.myHeaders, mode: "cors" };
    let getusers = this.getUsers;
    let promise = fetch(url, myInit);
    promise
      .then((response) => {
        return response.text();
      })
      .then(function (text) {
        console.log("delete request completed: ", text);
        getusers(dispatch);
      });
  };
}

export default RestAPI;
