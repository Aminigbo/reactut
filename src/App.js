import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Message from "./components/message";
import Counter from './components/counter'
import Parent from './components/parent';
import List from './components/list';
import Css from './components/css';
import Forms from './components/Forms';
import ButtonCounter from './components/ButtonCounter';
function App() {
  return (
    <div className="App">
       <Header userId='101' title="Unbox" > 
        <span>We will never let you down</span>
      </Header> 

       <Message /> 

       <Counter /> 
      
       <Parent /> 

       <List  /> 

       <Css color= "green" /> 

       <Forms /> 

      <ButtonCounter />
    </div>
  );
}

export default App;
