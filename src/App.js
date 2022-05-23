import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


function App() {
   return (
      <div>
         <div className="container">
            <Header/>
         </div>
         <div className="app-wrapper">
            <Navbar/>
            <Profile/>
         </div>
      </div>
   );
}

export default App;
