/**
 * 初始化欢迎页面
 */
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}
export default class WelcomePage extends Component<Props> {
    componentDidMount() {
        this.timer = setTimeout(()=> {
            const { navigation } = this.props
            navigation.navigate('Main')
        }, 1000)
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }
    render() {
        if(1===4) {
            return true
        }
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome Page</Text>
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
