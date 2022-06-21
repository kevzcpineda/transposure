import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';


const OtherScreen = () => {
    return (
        
            <MapView
            style={styles.map}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
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