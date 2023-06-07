import { View, Text, StyleSheet, Button } from 'react-native';
import { useEffect, useState } from 'react';

import axios from 'axios';

function HomeScreen({ navigation}) {
    /*
    const [animal, setAnimal] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getAllAnimaux')
            .then((response) => {
                if (response && response.data) {
                    setAnimal(response.data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    */

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="Go to details" onPress={() => navigation.navigate('Details')} />
            {/*animal.map((item) => (
                <View key={item._id}>
                    <Text>Nom: {item.nom}</Text>
                    <Text>Espece: {item.espece}</Text>
                    <Text>Age: {item.age}</Text>
                    <Text>Poids: {item.poids}</Text>
                    <Text>Couleur: {item.couleur}</Text>
                    <Text>Prix: {item.prix}</Text>
                    <Text>Caracteristiques: {item.caracteristiques.join(', ')}</Text>
                </View>
            ))*/}

        </View>
    );
}

const styles = StyleSheet.create({});

export default HomeScreen;
