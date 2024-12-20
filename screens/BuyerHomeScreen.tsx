import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { PlaceOrderForm } from '../components/buyer/PlaceOrderForm';

export const BuyerHomeScreen: React.FC = () => {
  const handleProfilePress = () => {
    alert('Profile pressed');
  };

  const handleLogout = () => {
    alert('Logout pressed');
  };

  const handlePlaceOrder = (orderData: any) => {
    console.log('Order placed:', orderData);
    alert('Order placed successfully!');
  };

  return (
    <View style={styles.container}>
      <Header
        title="Buyer Home"
        onProfilePress={handleProfilePress}
        onLogout={handleLogout}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <PlaceOrderForm onSubmit={handlePlaceOrder} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
});

