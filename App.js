import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import moduleNfirebaseame from 'firebase/app'
import Cosnants from 'expo-constants'

if(firebase.apps.length == 0){
  firebase.initializeApp(Constants.manifest.web.config.firebase)
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
