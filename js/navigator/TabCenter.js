// 路由中心
import React from "react"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import TodayPage from "../page/TodayPage"
import HistoryPage from "../page/HistoryPage"
import AboutPage from "../page/AboutPage"

const TabsCenter =  {
    TodayPage: {
        screen: TodayPage,
        navigationOptions: {
            tabBarLabel: '今日',
            tabBarIcon: ({ focused, tintColor }) => (
                <Feather name={'calendar'} size={20} style={{color: tintColor}}></Feather>
            ),
        }
    },
    HistoryPage: {
        screen: HistoryPage,
        navigationOptions: {
            tabBarLabel: '那年',
            tabBarIcon: ({ focused, tintColor }) => (
                <Feather name={'calendar'} size={20} style={{color: tintColor}}></Feather>
            ),
        }
    },
    AboutPage: {
        screen: AboutPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ focused, tintColor }) => (
                <Ionicons name={'md-person'} size={20} style={{color: tintColor}}></Ionicons>
            ),
        }
    },
}

export default TabsCenter
