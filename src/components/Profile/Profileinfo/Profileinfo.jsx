import s from './Profileinfo.module.css';
import background from '../../../assets/Landscape-Color.jpg';
import avatar from '../../../assets/1600495976_1600495958.png';
import InputStatus from '../../Commons/InputStatusHooks';
import InputFile from "../../Commons/InputFile/InputFile";

function Profileinfo(props) {
	return (
		<div>
			<div className={s.profile_image}>
				<img src={background} alt='' />
			</div>
			<div className={s.profileInfoContent}>
				<div>
					<div className={s.avatar__wrapper}>
						<InputFile updateAvatar={props.updateAvatar}/>
						<img className={s.avatar} src={props.profile.photos.large || avatar} alt='' />
					</div>
					<InputStatus status={props.profileStatus || 'Status null'} updateStatus={props.updateStatus} />
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
	);
}

export default Profileinfo;
