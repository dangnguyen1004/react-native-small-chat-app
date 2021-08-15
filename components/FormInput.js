import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../config/colors'

export default function FormInput({value, onChange}) {
    return (
        <TextInput style={styles.input} value={value} onChangeText={text => onChange(text)} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
    }
})
