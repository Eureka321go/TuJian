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
    ScrollView,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import {connect} from "react-redux";
import  {Calc} from "./common/Calc"
import ParallaxView from "./common/ParallaxView"
import Tabs from "./Index/Tabs"
import Wonderful from "./Index/Wonderful"

class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            addressText:"目的地/客栈名称",
            addressName:"厦门",
            liveDate:"10月21日-10月22日",
            peopleNum:"2人"
        }
    }
    render() {
        //const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
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
                               <View style={{flex:1,}}>
                                   <Text style={{fontSize:18,color:"#fff",flex:1}}>开始</Text>
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
            <View style={styles.List}>
                <Image style={styles.smallIcon} source={require("../assets/images/index/addressIcon.png")}/>
                <Text numberOfLines={1} style={{flex:1,fontSize:15,color:"#b8bdc2"}}>{this.state.addressText}</Text>
                <Text style={styles.rightText}>{this.state.addressName}</Text>
                <Image style={styles.enterIcon} source={require("../assets/images/common/enter.png")}/>
            </View>
        )
    }
    //入住时间
    renderLiveDate(){
        return(
            <View style={styles.List}>
                <Image style={styles.smallIcon} source={require("../assets/images/index/liveDate.png")}/>
                <View style={{flex:1,flexDirection:"column",justifyContent:"center"}}>
                    {/*住房入住*/}
                    <View style={{flexDirection:"row",marginBottom:Calc.getWidth(10)}}>
                        <Text style={{fontSize:12,color:"#b8bdc2",marginRight:Calc.getWidth(102)}}>入住</Text>
                        <Text style={{fontSize:12,color:"#b8bdc2"}}>退房</Text>
                    </View>
                    {/*入住日期*/}
                    <Text numberOfLines={1} style={{fontSize:16,color:"#3a3c3c"}}>{this.state.liveDate}</Text>
                </View>
                {/*入住几晚*/}
                <Text style={styles.rightText}>共一晚</Text>
                <Image style={styles.enterIcon} source={require("../assets/images/common/enter.png")}/>
            </View>
        )
    }
    //人数
    renderPeopleNum(){
        return(
            <View style={[styles.List,{borderColor:"#fff"}]}>
                <Image style={styles.smallIcon} source={require("../assets/images/index/peopleNum.png")}/>
                <Text numberOfLines={1} style={{flex:1,fontSize:15,color:"#b8bdc2"}}>人数</Text>
                <Text style={styles.rightText}>{this.state.peopleNum}</Text>
                <Image style={styles.enterIcon} source={require("../assets/images/common/enter.png")}/>
            </View>
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
        height:Calc.getWidth(112),
        borderBottomWidth:0.5,
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
        fontSize:16,
        color:"#3a3c3c",
        marginRight:Calc.getWidth(20),
    },
    //右侧图标
    enterIcon:{
        width:Calc.getWidth(10),
        height:Calc.getWidth(18),
    },
});


export default Home