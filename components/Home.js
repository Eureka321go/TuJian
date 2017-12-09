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
    StatusBar
} from 'react-native';

import {connect} from "react-redux";
import  {Calc} from "./common/Calc"
import "./common/Calc"
import ParallaxView from "./common/ParallaxView"
import Tabs from "./Index/Tabs"
import Wonderful from "./Index/Wonderful"
//全局变量
import  "./common/storage"
import "./common/Common"
import "../redux/action"
let storage=global.storage;
let CommonJS=global.CommonJS;
let allActionsFun=global.allActionsFun;

class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            addressText:"目的地/客栈名称",
            addressName:"厦门",
        }
    }
    componentDidMount(){
        let self=this;
        //判断是否第一次进去App
        if(this.props.isFirst){
            //第一次进入app弹出手势
            this.props.dispatch(allActionsFun.getFirst(false));//将第一次进入app设置false
            //判断是否登录
            storage.load({
                key:"token",
            }).then((ret)=>{
                //已登陆过
                if(ret){
                    //弹出指纹解锁
                    storage.load({
                        key:"unLock",
                    }).then((ret)=>{
                        //alert(JSON.stringify(ret));
                        //判断平台
                        if(Platform.OS=='android'){
                            //android,android不开放指纹
                            if(ret.Gesture){
                                alert("安卓手势开启")
                            }else{
                                self.props.navigation.navigate("Login")
                            }
                        }else{
                            //ios
                            if(ret.FingePrint){
                                alert("ios指纹开启");
                            }else if(ret.Gesture){
                                alert("ios手势开启");
                            }else{
                                self.props.navigation.navigate("Login");
                            }
                        }
                    }).catch((err)=>{
                        CommonJS.toastShow("storage.load{key:unLock}",{
                            position:0
                        })
                    })
                }else{
                    //没登陆过
                    self.props.navigation.navigate("Login");
                }

            }).catch((err)=>{
                self.props.navigation.navigate("Login");
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                />
                <ParallaxView
                    backgroundSource={require("../assets/images/index/indexBg.jpg")}
                    windowHeight={Calc.getHeight(547)}
                    stickyHeaderIndices={[2]}
                    header={(
                        <View style={styles.searchInfo}>
                            {this.renderAddress()}
                            {this.renderLiveDate()}
                            {this.renderPeopleNum()}
                           <TouchableOpacity style={{flex:1,height:Calc.getHeight(88),backgroundColor:"#51cdf1",alignItems:"center",justifyContent:"center",borderRadius:6}} activeOpacity={1}>
                               <View>
                                   <Text allowFontScaling={false}  style={{fontSize:Calc.getFont(18),color:"#fff"}}>开始</Text>
                               </View>
                           </TouchableOpacity>
                        </View>
                    )}
                >
                  {/*占位*/}
                  <View style={{height:Calc.getHeight(849)}}></View>
                  {/*tab*/}
                  <View>
                      <Tabs/>
                  </View>
                  {/*tabContainer精彩等列表容器*/}
                  <View>
                      <Wonderful/>
                  </View>
                </ParallaxView>
            </View>
        );
    }
    //目的地
    renderAddress(){
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{
                this.props.navigation.navigate("Destination")
            }}>
                <View style={styles.List}>
                    <Image style={styles.smallIcon} source={require("../assets/images/index/addressIcon.png")}/>
                    <Text allowFontScaling={false}  numberOfLines={1} style={{flex:1,fontSize:Calc.getFont(15),color:"#b8bdc2"}}>{this.state.addressText}</Text>
                    <Text allowFontScaling={false}  style={styles.rightText}>{this.state.addressName}</Text>
                    <Image style={styles.enterIcon} source={require("../assets/images/common/enter.png")}/>
                </View>
            </TouchableOpacity>
        )
    }
    //入住时间
    renderLiveDate(){
        return(
           <TouchableOpacity activeOpacity={1} onPress={()=>{this.props.navigation.navigate("Calendar",{transition:"ToVertical"})}}>
               <View style={styles.List}>
                   <Image style={styles.smallIcon} source={require("../assets/images/index/liveDate.png")}/>
                   <View allowFontScaling={false}  style={{flex:1,flexDirection:"column",justifyContent:"center"}}>
                       {/*住房入住*/}
                       <View style={{flexDirection:"row",marginBottom:Calc.getWidth(10)}}>
                           <Text style={{fontSize:Calc.getFont(12),color:"#b8bdc2",marginRight:Calc.getWidth(102)}}>入住</Text>
                           <Text style={{fontSize:Calc.getFont(12),color:"#b8bdc2"}}>退房</Text>
                       </View>
                       {/*入住日期*/}
                       <Text allowFontScaling={false}  numberOfLines={1} style={{fontSize:Calc.getFont(16),color:"#3a3c3c"}}>{this.props.CalendarDate.date}</Text>
                   </View>
                   {/*入住几晚*/}
                   <Text allowFontScaling={false}  style={styles.rightText}>共{this.props.CalendarDate.time}晚</Text>
                   <Image  style={styles.enterIcon} source={require("../assets/images/common/enter.png")}/>
               </View>
           </TouchableOpacity>
        )
    }
    //人数
    renderPeopleNum(){
        return(
           <TouchableOpacity activeOpacity={0.9} onPress={()=>{ this.props.navigation.navigate("PeopleNum")}}>
               <View style={[styles.List,{borderColor:"#fff"}]}>
                   <Image style={styles.smallIcon} source={require("../assets/images/index/peopleNum.png")}/>
                   <Text allowFontScaling={false}  numberOfLines={1} style={{flex:1,fontSize:Calc.getFont(15),color:"#b8bdc2"}}>人数</Text>
                   <Text allowFontScaling={false}  style={styles.rightText}>{this.props.peopleNum}</Text>
                   <Image style={styles.enterIcon} source={require("../assets/images/common/enter.png")}/>
               </View>
           </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    //搜索容器
    searchInfo:{
        width:Calc.getWidth(702),
        height:Calc.getHeight(444),
        backgroundColor:"#fff",
        position:"absolute",
        top:Calc.getHeight(103)+Calc.getHeight(444)/2,
        left:Calc.getWidth(24),
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:6,
        elevation:4,
        shadowColor:'#000',
        shadowOffset:{h:10,w:10},
        shadowRadius:3,
        shadowOpacity:1,
        paddingLeft:Calc.getWidth(20),
        paddingRight:Calc.getWidth(20),
        paddingBottom:Calc.getWidth(20),
        zIndex:100,
    },
    //View
    List:{
        flexDirection:"row",
        alignItems:"center",
        height:Calc.getHeight(112),
        borderBottomWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9",
        borderStyle:"solid",
        paddingLeft:Calc.getWidth(10),
    },
    //搜索View左侧的图标
    smallIcon:{
        width:Calc.getWidth(42),
        height:Calc.getWidth(42),
        marginRight:Calc.getWidth(20),
    },
    //右侧文字
    rightText:{
        fontSize:Calc.getFont(16),
        color:"#3a3c3c",
        marginRight:Calc.getWidth(20),
    },
    //右侧图标
    enterIcon:{
        width:Calc.getWidth(10),
        height:Calc.getWidth(18),
    },
});

function select(state){
    return{
        CalendarDate:state.getIndexCalendar,
        peopleNum:state.getindexNum,
        token:state.getToken,
        isFirst:state.isFirst
    }
}
export default connect(select)(Home)