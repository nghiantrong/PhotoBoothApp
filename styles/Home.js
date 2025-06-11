import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23', // Deep space background
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  appTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(138, 43, 226, 0.8)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 12,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 17,
    color: '#e0e6ff',
    textAlign: 'center',
    opacity: 0.95,
    textShadowColor: 'rgba(30, 144, 255, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  sampleSection: {
    marginBottom: 35,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 20,
    marginBottom: 18,
    textShadowColor: 'rgba(255, 20, 147, 0.7)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  photoScroll: {
    height: 190,
  },
  photoScrollContent: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  photoContainer: {
    position: 'relative',
    marginRight: 15,
  },
  samplePhoto: {
    width: 130,
    height: 170,
    borderRadius: 20,
    backgroundColor: '#1a1a2e',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  photoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(138, 43, 226, 0.15)',
  },
  photoFrame: {
    flex: 1,
    borderWidth: 3,
    borderRadius: 20,
    shadowColor: '#ff1493',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
    // Gradient border effect simulation
    borderColor: '#ff6b6b',
  },
  welcomeSection: {
    paddingHorizontal: 20,
    marginBottom: 35,
  },
  welcomeCard: {
    backgroundColor: 'rgba(26, 26, 46, 0.95)',
    borderRadius: 25,
    padding: 30,
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
    borderWidth: 2,
    borderColor: 'rgba(0, 255, 255, 0.3)',
    // Additional glow effect
    backgroundColor: 'rgba(30, 30, 60, 0.9)',
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
    textShadowColor: 'rgba(255, 20, 147, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
    letterSpacing: 0.5,
  },
  welcomeDescription: {
    fontSize: 17,
    color: '#b8c6ff',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 28,
    textShadowColor: 'rgba(30, 144, 255, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  featuresList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(138, 43, 226, 0.1)',
    borderRadius: 15,
    paddingVertical: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'rgba(138, 43, 226, 0.3)',
  },
  featureIcon: {
    fontSize: 28,
    marginBottom: 10,
    textShadowColor: 'rgba(255, 20, 147, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  featureText: {
    fontSize: 14,
    color: '#e0e6ff',
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgba(30, 144, 255, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  actionSection: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  startButton: {
    width: '100%',
    maxWidth: 320,
    borderRadius: 30,
    shadowColor: '#ff1493',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
    // Outer glow effect
    borderWidth: 2,
    borderColor: 'rgba(255, 20, 147, 0.5)',
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 28,
    // Simulating gradient with solid colors for React Native compatibility
    backgroundColor: '#ff1493', // Hot pink base
    // You can use libraries like react-native-linear-gradient for actual gradients
  },
  buttonIcon: {
    fontSize: 26,
    marginRight: 12,
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  buttonText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
  
  // Additional helper styles for enhanced visual effects
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // For use with LinearGradient component
  },
  
  glowEffect: {
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 20,
  },
  
  neonBorder: {
    borderWidth: 2,
    borderColor: '#ff6b6b',
    shadowColor: '#ff6b6b',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  
  holographicCard: {
    backgroundColor: 'rgba(30, 30, 60, 0.8)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)', // Note: This may not work in all RN versions
  },
});