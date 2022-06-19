import {addPost, changeTextArea} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import avatar from '../../../assets/1600495976_1600495958.png'

const MyPostsContainer = connect(mapStateToProps, {addPost, changeTextArea})(MyPosts)

function mapStateToProps(state) {
   return {
      textAreaValue: state.profilePage.textAreaInput.value,
      postsArray: state.profilePage.posts,
      profilePhoto: state.profilePage.profile.photos.large,
      get getProfilePhoto() {
         if (!this.profilePhoto) {
            return avatar
         } else return this.profilePhoto
      }
   }
}

export default MyPostsContainer;
