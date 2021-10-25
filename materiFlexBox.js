import React, { Component } from "react";
import { Text, View } from "react-native";


class MateriFlexBox extends Component {
    render(){
        return(
            <View>
                <View style={{
                    flexDirection:'row' ,
                    width:400 ,
                    backgroundColor:'#f2f2f2',
                    justifyContent:'space-between'}}>

                    <Text style={{backgroundColor:'#ee5253' ,width:50,height:50}}></Text>
                    <Text style={{backgroundColor:'#feca57' ,width:50,height:50}}></Text>
                    <Text style={{backgroundColor:'#1dd1a1' ,width:50,height:50}}></Text>
                    <Text style={{backgroundColor:'#5f27cd' ,width:50,height:50}}></Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'flex-end',
                    alignItems:'center'
                    
                    
                }}>
                    <Text style={{marginRight:12}}>Beranda</Text>
                    <Text style={{marginRight:12}}>Keterangan</Text>
                    <Text style={{marginRight:12}}>Home</Text>
                    
                </View>
                <View>
                    
                </View>
            </View>
        )
    }
}

export default MateriFlexBox;