import React, { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // const [email, setEmail] = useState();

  const handleLoginClick = (username, password) => {
    console.log("loginUser: " + username);
    let url = "/api/accounts/login";
    let credenttials = { username: username, password: password };
    let body = JSON.stringify(credenttials);
    let headers = new Headers({ "Content-Type": "application/json" });
    let myInit = {
      method: "POST",
      body: body,
      headers: headers,
      mode: "cors",
    };

    async function getData() {
      let response = await fetch(url, myInit);
      if (response !== "" && response.status === 200) {
        let body = await response.text();
        props.setIsManager(body[{ key: "is_manager" }]);
        props.setCurrentManagerId(body[{ key: "manager_id" }]);
        props.setIsLoggedIn(true);
        console.log("loginUser: SUCCESS");
      } else {
        console.log("loginUser: FAILURE");
      }
    }
    getData();
  };
  return (
    <div id="login-form" className="card bg-light">
      <div>
        <h4 className="card-header">Login Form</h4>
        <form>
          <table className="table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type={"text"}
                    name={"username"}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    placeholder={"user name"}
                    value={username}
                  />
                </td>
              </tr>
              {/* <tr>
                <td>Email:</td>
                <td>
                  <input
                    type={"text"}
                    name={"email"}
                    onChange={setEmail}
                    placeholder={"Email"}
                    value={email}
                  />
                </td>
              </tr> */}
              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type={"text"}
                    name={"password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder={"password"}
                    value={password}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type={"button"}
            value="Login"
            className="btn btn-primary"
            // hidden={mode === "register"}
            onClick={(e) => handleLoginClick(username, password)}
          />
          {/* <input
            type={"button"}
            value="Register"
            className="btn btn-primary"
            onClick={(e) =>
              handleRegisterClick(
                e,
                username,
                password,
                email,
                loginstate,
                mode
              )
            }
          /> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
