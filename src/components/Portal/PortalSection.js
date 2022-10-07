import React from "react";
import Portal from "./Portal";

class PortalSection extends React.Component {
  state = {
    showName: false,
  };

  toggleName = () => {
    this.setState({ showName: !this.state.showName });
  };

  render() {
    return (
      <div>
        <h2>Alicred Portal</h2>
        <p>Welcome Back!</p>

        <button onClick={this.toggleName}>Toggle Portal</button>

        {this.state.showName && (
          <Portal>
            <p>
              Alicred rendering something and will be toggling with button
              above.
            </p>
          </Portal>
        )}
      </div>
    );
  }
}

export default PortalSection;
