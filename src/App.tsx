import * as React from "react";
import {
    Animated,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default class App extends React.Component {
    private imageAnimation: Animated.Value;

    constructor(props: any) {
        super(props);

        this.imageAnimation = new Animated.Value(0);
    }

    public componentDidMount() {
        Animated.loop(
            Animated.timing(this.imageAnimation, {
                duration: 1005,
                toValue: 1,
            }),
        ).start();

        StatusBar.setBarStyle("light-content");
    }

    public render() {
        const rotationStyle = {
            transform: [
                {
                    rotate: this.imageAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "360deg"],
                    }),
                },
            ],
        };

        return (
            <View style={styles.app}>
                <View style={styles.appHeader}>
                    <Animated.Image
                        style={[styles.headerImage, rotationStyle]}
                        resizeMode={"contain"}
                        source={require("./assets/react-logo.png")}
                    />
                    <Text style={styles.appTitle}>Welcome to React Native Web</Text>
                    <Text style={styles.appSubtitle}>Typescript Edition</Text>
                </View>
                <View style={{ alignItems: "center", flex: 3 }}>
                    <Text style={styles.appIntro}>
                        To get started, run "yarn watch", then edit src/App.tsx and save to reload.
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
    },
    appHeader: {
        alignItems: "center",
        backgroundColor: "#222",
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    appIntro: {
        flex: 3,
        fontSize: 30,
        textAlign: "center",
    },
    appSubtitle: {
        color: "white",
    },
    appTitle: {
        color: "white",
        flex: 1,
        fontSize: 16,
    },
    headerImage: {
        flex: 3,
        height: 200,
        width: 200,
    },
});
