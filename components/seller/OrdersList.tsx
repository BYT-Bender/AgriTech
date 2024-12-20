import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface Order {
  id: string;
  quantity: string;
  qualityType: string;
  region: string;
  loadingDate: string;
  deliveryLocation: string;
}

interface OrdersListProps {
  orders: Order[];
  onSubmitQuote: (orderId: string) => void;
}

export const OrdersList: React.FC<OrdersListProps> = ({ orders, onSubmitQuote }) => {
  const renderOrderItem = ({ item }: { item: Order }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderTitle}>Order #{item.id}</Text>
      <Text>Quantity: {item.quantity} kg</Text>
      <Text>Quality Type: {item.qualityType}</Text>
      <Text>Region: {item.region}</Text>
      <Text>Loading Date: {item.loadingDate}</Text>
      <Text>Delivery Location: {item.deliveryLocation}</Text>
      <TouchableOpacity
        style={styles.quoteButton}
        onPress={() => onSubmitQuote(item.id)}
      >
        <Text style={styles.quoteButtonText}>Submit Quote</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={orders}
      renderItem={renderOrderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  orderItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quoteButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  quoteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

