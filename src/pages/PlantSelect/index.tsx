import React, { useEffect, useState } from 'react';
import {
	PlantContainer,
	PageTitle,
	TitleFirst,
	TitleSecond,
	EnviromentBtn
} from './styles';
import { StyleSheet, FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { EnviromentButton } from '../../components/EnviromentButton';

import api from '../../services/api';

interface EnviromentProps{
	key: string;
	title: string;
}

export function PlantSelect() {
	// Armazenar dados dos Ambientes (Enviroments)
	const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);

	// Carregamento da API FAKE (server.json)
	useEffect(() => {
		async function fetchEnviroment() {
			const { data } = await api.get('plants_environments');
			setEnviroments([
				{
					key: 'all',
					title: 'Todos',
				},
				...data
			]);
		}

		fetchEnviroment();
	}, [])

	return (
		<PlantContainer>

			<Header />

			<PageTitle>
				<TitleFirst>Em qual ambiente você</TitleFirst>
				<TitleSecond>deseja colocar sua planta?</TitleSecond>
			</PageTitle>

			<EnviromentBtn>
				<FlatList
					// keyExtractor={item => String(item.id)}
					data={enviroments}
					renderItem={ (item) => (
						<EnviromentButton
						 	title={item.title}
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.enviromentList}
				/>
			</EnviromentBtn>

		</PlantContainer>
	)
}

const styles = StyleSheet.create({
	enviromentList: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
})