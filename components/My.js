
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import {connect} from "react-redux";
import  {Calc} from "./common/Calc"
import ParallaxView from "./common/ParallaxView"

class My extends Component<{}> {
    constructor(props) {
        super(props)

    }

    render() {
        //const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <ParallaxView
                    backgroundSource={require("../assets/images/my/banner.png")}
                    windowHeight={Calc.getHeight(352)}
                    header={(
                        <View style={styles.topWrap}>
                            {/*设置图标*/}
                            <TouchableOpacity style={styles.settingIconWrap}  onPress={()=>{alert(11)}}>
                                <Image style={styles.settingIcon} source={require("../assets/images/my/settingIcon.png")}/>
                            </TouchableOpacity>
                            {/*用户信息*/}
                            <View style={styles.userInfo}>
                                <View style={styles.userImgWrap}>
                                    <Image style={styles.userImg} source={require("../assets/images/my/userImg.jpg")}/>
                                </View>
                                <View style={{flex:1,marginRight:Calc.getWidth(50)}}>
                                    <Text style={{fontSize:16,color:"#fff" }} numberOfLines={1}>洛杉矶的猫洛杉矶的猫洛杉矶的猫洛杉矶的猫洛杉矶的猫洛杉矶的猫洛杉矶的猫洛杉矶的猫洛杉矶的猫洛杉矶的猫</Text>
                                    <Text style={{fontSize:12,color:"#fff",marginTop:Calc.getHeight(12)}} numberOfLines={1}>业主</Text>
                                </View>
                            </View>
                            {/*我的银行卡*/}

                        </View>
                    )}

                >

                </ParallaxView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topWrap:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
    },
    settingIconWrap:{
        position:"absolute",
        top:Calc.getHeight(60),
        right:Calc.getWidth(44),
    },
    settingIcon:{
        width:Calc.getWidth(37),
        height:Calc.getWidth(37),
        zIndex:10
    },
    userInfo:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        width:Calc.getWidth(750)
    },
    userImgWrap:{
        width:Calc.getWidth(140),
        height:Calc.getWidth(140),
        borderRadius:Calc.getWidth(80),
        overflow:"hidden",
        marginLeft:Calc.getWidth(80),
        marginRight:Calc.getWidth(40)
    },
    userImg:{
        width:Calc.getWidth(140),
        height:Calc.getWidth(140),
    },

});


export default My;