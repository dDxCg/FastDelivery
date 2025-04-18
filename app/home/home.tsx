import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Button from "../../components/Button/ButtonComponent";
import COLOR from "../../constants/Colors";
import GLOBAL from "../../constants/GlobalStyles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const HomeScreen = () => {
  const [name, setName] = React.useState<string>("#name");
  const services = [
    { id: "1", name: "Giao hàng", icon: "box" },
    { id: "2", name: "Xe máy", icon: "motorcycle" },
    { id: "3", name: "Xe tải", icon: "truck" },
  ];

  return (
    <View style={GLOBAL.container}>
      <LinearGradient
        colors={[COLOR.blue70, COLOR.blue40, COLOR.white]}
        style={styles.background}
        locations={[0.19, 0.2, 0.2]}
      />
      <Text style={styles.title}>
        Fast Delivery {"\n"} <Text>#quote</Text>
      </Text>

      <View style={styles.content_view_1}>
        <Text style={styles.greeting}>Xin chào, {name}</Text>
        <TouchableOpacity style={styles.user_img}>
          <FontAwesome6 name="user" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={services}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.service}>
            <FontAwesome6
              name={item.icon}
              size={30}
              color={COLOR.green25}
            ></FontAwesome6>
            <Text style={styles.service_name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        columnWrapperStyle={styles.service_view}
      ></FlatList>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  title: { fontSize: 30, height: "20%" },
  subtitle: {},
  content_view_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 30,
  },
  greeting: { fontSize: 24 },
  user_img: {
    borderRadius: 45,
    backgroundColor: COLOR.blue95,
    borderColor: COLOR.blue40,
    borderWidth: 1,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  service_view: {
    paddingVertical: 5,
  },
  service: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR.blue40,
    backgroundColor: COLOR.blue95,
    alignItems: "center",
    paddingVertical: 10,
    width: "22%",
    justifyContent: "space-between",
    marginHorizontal: "1.5%",
  },
  service_name: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
