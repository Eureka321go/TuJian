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
    Image
} from 'react-native';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Calc} from "./Calc"
class Star extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            starArr:[]
        }
    }
    static propTypes={
        score:PropTypes.number  //校验传过来的类型
    }
    componentWillMount(){
        let {score} = this.props;
        let intNum=Math.floor(score);
        let decimal=score-intNum;
        let Arr=new Array();
        let Arrkey=0;
        for(let i=0;i<intNum;i++){
            Arrkey=i;
            Arr.push(
                <Image key={i} style={styles.star} source={require("../../assets/images/common/starAll.png")}/>
            );
        }
        if(decimal<0.8){
            Arr.push(
                <Image key={Arr.length} style={styles.star} source={require("../../assets/images/common/halfStar.png")}/>
            );
        }else{
            Arr.push(
                <Image key={Arr.length} style={styles.star} source={require("../../assets/images/common/starAll.png")}/>
            );
        }
        let s=5-Arr.length;
        if(s>0){
            let n=5-s;
            for(let a=0;a<n;a++){
                Arr.push(
                    <Image key={Arr.length} style={styles.star} source={require("../../assets/images/common/startNo.png")}/>
                );
            }
        }
        this.setState({
            starArr:Arr
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.starArr}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    star:{
        width:Calc.getWidth(32),
        height:Calc.getHeight(30),
        marginRight:Calc.getWidth(10)
    }
});


export default Star