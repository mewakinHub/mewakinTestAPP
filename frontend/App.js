import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const App = () => {
    const [imageUri, setImageUri] = useState(null);
    const [response, setResponse] = useState(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibrary();
        if (!result.didCancel && result.assets) {
            const image = result.assets[0];
            setImageUri(image.uri);
            uploadImage(image);
        }
    };

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append('file', {
            uri: image.uri,
            type: image.type,
            name: image.fileName
        });

        try {
            const res = await axios.post('http://<YOUR_BACKEND_URL>/predict', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setResponse(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cloud + AI + AR MVP</Text>
            <Button title="Pick an Image" onPress={pickImage} />
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            {response && <Text style={styles.response}>Prediction: {response.prediction}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    image: { width: 200, height: 200, margin: 10 },
    response: { fontSize: 16, marginTop: 20 },
});

export default App;
