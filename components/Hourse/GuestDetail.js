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
    ScrollView,
} from 'react-native';
import {connect} from "react-redux";
let commonJS=global.CommonJS;
let Calc=global.Calc;

class HeaderRight extends Component<{}>{
    render(){
        return(
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{marginRight:Calc.getWidth(60)}} activeOpacity={1}>
                    <Image style={[styles.collectIcon]} source={require("../../assets/images/common/collect_noDet.png")}/>
                </TouchableOpacity>

                <TouchableOpacity style={{marginRight:Calc.getWidth(24)}} activeOpacity={1}>
                    <View >
                        <Image style={styles.collectIcon} source={require("../../assets/images/index/message.png")}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class GuestDetail extends Component<{}> {
    constructor(props) {
        super(props)

    }
    static navigationOptions({navigation}){
        return{
            headerRight:<HeaderRight/>
        }
    }
    //头部图片
    renderTop(){
        return(
            <View style={styles.TopWrap}>
                <TouchableOpacity activeOpacity={1} style={{marginRight:Calc.getWidth(20)}}>
                    <Image style={styles.TopLeftImg} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513785908776&di=18378ddcb1048b85af713edebd9d93bc&imgtype=0&src=http%3A%2F%2Fwww.jswzs.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20150625%2F1435226368469531.jpg"}}/>
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <TouchableOpacity activeOpacity={1} style={{marginBottom:Calc.getHeight(20)}}>
                        <Image style={[styles.TopRighgImg]} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513785908776&di=18378ddcb1048b85af713edebd9d93bc&imgtype=0&src=http%3A%2F%2Fwww.jswzs.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20150625%2F1435226368469531.jpg"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}>
                        <Image style={styles.TopRighgImg} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513785908776&di=18378ddcb1048b85af713edebd9d93bc&imgtype=0&src=http%3A%2F%2Fwww.jswzs.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20150625%2F1435226368469531.jpg"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize:Calc.getFont(12),color:"#3a3c3c"}}>查看更多</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <ScrollView style={styles.container} alwaysBounceVertical={false}>
                {/*头部图片*/}
                {this.renderTop()}
            </ScrollView>
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
    collectIcon:{
        width:Calc.getWidth(44),
        height:Calc.getHeight(42)
    },
//    图片展示
    TopWrap:{
        height:Calc.getWidth(482),
        flexDirection:"row",
    },
    TopLeftImg:{
        width:Calc.getWidth(482),
        height:Calc.getWidth(482),
        borderRadius:6,
    },
    TopRighgImg:{
        width:Calc.getWidth(200),
        height:Calc.getWidth(200),
        borderRadius:6,
    },

});


export default connect()(GuestDetail);