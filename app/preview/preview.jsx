import { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { previewStyles } from '../../styles/CaptureImage';

export default function Preview() {
    const router = useRouter();
    const params = useLocalSearchParams();

    // Parse the photos from the route params
    const capturedPhotos = params.photos ? JSON.parse(params.photos) : [];

    const retakePhotos = () => {
        // Navigate back to capture page and reset
        router.push('/captureImage/captureImage?reset=true');
    };

    const saveAndExit = () => {
        // Here you would typically save the photos to device storage or upload them
        Alert.alert(
            'Photos Saved!',
            'Your photo booth session has been saved successfully!',
            [
                {
                    text: 'OK',
                    onPress: () => router.push('/') // Go back to home
                }
            ]
        );
    };

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Photo Preview',
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text style={{ color: '#fff', fontSize: 16, marginLeft: 10 }}>Back</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
            <View style={previewStyles.container}>
                <Text style={previewStyles.title}>Your Photo Booth Session! 🎉</Text>

                <ScrollView contentContainerStyle={previewStyles.photoGrid}>
                    {capturedPhotos.map((photo, index) => (
                        <View key={index} style={previewStyles.photoContainer}>
                            <Image source={{ uri: photo.uri }} style={previewStyles.photo} />
                            <Text style={previewStyles.photoNumber}>{index + 1}</Text>
                        </View>
                    ))}
                </ScrollView>

                <View style={previewStyles.buttonContainer}>
                    <TouchableOpacity style={previewStyles.retakeButton} onPress={retakePhotos}>
                        <Text style={previewStyles.buttonText}>Retake Photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={previewStyles.saveButton} onPress={saveAndExit}>
                        <Text style={previewStyles.buttonText}>Save & Exit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}