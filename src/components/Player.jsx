import React, { useState } from 'react';

const Player = ({ name, symbol, isActive, onChangeName }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [userName, setUserName] = useState(name);

	function handleEditClick() {
		setIsEditing((prev) => !prev);

		if (isEditing) {
			onChangeName(symbol, userName);
		}
	}

	let playerName = <span className='player-name'>{userName}</span>;

	if (isEditing) {
		playerName = (
			<input
				type='text'
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
				required
			/>
		);
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{playerName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
};

export default Player;
