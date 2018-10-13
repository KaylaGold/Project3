
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Dashboard.css";
import Modal from "../Modal/Modal";

class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1></h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
         Post
        </button>
      </main>
    );
  }
}

export default Dashboard;
const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);