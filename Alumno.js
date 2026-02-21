import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function Alumno(props) {

    const [mostrarMatricula, setMostrarMatricula] = useState(false);

    const toggleMatricula = () => {
        setMostrarMatricula(!mostrarMatricula);
    };

    return (
        <View style={styles.contenedor}>
            <Text style={styles.nombre}>{props.nombre}</Text>

            <Button
                title="Matrícula"
                color="#c1121f"
                onPress={toggleMatricula}
            />

            {mostrarMatricula && (
                <Text style={styles.matricula}>
                    {props.matricula}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        padding: 20,
        backgroundColor: '#f2f2f2',
        margin: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10
    },
    matricula: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10
    }
});