import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

function CustomButton({ textStyle, disabled=false, title, onPress=() => console.log('hello button'), style }) {
    return (
        <TouchableHighlight style={[style]} onPress={onPress} disabled={disabled}>
            <Text style={[textStyle]}> {title} </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({

});

export default CustomButton;