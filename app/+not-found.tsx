import { styles } from '@/styles/notFound.styles';
import { Link, Stack } from 'expo-router';
import { Image, Text, View } from 'react-native';

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/notFound1.png')}
        />
        <Text style={styles.title}>Oops!</Text>
        <Text style={styles.message}>
          The page you’re looking for doesn’t exist.
        </Text>

        <Link href="/(tabs)" style={styles.link}>
          <Text style={styles.linkText}>Go back to Home</Text>
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
