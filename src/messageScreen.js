import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { Ionicons, M } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const listOfMessages = [
  {
    id: "0",
    name: "Martin Anderson",
    image: require("../src/Pictures/Cold1.jpeg"),
  },
  { id: "1", name: "Julie Wong", image: require("../src/Pictures/Cold2.jpeg") },
  {
    id: "2",
    name: "Arman Malik",
    image: require("../src/Pictures/cold3.jpeg"),
  },
  {
    id: "3",
    name: "Michael Anderson",
    image: require("../src/Pictures/cold4.jpeg"),
  },
  {
    id: "4",
    name: "Michael Anderson",
    image: require("../src/Pictures/cold4.jpeg"),
  },
];

const MessageScreen = (props) => {
  const [messages, setMessage] = useState(listOfMessages);
  return (
    <View style={{ flex: 1, paddingTop: 20, backgroundColor: "#F16E36" }}>
      <View style={{ flexDirection: "row" }}>
      <View style={{ paddingLeft: 25, paddingTop: 35 }}>
          <Ionicons name="ios-arrow-round-back" size={30} color="white" />
        </View>
        <View style={{ paddingLeft: 90, paddingTop: 40 }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            New Group
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            color: "white",
            backgroundColor: "black",
          }}
          placeholder="name"
        >
          Martin
        </TextInput>
      </View>

      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <View>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 30,
              position: "absolute",
              backgroundColor: "white",
              top: 20,
              left: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "black" }}>
              x
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: 55,
              marginLeft: 15,
              marginTop: 20,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("./Pictures/Cough.jpeg")}
              style={{ height: 45, width: 45, borderRadius: 30 }}
            />
          </View>
          <Text style={{ paddingLeft: 28, paddingTop: 5, color: "white" }}>
            John
          </Text>
        </View>

        <View>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 30,
              position: "absolute",
              backgroundColor: "white",
              top: 20,
              left: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "black" }}>
              x
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: 55,
              marginLeft: 15,
              marginTop: 20,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("./Pictures/Cold1.jpeg")}
              style={{ height: 45, width: 45, borderRadius: 30 }}
            />
          </View>
          <Text style={{ paddingLeft: 20, paddingTop: 5, color: "white" }}>
            Rebeka
          </Text>
        </View>

        <View>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 30,
              position: "absolute",
              backgroundColor: "white",
              top: 20,
              left: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "black" }}>
              x
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: 55,
              marginLeft: 15,
              marginTop: 20,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("./Pictures/Cold2.jpeg")}
              style={{ height: 45, width: 45, borderRadius: 30 }}
            />
          </View>
          <Text style={{ paddingLeft: 20, paddingTop: 5, color: "white" }}>
            Arman
          </Text>
        </View>

        <View>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 30,
              position: "absolute",
              backgroundColor: "white",
              top: 20,
              left: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "black" }}>
              x
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: 55,
              marginLeft: 15,
              marginTop: 20,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("./Pictures/cold3.jpeg")}
              style={{ height: 45, width: 45, borderRadius: 30 }}
            />
          </View>
          <Text style={{ paddingLeft: 20, paddingTop: 5, color: "white" }}>
            Michel
          </Text>
        </View>

        <View>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 30,
              position: "absolute",
              backgroundColor: "white",
              top: 20,
              left: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "black" }}>
              x
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: 55,
              marginLeft: 15,
              marginTop: 20,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("./Pictures/cold4.jpeg")}
              style={{ height: 45, width: 45, borderRadius: 30 }}
            />
          </View>
          <Text style={{ paddingLeft: 28, paddingTop: 5, color: "white" }}>
            Billy
          </Text>
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
          padding: 20,
        }}
      >
        {messages.map((message) => {
          return (
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 2,
                  height: 70,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderWidth: 1,
                    borderRadius: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "green",
                  }}
                >
                  <Image
                    source={message.image}
                    style={{ height: 50, width: 50, borderRadius: 30 }}
                  />
                </View>
              </View>
              <View style={{ flex: 6, padding: 20 }}>
                <Text>{message.name}</Text>
                <Text>9999999999</Text>
              </View>

              <View
                style={{
                  marginLeft: "20%",
                  paddingTop: -15,
                  backgroundColor: "#F16E36",
                  width: 25,
                  borderRadius: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 25,
                  marginTop: 20,
                }}
              >
                <View>
                  <Ionicons name="ios-checkmark" size={24} color="white" />
                </View>
                <View
                  style={{ borderBottomWidth: 2, borderBottomColor: "black" }}
                />
              </View>
            </View>
          );
        })}

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 2,
              height: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderWidth: 1,
                borderRadius: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "green",
              }}
            >
              <Image
                source={require("./Pictures/Cold1.jpeg")}
                style={{ height: 50, width: 50, borderRadius: 30 }}
              />
            </View>
          </View>
          <View style={{ flex: 6, padding: 20, marginRight: 28 }}>
            <Text>Rebeka Noel</Text>
            <Text>99999</Text>
          </View>
          <View
            style={{
              flex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginLeft: "5%",
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
                  name="ios-arrow-round-forward"
                  size={44}
                  color="white"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MessageScreen;
