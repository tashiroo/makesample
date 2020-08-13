import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: `` };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChenge(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert(`A name was submitted: ` + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input
            type="text"
            value={this.state.value}
            onChenge={this.onChenge}
          ></input>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default nameForm;