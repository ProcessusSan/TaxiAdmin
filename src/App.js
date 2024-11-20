import './App.css';
import Headadmin from './/components/headadmin/Headadmin.jsx'
// import Authorization from './/components/authorization/Authorization.jsx'
import ManageStock from './components/manageStock/ManageStock.jsx';
import Mainbuttons from './/components/mainbuttons/Mainbuttons.jsx';
import Referalkeys from './components/referalkeys/Referalkeys.jsx';
import Orders from './components/orders/Orders.jsx';
import Comunications from './components/comunications/Comunications.jsx';

function App() {
  return (
    <div className="App">
      <Headadmin/>
      <Mainbuttons/>
      {/* <Authorization/> */}
      {/* <ManageStock /> */}
      {/* <Referalkeys /> */}
      <Orders />
      {/* <Comunications /> */}
    </div>
  );
}

export default App;
