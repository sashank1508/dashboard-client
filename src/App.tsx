import "./App.scss";
import { Dashboard } from "./features/Dashboard";
import UserImage from "../src/user.png"

function App() {
  return (
    <div className="App">
      <header className="App-header"><strong style={{fontSize: '25px'}}>FastAPI Dashboard and Metrics</strong></header>
      <img
        className="nav__avatar"
        src={UserImage}
        alt="Avatar"
      />
      <Dashboard />
      
    </div>
  );
}

export default App;




