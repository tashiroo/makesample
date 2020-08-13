import React from "react";

class FleverFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: `coconut` };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChenge(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert(`Your favorite flevor is: ` + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          pick your favorite flavor:
          <select value={this.handleSubmit}>
            <option value="grepefruit">Grepefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default nameForm;
