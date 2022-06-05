import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

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
                         element={<Profile profilePage={props.state.profilePage}
                                           dispatch={props.dispatch}/>}/>
                  <Route path='/dialogs/*'
                         element={<Dialogs messagePage={props.state.messagesPage}
                                           addMessage={props.addMessage}
                                           updateTextAreaStateDialogs={props.updateTextAreaStateDialogs}/>}/>
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
