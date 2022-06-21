import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { GOOGLE_MAP_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useStore } from "../store";

const Maps = () => {

    const navigation = useNavigation();
    const {setlat,setlong,destination,setdesti,desti} = useStore(state => state)
    return (
    <View style = {styles.container}>
        <Text>this is the maps componetss</Text>
        <Button 
            title={"next screen"}
            onPress={() => navigation.navigate("anotherScreen")}
        />
        <GooglePlacesAutocomplete
            styles={{
                container:{
                    flex: 0,
                },
                textInput:{
                    fontSize: 18,
                },
            }}
            onPress={(data, details = null) => {
                setlat(details.geometry.location.lat)
                setlong(details.geometry.location.lng)
                setdesti(details.geometry.location)

            }}
            fetchDetails={true}
            placeholder='Search location'
            enablePoweredByContainer={false}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            query={{
                key: GOOGLE_MAP_APIKEY,
                language: "en",
            }}
            
        />
        
        <Text>lat :{destination.lat}</Text>
        <Text>long :{destination.long}</Text>
        
    
    </View>
    )
}

export default Maps

const styles = StyleSheet.create({
    
})