import React from "react";

export default (importComponent) => {
  return class extends React.Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importComponent().then((component) => {
        this.setState({ component: component.default });
      });
    }

    render() {
      const Component = this.state.component;

      return Component ? (
        <Component {...this.props} />
      ) : (
        <div>Loading component...</div>
      );
    }
  };
};
