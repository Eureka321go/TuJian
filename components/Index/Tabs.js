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
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import  {Calc} from "../common/Calc"
class Tabs extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            tabActive:'精彩'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.tab}>
                        {this.renderTabItem({name:"精彩"})}
                        {this.renderTabItem({name:"别墅"})}
                        {this.renderTabItem({name:"房东故事"})}
                        {this.renderTabItem({name:"购房"})}
                    </View>
                </View>
            </View>
        );
    }
    //圆点
    renderYuan(obj){
        if(obj.name==this.state.tabActive){
            return(
                <View style={[styles.yuanBlue,{backgroundColor:"#51cdf1"}]}></View>
            )
        }
        return(
            <View style={[styles.yuanBlue,{backgroundColor:"transparent"}]}></View>
        )
    }
    //TabItem
    renderTabItem(obj){
        const ActiveClass={color:"#51cdf1"}
        const noActive={color:"#3a3c3c"}
        return(
            <TouchableOpacity activeOpacity={0.9} style={styles.tabItem} onPress={()=>{this.setState({tabActive:obj.name})}}>
               <Text style={[styles.tabText,this.state.tabActive==obj.name?ActiveClass:noActive]}>{obj.name}</Text>
                {this.renderYuan(obj)}
            </TouchableOpacity>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    //    tab
    tab:{
        flexDirection:"row",
        justifyContent:"center",
        height:Calc.getHeight(100),
        alignItems:"center",
        backgroundColor:"#fff",
        width:Calc.getHeight(750)
    },
    tabItem:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        height:Calc.getHeight(100),
        position:"relative"
    },
    tabText:{
        fontSize:16,
        textAlign:"center",
    },
    yuanBlue:{
        width:Calc.getHeight(10),
        height:Calc.getHeight(10),
        borderRadius:10,
        marginTop:Calc.getHeight(10),
    }

});


export default Tabs