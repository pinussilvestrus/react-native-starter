import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { StyleSheet, View } from 'react-native';

import '@expo/browser-polyfill';

import BpmnViewer from './BpmnViewer';

export default function App() {

  return (
    <View style={ styles.container }>
      <BpmnViewer
        url="https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn" />
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
