import React from 'react';
import { 
	StyleSheet, 
	TouchableOpacity, 
	Text,
	TouchableOpacityProps
} from 'react-native';

import colors from '../styles/colors';

interface ButtonDefaultProps {
	title: string;
}

interface ButtonDefaultProps extends TouchableOpacityProps {
	title: string;
}

export function ButtonDefault({ title, ...rest }: ButtonDefaultProps) {
	return (
		<TouchableOpacity 
			style={styles.btnContinue}
			{...rest}
		>
			<Text style={styles.textContinue}>
				{ title }
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btnContinue: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 50,
		borderRadius: 50,
		backgroundColor: colors.green_dark,
	},
	textContinue: {
		fontSize: 15,
		fontWeight: '700',
		textAlign: 'center',
		color: colors.green_light_02,
	},
})