import React, {useEffect} from 'react'
import {Animated, View, StyleSheet, Text, Easing} from "react-native";
import {COLORS} from "../../constants/Colors";

const HotSticker = (): JSX.Element => {
    const colorValue = new Animated.Value(0)
    const stickerColor = colorValue.interpolate({
        inputRange: [0, 1],
        outputRange: [COLORS.PRIMARY_SECOND, COLORS.PRIMARY_THIRD]
    })

    const animationConfig = {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
    }

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                colorValue,
                animationConfig
            )
        ).start()
    }, [])

    return (
        <View style={styles.container}>
            <Animated.Text
                style={[
                    styles.stickerText,
                    {
                        color: stickerColor
                    }
                ]}
            >
                {'HOT!'}
            </Animated.Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 5,
        width: 45,
        alignItems: "center"
    },
    stickerText: {
        letterSpacing: 0.05,
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default HotSticker
