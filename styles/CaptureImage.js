import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
        justifyContent: 'space-between',
    },
    button: {
        flex: 0.3,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    photoCounter: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
});

export const cameraStyles = StyleSheet.create({
    flashOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 1000,
    },
    countdownContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countdownText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    progressContainer: {
        position: 'absolute',
        top: 60,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 100,
    },
    progressDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginHorizontal: 4,
    },
    progressDotActive: {
        backgroundColor: '#4CAF50',
    },
    captureButton: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    captureButtonInner: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 4,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureButtonText: {
        fontSize: 32,
    },
    bottomInfo: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingVertical: 15,
        alignItems: 'center',
    },
    completeText: {
        color: '#4CAF50',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
    },
});

export const previewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    photoContainer: {
        width: 80,
        marginBottom: 15,
        marginRight: 15,
        position: 'relative',
    },
    photo: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        backgroundColor: '#333',
    },
    photoNumber: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    retakeButton: {
        backgroundColor: '#ff6b6b',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        flex: 0.4,
    },
    saveButton: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        flex: 0.4,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export const photostripStyles = StyleSheet.create({
    templateScrollContainer: {
        marginBottom: 15,
    },

    templateScrollContent: {
        paddingHorizontal: 10,
    },

    templateOption: {
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },

    templateOptionSelected: {
        borderWidth: 3,
        borderColor: '#007AFF',
    },

    templateImage: {
        width: 80,
        height: 120,
        resizeMode: 'cover',
    },
    photostripContainer: {
        position: 'relative',
        backgroundColor: '#333',
        marginVertical: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    templateBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        borderRadius: 10,
    },
    leftColumn: {
        position: 'absolute',
        left: '4%',
        top: '3%',
        height: '85%',
        width: '42%',
        justifyContent: 'space-between',
    },
    rightColumn: {
        position: 'absolute',
        right: '4%',
        top: '3%',
        height: '85%',
        width: '42%',
        justifyContent: 'space-between',
    },
    photoFrame: {
        backgroundColor: 'transparent',
        overflow: 'hidden',
        borderRadius: 8,
    },
    framePhoto: {
        width: '100%',
        height: '100%',
    },
    emptyFrame: {
        width: '100%',
        height: '100%',
        backgroundColor: '#333',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
    individualPhotosContainer: {
        height: 120,
        marginBottom: 20,
    },
    individualPhotosContent: {
        paddingHorizontal: 10,
    },
    individualPhoto: {
        width: 80,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#333',
    },
});