import axios from 'axios';
import { useState, useEffect } from 'react';

function getAllAnimal() {
    const [animal, setAnimal] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const url = 'http://localhost:5000/getAllAnimaux';

    useEffect(() => {
        axios.get(url).then((response) => {
            setAnimal(response.data);
        }
        ).catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return { animal, error, loading }; // Retourne un objet avec les valeurs
}

export default getAllAnimal;
