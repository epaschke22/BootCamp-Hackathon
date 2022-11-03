import React, { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import Login from "./components/Login";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

function HomePage(props) {
  return (
    <div>
      <FeedbackList
        isManager={props.isManager}
        currentManagerId={props.currentManagerId}
      />
      <FeedbackForm
        isManager={props.isManager}
        currentManagerId={props.currentManagerId}
      />
      {/* <Footer></Footer> */}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const [currentManagerId, setCurrentManagerId] = useState(0);
  return (
    <Router>
      <div className="App">
        <h1>Feedback and Questions</h1>
        {!isLoggedIn ? (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setIsManager={setIsManager}
            setCurrentManagerId={setCurrentManagerId}
          />
        ) : (
          <div>
            <Routes>
              <Route exact path="/" element={<Navigate to="/home" />} />
              <Route
                path="/home"
                element={
                  <HomePage
                    isManager={isManager}
                    currentManagerId={currentManagerId}
                  />
                }
              />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
