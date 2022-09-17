import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Map = () => {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState(null);
  const delta = { latitudeDelta: 0.0922, longitudeDelta: 0.0421 };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location["coords"]["latitude"],
        longitude: location["coords"]["longitude"],
        ...delta,
      });
      console.log(location);

      setCurrent(
        <Marker
          coordinate={{
            latitude: location["coords"]["latitude"],
            longitude: location["coords"]["longitude"],
            ...delta,
          }}
          title="You are here!"
          pinColor="#55B3AE"
        />
      );

      console.log(current);
    })();
  }, []);

  return (
    <View style={styles.map_container}>
      <MapView region={location} style={styles.map}>
        {current}
      </MapView>
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
