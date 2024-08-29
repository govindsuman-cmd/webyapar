import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ character }) => {
  const gotoCharacter = () => {
    router.push({
      pathname: '/character/characterDetails',
      params: { id: character.id }, 
    });
  };

  return (
    <TouchableOpacity onPress={gotoCharacter} style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.species}>{character.species}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 250,
  },
  textContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  species: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default Card;
