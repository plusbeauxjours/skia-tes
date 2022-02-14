import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

interface IProps {}
const App: React.FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
