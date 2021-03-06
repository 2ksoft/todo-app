import React from "react";

import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import AddTodo from "../containers/AddTodo";
import VisibleTodos from "../containers/VisibleTodos";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <AddTodo />
      <KeyboardAvoidingView style={{ flex: 0.8 }}>
        <VisibleTodos navigation={props.navigation} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#010920",
    paddingTop: 50,
  },
});
