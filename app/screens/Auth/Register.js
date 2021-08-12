import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { FontAwesome } from '@expo/vector-icons';

import colours from '../../config/colours';
import CustomButton from '../../components/CustomButton';
import Screen from '../../components/Screen';

function Register(props) {
    return (
        <ImageBackground
                source={require('../../assets/bkgrnd.png')}
                style={{ width: '100%', height: '100%', flex: 1, backgroundColor: colours.turquoise}}
                imageStyle={{ resizeMode: 'cover' }}
            >
            <Screen style={{ width: '100%', height: '100%' }}>
                <View style={tw`text-left mt-10`}> 
                    <FontAwesome
                        name='caret-left'
                        size={20}
                        color={colours.cyan}
                    />
                </View>
                <View style={tw`flex-row h-96 items-end justify-between px-5 `}>
                    <View style={{ width: '50%' }}>
                        <Text> Login </Text>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Image
                            source={require('../../assets/illustrations/blonde.png')}
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                        />
                    </View>
                </View>
                <View style={tw`px-5`}>
                    
                </View>
            </Screen>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default Register;