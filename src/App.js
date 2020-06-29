import React, { Component } from "react";
import Data from "./data.json";
import "./scss/main.scss";
//import Legend from "./components/Legend";
import Title from "./components/Title";
console.log(Data);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      result: "",
    };

    this.handleChange = (event) => {
      const toTranslate = event.target.value;
      // console.log(toTranslate);
      this.setState({
        input: toTranslate,
      });
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      let translated = "";
      this.state.input
        .toLowerCase()
        .split("")
        .map((item) => {
          return (translated += `${Data[item]}  `);
        });

      this.setState({
        result: translated,
      });
      // console.log(translated);
    };
    // this.newPage = (e) => {
    //   e.preventDefault();
    // };
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <form onChange={this.handleSubmit}>
          <textarea
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Type your text here:"
          />

          <textarea value={this.state.result} />
        </form>
   
  
      </React.Fragment>
    );
  }
}
