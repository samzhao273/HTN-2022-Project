import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Map = () => {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState(null);
  const [bins, setBins] = useState([]);
  const delta = { latitudeDelta: 0.0922, longitudeDelta: 0.0421 };

  useEffect(() => {
    fetch(`http://localhost:3000/bins`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      try {
        const jsonRes = await res.json();

        setBins(jsonRes);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

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
    })();
  }, []);

  // for current marker
  useEffect(() => {
    setCurrent(
      <Marker
        coordinate={{
          latitude: location["latitude"],
          longitude: location["longitude"],
          ...delta,
        }}
        title="You are here!"
        image={require('../../../assets/current-icon.png')}
      />
    );
  }, [location]);

  return (
    <View style={styles.map_container}>
      <MapView region={location} style={styles.map}>
        {current}
        {bins.map((bin) => (
          <Marker
            key={bin["bid"]}
            coordinate={{
              latitude: bin["latitude"],
              longitude: bin["longitude"],
            }}
            pinColor="#D75B5B"
            title="Donation Bin"
          />
        ))}
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
    height: 800,
    width: 400,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
