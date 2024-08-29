import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Card from '@/components/Card';
import CustomHeader from '@/components/CustomHeader';

export default function Index() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
        setFilteredCharacters(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    filterCharacters();
  }, [status, species, gender]);

  const filterCharacters = () => {
    let tempCharacters = characters;

    if (status) {
      tempCharacters = tempCharacters.filter(character => character.status === status);
    }

    if (species) {
      tempCharacters = tempCharacters.filter(character => character.species === species);
    }

    if (gender) {
      tempCharacters = tempCharacters.filter(character => character.gender === gender);
    }

    setFilteredCharacters(tempCharacters);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.filterContainer}>
        <RNPickerSelect
          onValueChange={value => setStatus(value)}
          items={[
            { label: 'All Status', value: '' },
            { label: 'Alive', value: 'Alive' },
            { label: 'Dead', value: 'Dead' },
            { label: 'Unknown', value: 'unknown' },
          ]}
          placeholder={{ label: 'Select Status', value: '' }}
          style={pickerSelectStyles}
        />

        <RNPickerSelect
          onValueChange={value => setSpecies(value)}
          items={[
            { label: 'All Species', value: '' },
            { label: 'Human', value: 'Human' },
            { label: 'Alien', value: 'Alien' },
            { label: 'Robot', value: 'Robot' },
            { label: 'Mythological', value: 'Mythological' },
          ]}
          placeholder={{ label: 'Select Species', value: '' }}
          style={pickerSelectStyles}
        />

        <RNPickerSelect
          onValueChange={value => setGender(value)}
          items={[
            { label: 'All Genders', value: '' },
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Genderless', value: 'Genderless' },
            { label: 'Unknown', value: 'unknown' },
          ]}
          placeholder={{ label: 'Select Gender', value: '' }}
          style={pickerSelectStyles}
        />
      </View>

      {filteredCharacters.map(character => (
        <Card key={character.id} character={character} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    marginBottom: 16,
    flex:1,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is not hidden behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is not hidden behind the icon
  },
});
