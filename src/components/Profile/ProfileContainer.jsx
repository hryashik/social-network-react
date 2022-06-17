import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, setDefaultState} from "../../redux/profile-reducer";
import Preloader from "../Commons/Preloader";
import {
   useLocation,
   useNavigate,
   useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.router.params.userId
      setTimeout(() => (
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => this.props.setUserProfile(response.data))
      ), 1500)
      console.log('Did mount profile-container')
   }
   componentWillUnmount() {
      this.props.setDefaultState()
   }
   render() {
      if (!this.props.profile) {
         return (<div style={{position: 'absolute', left: '50%'}}><Preloader/></div>)
      }
      return (
         <Profile {...this.props}/>
      )
   }
}

//Оборачиваю в другую функцию, так как в классовой компоненте нельзя использовать хуки
function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }

   return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile, setDefaultState})(withRouter(ProfileContainer));