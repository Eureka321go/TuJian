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
    FlatList,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import  {Calc} from "../common/Calc"
import Carousel from 'react-native-snap-carousel';
import Star from "../common/Star"
let CommonJS=global.CommonJS;

class Wonderful extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            entries:[],  //顶部轮播数组
            teSeSwiper:[],  //特色风格轮播
            youXuanList:[],//优选列表,数组中的数据注意要key
        }
    }
    //顶部轮播
    renderSwiper({item,index}){
        return (
            <TouchableOpacity activeOpacity={1} onPress={()=>{
                this.props.navigation.navigate("GuestDetail")
            }}>
                <View>
                    <Image style={{width:Calc.getWidth(622),height:Calc.getHeight(311)}} source={{uri:item.cover}}/>
                </View>
            </TouchableOpacity>
        );
    }
    //特色风格轮播的slider
    renderTeSeSlider(v){
        return(
            <View>
                <Image style={{width:Calc.getWidth(330),height:Calc.getWidth(330)}} source={{uri:v.item.cover}}/>
                <Text allowFontScaling={false}  style={{fontSize:Calc.getFont(15),color:"#3a3c3c", marginTop:Calc.getHeight(50), marginBottom:Calc.getHeight(40)}}>{v.item.name}</Text>
            </View>
        )
    }
    //特色风格轮播
    renderTeSeSwiper(){
        return(
           <View>
               <Text allowFontScaling={false}  style={styles.title}>特色风格</Text>
               {/*特色轮播*/}
               <Carousel
                   ref={(c) => { this._teSeSwiper = c; }}
                   data={this.state.teSeSwiper}
                   renderItem={this.renderTeSeSlider}
                   sliderWidth={Calc.getWidth(750)}
                   itemWidth={Calc.getWidth(330)}
                   itemHeight={Calc.getWidth(330)}
                   inactiveSlideScale={1}
                   slideStyle={styles.smallSlider}
                   firstItem={1}
                   containerCustomStyle={[styles.swiperContainer]}
               />
           </View>
        )
    }
    //渲染收藏图标
    renderCollection(self,item){
        function clickIcon() {
            let arr=self.state.youXuanList;
            let isTrue=item.item.isCollected?true:false;
            let isRental=item.item.isRental?"house_rental":"house_sell";
            CommonJS.$axios.get({
                url:"/operate?module="+isRental+"&moduleId="+item.item.id+"&type=collect&cancel="+isTrue
            }).then((ret)=>{
                if(ret.data && ret.data.success){
                    arr[item.index].isCollected=!isTrue;
                    self.setState({
                        youXuanList:arr
                    })
                    return;
                }
                CommonJS.toastShow(ret.data.msg,{
                    visible:true,
                })
            })

        }
        if(item.item.isCollected){
            return (
                <TouchableOpacity activeOpacity={1} style={styles.collectionIcon} onPress={()=>{clickIcon()}}>
                    <Image  style={styles.Icon} source={require("../../assets/images/common/collection.png")}/>
                </TouchableOpacity>
            )
        }else{
            return (
                <TouchableOpacity activeOpacity={1} style={styles.collectionIcon} onPress={()=>{clickIcon()}}>
                    <Image  style={styles.Icon} source={require("../../assets/images/common/collection_no.png")}/>
                </TouchableOpacity>
            )
        }
    }
    //优选列表
    renderYouXuanItem(item){
        return(
            <View style={[styles.allPadding,{marginBottom:Calc.getHeight(50)}]}>
                <View style={styles.yXImgWrap}>
                    <Image style={styles.youXuanListImg} source={{uri:item.item.coverBig}}/>
                    {/*收藏图标*/}
                    {this.renderCollection(this,item)}
                </View>
                <Text allowFontScaling={false}  style={{fontSize:Calc.getFont(18),color:"#262626",marginTop:Calc.getHeight(20),marginBottom:Calc.getHeight(16)}}>{item.item.name}</Text>
                <Star score={item.item.point}/>
                {/*实拍，免押金*/}
                <View style={{flexDirection:"row",marginTop:Calc.getHeight(20)}}>
                    <View allowFontScaling={false}  style={styles.mianYaJin}>
                        <Text allowFontScaling={false}  style={{ color:"#fff", fontSize:Calc.getFont(12),}}>免押金</Text>
                    </View>
                    <View style={styles.shiPai}>
                        <Text allowFontScaling={false}  style={{ color:"#97d2ec", fontSize:Calc.getFont(12),}}>实拍</Text>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
           <View style={{backgroundColor:"#fff"}}>
               {/*顶部轮播*/}
               <Carousel
                   ref={(c) => { this._carousel = c; }}
                   data={this.state.entries}
                   renderItem={this.renderSwiper.bind(this)}
                   sliderWidth={Calc.getWidth(750)}
                   sliderHeight={Calc.getHeight(311)}
                   itemWidth={Calc.getWidth(622)}
                   itemHeight={Calc.getHeight(311)}
                   firstItem={1}
                   containerCustomStyle={styles.swiperContainer}
               />
               {/*特色轮播*/}
               {this.renderTeSeSwiper()}
               {/*分割线*/}
               <Text style={styles.line}></Text>
               {/*优选推荐*/}
               <View style={[styles.allPadding,{flexDirection:"row",justifyContent:"space-between",marginTop:Calc.getHeight(50),marginBottom:Calc.getHeight(40)}]}>
                   <Text allowFontScaling={false}  style={{fontSize:Calc.getFont(18),color:"#262626"}}>优选推荐</Text>
                   <Text allowFontScaling={false}  style={{fontSize:Calc.getFont(15),color:"#3a3c3c"}}>更多</Text>
               </View>
               {/*优选推荐列表*/}
               <FlatList
                 data={this.state.youXuanList}
                 renderItem={this.renderYouXuanItem.bind(this)}
                 extraData={this.state}
               />
           </View>
        );
    }
    //轮播数据
    fetchLunbo(){
        let self=this;
        CommonJS.$axios.get({
            url:"/carousel?module=途见首页"
        }).then((ret)=>{
            if(ret.data && ret.data.success){
                this.setState({
                    entries:ret.data.data
                })
                return;
            }
            CommonJS.toastShow(ret.data.msg,{
                visible:true,
            })
        })
    }
    //精彩的特色风格
    fetchTeSe(){
        let self=this;
        CommonJS.$axios.get({
            url:"/house/ctg"
        }).then((ret)=>{
            if(ret.data && ret.data.success){
                this.setState({
                    teSeSwiper:ret.data.data
                })
                return;
            }
            CommonJS.toastShow(ret.data.msg,{
                visible:true,
            })
        })
    }
    //优选推荐
    fetchYouXuan(){
        let self=this;
        CommonJS.$axios.get({
            url:"/house/recommend"
        }).then((ret)=>{
            if(ret.data && ret.data.success){
                let arr=[];
                ret.data.data.forEach((v,k)=>{
                   v.key=k;
                   arr.push(v);
                });
                 this.setState({
                     youXuanList:arr
                 })
                return;
            }
            CommonJS.toastShow(ret.data.msg,{
                visible:true,
            })
        })
    }
    componentDidMount(){
        this.fetchLunbo();
        this.fetchTeSe();
        this.fetchYouXuan()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    allPadding:{
        paddingLeft:Calc.getWidth(24),
        paddingRight:Calc.getWidth(24)
    },
    //特色每个slider
    smallSlider:{
        marginRight:Calc.getWidth(20)
    },
    //轮播容器样式
    swiperContainer:{
        flexGrow: 0,
    },
    //特色轮播下面标题
    title:{
        fontSize:Calc.getFont(18),
        color:"#262626",
        marginTop:Calc.getHeight(50),
        marginBottom:Calc.getHeight(40),
        paddingLeft:Calc.getWidth(24)
    },
    line:{
        width:Calc.getWidth(702),
        height:Calc.getBorder(1),
        marginLeft:"auto",
        marginRight:"auto",
        backgroundColor:"#d9e1e9"
    },
    //优选列表
    //列表大图容器
    yXImgWrap:{
        width:Calc.getWidth(702),
        height:Calc.getHeight(351),
        borderRadius:6
    },
    collectionIcon:{
        position:"absolute",
        top:Calc.getHeight(30),
        right:Calc.getWidth(30),
        width:Calc.getWidth(50),
        height:Calc.getWidth(50),
    },
    Icon:{
        width:Calc.getWidth(48),
        height:Calc.getWidth(48),
    },
    //列表大图
    youXuanListImg:{
        width:Calc.getWidth(702),
        height:Calc.getHeight(351),
    },
    //免押金
    mianYaJin:{
        backgroundColor:"#97d2ec",
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
        paddingTop:Calc.getHeight(10),
        paddingBottom:Calc.getHeight(10),
        borderRadius:3
    },
    shiPai:{
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
        paddingTop:Calc.getHeight(10),
        paddingBottom:Calc.getHeight(10),
    }

});


export default connect()(Wonderful);