import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SplashScreenProps {
  onLoginAsBuyer: () => void;
  onLoginAsSeller: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onLoginAsBuyer, onLoginAsSeller }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      <Text style={styles.title}>AgriTech B2B Marketplace</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onLoginAsBuyer}>
          <Text style={styles.buttonText}>Login as Buyer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onLoginAsSeller}>
          <Text style={styles.buttonText}>Login as Seller</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 24,
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

