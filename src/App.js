import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h2>Title</h2>
      <Todo text='Learn React'/>
      <Todo text='Master React' />
      <Todo text='Explore the full React Course' />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
