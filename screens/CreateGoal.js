import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, TextInput, CheckBox, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Header />
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
        

          <Text style={styles.getStartedText}>
            Cadastre seu novo <Text style={{ fontWeight: 'bold' }}>objetivo</Text>
          </Text>

          <TextInput style={styles.textInput} placeholder="nome do seu objetivo" ></TextInput>
          <TextInput style={styles.textInputBox} multiline numberOfLines={8} placeholder="descrição" ></TextInput>
          <View style={styles.rowContainer}>
            <TextInput style={styles.textInput50} placeholder="Valor Final (R$)" ></TextInput>
            <TextInput style={styles.textInput50margin5} placeholder="Prazo Final" ></TextInput>
          </View>
          <View style={styles.rowContainer}>
            <Text>Recorrente: </Text>
            <CheckBox></CheckBox>
            </View>
        </View>

      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 54,
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  textInput: {
    width: '100%',
    margin: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255,251,244,0.9)',
    borderWidth: 1,
    borderColor: '#f89e1a',
    borderRadius: 4,
    marginTop: 15
  },
  textInput50: {
    width: '45%',
    flex: 1,
    paddingVertical:  5,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255,251,244,0.9)',
    borderWidth: 1,
    borderColor: '#f89e1a',
    borderRadius: 4,
    marginTop: 12
  },
  textInputBox: {
    backgroundColor: 'rgba(255,251,244,0.9)',
    borderWidth: 1,
    width: '100%',
    paddingVertical:  12,
    paddingHorizontal: 15,
    marginTop: 12,
    borderColor: '#f89e1a',
    height: 100,
    textAlignVertical: 'top'
  },
  rowContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput50margin5: {
    width: '45%',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255,251,244,0.9)',
    borderWidth: 1,
    borderColor: '#f89e1a',
    borderRadius: 4,
    marginTop: 12,
    marginLeft: 5
  }
});
