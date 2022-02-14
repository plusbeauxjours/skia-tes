import React from "react";
import { View, StatusBar, StyleSheet, Dimensions } from "react-native";

import { Canvas, Circle, Group } from "@shopify/react-native-skia";

interface IProps {}
const App: React.FC<IProps> = () => {
  const center = {
    x: Dimensions.get("window").width / 2,
    y: Dimensions.get("window").height / 2,
  };
  const r = 25;

  return (
    <Canvas style={{ flex: 1 }}>
      <Circle c={center} r={r} color="tomato" />
    </Canvas>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
