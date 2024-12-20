import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SplashScreen } from './screens/SplashScreen';
import { BuyerHomeScreen } from './screens/BuyerHomeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'buyerHome'>('splash');

  const handleLoginAsBuyer = () => {
    setCurrentScreen('buyerHome');
  };

  const handleLoginAsSeller = () => {
    // For this preview, we'll just show an alert
    alert('Seller login not implemented in this preview');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'splash' && (
        <SplashScreen
          onLoginAsBuyer={handleLoginAsBuyer}
          onLoginAsSeller={handleLoginAsSeller}
        />
      )}
      {currentScreen === 'buyerHome' && <BuyerHomeScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

