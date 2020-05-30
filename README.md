# react-native-mix
Document Mask for React Native on iOS and Android.

## Based on

react-native-text-input-mask

Como usar:

## Setup

```shell

npm i react-native-mix

yarn add react-native-mix

```


# Installation

<details>
  <summary><b>For RN >= 0.61</b></summary>

#### iOS

1. Add following lines to your target in `Podfile`

```
use_frameworks!
pod 'RNInputMask', :path => '../node_modules/react-native-mix/ios/InputMask'
```

2. Run following command

```bash
npx pod-install
```

#### Android

No need to do anything.

</details>

<details>
  <summary><b>For RN = 0.60.*</b></summary>

#### iOS

1. In XCode, in the project navigator, right click your `[your project's name]` folder, choose ➜ `Add Files to [your project's name]`

![Create Swift File](https://i.imgur.com/00K5UZ1.png)

2. Select `Swift File` ➜ `Next`

![Create Swift File](https://i.imgur.com/Mdc9MLk.png)

3. Specify name for example `Dummy.swift` ➜ `Create`

![Create Swift File](https://i.imgur.com/2HSk7Jp.png)

4. Now a pop up is shown select `Create Bridging Header`

![Create Swift File](https://i.imgur.com/f2zA0n9.png)

5. Add following line to your target in `Podfile`
```
pod 'RNInputMask', :path => '../node_modules/react-native-mix/ios/InputMask'
```
6. Run following command
```bash
cd ios && pod install
```

#### Android

No need to do anything.

</details>

<details><summary><b>For RN < 0.60</b></summary>

### Auto Linking
```bash
react-native link react-native-mix
```

**iOS only:** you have to drag and drop `InputMask.framework` to `Embedded Binaries` in General tab of Target

![](https://cdn-images-1.medium.com/max/2000/1*J0TPrRhkAKspVvv-JaZHjA.png)

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-mix` and add `RNMix.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNMix.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.RNMix.RNMixPackage;` to the imports at the top of the file
  - Add `new RNMixPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-mix'
  	project(':react-native-mix').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-mix/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-mix')
  	```
</details>


- Mix: Essa biblioteca é para entradas de documentos, senhas e textos comuns. Você pode optar por usar apenas um tipo de mascara ou as duas ao mesmo tempo no input,
  mas a ideia é usar as duas ao mesmo tempo para flexibilizar o trabalho do desenvolvedor e o do usuário.
  Você também insere senhas com a opção de ocultar e mostrar a senha com ícone ou apenas textos normais.
  Tudo isso com uma label animada que só essa biblioteca tem.

Exemplo de uso para os dois tipos documentos ao mesmo tempo:

```js
        <CpfCnpj
            label="CPF / CNPJ"
            setData={setDataExample}
            submit={() => secondTextInputRef.current.focus()}
            containerStyle={{ width: "100%" }}
            keyboardTypeSubmit="next"
            placeholderTextColor="#48626f"
            inputStyle={{
                color: "#48626f",
                borderBottomColor: "#48626f",
            }}
        />
```
Exemplo de uso somente para CPF:

```js

import { CpfCnpj } from 'react-native-mix';

        <Cpf
            label="CPF"
            setData={setDataExample}
            submit={() => secondTextInputRef.current.focus()}
            containerStyle={{ width: "100%" }}
            keyboardTypeSubmit="next"
            placeholderTextColor="#48626f"
            inputStyle={{
                color: "#48626f",
                borderBottomColor: "#48626f",
            }}
        />
```
Exemplo de uso somente para CNPJ:

```js

import { CpfCnpj } from 'react-native-mix';

        <Cnpj
            label="CNPJ"
            setData={setDataExample}
            submit={() => secondTextInputRef.current.focus()}
            containerStyle={{ width: "100%" }}
            keyboardTypeSubmit="next"
            cnpj
            placeholderTextColor="#48626f"
            inputStyle={{
                color: "#48626f",
                borderBottomColor: "#48626f",
            }}
        />
```

Exemplo de uso somente para RG:

```js

import { Rg } from 'react-native-mix';

        <Rg
            label="RG"
            setData={setDataExample}
            submit={() => secondTextInputRef.current.focus()}
            containerStyle={{ width: "100%" }}
            keyboardTypeSubmit="next"
            placeholderTextColor="#48626f"
            inputStyle={{
                color: "#48626f",
                borderBottomColor: "#48626f",
            }}
        />
```

Exemplo de uso somente para CEP:

```js

import { Cep } from 'react-native-mix';

        <Cep
            label="CEP"
            setData={setDataExample}
            submit={() => secondTextInputRef.current.focus()}
            containerStyle={{ width: "100%" }}
            keyboardTypeSubmit="next"
            placeholderTextColor="#48626f"
            inputStyle={{
                color: "#48626f",
                borderBottomColor: "#48626f",
            }}
        />
```

Exemplo de uso somente para SENHA:

```js

import { InputSecureText } from 'react-native-mix';

        <InputSecureText
            label="SENHA"
            setData={setDataExample}
            submit={() => secondTextInputRef.current.focus()}
            containerStyle={{ width: "100%" }}
            keyboardTypeSubmit="next"
            placeholderTextColor="#48626f"
            inputStyle={{
                color: "#48626f",
                borderBottomColor: "#48626f",
            }}
        />
```

Exemplo de uso somente para ENTRADA DE TEXTO COMUM:

```js

import { Input } from 'react-native-mix';

        <Input
            label="TEXTO COMUM"
            setData={setDataExample}
            submit={() => secondTextInputRef.current.focus()}
            containerStyle={{ width: "100%" }}
            keyboardTypeSubmit="next"
            placeholderTextColor="#48626f"
            inputStyle={{
                color: "#48626f",
                borderBottomColor: "#48626f",
            }}
        />
```
