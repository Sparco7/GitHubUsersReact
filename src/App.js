import React from "react";
import axios from "axios";
import "./App.css";
import User from "./components/User/User";
import InputForm from "./components/InputForm/InputForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [
        "Sparco7",
        "gagishmagi",
        "ShaniBel",
        "leib-ran",
        "shaharbest",
        "Fareska",
      ],
      users: [],
      inputUser: "",
    };
  }

  componentDidMount() {
    this.state.names.map((name, i) => {
      return this.FetchUser(name);
    });
  }

  FetchUser = (user) => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        this.setState({ users: [response.data, ...this.state.users] });
      })
      .catch((err) => console.log("err", err));
  };

  handleUpdateState = (e) => {
    const newState = e.target.value;
    this.setState({ inputUser: newState });
  };

  addUser = () => {
    const user = this.state.inputUser;

    this.FetchUser(user);

    this.setState({ inputUser: "" });
  };

  render() {
    return (
      <div className="container app-container">
        <div className="row hl-row">
          <div className="col">
            <h1>
              GitHub <i class="fab fa-github"></i> Users
            </h1>
          </div>
        </div>

        <div className="row input-container">
          <div className="col input-col">
            <InputForm
              handleUpdateState={this.handleUpdateState}
              addUser={this.addUser}
              inputUser={this.state.inputUser}
            />
          </div>
        </div>
        <div className="row">
          {this.state.users.map((user, i) => {
            return <User user={user} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
