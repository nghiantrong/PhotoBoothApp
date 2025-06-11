import { useState, useRef } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, Alert, Dimensions } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';
import * as FileSystem from 'expo-file-system';
import { captureRef } from 'react-native-view-shot';
import { previewStyles, photostripStyles } from '../../styles/CaptureImage';

const { width: screenWidth } = Dimensions.get('window');

export default function Preview() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const photostripRef = useRef();
    const [isGenerating, setIsGenerating] = useState(false);

    const capturedPhotos = params.photos ? JSON.parse(params.photos) : [];

    const STRIP_WIDTH = screenWidth * 0.9;
    const STRIP_HEIGHT = STRIP_WIDTH * 1.5;
    const PHOTO_FRAME_WIDTH = STRIP_WIDTH * 0.42;
    const PHOTO_FRAME_HEIGHT = PHOTO_FRAME_WIDTH * 0.75;

    const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
    const templateOptions = [
        require('../../assets/strip_template.jpg'),
        require('../../assets/strip_template_2.jpg'),
    ];

    const retakePhotos = () => {
        router.push('/captureImage/captureImage?reset=true');
    };

    const capturePhotostrip = async () => {
        try {
            setIsGenerating(true);

            // Request media library permissions
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert(
                    'Permission needed', 
                    'We need camera roll permissions to save your photostrip',
                [
                    {
                        text: 'Cancel', style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => Linking.openSettings(),
                    },
                ]);
                return null;
            }

            // Capture the photostrip view
            const uri = await captureRef(photostripRef, {
                format: 'jpg',
                quality: 0.9,
            });

            await MediaLibrary.saveToLibraryAsync(uri);

            return uri;
        } catch (error) {
            console.error('Error capturing photostrip:', error);
            Alert.alert('Error', 'Failed to create photostrip: ' + error.message);
            return null;
        } finally {
            setIsGenerating(false);
        }
    };

    const saveAndExit = async () => {
        const stripUri = await capturePhotostrip();
        if (stripUri) {
            Alert.alert(
                'Photostrip Saved!',
                'Your photo booth strip has been saved to your camera roll!',
                [
                    {
                        text: 'OK',
                        onPress: () => router.push('/captureImage/captureImage?reset=true')
                    }
                ]
            );
        }
    };

    const renderPhotoInFrame = (photo, index) => {
        if (!photo) return <View style={photostripStyles.emptyFrame} />;

        return (
            <Image
                source={{ uri: photo.uri }}
                style={photostripStyles.framePhoto}
                resizeMode="cover"
            />
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
                <Text style={previewStyles.title}>Your Photo Booth Strip! 🎉</Text>

                <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>

                    <Text style={photostripStyles.sectionTitle}>Choose a Template:</Text>
                    <ScrollView
                        horizontal
                        contentContainerStyle={photostripStyles.templateScrollContent}
                        showsHorizontalScrollIndicator={false}
                        style={photostripStyles.templateScrollContainer}
                    >
                        {templateOptions.map((template, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setSelectedTemplateIndex(index)}
                                style={[
                                    photostripStyles.templateOption,
                                    selectedTemplateIndex === index && photostripStyles.templateOptionSelected,
                                  ]}
                            >
                                <Image
                                    source={template}
                                    style={photostripStyles.templateImage}
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View
                        ref={photostripRef}
                        style={[photostripStyles.photostripContainer, { width: STRIP_WIDTH, height: STRIP_HEIGHT }]}
                    >
                        {/* Background template image */}
                        <Image
                            source={templateOptions[selectedTemplateIndex]}
                            style={photostripStyles.templateBackground}
                            resizeMode="cover"
                        />

                        {/* Left column photos */}
                        <View style={photostripStyles.leftColumn}>
                            <View style={[photostripStyles.photoFrame, { width: PHOTO_FRAME_WIDTH, height: PHOTO_FRAME_HEIGHT }]}>
                                {renderPhotoInFrame(capturedPhotos[0], 0)}
                            </View>
                            <View style={[photostripStyles.photoFrame, { width: PHOTO_FRAME_WIDTH, height: PHOTO_FRAME_HEIGHT }]}>
                                {renderPhotoInFrame(capturedPhotos[1], 1)}
                            </View>
                            <View style={[photostripStyles.photoFrame, { width: PHOTO_FRAME_WIDTH, height: PHOTO_FRAME_HEIGHT }]}>
                                {renderPhotoInFrame(capturedPhotos[2], 2)}
                            </View>
                            <View style={[photostripStyles.photoFrame, { width: PHOTO_FRAME_WIDTH, height: PHOTO_FRAME_HEIGHT }]}>
                                {renderPhotoInFrame(capturedPhotos[3], 3)}
                            </View>
                        </View>

                        {/* Right column photos */}
                        <View style={photostripStyles.rightColumn}>
                            <View style={[photostripStyles.photoFrame, { width: PHOTO_FRAME_WIDTH, height: PHOTO_FRAME_HEIGHT }]}>
                                {renderPhotoInFrame(capturedPhotos[0], 0)}
                            </View>
                            <View style={[photostripStyles.photoFrame, { width: PHOTO_FRAME_WIDTH, height: PHOTO_FRAME_HEIGHT }]}>
                                {renderPhotoInFrame(capturedPhotos[1], 1)}
                            </View>
                            <View style={[photostripStyles.photoFrame, { width: PHOTO_FRAME_WIDTH, height: PHOTO_FRAME_HEIGHT }]}>
                                {renderPhotoInFrame(capturedPhotos[2], 2)}
                            </View>
                            <View style={[photostripStyles.photoFrame, { width: PHOTO_FRAME_WIDTH, height: PHOTO_FRAME_HEIGHT }]}>
                                {renderPhotoInFrame(capturedPhotos[3], 3)}
                            </View>
                        </View>
                    </View>

                    {/* Show individual photos */}
                    <Text style={photostripStyles.sectionTitle}>Individual Photos:</Text>
                    <ScrollView
                        horizontal
                        style={photostripStyles.individualPhotosContainer}
                        contentContainerStyle={photostripStyles.individualPhotosContent}
                        showsHorizontalScrollIndicator={false}
                    >
                        {capturedPhotos.map((photo, index) => (
                            <View key={index} style={previewStyles.photoContainer}>
                                <Image source={{ uri: photo.uri }} style={photostripStyles.individualPhoto} />
                                <Text style={previewStyles.photoNumber}>{index + 1}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </ScrollView>

                <View style={previewStyles.buttonContainer}>
                    <TouchableOpacity style={previewStyles.retakeButton} onPress={retakePhotos}>
                        <Text style={previewStyles.buttonText}>Retake Photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[previewStyles.saveButton, isGenerating && { opacity: 0.7 }]}
                        onPress={saveAndExit}
                        disabled={isGenerating}
                    >
                        <Text style={previewStyles.buttonText}>
                            {isGenerating ? 'Creating...' : 'Save Photostrip'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}