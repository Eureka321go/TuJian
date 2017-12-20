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
    //客房描述
    renderDescribe(){
        return(
            <View style={styles.descriptWrap}>
                <Text style={{fontSize:Calc.getFont(19),color:"#262626"}}>湖上美景公寓</Text>
                <View style={{flexDirection:"row",marginTop:Calc.getHeight(20)}}>
                    <View style={styles.tagBieSuWrap}>
                        <Text style={styles.tagBieSu}>别墅</Text>
                    </View>
                    <View  style={styles.tagShiPaiWrap}>
                        <Text style={styles.tagShiPai}>实拍</Text>
                    </View>
                </View>
            </View>
        )
    }
    //用户详情
    renderCat(){
        return(
          <TouchableOpacity activeOpacity={1}>
              <View style={styles.catWrap}>
                  <View style={{marginRight:Calc.getWidth(30)}}>
                      <Image style={styles.catUser} source={require("../../assets/images/my/userImg.png")}/>
                  </View>
                  <View style={{flex:1}}>
                      <Text numberOfLines={1} style={styles.catTitle}>花与海的夏天海景公寓</Text>
                      <Text style={styles.catStyle}>商户业主</Text>
                  </View>
                  <Image style={{width:Calc.getWidth(15),height:Calc.getHeight(26)}} source={require("../../assets/images/common/listArrow.png")}/>
              </View>
          </TouchableOpacity>
        )
    }
    render() {
        return (
            <ScrollView style={styles.container} alwaysBounceVertical={false}>
                {/*头部图片*/}
                {this.renderTop()}
                {/*客房描述*/}
                {this.renderDescribe()}
                {/*用户详情*/}
                {this.renderCat()}
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
//    描述
    descriptWrap:{
        paddingTop:Calc.getHeight(40),
        paddingBottom:Calc.getHeight(50),
        borderBottomWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9"
    },
    tagBieSuWrap:{
        height:Calc.getHeight(40),
        backgroundColor:"#97d2ec",
        marginRight:Calc.getWidth(10),
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
        borderRadius:Calc.getWidth(6),
        alignItems:"center",
        justifyContent:"center"
    },
    tagShiPaiWrap:{
        height:Calc.getHeight(40),
        backgroundColor:"#f4fafd",
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
        borderRadius:Calc.getWidth(6),
        alignItems:"center",
        justifyContent:"center"
    },
    tagBieSu:{
        color:"#fff",
    },
    tagShiPai:{
        color:"#97d2ec",
    },
//    商户信息
    catWrap:{
        height:Calc.getHeight(182),
        flexDirection:"row",
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
        alignItems:"center",
        borderBottomWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9"
    },
    catUser:{
      width:Calc.getWidth(100),
      height:Calc.getWidth(100),
    },
    catTitle:{
       fontSize:Calc.getFont(16),
        color:"#262626"
    },
    catStyle:{
        fontSize:Calc.getFont(12),
        color:"#b8bdc2",
        marginTop:Calc.getHeight(10),
    }

});


export default connect()(GuestDetail);