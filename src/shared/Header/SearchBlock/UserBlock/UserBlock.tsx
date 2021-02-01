import React from 'react';
import styles from './userblock.less';
import Break from '../../../Break';
import Text, {EColor} from '../../../Text';
import {AnonIcon} from '../../../Icons'; 
interface IUserBlockProps {
	avatarSrc?:string;
	username?:string;
}

export default function UserBlock ({avatarSrc, username}: IUserBlockProps){
	return (
		<a className={styles.userBox}>
			<div className={styles.avatarBox}>
				{avatarSrc ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
						   : <AnonIcon />
				}
			</div>
			
			<div className={styles.username}>
				<Break size={12} />
				<Text size={20} color={username? EColor.black: EColor.grey99}>
					{username || 'Аноним'}
				</Text>		
			</div>
		</a>
	)
}
