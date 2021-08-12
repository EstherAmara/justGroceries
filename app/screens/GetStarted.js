import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import colours from '../config/colours';
import Screen from '../components/Screen';
import CustomButton from '../components/CustomButton';

function GetStarted(props) {
    return (
        <ImageBackground
                source={require('../assets/bkgrnd.png')}
                style={{ width: '100%', height: '100%', flex: 1, backgroundColor: colours.turquoise}}
                imageStyle={{ resizeMode: 'cover' }}
            >
            <Screen style={{ width: '100%', height: '100%' }}>
                <View style={tw`items-center mt-10`}> 
                    <Text style={{ ...tw`font-bold text-2xl italic text-white`, ...styles.textShadow}}> JustGroceries </Text>
                </View>
                <View style={tw`items-center h-96`}>
                    <Image
                        source={require('../assets/illustrations/frontimage.png')}
                        style={{ width: '80%', height: '100%', resizeMode: 'contain'}}
                    />
                </View>
                <View style={tw`px-5`}>
                    <Text style={{ ...tw`text-white text-center`, ...styles.textShadow }}> Your one-stop source of everything grocery related!</Text>
                    <Text style={{ ...tw`text-white text-center`, ...styles.textShadow }}> Search through to get everything you need </Text>
                    <CustomButton
                        title='Login'
                        style={[{ backgroundColor: colours.black}, tw`py-3 mt-10 rounded-md`]}
                        textStyle={[tw`text-center font-bold text-lg`, { color: colours.white }]}
                    />
                    <CustomButton
                        title='Register'
                        style={{ ...tw`py-3 mt-5 rounded-md`, backgroundColor: colours.aquamarine, borderColor: colours.black, borderWidth: 1.5 }}
                        textStyle={{ ...tw`text-center font-bold text-lg`, color: colours.black }}
                    />
                </View>
            </Screen>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    textShadow: {
        textShadowColor: 'rgba(128, 128, 128, 0.5)', 
        textShadowOffset: {width: -1, height: 1}, 
        textShadowRadius: 10
    }
});

export default GetStarted;