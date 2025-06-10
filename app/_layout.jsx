import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';


export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: 'Photo Booth',
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
  );
}