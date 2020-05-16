import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
const listOfPeople = [
  { id: "0", name: "Martin", image: require("../src/Pictures/Cold1.jpeg") },
  { id: "1", name: "Rebeka", image: require("../src/Pictures/Cold2.jpeg") },
  { id: "2", name: "Arman", image: require("../src/Pictures/cold3.jpeg") },
  { id: "3", name: "Michael", image: require("../src/Pictures/cold4.jpeg") },
  { id: "4", name: "James", image: require("../src/Pictures/cold5.jpeg") },
  { id: "5", name: "Julie", image: require("../src/Pictures/Cough.jpeg") },
  {
    id: "6",
    name: "Malik",
    image: require("../src/Pictures/coveringMouth.jpeg"),
  },
  {
    id: "7",
    name: "Altaf",
    image: require("../src/Pictures/coveringMouth.jpeg"),
  },
  {
    id: "8",
    name: "Andrew",
    image: require("../src/Pictures/coveringMouth.jpeg"),
  },
  {
    id: "9",
    name: "Sandy",
    image: require("../src/Pictures/coveringMouth.jpeg"),
  },
];

const HomeScreen = (props) => {
  const [persons, setPerson] = useState(listOfPeople);
  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: "#F16E36" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ paddingLeft: 25, paddingTop: 20 }}>
          <Ionicons name="ios-arrow-round-back" size={30} color="white" />
        </View>
        <View style={{ paddingLeft: 90, paddingTop: 25 }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            New Group
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: -5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 1,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              borderRadius: 70,
              display: "flex",
              alignItems: "center",
              backgroundColor: "black",
              justifyContent: "center",
              margin: 9,
            }}
          >
            <Ionicons name="ios-person" size={60} color="white" />
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Group Name
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{}}>Provide a group subject and optional</Text>
          <Text style={{}}>group icon</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          marginTop: "10%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: "100%",
          height: "160%",
        }}
      >
        <View style={{ paddingTop: 25, paddingLeft: 20, flexDirection: "row" }}>
          <Text style={{ fontSize: 25 }}>Participants</Text>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 30,
              backgroundColor: "yellow",
              marginLeft: 10,
              marginTop: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>10</Text>
          </View>
        </View>

        <View style={{ flexWrap: "wrap", flexDirection: "row", marginTop: 20 }}>
          {persons.map((person) => {
            return (
              <View>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 30,
                    position: "absolute",
                    backgroundColor: "#F16E36",
                    top: 22,
                    left: 78,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 1,
                      marginTop: -2,
                      color: "white",
                      fontSize: 10,
                    }}
                  >
                    x
                  </Text>
                </View>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    marginLeft: 30,
                    marginTop: 20,
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={person.image}
                    style={{ height: 50, width: 50, borderRadius: 30 }}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: 5,
                    paddingLeft: 25,
                  }}
                >
                  <Text>{person.name}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            marginLeft: "75%",
            paddingTop: 5,
            backgroundColor: "#F16E36",
            width: 70,
            borderRadius: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 70,
          }}
        >
          <View>
            <Ionicons
              onPress={() => {
                props.navigation.push("Message");
              }}
              name="ios-arrow-round-forward"
              size={45}
              color="white"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
