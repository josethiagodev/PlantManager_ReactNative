import React, { useEffect, useState } from 'react';
import {
	PlantContainer,
	PageTitle,
	TitleFirst,
	TitleSecond,
	EnviromentBtn,
	PlantListContent
} from './styles';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import api from '../../services/api';

import { Header } from '../../components/Header';
import { EnviromentButton } from '../../components/EnviromentButton';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Loading } from '../../components/Loading';
import colors from '../../styles/colors';
interface EnviromentProps {
	key: string;
	title: string;
}
interface PlantsProps {
	id: string;
	name: string;
	about: string;
	water_tips: string;
	photo: string;
	environments: [string];
	frequency: {
		times: number;
		repeat_every: String;
	}
}

export function PlantSelect() {
	// Armazenar dados dos Ambientes (EnviromentProps)
	const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
	// Armazenar dados dos Ambientes (PlantProps)
	const [plants, setPlants] = useState<PlantsProps[]>([]);
	// Filtragem das plantas
	const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
	// Ambiente selecionado pelo usuário (Active)
	const [environmentSelected, setEnvironmentSelected] = useState('all');

	// Page Loading Component
	const [loading, setLoading] = useState(true);

	// Paginação
	const [pagination, setPagination] = useState(1);
	// Carregando mais dados
	const [loadingMore, setLoadingMore] = useState(false);
	// Carregou todos os dados
	const [loadedAll, setLoadedAll] = useState(false);

	// Ambiente selecionado pelo usuário (Active)
	function handleEnvironmentSelected(environment: string) {
		setEnvironmentSelected(environment);

		// Verificação da filtragem das plantas
		if (environment === 'all')
		return setFilteredPlants(plants);

		const filtered = plants.filter(plant =>
			plant.environments.includes(environment)
		);

		setFilteredPlants(filtered);
	}

	async function fetchPlants() {
		// Consumindo dados da API
		const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${pagination}&_limit=8`);
		
		// Se os dados foram carregados, setar o Loading em 'true'
		if(!data)
			return setLoading(true);

		// Se a paginação foi maior que '1'...
		if(pagination > 1) {
			setPlants(oldValue => [...oldValue, ...data])
			setFilteredPlants(oldValue => [...oldValue, ...data])
		} else {
			setPlants(data);
			setFilteredPlants(data);
		}

		// Excluindo o Loading depois que carregar os dados
		setLoading(false);
		setLoadingMore(false);
	}

	// Ambiente selecionado pelo usuário (Active)
	function handleFetchMore(distance: number) {
		if(distance < 1)
			return;

		setLoadingMore(true);
		setPagination(oldValue => oldValue + 1);
		fetchPlants();
	}

	// Carregamento 'plants_environments' da API (server.json)
	useEffect(() => {
		async function fetchEnviroment() {
			// Consumindo dados da API
			const { data } = await api.get('plants_environments?_sort=title&=asc')
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

	// Carregamento 'plants' da API (server.json)
	useEffect(() => {
		fetchPlants();
	}, [])

	// Verificação do Loading se for verdadeiro
	if(loading) {
		return <Loading />
	}

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
					renderItem={ ({ item }) => (
						<EnviromentButton
						 	title={item.title}
							active={item.key === environmentSelected}
							onPress={ () => handleEnvironmentSelected(item.key) }
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.enviromentList}
				/>
			</EnviromentBtn>

			<PlantListContent>
				<FlatList
					data={filteredPlants}
					renderItem={ ({ item }) => (
						<PlantCardPrimary data={item} />
					)}
					showsVerticalScrollIndicator={false}
					numColumns={2}
					contentContainerStyle={styles.plantsList}
					onEndReachedThreshold={0.1}
					onEndReached={
						({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)
					}
					ListFooterComponent={
						loadingMore 
						? <ActivityIndicator color={colors.green} /> 
						: <></>
					}
				/>
			</PlantListContent>

		</PlantContainer>
	)
}

const styles = StyleSheet.create({
	enviromentList: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 20,
		marginBottom: 25,
	},
	plantsList: {
		justifyContent: 'center',
		alignItems: 'stretch',
		flexDirection: 'column',
		width: '100%',
	}
})