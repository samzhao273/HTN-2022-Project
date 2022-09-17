import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

const Map = () => {
  const [region, setRegion] = useState({});
  const delta = { latitudeDelta: 0.0922, longitudeDelta: 0.0421 };
  const current = (
    <Marker
      coordinate={{
        latitude: region.latitude,
        longitude: region.longitude,
      }}
      title="You are here!"
      pinColor="#55B3AE"
    />
  );

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setRegion({
          latitude: position["coords"]["latitude"],
          longitude: position["coords"]["longitude"],
          ...delta,
        });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <View style={styles.map_container}>
      <MapView region={region} style={styles.map}>{current}</MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  map_container: {
    height: 700,
    width: 400,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
