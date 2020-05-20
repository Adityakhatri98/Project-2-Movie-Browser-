import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, FlatList } from 'react-native';
import Ratings from '../Rating'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 10,
        alignItems: 'stretch',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10,
    },

    italic: {
        fontStyle: 'italic',
        flex: 1,
        justifyContent: 'space-evenly',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    discriptionHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        flex: .5,
        alignSelf: 'flex-start'
    },
    Director: {
        fontWeight: 'bold',
        fontSize: 18,

    },

})


export default class MovieDetailScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Movie Detail List',
        headerTintColor: '#a41034'
    }
    state = {
        list: null,
        movieName: '',
        resultList: false,
    }
    componentDidMount() {
        this.fetchMovie()
    }
    fetchMovie = async (props) => {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4eec1be7&t=${this.props.navigation.getParam('Title')}`)
        const results = await response.json()
        this.setState({ resultList: results })

    }
    renderItem = ({ item }) => <Ratings {...item} />

    render() {

        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                <Image style={{ width: 400, height: 400, alignSelf:'center' }}
                    source={{ uri: this.state.resultList.Poster }} />
                {/* Title */}
                <View style={styles.row}>
                    <Text style={styles.title}>{this.state.resultList.Title}</Text>
                </View>
                {/* Released Date ,RunTime Rated */}
                <View style={styles.row}>
                    <Text >({this.state.resultList.Released})</Text>
                    <Text > {this.state.resultList.Runtime}, {this.state.resultList.Rated}</Text>
                </View >
                {/* Actors */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader} >Actors: </Text>
                    <Text style={{ flex: 1 }}>{this.state.resultList.Actors}</Text>
                </View>
                {/* Director */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader}>Director: </Text>
                    <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold' }}>
                        {this.state.resultList.Director}
                    </Text>
                </View >
                {/* Writer */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader}>Writers: </Text>
                    <Text style={{ flex: 1, fontSize: 18, }}>
                        {this.state.resultList.Writer}
                    </Text>
                </View >
                {/* Genre */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader} >Genre: </Text>
                    <Text style={{ flex: 1, }} >{this.state.resultList.Genre}</Text>
                </View >
                {/* Type */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader} >Type: </Text>
                    <Text style={{ flex: 1, }} >{this.state.resultList.Type}</Text>
                </View >
                {/* Plot */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader} >Plot: </Text>
                    <Text style={styles.italic}>{this.state.resultList.Plot}</Text>
                </View >
                {/* Ratings */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader} >Ratings: </Text>
                    <FlatList
                        style={{ flex: 1 }}
                        data={this.state.resultList.Ratings}
                        renderItem={this.renderItem}
                    />
                </View>
                {/* Metascore */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader} >Metascore: </Text>
                    <Text style={{ flex: 1, }} > {this.state.resultList.Metascore}</Text>
                </View >
                {/* Awards */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader} >Awards: </Text>
                    <Text style={{ flex: 1, }} > {this.state.resultList.Awards}</Text>
                </View >
                {/* Language */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader} >Language: </Text>
                    <Text style={{ flex: 1, }} > {this.state.resultList.Language}</Text>
                </View >
                {/* Country */}
                <View style={styles.row}>
                    <Text style={styles.discriptionHeader} >Country: </Text>
                    <Text style={{ flex: 1, }} > {this.state.resultList.Country}</Text>
                </View >
            </ScrollView>
        )

    }
}

