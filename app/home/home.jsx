import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../styles/Home';

export default function Index() {
  const router = useRouter();

  const goToCaptureImage = () => {
    router.push('/captureImage/captureImage');
  };

  // Sample photo booth images data
  const samplePhotos = [
    { id: 1, uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop' },
    { id: 2, uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
    { id: 3, uri: 'https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=300&h=400&fit=crop' },
    { id: 4, uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop' },
  ];

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.container}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={styles.appTitle}>📸 Photo Booth</Text>
            <Text style={styles.subtitle}>Create amazing memories instantly</Text>
          </View>

          {/* Sample Photos Section */}
          <View style={styles.sampleSection}>
            <Text style={styles.sectionTitle}>Recent Captures</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.photoScroll}
              contentContainerStyle={styles.photoScrollContent}
            >
              {samplePhotos.map((photo, index) => (
                <View key={photo.id} style={[styles.photoContainer, { marginLeft: index === 0 ? 20 : 10 }]}>
                  <Image 
                    source={{ uri: photo.uri }}
                    style={styles.samplePhoto}
                  />
                  <View style={styles.photoOverlay}>
                    <View style={styles.photoFrame} />
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <View style={styles.welcomeCard}>
              <Text style={styles.welcomeTitle}>Welcome to Photo Booth!</Text>
              <Text style={styles.welcomeDescription}>
                Capture fun moments with friends and family. Add filters, frames, and effects to make your photos special.
              </Text>
              
              {/* Features List */}
              <View style={styles.featuresList}>
                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🎭</Text>
                  <Text style={styles.featureText}>Fun Filters</Text>
                </View>
                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🖼️</Text>
                  <Text style={styles.featureText}>Custom Frames</Text>
                </View>
                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>✨</Text>
                  <Text style={styles.featureText}>Magic Effects</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Action Button */}
          <View style={styles.actionSection}>
            <TouchableOpacity 
              style={styles.startButton} 
              onPress={goToCaptureImage}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#ff6b6b', '#ee5a52']}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonIcon}>📷</Text>
                <Text style={styles.buttonText}>Start Photo Session</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}