import React from 'react';
import { 
	HeaderContainer, 
	HeaderContent,
	Span,
	Name
} from './styles';
import { StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../../assets/user-profile.png';

export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent
				style={{ marginTop: getStatusBarHeight() }}
			>
				<Span>Seja bem-vindo,</Span>
				<Name>José Thiago</Name>
				<Image 
					source={userImg}
					style={styles.userImg}
				/>
			</HeaderContent>
		</HeaderContainer>
	)
}

const styles = StyleSheet.create({
	userImg: {
		position: 'absolute',
		top: 0,
		right: 0,
		width: 60,
		height: 60,
		borderRadius: 60,
	},
})