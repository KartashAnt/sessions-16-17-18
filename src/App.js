import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponente from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Greeting name="Antón"></Greeting> */}
        {/* <GreetingF name="Antón"></GreetingF> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponente></MiComponente> */}
        {/* <Ejemplo4 name="Antón">
          <h3>Contenido de children</h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Antón"></GreetingStyled> */}
      {/* </header> */}
      {/* <Father></Father> */}
      {/* <OptionalRender></OptionalRender> */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
