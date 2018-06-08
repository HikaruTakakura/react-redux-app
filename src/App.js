import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h1 className="App">
        Hello World!
      </h1>
    );
  }
}

// jsx
// トランスパイル jsx -> js
// これでも動くが可読性が低い
// class App extends Component {
//   render() {
//     return (
//       React.createElement("div",null,"Hello World!!")
//     );
//   }
// }

export default App;
