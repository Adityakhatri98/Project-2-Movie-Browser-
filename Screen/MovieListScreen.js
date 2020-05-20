import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlightBase, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Row from '../movieRow'


export default class MovieListScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Movie List',
        headerTintColor: '#a41034'
    }

    state = {
        list: null,
        movieName: '',
        resultList: false,
    }

    fetchMovie = async () => {
        
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4eec1be7&s=${this.state.movieName}`).then(response => response.json()).then(result => {
            this.setState({ resultList: result.Search })

        })
    }

    handleMovieName = (movieName) => {
        this.setState({ movieName }, this.fetchMovie)
    }


    details = () => {
        this.props.navigation.navigate('MovieDetail')
    }
    load = () => {
        this.props.navigation.navigate('MovieDetail')
    }

    
    renderItem = ({ item }) => <Row {...item} onMovieDetails={this.movieDetails} />
    
    movieDetails = (id,Title)=>{
        this.props.navigation.navigate('MovieDetail',{id:id,Title:Title})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.movieName}
                    onChangeText={this.handleMovieName}
                    placeholder="Enter Movie Name"
                />
                {this.state.resultList ?
                    <FlatList
                        data={this.state.resultList}
                        renderItem={this.renderItem}
                    />
                    : 
                    <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                    <Text style={{color:'red',fontSize:34 }} >Not found</Text>
                    </View>
                }
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
});
