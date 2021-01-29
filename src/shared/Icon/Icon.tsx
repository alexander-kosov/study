import React from 'react';
import styles from './icon.less';
import {BlockIcon, WarningIcon, CommentIcon, ShareIcon, SaveIcon} from '../Icons';
import * as Icons from '../Icons';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

type TIconName = 'block'|'comment'|'menu'|'save'|'share'|'warning';

interface IIcon {
	name: TIconName;
	size?: TSizes;
}

export default function Icon ({name, size}:IIcon){

	switch (name) {
		case 'comment':
			return <CommentIcon />
		break;
		case 'block':
			return <BlockIcon/>
		break;
		default:
			return <React.Fragment></React.Fragment>
	}
}
