import React from "react";

class RegisterToWin extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <div class="ui large form">
          <div class="two fields">
            <div class="field">
              <label>First Name</label>
              <input placeholder="First Name" type="text" />
            </div>
            <div class="field">
              <label>Last Name</label>
              <input placeholder="Last Name" type="text" />
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
