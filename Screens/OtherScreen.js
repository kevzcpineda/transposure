import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { useStore } from "../store";

const OtherScreen = () => {
    const {destination} = useStore(state => state)
    return (
        
            <MapView
            style={styles.map}
                initialRegion={{
                latitude: destination.lat,
                longitude: destination.long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
        
    )
}

export default OtherScreen

const styles = StyleSheet.create({
    map: {
        flex:2,

    }
})