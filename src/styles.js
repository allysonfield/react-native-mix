import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width: width,
        flex: 0,
    },
    input: {
        borderBottomWidth: 2,
        fontSize: 18,
        width: "100%",
        height: 50,
        flex: 0,
    }
})
