import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import useCharacterDetails from '@/hooks/useCharacterDetails'; // Adjust the path as necessary

const CharacterDetails = () => {
  const { id } = useLocalSearchParams();
  const { character, loading, error } = useCharacterDetails(id);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {character && (
        <>
          <Image source={{ uri: character.image }} style={styles.image} />
          <Text style={styles.name}>{character.name}</Text>
          <Text style={styles.species}>Species: {character.species}</Text>
          <Text style={styles.status}>Status: {character.status}</Text>
          <Text style={styles.gender}>Gender: {character.gender}</Text>
          <Text style={styles.location}>Location: {character.location.name}</Text>
          <Text style={styles.origin}>Origin: {character.origin.name}</Text>
          <Text style={styles.episode}>Episodes: {character.episode.length}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  species: {
    fontSize: 18,
    color: '#888',
  },
  status: {
    fontSize: 18,
    color: '#888',
  },
  gender: {
    fontSize: 18,
    color: '#888',
  },
  location: {
    fontSize: 18,
    color: '#888',
  },
  origin: {
    fontSize: 18,
    color: '#888',
  },
  episode: {
    fontSize: 18,
    color: '#888',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default CharacterDetails;
