import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';
import { EnviromentText } from './styles';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
	title: string;
	active?: boolean;
}

export function EnviromentButton({
	title, 
	active = false,
	...rest
} : EnviromentButtonProps) {
	return (
		<RectButton
			style={[
				styles.buttonDefault,
				active && styles.buttonActive
			]}
			{...rest}
		>
			<EnviromentText
				style={[
					styles.textDefault,
					active && styles.textActive
				]}
			>
				{ title }
			</EnviromentText>
		</RectButton>
	)
}

const styles = StyleSheet.create({
	buttonDefault: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 'auto',
		height: 35,
		marginRight: 10,
		paddingHorizontal: 18,
		borderRadius: 40,
		backgroundColor: colors.green_button,
	},
	buttonActive: {
		backgroundColor: colors.green_button_active,
	},
	textDefault: {
		fontSize: 12,
		fontWeight: '600',
		fontFamily: fonts.text,
		color: colors.green_font,
	},
	textActive: {
		fontSize: 12,
		fontWeight: '600',
		fontFamily: fonts.text,
		color: colors.green_font_active,
	},
})