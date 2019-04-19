/**
 * js入口
 */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AppNavigator from './navigator/AppNavigators'

type Props = {}
export default class App extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <AppNavigator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

