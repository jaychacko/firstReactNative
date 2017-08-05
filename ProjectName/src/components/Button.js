import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    const { buttonStyle, textStyles } = styles;
    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyles}>
                Click Button
        </Text>
        </TouchableOpacity>
    );
};


const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 1
    },
    textStyles: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};


export default Button;
