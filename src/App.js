import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { render } from 'react-dom';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

class App extends Component {
  render() {
  return(
    <div className="App">
      
      <FunctionClick />
      <ClassClick />
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is Children Prop</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Women"/>
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Women" />
      <Hello /> */}
    </div>
  );
}
}

export default App;
