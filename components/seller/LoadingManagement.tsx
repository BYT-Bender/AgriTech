import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Play, Pause, Check } from 'lucide-react-native';

interface LoadingManagementProps {
  orderId: string;
  onStartLoading: (orderId: string, harvesterName: string) => void;
  onStopLoading: (orderId: string) => void;
  onFinalizeLoading: (orderId: string, manualCount: number) => void;
}

export const LoadingManagement: React.FC<LoadingManagementProps> = ({
  orderId,
  onStartLoading,
  onStopLoading,
  onFinalizeLoading,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [harvesterName, setHarvesterName] = useState('');
  const [manualCount, setManualCount] = useState('');

  const handleStartLoading = () => {
    if (harvesterName) {
      setIsLoading(true);
      onStartLoading(orderId, harvesterName);
    }
  };

  const handleStopLoading = () => {
    setIsLoading(false);
    onStopLoading(orderId);
  };

  const handleFinalizeLoading = () => {
    const count = parseInt(manualCount, 10);
    if (!isNaN(count)) {
      onFinalizeLoading(orderId, count);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading Management</Text>
      <TextInput
        style={styles.input}
        value={harvesterName}
        onChangeText={setHarvesterName}
        placeholder="Harvester Name"
        editable={!isLoading}
      />
      {!isLoading ? (
        <TouchableOpacity style={styles.button} onPress={handleStartLoading}>
          <Play color="#fff" size={24} />
          <Text style={styles.buttonText}>Start Loading</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[styles.button, styles.stopButton]} onPress={handleStopLoading}>
          <Pause color="#fff" size={24} />
          <Text style={styles.buttonText}>Stop Loading</Text>
        </TouchableOpacity>
      )}
      <TextInput
        style={styles.input}
        value={manualCount}
        onChangeText={setManualCount}
        placeholder="Manual Count"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleFinalizeLoading}>
        <Check color="#fff" size={24} />
        <Text style={styles.buttonText}>Finalize Loading</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  stopButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

