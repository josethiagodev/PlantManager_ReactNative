import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import { LoadingContainer } from './style';
import loadAnimation from '../../assets/load.json';

export function Loading() {
	return (
		<LoadingContainer>
			<LottieView
				source={loadAnimation}
				autoPlay 
				loop 
				style={styles.IconAnimated}
			/>
		</LoadingContainer>
	)
}

const styles = StyleSheet.create({
	IconAnimated: {
		width: 250,
		height: 'auto',
		backgroundColor: 'transparent',
	}
})