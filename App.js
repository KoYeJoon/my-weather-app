import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button,Text, View } from 'react-native';

export default function App() {
  const{
    container, textBig,textRed
  } = styles;

  const clickHandler = () => {
    console.log("clicked!!");
  }

  return ( 
    <View style={container}>
      <Button 
          title={"Click me!"} 
          onPress={clickHandler}
      />
      {/* command + /누르면 자동으로 주석되는 듯  */}
      {/* <Text style = {[textBig, textRed]}>Hello, world!!</Text> */}
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
  textBig: {
    fontSize : 32,
  },
  textRed: {
    color : 'red',
  },
});


// /import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Button, View } from 'react-native';


// export default class App extends React.Component() {
//   state = {
//     counter: 0,
//   };

//   render(){
//     const{
//       container,
//   } = styles;

//   const clickHandler = () => {
//     state.counter++;
//     console.log("clicked!!");
//   };


//   return (
//     <View style={container}>
//     <Button
//     title={"Click me!"} //버튼
//     onPress={clickHandler}
//     //onClick={() => console.log("Clicked!")} //클릭할때마다 console에 띄움
//     />
//     {/* <Text style = {[textBig, textRed]}>Hello, world!!</Text> */}

//       <StatusBar style="auto" />
//     </View>
//   );
//  }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });