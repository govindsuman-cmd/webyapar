Rick and Morty Character Explorer App
Project Overview
Title: Rick and Morty Character Explorer App
Author: Govind Suman
Technology: React Native (Expo)
Objective: This app utilizes the Rick and Morty API to display characters from the popular TV show. It includes features such as character filtering, navigation between screens, and a clean, user-friendly interface.

Table of Contents
Introduction
Installation
Project Structure
Features
Components
Home Page (Index.js)
Card Component (Card.js)
Character Details Page (CharacterDetails.js)
Hooks
useCharacterDetails Hook
APIs Used
Styles
Conclusion
Introduction
The Rick and Morty Character Explorer App is a mobile application built using React Native and Expo. The app connects to the Rick and Morty API, allowing users to browse through characters from the show. Users can apply filters, view details, and navigate between different screens seamlessly.

rick-morty-explorer/
│
├── assets/                # Images, fonts, and other assets
├── components/            # Reusable components
├── hooks/                 # Custom hooks
├── screens/               # App screens
├── navigation/            # Navigation setup
├── services/              # API services and utility functions
├── app/             # Entry point of the application
├── app.json               # Expo configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation

Features
Character Listing: Browse through the list of characters from the Rick and Morty show.
Filters: Apply filters based on character attributes like species, status, and gender.
Search Functionality: Search for characters by name.
Character Details: View detailed information about each character.
Navigation: Navigate between different screens, including the home screen, character details screen, and filter screen.
Components
Home Page (Index.js)
Overview:
The Home Page is the main screen where users can browse, filter, and view a list of characters. It fetches character data from the Rick and Morty API and allows users to filter the list by status, species, and gender.

Key Functionalities:

Data Fetching: Fetches character data from the Rick and Morty API.
Filtering: Users can filter characters by status, species, and gender.
Loading State: Displays a loading indicator while data is being fetched.
Character Display: Shows a list of characters using the Card component.
Code Explanation:

State Management: Uses useState to manage characters, filtered characters, loading state, and filter criteria.
Effect Hooks:
The first useEffect fetches character data when the component mounts.
The second useEffect applies filters whenever the filter criteria change.
Filtering Logic: Filters characters based on the selected criteria.
Conditional Rendering: Displays an activity indicator if data is loading; otherwise, shows the character list.

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

Card Component (Card.js)
Overview:
The Card component is a reusable UI component that represents a single character. It displays the character's image, name, and species. When a user taps on the card, they are navigated to the character's detail page.

Key Functionalities:

Character Details Display: Shows the character's image, name, and species.
Navigation: On tap, navigates to the CharacterDetails screen with the character's ID as a parameter.
Code Explanation:

Props: Receives a character object as a prop.
Navigation: Uses Expo's router.push to navigate to the CharacterDetails screen.
Code Snippet:

const gotoCharacter = () => {
  router.push({
    pathname: '/character/characterDetails',
    params: { id: character.id }, 
  });
};

Character Details Page (CharacterDetails.js)
Overview:
The Character Details page displays detailed information about a specific character. It uses a custom hook (useCharacterDetails) to fetch the character data based on the character ID passed via navigation.

Key Functionalities:

Data Fetching: Fetches detailed character data using the useCharacterDetails hook.
Error Handling: Displays an error message if the data fetching fails.
Loading State: Shows a loading indicator while data is being fetched.
Character Information Display: Displays detailed character information such as name, species, status, gender, location, origin, and episode count.
Code Explanation:

State Management: Manages character data, loading state, and error state using the useCharacterDetails hook.
Conditional Rendering: Renders a loading spinner during data fetching or an error message if fetching fails.

if (loading) {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

Hooks
useCharacterDetails Hook
Overview:
The useCharacterDetails hook is a custom hook that fetches detailed information about a specific character from the Rick and Morty API. It returns the character data, loading state, and any error encountered during the fetch process.

Key Functionalities:

Data Fetching: Fetches character details from the API based on the character ID.
State Management: Manages the character data, loading state, and error state.
Error Handling: Handles any errors encountered during the data fetching process.
Code Explanation:

useEffect Hook: The hook uses useEffect to fetch character details when the id changes.
Error Handling: Catches and sets any errors that occur during the fetch.

Code Snippet:
useEffect(() => {
  const fetchCharacter = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCharacter(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  fetchCharacter();
}, [id]);

APIs Used
The app utilizes the Rick and Morty API to fetch character data. Key API endpoints used include:

Get All Characters: /api/character
Get Character by ID: /api/character/{id}
Filter Characters: /api/character/?name={name}&status={status}&species={species}&gender={gender}
Styles
The app uses StyleSheet to create custom styles for each component. Key styles include:

Container Styles: Defines the main container's padding, background color, and layout properties.
Card Styles: Manages the appearance of character cards, including background color, shadow effects, and image dimensions.
Text Styles: Defines typography for character names, species, status, and other text elements.
Loading and Error States: Styles the loading spinner and error messages.

Code Snippet:

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
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

Conclusion

The Rick and Morty Character Explorer App is a well-structured and user-friendly application that provides a seamless experience for users to explore characters from the Rick and Morty universe. The app makes efficient use of React Native's components, custom hooks, and Expo's navigation to create a polished and functional mobile application.

