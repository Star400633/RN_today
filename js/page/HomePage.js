/**
 * 主页面
 */
import React, { Component } from 'react'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'
import NavigationUtils from "../navigator/NavigationUtils"

type Props = {}
export default class HomePage extends Component<Props> {
    constructor(props) {
        super(props)
    }
    render() {
        NavigationUtils.navigation = this.props.navigation
        return (
            <DynamicTabNavigator/>
        )
    }
}
