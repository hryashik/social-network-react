import {addPostActionCreator, changeTextAreaActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

function mapStateToProps(state) {
   return {
      textAreaValue: state.profilePage.textAreaInput.value,
      postsArray: state.profilePage.posts
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addPost() {
         dispatch(addPostActionCreator())
      },
      changeTextArea(text) {
         dispatch(changeTextAreaActionCreator(text))
      }
   }
}

export default MyPostsContainer;
