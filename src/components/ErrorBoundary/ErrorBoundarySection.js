import React from "react";

class ErrorBoundarySection extends React.Component {
  state = {
    throw: false,
  };

  onClick = () => {
    this.setState({ throw: true });
  };

  render() {
    if (this.state.throw) throw new Error("Ohh no!!");

    return (
      <div>
        <h2>Error Boundary</h2>
        <button onClick={this.onClick}>Click for Error</button>
      </div>
    );
  }
}

export default ErrorBoundarySection;
