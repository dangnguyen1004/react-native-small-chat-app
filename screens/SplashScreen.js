import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from '../components/AppButton';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Icon name='money' size={70} color="#333" />
            <Text style={styles.text}>Welcome to MONO</Text>
            <AppButton></AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        marginTop: 20,
    }
})
