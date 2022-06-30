import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

function mapStateToProps(state) {
   return {
      isAuth: state.auth.isAuth
   }
}

export const checkAuth = (Component) => {
   class RedirectComponent extends React.Component {
      render() {
         if (!this.props.isAuth) return <Navigate to={'/login'}/>
         return <Component {...this.props}/>
      }
   }
   let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
   return ConnectedRedirectComponent
}