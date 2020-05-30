import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';

// import { Container } from './styles';
const size = 30
class AnimatedLabel extends Component {
    constructor(props) {
        super(props);
        this.Y = new Animated.Value(30 );
this.SIZE = new Animated.Value( this.props.labelSize ? this.props.labelSize : size);
    }


   onChange = (text) => {
        console.log(text);
        // this.props.setData && this.props.setData(text)
        if (text !== null || text !== ''){
          Animated.timing(this.Y, {
              toValue: this.props.inputStyle ? this.props.inputStyle.fontSize + 30 : 40 ,
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
          Animated.timing(SIZE, {
              toValue:this.props.labelSize ? this.props.labelSize : size,
              duration: 200,
              asing: Easing.linear,
          }).start();
        }
      
    }
    render() {
        const {label, labelColor} = this.props;
        return (
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
              );
    }
 
}

export default AnimatedLabel;