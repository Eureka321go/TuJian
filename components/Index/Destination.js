/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import {connect} from "react-redux";
let Calc=global.Calc;

class Destination extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            initState:"",
            location:"使用当前位置"
        }
    }
    //定位
    getlocation(){
        let self=this;
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                let key="HEPBZ-MW2WG-US2QP-I7HZ6-HQNFF-5XFIS";
                let url="http://apis.map.qq.com/ws/geocoder/v1/?location="+position.coords.latitude+","+position.coords.longitude+"&coord_type=1&get_poi=1&poi_options=address_format=short&key="+key+"&output=json";
                self.setState({
                    location:"定位中..."
                })
                fetch(url,{method:"GET"})
                    .then((response)=>response.json())
                    .then((responseJson)=>{
                           if(responseJson.message=="query ok"){
                              let recommend=responseJson.result.formatted_address.recommend;
                           }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }
            ,
            (error)=>{self.setState({location:"定位出错"})},
            {enableHighAccuracy:true} //高精准定位
        )
    }
    //头部
    renderHeader(){
        return(
            <View style={styles.header}>
                <View style={styles.inputWrap}>
                    <Image style={styles.searchIcon} source={require("../../assets/images/index/search_icon.png")}/>
                    <TextInput
                        style={styles.textinput}
                        placeholder={"搜索目的地、客栈"}
                        underlineColorAndroid={"transparent"}
                        onChangeText={(text)=>{

                        }}
                    />
                </View>
                <TouchableOpacity style={styles.cancelWrap} activeOpacity={1} onPress={()=>{
                    this.props.navigation.navigate("index");
                }}>
                    <Text style={styles.cancelText}>取消</Text>
                </TouchableOpacity>
            </View>
        )
    }
    //初始状态
    renderInitState(){
        return(
            <ScrollView>
               <TouchableOpacity activeOpacity={1} onPress={()=>{this.getlocation()}}>
                   <View style={styles.initWrap}>
                       <Image style={{width:Calc.getWidth(42),height:Calc.getWidth(42),marginRight:Calc.getWidth(30)}} source={require("../../assets/images/index/location.png")}/>
                       <Text style={{fontSize:16,color:"#262626"}}>{this.state.location}</Text>
                   </View>
               </TouchableOpacity>
            </ScrollView>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {/*头部*/}
                {this.renderHeader()}
                {/*初始的状态*/}
                {this.renderInitState()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft:Calc.getWidth(24),
        paddingRight:Calc.getWidth(24),
    },
    header:{
        flexDirection:"row",
        height:Calc.getHeight(88),
        paddingTop:Calc.getHeight(26),
        marginTop:Platform.OS=='android'?0:20,//电量栏不用转换
        justifyContent:"center"
    },
    inputWrap:{
        paddingLeft:Calc.getWidth(20),
        backgroundColor:"#f0f5f8",
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    textinput:{
        backgroundColor:"#f0f5f8",
        flex:1,
        padding:0
    },
    searchIcon:{
        width:Calc.getWidth(28),
        height:Calc.getWidth(28),
        marginRight:Calc.getWidth(20),
    },
    cancelWrap:{
        alignItems:"center",
        justifyContent:"center",
        marginLeft:Calc.getWidth(34),
        marginRight:Calc.getWidth(10)
    },
    cancelText:{
        fontSize:Calc.getFont(18),
        color:"#51cdf1"
    },
    //初始状态
    initWrap:{
        marginTop:Calc.getHeight(50),
        marginBottom:Calc.getHeight(50),
        flexDirection:"row",
        alignItems:"center",
    }

});


export default connect()(Destination);