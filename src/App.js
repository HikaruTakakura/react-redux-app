import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = "Hi, React!";
    const dom = <h1 className="foo">{greeting}</h1>;
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am changed.")}} />
      </React.Fragment>
    );
  }
}

export default App;

// jsx
// トランスパイル jsx -> js
// これでも動くが、可読性が低い
// class App extends Component {
//   render() {
//     return (
//       React.createElement("div",null,"Hello World!!")
//     );
//   }
// }

// returnで返すタグは一つでなければならない。>>全体をdivで包むとok。
// 必要のないdivタグを出力しないといけない？
// React.Fragmentタグで包めばOK！

