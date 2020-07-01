import React, { Component } from "react";

import { View, Text, Animated, Easing } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import Aux from "./components/Mask";
const size = 20
export default class CpfCnpj extends Component{

    constructor(props){
        super(props)
        this.state = {
            formatted: null,
            masker: "[000].[000].[000]-[00]"
        }
        this.Y = new Animated.Value(30 );
        this.SIZE = new Animated.Value( this.props.labelSize ? this.props.labelSize : size);

    }

      setNativeProps(nativeProps) {
        this.input.setNativeProps(nativeProps);
      }

    format(value) {
    if (value.length < 15 ) {
      this.setState({ masker: "[000].[000].[000]-[000]" })
    }
    if (value.length > 14 ) {
      this.setState({ masker: "[00].[000].[000]/[0000]-[00]" })
    }

    this.props.label && this.onChange(value)
    return value;
    }

    onChange = (text) => {
      console.log(text);
      // this.props.setData && this.props.setData(text)
      if (text !== null || text !== ''){
        Animated.timing(this.Y, {
            toValue: this.props.inputStyle ? this.props.inputStyle.fontSize + 40 : 55 ,
            duration: 200,
            asing: Easing.linear,
        }).start();
        Animated.timing( this.SIZE, {
            toValue: this.props.labelSize ? this.props.labelSize / 1.3 : size / 1.3,
            duration: 200,
            asing: Easing.linear,
        }).start();
      }
      if ( text.length === 0){
        Animated.timing(this.Y, {
            toValue: 30,
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
 

    set(txt, txtOut) {
        this.setState({ formatted: this.format(txt) })
        if(this.props.setData){
          this.props.extracted ? this.props.setData(txtOut) : this.props.setData(txt);
        }
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

    _renderInput(){
       const {
            submit,
            keyboardTypeSubmit,
            placeholder,
            inputStyle,
            placeholderTextColor,
            autoFocus,
            onFocus,
            onEndEditing,
            ...otherProps
        } = this.props;
        return (
            <Aux
            onEndEditing={onEndEditing}
            onFocus={onFocus}
            autoFocus={autoFocus}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={this.state.formatted}
            onSubmitEditing={() =>
              submit && submit()
            }
            ref={ref => {
                this.input = ref;
              }}
            onChangeText={(formatted, extracted) => {
              console.log(formatted); // +1 (123) 456-78-90
              console.log(extracted); // 1234567890


              this.set(formatted, extracted);
            }}
            mask={this.state.masker}
            keyboardType={"numeric"}
            returnKeyType={keyboardTypeSubmit}
            style={[ styles.input, inputStyle ]}
            {...otherProps}
          />
        );
    }

  render(){
      const { containerStyle, label, labelColor } = this.props;
    return (
        <View style={[ styles.container, containerStyle]}>
           <Animated.Text
              style={{
                  position: 'absolute',
                  bottom: this.Y,
                  fontSize: this.SIZE,
                  color: labelColor ? labelColor : '#000',
              }}
              >
              {label}
            </Animated.Text>
           {this._renderInput()}
        </View>

      );
  }


};


CpfCnpj.propTypes = {
  ...Text.propTypes,
  cpf: PropTypes.bool,
  cnpj: PropTypes.bool,
  submit: PropTypes.func,
  setData: PropTypes.func.isRequired,
  keyboardTypeSubmit: PropTypes.oneOf(['next', 'done', 'send', 'none']),
  placeholder: PropTypes.string,
  inputStyle: PropTypes.any,
  containerStyle: PropTypes.any,
  placeholderTextColor: PropTypes.string,
  autoFocus: PropTypes.func,
  onFocus: PropTypes.func,
  onEndEditing: PropTypes.func,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  labelSize: PropTypes.number,
  extracted: PropTypes.bool,
}



