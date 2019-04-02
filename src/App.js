import React from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, Animated, StyleSheet, StatusBar, KeyboardAvoidingView } from "react-native";
import { exampleAction } from "./redux/actions/exampleAction";

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.imageAnimation = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.loop(
            Animated.timing(this.imageAnimation, {
                toValue: 1,
                duration: 1005
            })
        ).start();

        StatusBar.setBarStyle("light-content");
    }

    render() {
        const rotationStyle = {
            transform: [
                {
                    rotate: this.imageAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "360deg"]
                    })
                }
            ]
        };

        return (
            <KeyboardAvoidingView style={styles.app} behavior="padding" enabled>
                <View style={styles.appHeader}>
                    <Animated.Image
                        style={[styles.headerImage, rotationStyle]}
                        resizeMode={"contain"}
                        source={require("./assets/react-logo.png")}
                    />
                    <Text style={styles.appTitle}>Welcome to React Native Web️</Text>
                    <Text style={styles.appSubtitle}>Redux edition</Text>
                </View>
                <View style={{ alignItems: "center", flex: 3 }}>
                    <View style={styles.appIntro}>
                        <Text>To get started, edit src/App.js and save to reload.</Text>
                    </View>
                    <View style={styles.appIntro}>
                        <Text style={styles.appIntroText}>{this.props.example.text || 'Enter Example Text Below to Modify the Redux Store'}</Text>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={((text) => {
                                this.props.exampleAction(text)
                            }).bind(this)}
                        />
                    </View>
                </View>
                <Text>Redux edition</Text>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
    example: state.example
});

const bindActions = dispatch => ({
    exampleAction: (text) => {
        dispatch(exampleAction(text))
    }
});
  
export default connect(mapStateToProps, bindActions)(App);

const styles = StyleSheet.create({
    app: {
        flex: 1
    },
    appHeader: {
        flex: 1,
        backgroundColor: "#222",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    headerImage: {
        width: 200,
        height: 200,
        flex: 3
    },
    appTitle: {
        flex: 1,
        fontSize: 16,
        color: "white"
    },
    appSubtitle: {
        color: "white"
    },
    appIntro: {
        flex: 3,
        alignContent: "center"
    },
    appIntroText: {
        fontSize: 30
    }
});
