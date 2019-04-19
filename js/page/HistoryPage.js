
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import {
    createAppContainer,
    createMaterialTopTabNavigator
} from 'react-navigation'
import NavigationUtils from '../navigator/NavigationUtils'

type Props = {}
export default class HistoryPage extends Component<Props> {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
        
    }
    _renderTopTab() {
    
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
            HistoryTab1: {
                screen: HistoryTab,
                navigationOptions: {
                    title: '今天'
                }
            },
            HistoryTab2: {
                screen: HistoryTab,
                navigationOptions: {
                    title: '昨天'
                }
            },
            HistoryTab3: {
                screen: HistoryTab,
                navigationOptions: {
                    title: '前天'
                }
            },
        }))
        
        return TabNavigator
    }
    
    render() {
        NavigationUtils.navigation = this.props.navigation
        const TabNavigator = this._renderTopTab()
        return (
            <View style={{ flex: 1, marginTop: 30}}>
                <TabNavigator/>
            </View>
        )
    }
}

class HistoryTab extends Component<Props> {
    
    render() {
        const { tabLabel } = this.props
        NavigationUtils.navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{ tabLabel }</Text>
                <Text onPress={() => {
                    NavigationUtils.goPage('DetailPage', {
                        navigation: this.props.navigation
                    })
                }}>跳转到详情页</Text>
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
