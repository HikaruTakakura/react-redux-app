import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const greeting = "Hi, React!";
//     const dom = <h1 className="foo">{greeting}</h1>;
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">{greeting}</label>
//         <input type="text" onChange={() => {console.log("I am changed.")}} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  const cat = "Meow!!"
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 12 },
    { name: "Nanashi" }
  ]
  return(
    <React.Fragment>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </React.Fragment>
  )
}

const User= (props) => {
  return (
    <div>Hi, I am {props.name}, and {props.age} years old.</div>
  )
}

User.defaultProps = {
  age: 1
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

// トランスパイラーbabelがjsxをjsに
// webpackが依存関係をまとめる

// App:クラスコンポーネント
