import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sha1, hexToASCII } from './utilities';
import testVectors from './test-vectors';

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  componentDidMount() {
    testVectors.sha1.forEach(async (vector, index) => {
      const { message, digest: expectedDigest } = vector;

      const messageASCII = hexToASCII(message);
      const computedDigest = await sha1(messageASCII);

      if (computedDigest === expectedDigest) {
        console.log(`${index}: ✅`);
      } else {
        console.log(
          `${index}: ❌  [ Message -> ${message}: expected -> ${expectedDigest}, computed -> ${computedDigest} ]`,
        );
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
