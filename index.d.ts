/* Type definitions for react-native-qrcode-scanner 1.1.0
 * Definitions by: Jan Hesters <https://github.com/janhesters/>
 * If you modify this file, put your GitHub info here as well (for easy contacting purposes)
 */
import { Component } from "react";
import { ViewStyle, StyleProp, TextStyle } from "react-native";


//Mask for CPF and CNPJ.

export interface RNMaskCpfCnpj {


        containerStyle?: StyleProp<ViewStyle>;

        inputStyle?: StyleProp<TextStyle>;
        placeholder?: string;
        placeholderTextColor?: string;
        cpf?: boolean;
        cnpj?: boolean;
        label?: string;
        labelColor:? string;
        labelSize:? number;
        keyboardTypeSubmit?: 'next' | 'done' | 'send' | 'none';
        /* A aparência do botão de submit */
        autoFocus(e: Event): void;
        onFocus(e: Event): void;
        submit(e: Event): void;
        setData(e: Event): void;
        submit(e: Event): void;
}



export interface RNMaskCpfCnpjState {
  readonly formatted: boolean;
  readonly masker: any;
}

export class CpfCnpj extends React.Component<RNMaskCpfCnpj, any> {}


export interface RNMaskCpf {


  containerStyle?: StyleProp<ViewStyle>;

  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
  cpf?: boolean;
  cnpj?: boolean;
  label?: string;
  labelColor:? string;
  labelSize:? number;
  keyboardTypeSubmit?: 'next' | 'done' | 'send' | 'none';
  /* A aparência do botão de submit */
  autoFocus(e: Event): void;
  onFocus(e: Event): void;
  submit(e: Event): void;
  setData(e: Event): void;
  submit(e: Event): void;
}



export interface RNMaskCpfState {
readonly formatted: boolean;
readonly masker: any;
}

export class Cpf extends React.Component<RNMaskCpf, any> {}


export interface RNMaskCnpj {


  containerStyle?: StyleProp<ViewStyle>;

  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
  cpf?: boolean;
  cnpj?: boolean;
  label?: string;
  labelColor:? string;
  labelSize:? number;
  keyboardTypeSubmit?: 'next' | 'done' | 'send' | 'none';
  /* A aparência do botão de submit */
  autoFocus(e: Event): void;
  onFocus(e: Event): void;
  submit(e: Event): void;
  setData(e: Event): void;
  submit(e: Event): void;
}



export interface RNMaskCnpjState {
readonly formatted: boolean;
readonly masker: any;
}

export class Cnpj extends React.Component<RNMaskCnpj, any> {}


//Mask for CEP


export interface RNMaskCep {
  containerStyle?: StyleProp<ViewStyle>;

  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
  cpf?: boolean;
  cnpj?: boolean;
  label: string,
  labelSize: number,
  labelColor: string,
  keyboardTypeSubmit?: 'next' | 'done' | 'send' | 'none';
  /* A aparência do botão de submit */
  autoFocus(e: Event): void;
  onFocus(e: Event): void;
  submit(e: Event): void;
  setData(e: Event): void;
  submit(e: Event): void;
}



export interface RNMaskCepState {
readonly formatted: boolean;
readonly masker: any;
}

export class MaskCep extends Component<RNMaskCep, RNMaskCepState> {
_renderCep(): JSX.Element | null;
}


//Mask for RG

export interface RNMaskRg {
  containerStyle?: StyleProp<ViewStyle>;

  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
  cpf?: boolean;
  cnpj?: boolean;
  label: string,
  labelSize: number,
  labelColor: string,
  keyboardTypeSubmit?: 'next' | 'done' | 'send' | 'none';
  /* A aparência do botão de submit */
  autoFocus(e: Event): void;
  onFocus(e: Event): void;
  submit(e: Event): void;
  setData(e: Event): void;
  submit(e: Event): void;
}



export interface RNMaskRgState {
readonly formatted: boolean;
readonly masker: any;
}

export class MaskRg extends Component<RNMaskRg, RNMaskRgState> {
_renderRg(): JSX.Element | null;
}


export interface RNSecureTextProps {
  containerStyle: StyleProp<ViewStyle>,
  inputStyle: StyleProp<TextStyle>,
  placeholder: string,
  placeholderTextColor: JSX.Element | string,
  iconColor: string,
  label: string,
  labelSize: number,
  labelColor: string,
  iconSize: JSX.Element | string,
  password: string,
  setPassword(e: Event): void,
  submit(e: Event): void,
}



export interface RNSecureTextState {
readonly showSenha: boolean;
}

export  class InputSecureText extends Component<RNSecureTextProps, RNSecureTextState> {
_renderInput(): JSX.Element | null;
}

export interface RNInputProps {
  containerStyle: StyleProp<ViewStyle>,
  inputStyle: StyleProp<TextStyle>,
  placeholder: string,
  placeholderTextColor: JSX.Element | string,
  iconColor: string,
  label: string,
  labelSize: number,
  labelColor: string,
  iconSize: JSX.Element | string,
  password: string,
  keyboardTypeSubmit?: 'next' | 'done' | 'send' | 'none';
  setPassword(e: Event): void,
  submit(e: Event): void,
}



export interface RNInputState {
readonly showSenha: boolean;
}

export class Input extends Component<RNInputProps, RNInputState> {
_renderInput(): JSX.Element | null;
}