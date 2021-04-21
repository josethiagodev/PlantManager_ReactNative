import React, { useState } from 'react';
import { 
	StyleSheet, 
	SafeAreaView, 
	View, 
	Text, 
	TextInput, 
	KeyboardAvoidingView, 
	Platform,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ButtonDefault } from '../components/ButtonDefault';

export function UserIdentification() {
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [nameUser, setINameUser] = useState<string>();

	function handleInputBlur() {
		setIsFocused(false);
		setIsFilled(!!nameUser);
	}

	function handleInputFocus() {
		setIsFocused(false);
	}

	function handleInputChange(value: string) {
		setIsFilled(!!value);
		setINameUser(value);
	}

	const navigation = useNavigation();

	function handleConfirmed() {
		navigation.navigate('ConfirmedRegistration');
	}

	return (
		<SafeAreaView style={styles.pageContainer}>
			<KeyboardAvoidingView 
				style={styles.pageContainer}
				behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.pageContent}>

						<View style={styles.pageForm}>
							<View style={styles.headerForm}>
								<Text style={styles.pageTitle}>
									Qual é o seu nome?
								</Text>
								<TextInput
									style={[
										styles.inputForm,
										(isFocused || isFilled) && 
										{ borderColor: colors.green, color: colors.green }
									]}
									placeholder="Digite seu nome aqui..."
									onBlur={handleInputBlur}
									onFocus={handleInputFocus}
									onChangeText={handleInputChange}
								/>
							</View>
							<View style={styles.footerForm}>
								<ButtonDefault 
									title="Continuar"
									onPress={handleConfirmed}
								/>
							</View>
						</View>

					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
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
		backgroundColor: colors.background_green,
	},
	pageForm: {
		width: '75%',
		height: 'auto',
	},
	headerForm: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 'auto',
	},
	pageTitle: {
		width: '100%',
		fontSize: 24,
		textAlign: 'center',
		color: colors.heading,
		fontFamily: fonts.heading,
	},
	inputForm: {
		width: '100%',
		marginTop: 45,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderColor: colors.body_light,
		color: colors.body_light,
		fontSize: 15,
		fontFamily: fonts.text,
		textAlign: 'center',
	},
	footerForm: {
		width: '100%',
		height: 'auto',
		marginTop: 45,
		paddingHorizontal: 15,
	},
})