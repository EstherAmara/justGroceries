import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import colours from '../config/colours';
import Screen from '../components/Screen';
import CustomButton from '../components/CustomButton';

function GetStarted(props) {
    return (
        <Screen style={{ backgroundColor: colours.cyan, flex: 1, width: '100%', height: '100%' }}>
            <View style={tw`items-center mt-10`}> 
                <Text style={tw`font-bold text-2xl italic text-gray-200`}> JustGroceries </Text>
            </View>
            <View style={tw`items-center h-96`}>
                <Image
                    source={require('../assets/frontimage.png')}
                    style={{ width: '80%', height: '100%', resizeMode: 'contain'}}
                />
            </View>
            <View>
                <Text> Your one-stop source of everything grocery related!</Text>
                <Text> Search through to get everything you need </Text>
                <CustomButton
                    title='Get Started'
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default GetStarted;