import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Animated, Alert } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { styles, cameraStyles } from '../../styles/CaptureImage';

export default function CaptureImage() {
    const [facing, setFacing] = useState('front');
    const [permission, requestPermission] = useCameraPermissions();
    const [photoCount, setPhotoCount] = useState(0);
    const [capturedPhotos, setCapturedPhotos] = useState([]);
    const [countdown, setCountdown] = useState(null);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [flashOpacity] = useState(new Animated.Value(0));
    const cameraRef = useRef(null);
    const router = useRouter();
    const params = useLocalSearchParams();

    const MAX_PHOTOS = 4;

    // Reset photos if coming from preview with reset=true
    useEffect(() => {
        if (params.reset === 'true') {
            setPhotoCount(0);
            setCapturedPhotos([]);
            setCountdown(null);
            setIsCountingDown(false);
        }
    }, [params.reset]);

    // Countdown effect
    useEffect(() => {
        let interval;
        if (isCountingDown && countdown > 0) {
            interval = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            capturePhoto();
            setIsCountingDown(false);
            setCountdown(null);
        }
        return () => clearInterval(interval);
    }, [countdown, isCountingDown]);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const startCountdown = () => {
        if (photoCount >= MAX_PHOTOS) {
            Alert.alert('Photo Limit Reached', 'You have already taken all 4 photos!');
            return;
        }
        
        setCountdown(5);
        setIsCountingDown(true);
    };

    const capturePhoto = async () => {
        if (cameraRef.current && photoCount < MAX_PHOTOS) {
            try {
                // Flash effect
                Animated.sequence([
                    Animated.timing(flashOpacity, {
                        toValue: 1,
                        duration: 100,
                        useNativeDriver: true,
                    }),
                    Animated.timing(flashOpacity, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                ]).start();

                const photo = await cameraRef.current.takePictureAsync({
                    quality: 0.8,
                    base64: false,
                });

                const newPhotoCount = photoCount + 1;
                const newCapturedPhotos = [...capturedPhotos, photo];
                
                setPhotoCount(newPhotoCount);
                setCapturedPhotos(newCapturedPhotos);

                // Navigate to preview after 4 photos
                if (newPhotoCount >= MAX_PHOTOS) {
                    setTimeout(() => {
                        router.push({
                            pathname: '/preview/preview',
                            params: {
                                photos: JSON.stringify(newCapturedPhotos)
                            }
                        });
                    }, 1000);
                }
            } catch (error) {
                console.error('Error taking picture:', error);
                Alert.alert('Error', 'Failed to take picture. Please try again.');
            }
        }
    };

    const goToPreview = () => {
        if (capturedPhotos.length > 0) {
            router.push({
                pathname: '/preview/preview',
                params: {
                    photos: JSON.stringify(capturedPhotos)
                }
            });
        }
    };

    return (
        <>
            <Stack.Screen
                options={{
                    title: `Photo Booth (${photoCount}/${MAX_PHOTOS})`,
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text style={{ color: '#fff', fontSize: 16, marginLeft: 10 }}>Back</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
            <View style={styles.container}>
                <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                    {/* Flash Overlay */}
                    <Animated.View 
                        style={[
                            cameraStyles.flashOverlay, 
                            { opacity: flashOpacity }
                        ]} 
                    />
                    
                    {/* Countdown Display */}
                    {isCountingDown && countdown > 0 && (
                        <View style={cameraStyles.countdownContainer}>
                            <Text style={cameraStyles.countdownText}>{countdown}</Text>
                        </View>
                    )}

                    {/* Progress Indicator */}
                    <View style={cameraStyles.progressContainer}>
                        {[...Array(MAX_PHOTOS)].map((_, index) => (
                            <View 
                                key={index}
                                style={[
                                    cameraStyles.progressDot,
                                    index < photoCount ? cameraStyles.progressDotActive : {}
                                ]}
                            />
                        ))}
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={[styles.button, { opacity: isCountingDown ? 0.5 : 1 }]} 
                            onPress={toggleCameraFacing}
                            disabled={isCountingDown}
                        >
                            <Text style={styles.text}>🔄</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={[
                                cameraStyles.captureButton,
                                { opacity: isCountingDown ? 0.5 : 1 }
                            ]} 
                            onPress={startCountdown}
                            disabled={isCountingDown || photoCount >= MAX_PHOTOS}
                        >
                            <View style={cameraStyles.captureButtonInner}>
                                <Text style={cameraStyles.captureButtonText}>
                                    {isCountingDown ? '⏱️' : '📷'}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.button, { opacity: capturedPhotos.length > 0 ? 1 : 0.5 }]} 
                            onPress={goToPreview}
                            disabled={capturedPhotos.length === 0}
                        >
                            <Text style={styles.text}>👁️</Text>
                        </TouchableOpacity>
                    </View>
                </CameraView>
                
                <View style={cameraStyles.bottomInfo}>
                    <Text style={styles.photoCounter}>
                        Photos: {photoCount}/{MAX_PHOTOS}
                    </Text>
                    {photoCount >= MAX_PHOTOS && (
                        <Text style={cameraStyles.completeText}>
                            Session Complete! Tap preview to see your photos.
                        </Text>
                    )}
                </View>
            </View>
        </>
    );
}