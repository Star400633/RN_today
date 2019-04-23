
import React from 'react'
import { FlatList, Text, View, StyleSheet, RefreshControl, } from 'react-native'
import { connect } from 'react-redux'
import actions from '../actions/index'

type Props = {}
class TodayPage extends React.PureComponent<Props> {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
    }
    
    componentDidMount() {
        const { getToday } = this.props
        getToday()
    }
    
    render() {
        const { today={} } = this.props
        const { list=[] } = today
        console.log('list', list)
        return (
            <View style={styles.container}>
                <FlatList data={list}
                          style={styles.welcome}
                          keyExtractor={item => item.id}
                          renderItem={({item, index}) => (<Text key={index} style={styles.item}>{ item.title }</Text>)}
                          refreshControl={<RefreshControl title='正在加载~' titleColor={'red'}/>}
                ></FlatList>
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
        marginTop: 40,
    },
    item: {
        width: '100%',
        height: 80,
        padding: 10,
    },
});
