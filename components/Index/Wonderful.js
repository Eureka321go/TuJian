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
    FlatList
} from 'react-native';
import {connect} from "react-redux";
import  {Calc} from "../common/Calc"
import Carousel from 'react-native-snap-carousel';
import Star from "../common/Star"

class Wonderful extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            entries:["item1","item2","item3"],  //顶部轮播数组
            teSeSwiper:["item","item","item"],  //特色风格轮播
            youXuanList:[{key:"item"}],//优选列表
        }
    }
    //顶部轮播
    renderSwiper({item,index}){
        return (
            <View>
                <Image style={{width:Calc.getWidth(622),height:Calc.getHeight(311)}} source={require("../../assets/images/index/swiper1.png")}/>
            </View>
        );
    }
    //特色风格轮播的slider
    renderTeSeSlider(){
        return(
            <View>
                <Image style={{width:Calc.getWidth(330),height:Calc.getWidth(330)}} source={require("../../assets/images/index/teSe.png")}/>
                <Text style={{fontSize:15,color:"#3a3c3c", marginTop:Calc.getHeight(50), marginBottom:Calc.getHeight(40)}}>海边美屋</Text>
            </View>
        )
    }
    //特色风格轮播
    renderTeSeSwiper(){
        return(
           <View>
               <Text style={styles.title}>特色风格</Text>
               {/*特色轮播*/}
               <Carousel
                   ref={(c) => { this._teSeSwiper = c; }}
                   data={this.state.teSeSwiper}
                   renderItem={this.renderTeSeSlider}
                   sliderWidth={Calc.getWidth(726)}
                   itemWidth={Calc.getWidth(330)}
                   itemHeight={Calc.getWidth(330)}
                   inactiveSlideScale={1}
                   slideStyle={styles.smallSlider}
                   firstItem={1}
                   containerCustomStyle={[styles.swiperContainer,{marginLeft:Calc.getWidth(24)}]}
               />
           </View>
        )
    }
    //优选列表
    renderYouXuanItem(item){
        return(
            <View style={styles.allPadding}>
                <View style={styles.yXImgWrap}>
                    <Image style={styles.youXuanListImg} source={require("../../assets/images/index/youXuanList.png")}/>
                </View>
                <Text style={{fontSize:18,color:"#262626",marginTop:Calc.getHeight(20),marginBottom:Calc.getHeight(16)}}>三亚名宿清晰名宿含早1室0厅1卫</Text>
                <Star score={3.8}/>
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
                   renderItem={this.renderSwiper}
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
                   <Text style={{fontSize:18,color:"#262626"}}>优选推荐</Text>
                   <Text style={{fontSize:15,color:"#3a3c3c"}}>更多</Text>
               </View>
               {/*优选推荐列表*/}
               <FlatList
                 data={this.state.youXuanList}
                 renderItem={this.renderYouXuanItem}
               />
           </View>
        );
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
        fontSize:18,
        color:"#262626",
        marginTop:Calc.getHeight(50),
        marginBottom:Calc.getHeight(40),
        paddingLeft:Calc.getWidth(24)
    },
    line:{
        width:Calc.getWidth(702),
        height:1,
        marginLeft:"auto",
        marginRight:"auto",
        backgroundColor:"#d9e1e9"
    },
    //优选列表
    //列表大图容器
    yXImgWrap:{
        width:Calc.getWidth(702),
        height:Calc.getHeight(351),

    },
    //列表大图
    youXuanListImg:{
        width:Calc.getWidth(702),
        height:Calc.getHeight(351),
    }
});


export default Wonderful;