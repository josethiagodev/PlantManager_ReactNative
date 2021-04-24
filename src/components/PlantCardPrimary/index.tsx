import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { Product, Name } from './styles';

interface PlantsProps extends RectButtonProps {
	data: {
		name: string;
		photo: string;
	}
}

export function PlantCardPrimary({ data, ...rest }: PlantsProps) {
	return (
		<RectButton {...rest}
			style={styles.container}
		>
			<Product>
				<SvgFromUri uri={data.photo} width={70} height={70} />
				<Name>
					{ data.name }
				</Name>
			</Product>
		</RectButton>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 8,
	}
})