import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setDefaultState, updateStatus} from "../../redux/profile-reducer";
import Preloader from "../Commons/Preloader";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.router.params.userId
      this.props.getProfile(userId)

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
   profile: state.profilePage.profile,
   profileStatus: state.profilePage.profileStatus
})

export default compose(
   connect(mapStateToProps, {getProfile, setDefaultState, updateStatus}),
   withRouter,
   withAuthRedirect
)(ProfileContainer)