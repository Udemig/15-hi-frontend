import React from "react";

class ClassComponent extends React.Component {
  // constructor: props'a erişmek ve state tanımlamak için kullanılır
  constructor(props) {
    super(props);

    // state tanımı
    this.state = {
      name: "",
      list: [],
      count: 0,
    };
  }

  // component'ın ekrana gelme anında çalışır
  componentDidMount() {
    console.log("componentDidMount çalıştı");
  }

  // component'ın güncellendiği anda çalışır (props/state değiştiğinde)
  componentDidUpdate() {
    console.log("componentDidUpdate çalıştı");
  }

  // component'ın ekrandan ayrılma anında çalışır
  componentWillUnmount() {
    console.log("componentWillUnmount çalıştı");
  }

  // render: jsx içeriğini belirlemek için kullanılır
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>

        <div>
          <button onClick={() => this.setState({ ...this.state, count: this.state.count - 1 })}>Azalt</button>

          <span>{this.state.count}</span>

          <button onClick={() => this.setState({ ...this.state, count: this.state.count + 1 })}>Arttır</button>
        </div>

        <br />
        <hr />
      </div>
    );
  }
}

export default ClassComponent;
