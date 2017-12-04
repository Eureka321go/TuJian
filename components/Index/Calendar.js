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
import CalendarObj from "../common/Calendar"
import {Calc} from "../common/Calc";

let intent="in";
class Calendar extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            initialData:[],
            //入住时间
            liveIn:{
                year:new Date().getFullYear(),
                date:new Date().getDate(),
                month:new Date().getMonth()+1
            },
            //离开时间
            liveLeave:{
                year:new Date(new Date().getTime()+86400000).getFullYear(),
                date:new Date(new Date().getTime()+86400000).getDate(),
                month:new Date(new Date().getTime()+86400000).getMonth()+1,
            },

        }

    }
    //获取时间戳
    getTime(obj){
        let date=obj.date?obj.date:"01"
        return new Date(obj.year+"/"+obj.month+"/"+date).getTime()
    }
    componentWillMount(){
        this.setState({
            initialData:CalendarObj
        });
    }
    //列表中的星期
    renderListWeek(){
        return(
            <View style={styles.listWeek}>
                <Text style={styles.listWeekItem}>日</Text>
                <Text style={styles.listWeekItem}>一</Text>
                <Text style={styles.listWeekItem}>二</Text>
                <Text style={styles.listWeekItem}>三</Text>
                <Text style={styles.listWeekItem}>四</Text>
                <Text style={styles.listWeekItem}>五</Text>
                <Text style={styles.listWeekItem}>六</Text>
            </View>
        )
    }
    //日期
    renderDate(v){
        let arr=[];
        let data=v;
        data.data.forEach((vv,kk)=>{
            //今天或者明天就选中状态
            let BgStyle={
                backgroundColor:"transparent",
            };
            let chooseFontStyle={
                color:"#3a3c3c"
            };
            let liveInTime=this.getTime(this.state.liveIn);
            let liveLeaveTime=this.getTime(this.state.liveLeave);
            let currentDate=this.getTime(vv);
            let vText;
            if(currentDate==liveInTime || currentDate==liveLeaveTime){
                 BgStyle={
                    backgroundColor:"#51cdf1",
                }
                 chooseFontStyle={
                    color:"#fff"
                }
            }
            if(vv.Text){
                vText=vv.Text;
            }else{
                if(currentDate==liveInTime){
                       vText="住店"
                }
                if(currentDate==liveLeaveTime){
                    vText="离店"
                }
            }
            arr.push(
                <TouchableOpacity activeOpacity={1} key={kk+"a"} onPress={()=>{this.chooseDate(vv,currentDate,liveInTime,liveLeaveTime)}}>
                    <View  style={styles.listDate}>
                        <View style={[styles.chooseBg,BgStyle]}>
                            <Text allowFontScaling={false} style={[chooseFontStyle]}>{vv.date}</Text>
                        </View>
                        <Text style={styles.listText} allowFontScaling={false}>{vText}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return arr;
    }
    //选择日期
    chooseDate(vv,currentDate,liveInTime,liveLeaveTime){
        if(intent=="in"){
            intent="out";
            this.setState({
                liveIn:vv,
                liveLeave:""
            });
        }else{
            intent="in";
            if(currentDate==liveInTime){
                return;
            }
            if(currentDate<liveInTime){
                let curDate=this.state.liveIn;
                this.setState({
                    liveIn:vv,
                    liveLeave:curDate
                });
                return;
            }
            this.setState({
                liveLeave:vv
            })
        }
    }
    //列表
    renderList(item){
        let v=item;
        return(
            <View  style={styles.listWrap}>
                  {/*头部*/}
                  <View style={styles.listTitle}>
                      <Text allowFontScaling={false} style={styles.titleFont}>{v.info.year+"年"+v.info.month+"月"}</Text>
                  </View>
                  {/*星期*/}
                  {this.renderListWeek()}
                  {/*日期*/}
                  <View style={styles.dateWrap}>
                      {this.renderDate(v)}
                  </View>

            </View>
        )

    }
    render() {
        return (
           <View style={{ backgroundColor: '#fff',flex:1,}}>
               <FlatList
                data={this.state.initialData}
                extraData={this.state}
                renderItem={({item}) => {
                    return(
                        <View>
                            {this.renderList(item)}
                        </View>
                    )
                }}
               />
           </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listWrap:{

    },
    listTitle:{
      alignItems:"center",
      justifyContent:"center",
      marginTop:Calc.getHeight(50),
    },
    titleFont:{
      fontSize:Calc.getFont(16),
      color:"#262626"
    },
//    列表星期
    listWeek:{
        width:Calc.getWidth(750),
       // height:Calc.getHeight(40),
        flexDirection:"row",
        justifyContent:"flex-start",
        marginTop:Calc.getHeight(50),
        marginBottom:Calc.getHeight(30)
    },
    listWeekItem:{
        flex:1,
        textAlign:"center",
        color:"#3a3c3c",
        fontSize:Calc.getFont(16)
    },
//    日期
    dateWrap:{
        flexDirection:"row",
        justifyContent:"flex-start",
        flexWrap:"wrap",
    },
    listDate:{
        width:Calc.getWidth(107),
        alignItems:"center",
        justifyContent:"center",

    },
    chooseBg:{
        alignItems:"center",
        justifyContent:"center",
        width:Calc.getWidth(80),
        height:Calc.getWidth(80),
        borderRadius:100,
    },
    listText:{
        fontSize:Calc.getFont(12),
        color:"#b8bdc2",
        marginTop:Calc.getHeight(10)
    }

});


export default Calendar;