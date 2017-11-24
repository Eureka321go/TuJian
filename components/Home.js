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
} from 'react-native';

import {connect} from "react-redux";
import  {Calc} from "./common/Calc"
import ParallaxView from "./common/ParallaxView"
class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            addressText:"目的地/客栈名称",
            addressName:"厦门",
            liveDate:"10月21日-10月22日",
            peopleNum:"2人",
            tabActive:"jingCai"
        }
    }

    render() {
        //const { navigate } = this.props.navigation;
        const ActiveClass={color:"#51cdf1"}
        const noActive={color:"#3a3c3c"}
        return (
            <View style={styles.container}>
                <ParallaxView
                    backgroundSource={require("../assets/images/index/indexBg.jpg")}
                    windowHeight={Calc.getHeight(547)}
                    stickyHeaderIndices={[2]}
                    header={(
                        <View style={styles.searchInfo}>
                            {this.renderAddress()}
                            {this.renderLiveDate()}
                            {this.renderPeopleNum()}
                            <View style={{flex:1,height:Calc.getHeight(88),backgroundColor:"#51cdf1",alignItems:"center",justifyContent:"center",borderRadius:6}}>
                                <Text style={{fontSize:18,color:"#fff"}}>开始</Text>
                            </View>
                        </View>
                    )}
                >
                  {/*占位*/}
                  <View style={{height:Calc.getHeight(444)/2+Calc.getHeight(80)}}></View>
                  {/*tab*/}
                  <View>
                      <View style={styles.tab}>
                          <View style={styles.tabItem}>
                              <Text style={[styles.tabText,this.state.tabActive=='jingCai'?ActiveClass:noActive]}>精彩</Text>
                          </View>
                          <View style={styles.tabItem}>
                              <Text style={[styles.tabText,this.state.tabActive=='bieShu'?ActiveClass:noActive]}>别墅</Text>
                          </View>
                          <View style={styles.tabItem}>
                              <Text style={[styles.tabText,this.state.tabActive=='fangDong'?ActiveClass:noActive]}>房东故事</Text>
                          </View>
                          <View style={styles.tabItem}>
                              <Text style={styles.tabText}>购房</Text>
                          </View>
                      </View>
                  </View>
                  <View style={{height:1000,backgroundColor:"red"}}></View>
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
        flex: 1
    },
    //搜索容器
    searchInfo:{
        width:Calc.getWidth(702),
        height:Calc.getHeight(444),
        backgroundColor:"#fff",
        marginTop:Calc.getHeight(103)+Calc.getHeight(444)/2,
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:6,
        elevation:4,
        shadowColor:'#000',
        shadowOffset:{h:10,w:10},
        shadowRadius:3,
        shadowOpacity:0.5,
        paddingLeft:Calc.getWidth(20),
        paddingRight:Calc.getWidth(20),
        paddingBottom:Calc.getWidth(20),
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
//    tabItem
    tab:{
        flexDirection:"row",
        height:Calc.getHeight(100),
        alignItems:"center",
        backgroundColor:"#fff",
    },
    tabItem:{
        flex:1,
        backgroundColor:"#fff",
        height:Calc.getHeight(29),
    },
    tabText:{
        fontSize:16,
        textAlign:"center",
    },
});


export default Home