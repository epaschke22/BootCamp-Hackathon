import React from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import "./Main.css";

function UsersModule() {
  return (
    <div>
      <UserList></UserList>
      <UserForm></UserForm>
    </div>
  );
}

function FeedbackModule() {
  return (
    <div>
      <EventList></EventList>
      <EventForm></EventForm>
    </div>
  );
}

function Main() {
  return (
    <Router>
      <div className="App">
        <h1>Registration App</h1>
        <nav>
          <Link
            type="button"
            className="button btn-outline-primary btn-lg"
            to="/users"
          >
            Users
          </Link>
          <Link
            type="button"
            className="button btn-outline-primary btn-lg"
            to="/events"
          >
            Events
          </Link>
          <Link
            type="button"
            className="button btn-outline-primary btn-lg"
            to="/registrations"
          >
            Registrations
          </Link>
        </nav>
        <Route exact path="/" render={() => <Redirect to="/users" />} />
        <Route path="/users" component={UsersModule} />
        <Route path="/events" component={FeedbackModule} />
        {/* <Route path="/registrations" component={RegistrationsModule} /> */}
      </div>
    </Router>
  );
}

export default Main;
