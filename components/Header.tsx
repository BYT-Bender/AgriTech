import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  onProfilePress: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onProfilePress, onLogout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
          <Feather name="user" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout} style={styles.iconButton}>
          <Feather name="log-out" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
});

