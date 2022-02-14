import React from "react";
import { View, StatusBar, StyleSheet, Dimensions } from "react-native";

import {
  BlurMask,
  Canvas,
  Circle,
  DashPathEffect,
  Group,
  Oval,
  Paint,
  RadialGradient,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";

interface IProps {}
const App: React.FC<IProps> = () => {
  const r = 25;
  const center = {
    x: Dimensions.get("window").width / 2,
    y: Dimensions.get("window").height / 2,
  };
  const rctR = 300;
  const width = rctR;
  const height = rctR / 2.5;
  const rct = {
    x: Dimensions.get("window").width / 2 - width / 2,
    y: Dimensions.get("window").height / 2 - height / 2,
    width,
    height,
  };

  return (
    <Canvas style={{ flex: 1 }}>
      <Paint>
        <RadialGradient
          c={vec(center.x + 25, center.y)}
          r={50}
          colors={["lightblue", "blue"]}
        />
        <BlurMask sigma={20} style="solid" />
      </Paint>
      <Circle c={center} r={r} />
      <Paint style="stroke" strokeWidth={18}>
        <SweepGradient c={center} colors={["blue", "lightblue", "blue"]} />
        <BlurMask sigma={20} style="solid" />
        <DashPathEffect intervals={[10, 10]} />
      </Paint>
      <Group>
        <Oval rect={rct} />
        <Group
          transform={[{ rotate: Math.PI / 3 }, { scale: -1 }]}
          origin={center}
        >
          <Oval rect={rct} />
        </Group>
        <Group
          transform={[{ rotate: -Math.PI / 3 }, { scale: -1 }]}
          origin={center}
        >
          <Oval rect={rct} />
        </Group>
      </Group>
    </Canvas>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
