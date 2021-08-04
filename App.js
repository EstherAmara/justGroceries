import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './app/screens/GetStarted';

export default function App() {
	return (
		<View style={styles.container}>
			<GetStarted></GetStarted>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});
