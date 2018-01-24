import React, {Component} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    constructor (props) {
        super (props);
        this.state = { albums: [] };
    }

    componentWillMount () {
        axios.get ('https://rallycoding.herokuapp.com/api/music_albums')
        .then (res => res.data)
        .then (res => this.setState( { albums: res}))
        .catch (console.error)
    }

    render () {
        console.log(this.state);
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }
}

export default AlbumList;

