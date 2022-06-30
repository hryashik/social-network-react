import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {authMe} from "./redux/auth-reducer";
import {connect} from "react-redux";
import LoginPage from "./components/Login/LoginPage";
import React, {useEffect} from "react";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Commons/Preloader";

function App(props) {
   useEffect(() => {
      props.initializeApp()
   }, [])
   if (!props.initialized) return <Preloader/>
   return (
      <div>
         <div className="container">
            <HeaderContainer/>
         </div>
         <div className="app-wrapper">
            <Navbar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/login' element={<LoginPage/>}/>
                  <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                  <Route path='/dialogs/*' element={<DialogsContainer/>}/>}/>
                  <Route path='/News' element={<News/>}/>
                  <Route path='/Music' element={<Music/>}/>
                  <Route path='/Users' element={<UsersContainer/>}/>
                  <Route path='/Settings' element={<Settings/>}/>
               </Routes>
            </div>
         </div>
      </div>
   );
}

function mapStateToProps(state) {
   return {
      initialized: state.app.initialized,
      isAuth: state.auth.isAuth,
      UserId: state.auth.id,
      profile: state.profilePage
   }
}

export default connect(mapStateToProps, {authMe, initializeApp})(App);
