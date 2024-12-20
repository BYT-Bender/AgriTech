import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface Bid {
  id: string;
  price: number;
  images: string[];
  region: string;
}

interface BidsListProps {
  bids: Bid[];
  onAccept: (bidId: string) => void;
  onCounter: (bidId: string) => void;
}

export const BidsList: React.FC<BidsListProps> = ({ bids, onAccept, onCounter }) => {
  const renderBidItem = ({ item }: { item: Bid }) => (
    <View style={styles.bidItem}>
      <Text style={styles.price}>Price: ${item.price}</Text>
      <Text style={styles.region}>Region: {item.region}</Text>
      <FlatList
        data={item.images}
        horizontal
        renderItem={({ item: imageUrl }) => (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton} onPress={() => onAccept(item.id)}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.counterButton} onPress={() => onCounter(item.id)}>
          <Text style={styles.buttonText}>Counter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={bids}
      renderItem={renderBidItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  bidItem: {
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
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  region: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  counterButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

