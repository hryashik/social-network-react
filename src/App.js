import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
   return (
      <div>
         <div className="container">
            <Header/>
         </div>
         <div className="app-wrapper">
            <Navbar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/profile'
                         element={<Profile store={props.store}/>}/>
                  <Route path='/dialogs/*'
                         element={<DialogsContainer store={props.store}/>}/>
                  <Route path='/News' element={<News/>}/>
                  <Route path='/Music' element={<Music/>}/>
                  <Route path='/Settings' element={<Settings/>}/>
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
