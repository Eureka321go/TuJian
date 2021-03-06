
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
import  "./common/storage"
import "./common/Common"
import "../redux/action"
let storage=global.storage
let CommonJS=global.CommonJS
let allActionsFun=global.allActionsFun;


class My extends Component<{}> {
    constructor(props) {
        super(props)
    }
    //渲染积分收益余额
    renderMoney(){
        let bonusPoints;//积分
        let repay;//收益
        let balance;//余额
        if(!this.props.token || !this.props.userInfo || !this.props.userInfo.user || !this.props.userInfo.user.bonusPoints){
            bonusPoints=0
        }else{bonusPoints=this.props.userInfo.user.bonusPoints}
        if(!this.props.token || !this.props.userInfo || !this.props.userInfo.user || !this.props.userInfo.user.repay){
            repay=0
        }else{repay=this.props.userInfo.user.repay}
        if(!this.props.token || !this.props.userInfo || !this.props.userInfo.user || !this.props.userInfo.user.balance){
            balance=0
        }else{balance=this.props.userInfo.user.repay}

        return(
            <View style={styles.tabWrap}>
                <TouchableOpacity style={styles.tabOpWrap} activeOpacity={1} onPress={()=>{this.jumpScore()}}>
                    <View style={styles.tab}>
                        <View style={styles.scoreWrap}>
                            <Text allowFontScaling={false}  style={styles.score}>{bonusPoints}</Text>
                            <Text allowFontScaling={false}  style={styles.scoreName}>分</Text>
                        </View>
                        <Text allowFontScaling={false}  style={styles.describe}>积分</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabOpWrap} activeOpacity={1} onPress={()=>{this.jumpScore()}}>
                    <View style={styles.tab}>
                        <View style={styles.scoreWrap}>
                            <Text allowFontScaling={false}  style={styles.score}>{repay}</Text>
                            <Text allowFontScaling={false}  style={styles.scoreName}>元</Text>
                        </View>
                        <Text allowFontScaling={false}  style={styles.describe}>收益</Text>
                        {/*线条*/}
                        <Text allowFontScaling={false}  style={styles.lfLine}></Text>
                        <Text allowFontScaling={false} style={styles.RfLine}></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabOpWrap} activeOpacity={1} onPress={()=>{this.jumpScore()}}>
                    <View style={styles.tab}>
                        <View style={styles.scoreWrap}>
                            <Text allowFontScaling={false}  style={styles.score}>{balance}</Text>
                            <Text allowFontScaling={false}  style={styles.scoreName}>元</Text>
                        </View>
                        <Text allowFontScaling={false}  style={styles.describe}>余额</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    //积分收益余额的跳转
    jumpScore(){
        alert("跳转到积分or收益or余额")
    }
    //渲染我的页面的列表
    renderList(){
        return(
            <View style={styles.listWrap}>
                <TouchableOpacity activeOpacity={0.9}>
                    <View style={styles.list}>
                        <Image style={styles.teQuan} source={require("../assets/images/my/p_privilege.png")}/>
                        <Text allowFontScaling={false}  style={styles.listText}>特权</Text>
                        <Text allowFontScaling={false}  style={styles.listDescribe}>积分</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}>
                    <View style={styles.list}>
                        <Image style={styles.shouCang} source={require("../assets/images/my/p_collection.png")}/>
                        <Text allowFontScaling={false}  style={styles.listText}>收藏</Text>
                        <Text allowFontScaling={false}  style={styles.listDescribe}>我的收藏</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}>
                    <View style={styles.list}>
                        <Image style={styles.diZhi} source={require("../assets/images/my/p_location.png")}/>
                        <Text allowFontScaling={false}  style={styles.listText}>地址</Text>
                        <Text allowFontScaling={false}  style={styles.listDescribe}>收货地址</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}>
                    <View style={styles.list}>
                        <Image style={styles.fuWu} source={require("../assets/images/my/p_service.png")}/>
                        <Text allowFontScaling={false}  style={styles.listText}>客服</Text>
                        <Text allowFontScaling={false}  style={styles.listDescribe}>24小时客服</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}>
                    <View style={styles.list}>
                        <Image style={styles.youHui} source={require("../assets/images/my/p_discount.png")}/>
                        <Text allowFontScaling={false}  style={styles.listText}>优惠券</Text>
                        <Text allowFontScaling={false}  style={styles.listDescribe}>优惠享不停</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}>
                    <View style={styles.list}>
                        <Image style={styles.youHui} source={require("../assets/images/my/p_mall.png")}/>
                        <Text allowFontScaling={false}  style={styles.listText}>商城</Text>
                        <Text allowFontScaling={false}  style={styles.listDescribe}>积分换礼</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    //用户头像
    renderUserImg(){
        if( !this.props.token ||!this.props.userInfo || !this.props.userInfo.user|| !this.props.userInfo.user.headImgUrl){
            return (
                <TouchableOpacity activeOpacity={1}onPress={()=>{this.isLogin()}}>
                    <Image style={styles.userImg} source={require("../assets/images/my/userImg.png")}/>
                </TouchableOpacity>
            )
        }else{
            return (
                <TouchableOpacity activeOpacity={1}onPress={()=>{this.isLogin()}}>
                    <Image style={styles.userImg} source={{uri:this.props.userInfo.user.headImgUrl}}/>
                </TouchableOpacity>
            )
        }
    }
    //设置
    jumpSetting(){
        if(this.props.token){
            this.props.navigation.navigate("Setting")
        }else{
            CommonJS.toastShow("请先登录",{
                position:0
            })
        }
    }
    //点击用户头像是跳转登录还是个人资料
    isLogin(){
       if(!this.props.token){
           this.props.navigation.navigate("Login");
       }else{
           this.props.navigation.navigate("Profile");
       }

    }
    //是否卖方或者会员
    renderSeller(){
        if(!this.props.token){
            return "注册送新人300优惠券"
        }
        if(this.props.userInfo){
            if(this.props.userInfo.user.isSeller){
                return "业主"
            }else if(this.props.userInfo.user.isMember){
                return "普通会员"
            }else{
                return "普通会员"
            }
        }
    }
    //昵称
    renderNickName(){
        if(!this.props.token){
            return "登录|注册"
        }
        if(this.props.userInfo){
            return this.props.userInfo.user.nickname?this.props.userInfo.user.nickname:"匿名"
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ParallaxView
                    backgroundSource={require("../assets/images/my/banner.png")}
                    windowHeight={Calc.getHeight(352)}
                    header={(
                        <View style={styles.topWrap}>
                            {/*设置图标*/}
                            <TouchableOpacity style={styles.settingIconWrap}  onPress={()=>{this.jumpSetting()}} activeOpacity={0.9}>
                                <Image style={styles.settingIcon} source={require("../assets/images/my/settingIcon.png")}/>
                            </TouchableOpacity>
                            {/*用户信息*/}
                            <View style={styles.userInfo}>
                                 <View style={styles.userImgWrap}>
                                     {this.renderUserImg()}
                                 </View>
                                 <View style={{flex:1,marginRight:Calc.getWidth(50)}}>
                                     <Text allowFontScaling={false}  style={styles.userName} numberOfLines={1}>{this.renderNickName()}</Text>
                                     <Text allowFontScaling={false}  style={styles.userType} numberOfLines={1}>{this.renderSeller()}</Text>
                                 </View>
                            </View>
                            {/*我的银行卡*/}
                            <TouchableOpacity style={styles.cardWrap} onPress={()=>{alert(1)}} activeOpacity={0.9}>
                                <View style={styles.MyCard}>
                                    <Image style={styles.cardImg} source={require("../assets/images/my/card.png")}/>
                                    <Text allowFontScaling={false}  style={styles.cardText}>我的银行卡</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                >
                <View>
                    {/*3个tab*/}
                    {this.renderMoney()}
                    {/*渲染列表*/}
                    {this.renderList()}
                </View>
                </ParallaxView>
            </View>
        );
    }
    //请求
    fetch(){
        let self=this;
        CommonJS.$axios.get({
            url:"/user",
        }).then((ret)=>{
            if(ret.data && ret.data.success){
                self.props.dispatch(allActionsFun.userInfoAction(ret.data.data));
                return;
            }
            self.props.navigation.navigate("Login");

        })
    }
    componentWillMount(){
        if(this.props.token){
            this.fetch()
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    topWrap:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        height:Calc.getHeight(332)
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
        width:Calc.getWidth(750),
    },
    userImgWrap:{
        width:Calc.getWidth(140),
        height:Calc.getWidth(140),
        borderRadius:Calc.getWidth(80),
        overflow:"hidden",
        marginLeft:Calc.getWidth(80),
        marginRight:Calc.getWidth(40),
        borderWidth:Calc.getBorder(1),
        borderColor:"#fff"
    },
    userImg:{
        width:Calc.getWidth(140),
        height:Calc.getWidth(140),
    },
    userName:{
        fontSize:Calc.getFont(16),color:"#fff"
    },
    userType:{
        fontSize:Calc.getFont(12),
        color:"#fff",
        marginTop:Calc.getHeight(12)
    },
    cardWrap:{
        position:"absolute",
        bottom:Calc.getHeight(60),
        right:-Calc.getWidth(30),
        zIndex:10,
        flex:1,
        borderRadius:Calc.getWidth(30),
        backgroundColor:"#51cdf1",
        height:Calc.getHeight(60),
        paddingLeft:Calc.getWidth(20),
        paddingRight:Calc.getWidth(50),
    },
    MyCard:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },
    cardText:{
        fontSize:Calc.getFont(12),color:"#fff",flex:1
    },
    cardImg:{
        width:Calc.getWidth(40),
        height:Calc.getHeight(30),
        marginRight:Calc.getWidth(10)
    },
    //三个Tab
    tabWrap:{
        flex:1,
        height:Calc.getHeight(200),
        borderBottomWidth:Calc.getHeight(20),
        borderColor:"#f5f5f5",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    tab:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    tabOpWrap:{
        flex:1,
    },
    scoreWrap:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    score:{
        fontSize:Calc.getFont(21),
        color:"#3a3a3a"
    },
    scoreName:{
        fontSize:Calc.getFont(12),
        color:"#3a3a3a"
    },
    describe:{
        textAlign:"center",
        fontSize:Calc.getFont(12),
        color:"#b8bdc2",
        marginTop:Calc.getHeight(10)
    },
    lfLine:{
        position:"absolute",
        top:Calc.getHeight(62),
        left:0,
        width:1,
        height:Calc.getHeight(76),
        backgroundColor:"#d9e1e9"
    },
    RfLine:{
        position:"absolute",
        top:Calc.getHeight(62),
        right:0,
        width:1,
        height:Calc.getHeight(76),
        backgroundColor:"#d9e1e9"
    },
    //列表
    listWrap:{
        flexDirection:"row",
        flexWrap:"wrap"
    },
    list:{
        width:Calc.getWidth(250),
        height:Calc.getWidth(250),
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        borderRightWidth:Calc.getBorder(1),
        borderBottomWidth:Calc.getBorder(1),
        borderColor:"#f5f5f5"
    },
    teQuan:{
        width:Calc.getWidth(62),
        height:Calc.getWidth(44),
    },
    listText:{
        textAlign:"center",
        fontSize:Calc.getFont(15),
        color:"#3a3c3c",
        marginTop:Calc.getHeight(10)
    },
    listDescribe:{
        fontSize:Calc.getFont(12),
        color:"#b8bdc2",
        marginTop:Calc.getHeight(10),
    },
    shouCang:{
        width:Calc.getWidth(48),
        height:Calc.getWidth(44),
    },
    diZhi:{
        width:Calc.getWidth(43),
        height:Calc.getWidth(46),
    },
    fuWu:{
        width:Calc.getWidth(46),
        height:Calc.getWidth(46),
    },
    youHui:{
        width:Calc.getWidth(48),
        height:Calc.getWidth(46),
    }
});

function select(state){
    return{
        token:state.getToken,
        userInfo:state.getUserInfo
    }
}
export default connect(select)(My);