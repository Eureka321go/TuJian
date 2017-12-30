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
    Modal
} from 'react-native';
import {connect} from "react-redux";
import Gallery from 'react-native-image-gallery';
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
        this.state={
            photoSwipeShow:false,
            initShow:0,//初始化显示第几个图片预览
        }
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
                <TouchableOpacity activeOpacity={1} style={{marginRight:Calc.getWidth(20)}} onPress={()=>{this.setState({photoSwipeShow:true, initShow:0})}}>
                    <Image style={styles.TopLeftImg} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513785908776&di=18378ddcb1048b85af713edebd9d93bc&imgtype=0&src=http%3A%2F%2Fwww.jswzs.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20150625%2F1435226368469531.jpg"}}/>
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <TouchableOpacity activeOpacity={1} style={{marginBottom:Calc.getHeight(20)}} onPress={()=>{this.setState({photoSwipeShow:true, initShow:1})}}>
                        <Image style={[styles.TopRighgImg]} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513785908776&di=18378ddcb1048b85af713edebd9d93bc&imgtype=0&src=http%3A%2F%2Fwww.jswzs.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20150625%2F1435226368469531.jpg"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{this.setState({photoSwipeShow:true, initShow:2})}}>
                        <Image style={styles.TopRighgImg} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513785908776&di=18378ddcb1048b85af713edebd9d93bc&imgtype=0&src=http%3A%2F%2Fwww.jswzs.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20150625%2F1435226368469531.jpg"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={{flex:1,alignItems:"center",justifyContent:"center"}} onPress={()=>{
                        this.setState({
                            photoSwipeShow:true
                        });
                    }}>
                        <Text style={{fontSize:Calc.getFont(12),color:"#3a3c3c"}}>查看更多</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    //图片预览
    renderPhotoSwipe(){
        return(
            <Modal visible={this.state.photoSwipeShow} transparent={true}>
                <View style={{flex:1,backgroundColor:"#000"}}>
                    <Gallery
                        style={{ flex: 1, backgroundColor: 'black' }}
                        initialPage={this.state.initShow}
                        images={[
                            { source: { uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' } },
                            { source: { uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' } },
                            { source: { uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' } },
                            { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                        ]}
                        onSingleTapConfirmed={()=>{this.setState({photoSwipeShow:false})}}
                    />
                </View>
            </Modal>
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
                  <View style={{marginRight:Calc.getWidth(30),borderRadius:99,overflow:"hidden"}}>
                      <Image style={styles.catUser} source={require("../../assets/images/index/youXuanList.png")}/>
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
    //租客评价
    renderEvaluate(){
        return(
            <View style={styles.evalBigWrap}>
                <Text style={styles.evalTitle}>租客评价</Text>
                <View style={styles.evalWRap}>
                    <View style={styles.evalImgWrap}>
                        <Image style={styles.evalUserImg} source={require("../../assets/images/index/youXuanList.png")}/>
                    </View>
                    <View style={{flex:1,justifyContent:"center"}}>
                        <Text numberOfLines={1} style={styles.evalName}>时光不老</Text>
                        <Text numberOfLines={1} style={styles.evalText}>评分5.0 10月1日 12:42</Text>
                    </View>
                </View>
                <View style={styles.evalContWrap}>
                    <Text style={styles.evalContent}>老板人很好，服务周到，房间有韵味特别喜欢下次还来。独家好房推荐哦！</Text>
                </View>
                <View style={styles.moreDataWrap}>
                    <TouchableOpacity activeOpacity={1}>
                        <Text style={styles.moreData}>更多评论</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    //房屋描述
    renderHouseDiscribe(){
        return(
            <View style={styles.renderHouseDiscribe}>
                <Text style={styles.houseDiscribeTitle}>房屋详情</Text>
                <Text style={styles.discribeText}>4室2厅 宜住8人 2大床4小床</Text>
                <Text style={[styles.houseDiscribeTitle,{marginTop:Calc.getHeight(60)}]}>房屋描述</Text>
                <Text style={styles.discribeText}>公寓位于大东海旅游区核心位置，出门即是海滩。公寓内种植很多热带花草，三角梅，石榴还有一个...</Text>
                <View>
                    <View style={styles.moreDataWrap}>
                        <TouchableOpacity activeOpacity={1}>
                            <Text style={styles.moreData}>查看全部</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    //设施
    renderFacility(){
       return(
           <View style={styles.facilityWrap}>
               <Text style={styles.facilityTitle}>服务设施</Text>
           </View>
       )
    }
    render(){
        return (
            <View style={{flex:1}}>
                <ScrollView style={styles.container} alwaysBounceVertical={false}>
                    {/*头部图片*/}
                    {this.renderTop()}
                    {/*图片预览*/}
                    {this.renderPhotoSwipe()}
                    {/*客房描述*/}
                    {this.renderDescribe()}
                    {/*用户详情*/}
                    {this.renderCat()}
                    {/*租客评价*/}
                    {this.renderEvaluate()}
                    {/*房屋描述*/}
                    {this.renderHouseDiscribe()}
                    {/*设施*/}
                    {this.renderFacility()}
                </ScrollView>
                {/*底部预订*/}
                <View style={styles.botWrap}>
                    <TouchableOpacity style={styles.botLeftWRap}>
                        <View style={styles.botLeftContWrap}>
                            <Image
                                source={require("../../assets/images/index/phone.png")}
                                style={styles.phone}
                            />
                            <Text style={styles.phoneText}>电话</Text>
                            <Text style={styles.botleftLine}></Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.botRightWRap}>

                    </View>
                </View>
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
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
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
    },
    //租客评价
    evalTitle:{
        fontSize:Calc.getFont(18),
        color:"#262626",
        marginTop:Calc.getHeight(50),
        marginBottom:Calc.getHeight(40)
    },
    evalWRap:{
        flexDirection:"row",
    },
    evalUserImg:{
        width:Calc.getWidth(80),
        height:Calc.getWidth(80),
    },
    evalBigWrap:{
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
        paddingBottom:Calc.getHeight(50),
        borderBottomWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9",
    },
    evalName:{
        fontSize:Calc.getFont(15),
        color:"#b8bdc2"
    },
    evalText:{
        fontSize:Calc.getFont(12),
        color:"#b8bdc2",
        marginTop:Calc.getHeight(8),
    },
    evalImgWrap:{
        marginRight:Calc.getWidth(20),
        borderRadius:999,
        overflow:"hidden",
        width:Calc.getWidth(80),
        height:Calc.getWidth(80),
        justifyContent:"flex-start"
    },
    evalContWrap:{
        paddingLeft:Calc.getWidth(100),
        marginTop:Calc.getHeight(30),
    },
    evalContent:{
        fontSize:Calc.getFont(15),
        color:"#3a3c3c",
    },
//    房屋描述
    renderHouseDiscribe:{
        paddingBottom:Calc.getHeight(50),
        paddingTop:Calc.getHeight(50),
        borderBottomWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9",
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
    },
    houseDiscribeTitle:{
        fontSize:Calc.getFont(18),
        color:"#262626",
        marginBottom:Calc.getHeight(30),
    },
    discribeText:{
        fontSize:Calc.getFont(15),
        color:"#3a3c3c",
    },
    //更多类型按钮
    moreData:{
        fontSize:Calc.getFont(15),
        color:"#3a3c3c",
        borderWidth:Calc.getBorder(1),
        borderColor:"#d5dadc",
        borderRadius:Calc.getWidth(6),
        paddingTop:Calc.getHeight(15),
        paddingBottom:Calc.getHeight(15),
        paddingLeft:Calc.getWidth(30),
        paddingRight:Calc.getWidth(30),
    },
    moreDataWrap:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:Calc.getHeight(50),
    },
//    设施
    facilityWrap:{
        paddingBottom:Calc.getHeight(50),
        paddingTop:Calc.getHeight(50),
        borderBottomWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9",
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
    },
    facilityTitle:{
        fontSize:Calc.getFont(18),
        color:"#262626",
        marginBottom:Calc.getHeight(30),
    },
    //底部预订
    botWrap:{
        flexDirection:"row",
        height:Calc.getHeight(98),
        width:Calc.getWidth(750),
        backgroundColor:"#fff",
        borderTopWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9",
    },
    phone:{
        width:Calc.getWidth(42),
        height:Calc.getWidth(42),
    },
    botLeftWRap:{
        width:Calc.getWidth(133),
    },
    botLeftContWrap:{
        position:"relative",
        alignItems:"center",
        flex:1,
        justifyContent:"center",
        flexDirection:"column",
    },
    botRightWRap:{
        flex:1,
    },
    phoneText:{
        fontSize:Calc.getFont(12),
        color:"#3a3c3c",
        marginTop:Calc.getWidth(6),
    },
    botleftLine:{
        position:"absolute",
        width:Calc.getWidth(1),
        height:Calc.getHeight(52),
        backgroundColor:"#d9e1e9",
        top:Calc.getHeight(23),
        right:0,
    }

});


export default connect()(GuestDetail);