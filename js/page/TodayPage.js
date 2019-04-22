
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import actions from '../actions/index'

type Props = {}
class TodayPage extends Component<Props> {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
    }
    
    componentDidMount() {
        const { getToday } = this.props
        getToday()
    }
    
    render() {
        const haha = this.props
        console.log('haha', haha)
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>TodayPage</Text>
            </View>
        )
    }
}

const mapStatetoProps = state => ({
    today: state.today
})

const mapDispatchtoProps = dispatch => ({
    getToday: () => dispatch(actions.getTodayData())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(TodayPage)
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
