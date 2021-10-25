import React, { Component } from "react"
import { Image, Text, TextInput, View ,StyleSheet, ScrollView } from "react-native"
import MateriFlexBox from "./materiFlexBox"
import PositionReactNative from "./PositionReactNative"
import StyleSimple from "./styleSimple"

const App  = () => {
  return(
     <ScrollView>
       {/* <StyleSimple/> */}
       {/* <MateriFlexBox /> */}
       <PositionReactNative />
     </ScrollView>
    
    )
}





class Eclass extends Component{
  render(){
    return(
      <Text>Setiawan</Text>
    )
  }
}

export default App;