import style from './InputFile.module.css'

function InputFile(props) {
   return (
      <label className={style.wrapper}>
         <span>Выбрать файл</span>
         <input type="file" onChange={(event) => props.updateAvatar(event.target.files[0])}/>
      </label>
)
}

export default InputFile