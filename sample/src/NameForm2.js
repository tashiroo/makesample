// 非制御コンポネートを書くときはstateのイベントハンドラを書く代わりにrefを利用するDOMからフォームの値を持ってくる

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
  handleSubmit(event) {
    alert(`A name was submitted: ` + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

// valueプロパティに値を入れるとユーザーが値を変更できなくなるがnullやundefindを入れると変更可能になってします
reactDOM.render(<input value="h1" />,mountNode);
setTimeout(function() {
  ReactDOM.render(<input value={null} />,mountNode);
}, 1000);