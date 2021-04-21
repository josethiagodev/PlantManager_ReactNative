import React from 'react';
import { 
	SafeAreaView, 
	View, 
	Text, 
	Image, 
	StyleSheet, 
	TouchableOpacity, 
	Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
	const navigation = useNavigation();

	function handleProceed() {
		navigation.navigate('UserIdentification');
	}

	return (
		<SafeAreaView style={styles.pageContainer}>

			<View style={styles.pageContent}>
				<Text style={styles.titlePage}>
					Gerencie suas plantas{'\n'}de forma simples e{'\n'}descomplicada!
				</Text>

				<Image
					source={wateringImg}
					style={styles.wateringImg}
					resizeMode="contain"
				/>

				<Text style={styles.textPage}>
					Ajudamos você a regar e cuidar de{'\n'}
					suas plantas sempre que precisar...
				</Text>

				<TouchableOpacity 
					style={styles.btnContinue}
					activeOpacity={0.7}
					onPress={handleProceed}
				>
					<Text style={styles.textContinue}>Prosseguir...</Text>
				</TouchableOpacity>
			</View>

		</SafeAreaView>
	);
 }

 const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
	},
	pageContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: colors.background_green,
		paddingVertical: 35,
	},
	titlePage: {
		width: '100%',
		fontSize: 28,
		textAlign: 'center',
		color: colors.heading,
		fontFamily: fonts.heading,
		lineHeight: 33,
	},
	wateringImg: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: Dimensions.get('window').width * 0.7,
	},
	textPage: {
		width: '100%',
		fontSize: 14.5,
		textAlign: 'center',
		color: colors.heading,
		fontFamily: fonts.text,
		lineHeight: 23,
	},
	btnContinue: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '75%',
		height: 50,
		borderRadius: 50,
		backgroundColor: colors.green_dark,
	},
	textContinue: {
		fontSize: 15,
		textAlign: 'center',
		color: colors.green_light_02,
		fontFamily: fonts.text,
		fontWeight: '600',
	},
 })