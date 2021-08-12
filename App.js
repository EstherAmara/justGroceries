import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GetStarted from './app/screens/GetStarted';
import Register from './app/screens/Auth/Register';

export default function App() {
	return (
		<View style={styles.container}>
			<Register />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});
