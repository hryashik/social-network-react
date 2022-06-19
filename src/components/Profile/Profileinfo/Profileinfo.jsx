import s from './Profileinfo.module.css'
import background from '../../../assets/Landscape-Color.jpg'
import avatar from '../../../assets/1600495976_1600495958.png'

function Profileinfo(props) {
   return (
      <div>
         <div className={s.profile_image}>
            <img src={background} alt=""/>
         </div>
         <div className={s.profileInfoContent}>
            <div>
               <img className={s.avatar} src={props.profile.photos.large || avatar} alt=""/>
            </div>
            <div className={s.description}>
               <h4>Description: </h4>
               <p className={s.name}>Name: {props.profile.fullName}</p>
               <p>Age: 25 yo</p>
               <p>Profession: front-end developer</p>
               <p>Stack: React, Vue, Node</p>
            </div>
         </div>
      </div>
   )
}

export default Profileinfo;
/*

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
</div>*/
