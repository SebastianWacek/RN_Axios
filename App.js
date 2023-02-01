import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import axios from 'axios';

let url = 'https://api.chucknorris.io/jokes/random'

export default function App() {
    const[data, setData] = useState('');
    const [disable, setDisable] = useState(false);

    useEffect(() => {

        getJoke()

    }, [])

    const getJoke = () => {
	setDisable(true);
        setTimeout( () => {
            axios.get(url)
                .then(function (response) {
                    setData(response.data.value)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    setDisable(false);
                })
        }, 200)
    }


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginBottom: 50}}>{data}</Text>
            <Button title="Get Joke" onPress={getJoke} disabled={disable} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
