import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserAvatar, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
   componentDidMount() {
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
   setAuthUserAvatar
})(HeaderContainer)