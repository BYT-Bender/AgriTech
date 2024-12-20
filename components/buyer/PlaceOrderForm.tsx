import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface PlaceOrderFormProps {
  onSubmit: (orderData: OrderData) => void;
}

interface OrderData {
  quantity: string;
  qualityType: string;
  region: string;
  loadingDate: string;
  deliveryLocation: string;
}

export const PlaceOrderForm: React.FC<PlaceOrderFormProps> = ({ onSubmit }) => {
  const [orderData, setOrderData] = useState<OrderData>({
    quantity: '',
    qualityType: '',
    region: '',
    loadingDate: '',
    deliveryLocation: '',
  });

  const handleSubmit = () => {
    onSubmit(orderData);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={orderData.quantity}
        onValueChange={(itemValue) => setOrderData({ ...orderData, quantity: itemValue })}
        style={styles.picker}
      >
        <Picker.Item label="Select Quantity" value="" />
        <Picker.Item label="100 kg" value="100" />
        <Picker.Item label="500 kg" value="500" />
        <Picker.Item label="1000 kg" value="1000" />
      </Picker>

      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radioButton, orderData.qualityType === 'A' && styles.radioButtonSelected]}
          onPress={() => setOrderData({ ...orderData, qualityType: 'A' })}
        >
          <Text style={orderData.qualityType === 'A' ? styles.radioTextSelected : styles.radioText}>Quality A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, orderData.qualityType === 'B' && styles.radioButtonSelected]}
          onPress={() => setOrderData({ ...orderData, qualityType: 'B' })}
        >
          <Text style={orderData.qualityType === 'B' ? styles.radioTextSelected : styles.radioText}>Quality B</Text>
        </TouchableOpacity>
      </View>

      <Picker
        selectedValue={orderData.region}
        onValueChange={(itemValue) => setOrderData({ ...orderData, region: itemValue })}
        style={styles.picker}
      >
        <Picker.Item label="Select Region" value="" />
        <Picker.Item label="North" value="north" />
        <Picker.Item label="South" value="south" />
        <Picker.Item label="East" value="east" />
        <Picker.Item label="West" value="west" />
      </Picker>

      <TextInput
        style={styles.input}
        value={orderData.loadingDate}
        onChangeText={(text) => setOrderData({ ...orderData, loadingDate: text })}
        placeholder="Loading Date (YYYY-MM-DD)"
      />

      <TextInput
        style={styles.input}
        value={orderData.deliveryLocation}
        onChangeText={(text) => setOrderData({ ...orderData, deliveryLocation: text })}
        placeholder="Delivery Location"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  picker: {
    marginBottom: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  radioButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  radioButtonSelected: {
    backgroundColor: '#007AFF',
  },
  radioText: {
    color: '#000',
  },
  radioTextSelected: {
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

