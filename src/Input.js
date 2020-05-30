'use strict';

import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput, SafeAreaView, Text, Animated, Easing, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height} = Dimensions.get('window');
const size = 10
export default class Input extends Component {
    
    static propTypes = {
        containerStyle: PropTypes.any,
        inputStyle: PropTypes.any,
        iconStyle: PropTypes.any,
        placeholder: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        iconColor: PropTypes.any,
        iconSize: PropTypes.number,
        setData: PropTypes.func.isRequired,
        submit: PropTypes.func.isRequired,
        label: PropTypes.string,
        labelSize: PropTypes.number,
        labelColor: PropTypes.string
    }

  
    constructor(props) {
        super(props);
        this.state = {
            value: true,
        };
        this.Y = new Animated.Value(10 );
        this.SIZE = new Animated.Value( this.props.labelSize ? this.props.labelSize : size);
    }

    focus() {
        this.input.focus();
      }

      blur() {
        this.input.blur();
      }

      clear() {
        this.input.clear();
      }

      isFocused() {
        return this.input.isFocused();
      }

      onChange(txt) {
          console.log(txt);
        this.props.setPassword && this.props.setPassword(txt)
          if (txt !== null || txt !== ''){
            Animated.timing(this.Y, {
                toValue: this.props.inputStyle ? this.props.inputStyle.fontSize + 20 : 40 ,
                duration: 200,
                asing: Easing.linear,
            }).start();
            Animated.timing( this.SIZE, {
                toValue: this.props.labelSize ? this.props.labelSize / 1.3 : size / 1.3,
                duration: 200,
                asing: Easing.linear,
            }).start();
          } 
          if ( txt.length === 0){
            Animated.timing(this.Y, {
                toValue: 10,
                duration: 200,
                asing: Easing.linear,
            }).start();
            Animated.timing(this.SIZE, {
                toValue:this.props.labelSize ? this.props.labelSize : size,
                duration: 200,
                asing: Easing.linear,
            }).start();
          }
        
      }

    _renderInput(){
        const {
            iconSize,
            containerStyle,
            inputStyle,
            placeholder,
            placeholderTextColor,
            password,
            submit,
            label,
            labelColor,
        } = this.props
        return (

             <SafeAreaView style={[styles.container, containerStyle]}>
                { label && <Animated.Text 
                    style={{
                        position: 'absolute',
                        bottom: this.Y,
                        fontSize: this.SIZE,
                        color: labelColor ? labelColor : '#000',
                    }}
                 >
                     {label}
                 </Animated.Text>}
                <TextInput
                    autoCorrect={false}
                    ref={ref => {
                        this.input = ref;
                      }}
                    onSubmitEditing={() => submit && submit()}
                    value={this.state.value}
                    onChangeText={ txt => this.onChange(txt)}
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize="none"
                />

            </SafeAreaView>


        );
    }

    render() {
        return (

            this._renderInput()

        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: width,
        flex: 0
    },
    input: {
        borderBottomColor: "#48626f",
        width: "100%",
        borderBottomWidth: 2,
        fontSize: 10,
        flex: 0,
        
    },
    icon: {
        position: "absolute",
        right: 0,
    },
});

