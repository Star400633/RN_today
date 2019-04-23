/**
 * 主页面
 */
import React, { Component } from 'react'
import { createAppContainer, createBottomTabNavigator } from "react-navigation"
import { BottomTabBar } from "react-navigation-tabs"
import TabsCenter from "../navigator/TabCenter"

type Props = {}
export default class HomePage extends Component<Props> {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
    }
    
    _tabsNavigator() {
        if (this.Tabs) {
            return this.Tabs
        }
        const { TodayPage, HistoryPage, AboutPage } = TabsCenter
        const tabs = { TodayPage, HistoryPage, AboutPage }
        
        return this.Tabs = createAppContainer(createBottomTabNavigator(tabs, {
            tabBarComponent: props => {
                return <TabBarComponent theme={this.props.theme} {...props}/>
            }
        }))
    }
    
    render() {
        const Tabs = this._tabsNavigator()
        
        return (
            <Tabs />
        )
    }
}

class TabBarComponent extends React.Component<Props> {
    constructor(props) {
        super(props)
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime(),
        }
    }
    
    render() {
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.theme.tintColor || this.props.activeTintColor}
        />
    }
}
