

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import  {Calc} from "./common/Calc"

class Message extends Component<{}> {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrap}>
                    <Text style={{textAlign:"center",fontSize:18,color:"#262626"}}>消息</Text>
                </View>
                <ScrollView style={{flex:1,marginTop:Calc.getHeight(20)}}>
                    <TouchableOpacity activeOpacity={1}>
                        <View style={styles.listWrap}>
                            <View style={styles.list}>
                                <View style={styles.leftWrap}>
                                    <Image  style={styles.listIcon} source={require("../assets/images/message/msg.png")}/>
                                </View>
                                <View style={styles.rightWrap}>
                                    <Text numberOfLines={1} style={styles.listTitle}>优惠折扣</Text>
                                    <Text numberOfLines={1} style={styles.listText}>[周四特卖] 这些房子都"白菜价"</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}>
                        <View style={styles.listWrap}>
                            <View style={[styles.list2]}>
                                <View style={styles.leftWrap}>
                                    <Image  style={styles.listIcon} source={require("../assets/images/message/sysMsg.png")}/>
                                </View>
                                <View style={styles.rightWrap}>
                                    <Text numberOfLines={1} style={styles.listTitle}>系统消息</Text>
                                    <Text numberOfLines={1} style={styles.listText}>如果你无法简洁的表达你的想法，那就只能说明你还</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    headerWrap:{
        width:Calc.getWidth(750),
        height:Calc.getHeight(88),
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    listWrap:{
        width:Calc.getWidth(750),
        backgroundColor:"#fff",
        height:Calc.getHeight(180),
        paddingLeft:Calc.getWidth(24),
        paddingRight:Calc.getWidth(24),
    },
    list:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:0.5,
        borderColor:"#d8e3e8"
    },
    list2:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    leftWrap:{
        paddingLeft:Calc.getWidth(10),
        marginRight:Calc.getWidth(30)
    },
    rightWrap:{
        flex:1,
    },
    listIcon:{
        width:Calc.getWidth(100),
        height:Calc.getWidth(100)
    },
    listTitle:{
        fontSize:16,
        color:"#3a3c3c"
    },
    listText:{
        fontSize:12,
        color:"#b8bdc2",
        marginTop:Calc.getHeight(20)
    }

});


export default Message;