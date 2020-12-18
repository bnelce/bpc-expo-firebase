import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  Linking,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export default function About() {

  useEffect(() => {
  });


  function handleSendGitHub() {
    Linking.openURL(
      'https://github.com/bnelce',
    );
  }

  function handleSendWhatsapp() {
    Linking.openURL(
      'whatsapp://send?phone="5585987075561"&text=Tenho interesse nos seus serviços.'
    );
  }

  function handleSendLinkedin() {
    Linking.openURL(
      'https://www.linkedin.com/in/abner-oliveira-27aa3327/'
    );
  }

  function handleSendIG() {
    Linking.openURL(
      'https://www.instagram.com/bnelce/'
    );
  }
  function handleSendSite() {
    Linking.openURL(
      'http://abneroliveira.eti.br'
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>    
        <Image
          style={styles.pointImage}
          source={{
            uri: "http://abneroliveira.eti.br/wp-content/uploads/2019/11/2302109-150x150.jpg",
          }}
        />
        <Text style={styles.pointName}>Abner Oliveira</Text>
        <View style={ {flexDirection: "row"} }>
          <FontAwesome name="map-marker" size={20} color="#000000" />
          <Text style={styles.addressTitle}> Fortaleza-CE, Brasil</Text>
        </View>
        <RectButton style={styles.button} onPress={handleSendSite}>
          <FontAwesome name="globe" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Website</Text>
        </RectButton> 
        <RectButton style={styles.button} onPress={handleSendGitHub}>
          <FontAwesome name="github" size={20} color="#FFF" />
          <Text style={styles.buttonText}>GitHub</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleSendLinkedin}>
          <FontAwesome name="linkedin" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Linkedin</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleSendIG}>
          <FontAwesome name="instagram" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Instagram</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleSendWhatsapp}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton> 
        
                           
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20 + Constants.statusBarHeight,
    alignItems: "center",
  },

  pointImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 75,
    marginTop: 32,
    alignSelf: "center"
  },

  pointName: {
    color: "#322153",
    fontSize: 28,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 24,
  },

  pointItems: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: "#6C6C80",
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: "#322153",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

  addressContent: {
    fontFamily: "Roboto_400Regular",
    lineHeight: 24,
    marginTop: 8,
    color: "#6C6C80",
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    width: "78%",
    backgroundColor: "#34CB79",
    borderRadius: 10,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    marginLeft: 8,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});