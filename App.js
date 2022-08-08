import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { runOnJS, runOnUI, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function someWorklet(greeting){
  'worklet';
  let what = returningWorklet();
  console.log("Hey I'm running on the UI thread");
  runOnJS(callback)('can pass argument too');
}
function onPress(){
  runOnUI(someWorklet)('Howdy');
}
const width = 135.5
function otherWorklet(){
  'worklet';
  consle.log('Captured width', width);
}
function returningWorklet(){
  'worklet';
  return "I'm back";
}
const style = useAnimatedStyle(() => {
  console.log("Running on the UI thread");
  return{
    opacity: 0.5
  };  
});
function callback(text){
  console.log('Running on the RN thread', text);
}
const sharedVal = useSharedValue(3.1415);
import { useSharedValue } from 'react-native-reanimated';
import Animated, {useSharedValue, useAnimatedStyle, useAnimatScrollHandler}from 'react-native-reanimated';

function SomeComponent({Children}) {
  const scrollOffest = useSharedValue(0);
  const scrollHandler = useAnimatScrollHandler({onscroll: (event) => {scrollOffest.value = event.contentOffset.y;},});
  const sharedVal = useSharedValue(0);
function Box(){
  const offest = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {return{transform: [{translateX: withSpring(offest.value * 245)}],};});
  return (
    <><Animated.ScrollView onScroll={scrollHandler}>{Children}</Animated.ScrollView>
    <Button onPress={() => withSpring(Math.random()*255)}
      title="move" /></>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});}