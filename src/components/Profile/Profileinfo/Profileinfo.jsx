import s from './Profileinfo.module.css'

function Profile() {
   return (
      <div>
         <div className={s.profile_image}>
         </div>
         <div className={s.profileInfoContent}>
            <div className={s.avatar}></div>
            <div className={s.description}>
               <h4>Description: </h4>
               <p>Name: Dmitriy</p>
               <p>Age: 25 yo</p>
               <p>Profession: front-end developer</p>
               <p>Stack: React, Vue, Node</p>
            </div>
         </div>
      </div>
   )
}

export default Profile;