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
    RefreshControl
} from 'react-native';
import {connect} from "react-redux";
import Swipeout from 'react-native-swipeout';

let Calc=global.Calc;

class MsgDiscount extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            list:[
                {key:1,id:1},
                {key:2,id:2},
                {key:3,id:3},
                {key:4,id:4},
            ],
            isRefreshing:false,
        }

    }
    renderDeleteBtn(){
        return(
            <View style={styles.delBtn}>
                <Image style={styles.delImg} source={require("../../assets/images/message/delete.png")}/>
            </View>
        )
    }
    renderDeletaOpt(){
        return{
            component: this.renderDeleteBtn(),
            backgroundColor:"#50cdf1",
            underlayColor:"#50cdf1",
            onPress(){
              alert(11)
            },
        }
    }
    renderItem(){
        return(
             <Swipeout right={[this.renderDeletaOpt()]}
                            backgroundColor={"#fff"}
                            buttonWidth={Calc.getWidth(182)}
                  >
                      <View style={styles.item}>
                          <View style={styles.itemImgWrap}>
                              <Image  style={styles.itemImg} source={require("../../assets/images/message/msg.png")}/>
                              <View style={styles.newMessage} ></View>
                          </View>
                          <View style={styles.itemRightWrap}>
                              <Text numberOfLines={1} style={styles.itemTitle}>送你一张优惠券</Text>
                              <Text numberOfLines={1} style={styles.itemText}>如果你无法简洁的表达你的想法,那只能说明你还很稚嫩。那只能说明你还很稚嫩那只能说明你还很稚嫩</Text>
                              <Text numberOfLines={1} style={styles.itemTime}>10月11日 12：08</Text>
                          </View>
                      </View>
                  </Swipeout>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                   data={this.state.list}
                   renderItem={({item}) =>{return this.renderItem()}}
                   keyExtractor={(item, index) => item.id}
                   refreshControl={
                       <RefreshControl
                           refreshing={this.state.isRefreshing}
                           onRefresh={this._onRefresh.bind(this)}
                       />
                   }
                />
            </View>
        );
    }
    _onRefresh(){
        let self=this;
        self.setState({
            isRefreshing:true
        })
        setTimeout(()=>{
            self.setState({
                isRefreshing:false
            })
        },1000)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft:Calc.getWidth(24),
    },
    item:{
        height:Calc.getHeight(180),
        width:Calc.getWidth(750),
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#fff",
        borderBottomWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9",
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
    },
    itemImgWrap:{
        position:"relative",
        marginRight:Calc.getWidth(30),
    },
    itemImg:{
        width:Calc.getWidth(100),
        height:Calc.getWidth(100)
    },
    newMessage:{
        position:"absolute",
        top:0,
        right:0,
        width:Calc.getWidth(10),
        height:Calc.getWidth(10),
        backgroundColor:"#f96b8e",
        borderRadius:99
    },
    itemTitle:{
        fontSize:Calc.getFont(16),
        color:"#3a3c3c",
    },
    itemRightWrap:{
        paddingRight:Calc.getWidth(182)
    },
    delBtn:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    delImg:{
        width:Calc.getWidth(42),
        height:Calc.getWidth(42),
    },
    itemText:{
        fontSize:Calc.getFont(12),
        color:"#3a3c3c",
        marginTop:Calc.getHeight(20),
    },
    itemTime:{
        fontSize:Calc.getFont(12),
        color:"#b8bdc2",
        marginTop:Calc.getHeight(10),
    }
});


export default MsgDiscount;