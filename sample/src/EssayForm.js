import React from "react";

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `Please write an essay about yuor favorite  DOM elemnet.`
    };

    this.handleChange = this.handleChenge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChenge(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   alert(`An essay was submitted ` + this.state.value);
   event.preventDefault();
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
      Essay:<textarea value={this.state.value} onChenge={this.handleChenge} />
      </label>
      <imput type = "submit" value="submit"/>
      </form>
    );
      
    }
}

export default App;
