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
import {useEffect} from "react";
import axios from "axios";
import {setAuthUserAvatar, setAuthUserData} from "./redux/auth-reducer";
import {setUserProfile} from "./redux/profile-reducer";
import {connect} from "react-redux";
import avatar from "./assets/1600495976_1600495958.png";

function App(props) {
   useEffect(() => {
      if (!props.isAuth) {
         console.log('UseEffect App.js')
         axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
               if (response.data.resultCode === 0) {
                  props.setAuthUserData(response.data.data)
                  let userId = response.data.data.id
                  axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
                     .then(response2 => {
                        let url = response2.data.photos.large;
                        props.setAuthUserAvatar(url || avatar);
                        props.setUserProfile(response2.data)
                     })
               }
            })
      }
   })
   return (
      <div>
         <div className="container">
            <HeaderContainer/>
         </div>
         <div className="app-wrapper">
            <Navbar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/profile/:userId'
                         element={<ProfileContainer/>}/>
                  <Route path='/dialogs/*'
                         element={<DialogsContainer store={props.store}/>}/>
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
      isAuth: state.auth.isAuth,
      UserId: state.auth.id
   }
}
export default connect(mapStateToProps, {setAuthUserData, setAuthUserAvatar, setUserProfile})(App);
