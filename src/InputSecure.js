"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TextInput,
  SafeAreaView,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");
const size = 20;
export default class InputSecureText extends Component {
  static propTypes = {
    containerStyle: PropTypes.any,
    inputStyle: PropTypes.any,
    iconStyle: PropTypes.any,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    iconColor: PropTypes.any,
    iconSize: PropTypes.number,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    label: PropTypes.string,
    labelSize: PropTypes.number,
    labelColor: PropTypes.string,
    keyboardTypeSubmit: PropTypes.oneOf(["next", "done", "send", "none"]),
  };

  static defaultProps = {
    placeholderTextColor: "#48626f",
    iconColor: "#48626f",
    iconSize: 25,
  };
  constructor(props) {
    super(props);
    this.state = {
      showSenha: true,
    };
    this.Y = new Animated.Value(30);
    this.SIZE = new Animated.Value(
      this.props.labelSize ? this.props.labelSize : size
    );
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
    this.props.setPassword && this.props.setPassword(txt);
    if (txt !== null || txt !== "") {
      Animated.timing(this.Y, {
        toValue: this.props.inputStyle.fontSize
          ? this.props.inputStyle.fontSize + 35
          : 40,
        duration: 200,
        asing: Easing.linear,
      }).start();
      Animated.timing(this.SIZE, {
        toValue: this.props.labelSize ? this.props.labelSize / 1.3 : size / 1.3,
        duration: 200,
        asing: Easing.linear,
      }).start();
    }
    if (txt.length === 0) {
      Animated.timing(this.Y, {
        toValue: 20,
        duration: 200,
        asing: Easing.linear,
      }).start();
      Animated.timing(this.SIZE, {
        toValue: this.props.labelSize ? this.props.labelSize : size,
        duration: 200,
        asing: Easing.linear,
      }).start();
    }
  }

  _renderInput() {
    const {
      iconSize,
      containerStyle,
      inputStyle,
      placeholder,
      placeholderTextColor,
      iconColor,
      iconStyle,
      keyboardTypeSubmit,
      password,
      submit,
      label,
      labelSize,
      labelColor,
    } = this.props;
    return (
      <SafeAreaView style={[styles.container, containerStyle]}>
        {label && (
          <Animated.Text
            style={{
              position: "absolute",
              bottom: this.Y,
              fontSize: this.SIZE,
              color: labelColor ? labelColor : "#000",
            }}
          >
            {label}
          </Animated.Text>
        )}
        <TextInput
          autoCorrect={false}
          ref={(ref) => {
            this.input = ref;
          }}
          onSubmitEditing={() => submit && submit()}
          value={password}
          onChangeText={(txt) => this.onChange(txt)}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          secureTextEntry={this.state.showSenha}
          placeholderTextColor={placeholderTextColor}
          autoCapitalize="none"
          returnKeyType={keyboardTypeSubmit}
        />

        <Icon
          name={this.state.showSenha ? "eye-off" : "eye"}
          color={iconColor}
          onPress={() => this.setState({ showSenha: !this.state.showSenha })}
          size={iconSize}
          style={[styles.icon, iconStyle]}
        />
      </SafeAreaView>
    );
  }

  render() {
    return this._renderInput();
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 0,
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
