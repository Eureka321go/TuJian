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
            initState:"",//是否显示搜索结果
            location:"使用当前位置",
            hotDesitination:["丽江","大理","厦门","三亚","杭州","深圳","北京"],
            searchText:""
        }
    }
    //搜索内容改变
    changeText(text){
        this.setState({
            searchText:text
        })
    }
    //搜索结果
    renderResult(){
       if(this.state.searchText.length>0){
           return(
               <View style={styles.resultWrap}>
                   <Text>111</Text>
               </View>
           )
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
                               let recommend=responseJson.result.formatted_addresses.recommend;
                               let rough=responseJson.result.formatted_addresses.rough;
                               if(recommend){
                                   self.setState({location:recommend})
                               }else if(rough){
                                   self.setState({location:rough})
                               }
                           }
                    })
                    .catch((err)=>{
                        self.setState({location:"定位失败"})
                    })
            }
            ,
            (error)=>{self.setState({location:"定位失败"})},
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
                        ref={"searchInput"}
                        style={styles.textinput}
                        placeholder={"搜索目的地、客栈"}
                        underlineColorAndroid={"transparent"}
                        onChangeText={(text)=>{
                            this.changeText(text)
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.cancelWrap} activeOpacity={1} onPress={()=>{
                    this.refs.searchInput.blur();
                    this.props.navigation.goBack();
                }}>
                    <Text style={styles.cancelText}>取消</Text>
                </TouchableOpacity>
            </View>
        )
    }
    //热门目的地
    renderHotDestination(){
        let arr=[];
        let date=this.state.hotDesitination;
        date.forEach((v,k)=>{
            let marStyle;
            if((k+1)%3==0 && (k+1)!=0){
                marStyle={marginRight:0}
            }else{
                marStyle={marginRight:Calc.getWidth(90)}
            }
            arr.push(
                <TouchableOpacity  key={k} activeOpacity={1} onPress={()=>{
                    alert(1)
                }}>
                    <View style={[{
                        borderColor:"#51cdf1",
                        borderWidth:1,
                        height:Calc.getHeight(62),
                        borderRadius:6,
                        justifyContent:"center",
                        alignItems:"center",
                        minWidth:Calc.getWidth(100),
                        paddingLeft:Calc.getWidth(50),
                        paddingRight:Calc.getWidth(50),
                        marginTop:Calc.getHeight(30)
                    },marStyle]}>
                        <Text style={{ fontSize:Calc.getFont(16),color:"#3a3c3c",}}>{v}</Text>
                    </View>
                </TouchableOpacity>
            )
        });
        return arr;
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
                {/*热门目的地*/}
                <Text style={{fontSize:Calc.getFont(12),color:"#b8bdc2"}}>热门目的地</Text>
                <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                    {this.renderHotDestination()}
                </View>
            </ScrollView>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {/*头部*/}
                {this.renderHeader()}
                {/*初始的状态*/}
                {(this.state.searchText.length<=0)?(this.renderInitState()):(this.renderResult())}
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
        justifyContent:"center",
        position:"relative",
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
    },
    //搜索结果
    resultWrap:{

    }

});


export default connect()(Destination);