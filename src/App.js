import './App.css';

import Navbar from './components/navbar/Navbar';
import Contacts from './components/contact/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from './components/context';


function App() {
 
  let name = "Mohamed";
  return (
    <Provider>
    <div className="App">
    <Navbar title="Contacts" />
    <Contacts />

    <br />  
    </div>
    </Provider>
  );
}



export default App;
