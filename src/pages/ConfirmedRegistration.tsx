import React from 'react';
import {
	StyleSheet, 
	SafeAreaView, 
	View, 
	Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ButtonDefault } from '../components/ButtonDefault';
import { Entypo } from '@expo/vector-icons'; 

export function ConfirmedRegistration() {
	const navigation = useNavigation();

	function handleConfirmed() {
		navigation.navigate('PlantSelect');
	}

	return (
		<SafeAreaView style={styles.pageContainer}>
			<View style={styles.pageContent}>
				<Entypo name="emoji-happy" style={styles.emoji} />
				<Text style={styles.pageTitle}>
					Cadastro concluído{'\n'}com sucesso
				</Text>
				<Text style={styles.pageText}>
					Agora você pode cuidar das{'\n'}
					plantas sempre que precisar.{'\n'}
					Clique abaixo para usar nosso app.
				</Text>
				<View style={styles.footerForm}>
					<ButtonDefault 
						title="Começar..."
						onPress={handleConfirmed}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
	},
	pageContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 30,
		backgroundColor: colors.background_green,
	},
	emoji: {
		fontSize: 80,
		color: colors.green_dark,
		marginBottom: 25,
	},
	pageTitle: {
		width: '100%',
		fontSize: 26,
		textAlign: 'center',
		color: colors.green_dark,
		fontFamily: fonts.heading,
		lineHeight: 30,
	},
	pageText: {
		width: '100%',
		fontSize: 15,
		textAlign: 'center',
		color: colors.heading,
		fontFamily: fonts.text,
		lineHeight: 24,
		marginTop: 25,
		marginBottom: 30,
	},
	footerForm: {
		width: '70%',
		height: 'auto',
		paddingHorizontal: 0,
	},
})