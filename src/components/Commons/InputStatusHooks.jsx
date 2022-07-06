import {useEffect, useState} from 'react';
import s from './InputStatus.module.css';

function InputStatusHooks(props) {
	useEffect(() => {
		if (props.status !== status) {
			setStatus(props.status)
		}
	}, [props.status])
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);
	function activateEditMode() {
		setEditMode(true);
	}
	function deactivateEditMode() {
		setEditMode(false);
		props.updateStatus(status);
	}
	function onChangeInput(event) {
		setStatus(event.target.value);
	}

	return (
		<>
			{editMode ? (
				<div>
					<input
						type='text'
						className={s.input}
						onBlur={deactivateEditMode}
						autoFocus={true}
						value={status}
						onChange={onChangeInput}
					/>
				</div>
			) : (
				<div>
					<span onDoubleClick={activateEditMode}>{status}</span>
				</div>
			)}
		</>
	);
}

export default InputStatusHooks;
