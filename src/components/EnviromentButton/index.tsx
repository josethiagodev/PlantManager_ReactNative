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
				styles.ButtonDefault,
				active && styles.ButtonActive
			]}
			{...rest}
		>
			<EnviromentText
				style={[
					styles.TextDefault,
					active && styles.TextActive
				]}
			>
				{ title }
			</EnviromentText>
		</RectButton>
	)
}

const styles = StyleSheet.create({
	ButtonDefault: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 'auto',
		height: 35,
		marginRight: 10,
		paddingHorizontal: 18,
		borderRadius: 40,
		backgroundColor: colors.green_button,
	},
	ButtonActive: {
		backgroundColor: colors.green_button_active,
	},
	TextDefault: {
		fontSize: 12,
		fontWeight: '600',
		fontFamily: fonts.text,
		color: colors.green_font,
	},
	TextActive: {
		fontSize: 12,
		fontWeight: '600',
		fontFamily: fonts.text,
		color: colors.green_font_active,
	},
})