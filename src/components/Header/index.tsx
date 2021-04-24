import React from 'react';
import { 
	HeaderContainer, 
	HeaderContent,
	Span,
	Name
} from './styles';
import { StyleSheet, Image } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';

import userImg from '../../assets/user-profile.png';

export function Header() {
	return (
		<HeaderContainer>
			<LinearGradient
				colors={[
					'rgba(67, 132, 80, 1)', // 438450
					'rgba(75, 149, 90, 1)', // 4B955A
					'rgba(84, 166, 100, 1)', // 54A664
					'rgba(94, 187, 113, 1)', // 5EBB71
				]}
				style={styles.headerGradient}
			>
				<HeaderContent style={{ marginTop: getStatusBarHeight() }}>
					<Span>Seja bem-vindo...</Span>
					<Name>José Thiago</Name>
					<Image 
						source={userImg}
						style={styles.userImg}
					/>
				</HeaderContent>
			</LinearGradient>
		</HeaderContainer>
	)
}

const styles = StyleSheet.create({
	headerGradient: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		width: '100%',
		height: 'auto',
		paddingTop: 25,
		paddingBottom: 30,
		paddingHorizontal: 25,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
	},
	userImg: {
		position: 'absolute',
		top: 0,
		right: 0,
		width: 55,
		height: 55,
		borderRadius: 60,
		borderColor: 'rgba(152, 201, 162, 1)',
		borderWidth: 2,
	},
})