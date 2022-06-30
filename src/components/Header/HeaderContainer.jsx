import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, setAuthUserAvatar, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
   componentDidMount() {
      console.log('Header Mounted')
      /*if (!this.props.isAuth) this.props.authMe()*/
   }
   render() {

      return (
         <Header isAuth={this.props.isAuth}
                 userLogin={this.props.login}
                 avatar={this.props.avatar}
         />
      )
   }
}

function mapStateToProps(state) {
   return {
      ...state.auth,
   }
}

export default connect(mapStateToProps, {
   setAuthUserData,
   setAuthUserAvatar,
   authMe
})(HeaderContainer)