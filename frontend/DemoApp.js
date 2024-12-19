import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const App = () => {
    const [imageUri, setImageUri] = useState(null);
    const [response, setResponse] = useState(null);

    const mockUploadImage = () => {
        // Simulate picking an image and AI prediction
        setImageUri('https://via.placeholder.com/200'); // Placeholder image
        setResponse('Predicted: Object Detected!'); // Mock AI response
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cloud + AI + AR Demo</Text>
            
            {/* Mock Image Picker */}
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            <Button title="Pick an Image" onPress={mockUploadImage} />

            {/* Mock AI Response */}
            {response && <Text style={styles.response}>{response}</Text>}
            
            {/* Mock AR Overlay */}
            {response && (
                <View style={styles.overlay}>
                    <Text style={styles.overlayText}>AR Overlay: Object Positioned</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    image: { width: 200, height: 200, margin: 10 },
    response: { fontSize: 18, marginTop: 20, color: '#28a745' },
    overlay: { marginTop: 30, padding: 20, borderWidth: 2, borderColor: '#007bff', borderRadius: 10 },
    overlayText: { fontSize: 16, color: '#007bff' },
});

export default App;
