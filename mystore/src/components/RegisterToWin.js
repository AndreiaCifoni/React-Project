import React from "react";

class RegisterToWin extends React.Component {
  state = { name: "", email: "" };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <div class="ui large form">
          <div class="two fields">
            <div class="field">
              <label>Name</label>
              <input
                placeholder="Name"
                type="text"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div class="field">
              <label>Email</label>
              <input
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
          </div>
          <div class="ui animated button" tabindex="0">
            <div class="visible content">Next</div>
            <div class="hidden content">
              <i class="right arrow icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterToWin;
