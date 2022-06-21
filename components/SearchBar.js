import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchBar = () => {
    return (
    <View>
        <GooglePlacesAutocomplete
            placeholder='Search'
            nearbyPlacesAPI='GooglePlacesSearch'
            
        />
    </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})