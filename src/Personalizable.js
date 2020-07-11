import React, { Component } from "react";

import { View, Text, Animated, Easing } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import Aux from "./components/Mask";
const size = 20
export default class Personalizable extends Component{
    static propTypes = {
            ...Text.propTypes,
            submit: PropTypes.func,
            setData: PropTypes.func.isRequired,
            keyboardTypeSubmit: PropTypes.oneOf(['next', 'done', 'send', 'none']),
            data: PropTypes.string,
            masker: PropTypes.string.isRequired,
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

   
    constructor(props){
        super(props)
        this.state = {
            formatted: null
        }
        this.Y = new Animated.Value(30 );
        this.SIZE = new Animated.Value( this.props.labelSize ? this.props.labelSize : size);
       
    }

    


      setNativeProps(nativeProps) {
        this.input.setNativeProps(nativeProps);
      }

    

    set(txt, txtOut) {
        this.setState({ formatted: txt })
        
        if(this.props.setData){
          this.props.extracted ? this.props.setData(txtOut) : this.props.setData(txt);
        }
        // this.props.label && this.onChange(txtOut)
    }

    onChange = () => {
     
      // this.props.setData && this.props.setData(text)
      if (this.state.formatted !== null || this.state.formatted !== ''){
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
     

  }

  onChange2 = () => {
   
    if ( this.state.formatted === null || this.state.formatted === ''){
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

    _renderCep(){
       const {
            submit,
            keyboardTypeSubmit,
            placeholder,
            inputStyle,
            placeholderTextColor,
            autoFocus,
            onFocus,
            onEndEditing,
            masker,
            data,
        } = this.props;
        return (
            <Aux
            onEndEditing={this.onChange2}
            onFocus={this.onChange}
            autoFocus={autoFocus}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={data}
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
            mask={masker}
            keyboardType={"numeric"}
            returnKeyType={keyboardTypeSubmit}
            style={[ styles.input, inputStyle ]}
          />
        );
    }

  render(){
      const { containerStyle, labelColor, label } = this.props;
    return (
        <View style={[ styles.container, containerStyle ]}>
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
           {this._renderCep()}
        </View>

      );
  }


};

