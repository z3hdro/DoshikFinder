import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Text, ScrollView, SafeAreaView} from "react-native";
import {fetchPopularDoshirakData} from "../../mock";
import DoshikCard from "./parts/DoshikCard";
import {Doshik} from "../../types";
import {COLORS} from "../../constants/Colors";
import KingDoshik from "./parts/KingDoshik";

// const greeting = 'Добро пожаловать'
const greeting = 'Welcome'

const HomeScreen = (): JSX.Element => {
    const [popularData, setPopularData] = useState<Doshik[] | []>([])

    useEffect(() => {
        (async () => {
            const data = await fetchPopularDoshirakData()
            setPopularData(data)
        })()
    }, [])

    console.log('popularData: ', popularData)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcomeBox}>
                <Text style={styles.welcomeText}>
                    {greeting}
                </Text>
            </View>
            <View style={styles.horizontalScrollBox}>
                <ScrollView style={styles.popularLineBox} contentContainerStyle={styles.popularLineContent} horizontal>
                    {popularData.length ? popularData.map((doshik, index) => {
                        return (
                            <DoshikCard key={doshik?.name || `doshik_${index}`} doshik={doshik} />
                        )
                    }) : null}
                </ScrollView>
            </View>
            <View style={styles.kingPart}>
                <KingDoshik />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcomeBox: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.PRIMARY
    },
    welcomeText: {
        letterSpacing: 0.05,
        fontSize: 22,
        color: COLORS.WHITE
    },
    horizontalScrollBox: {
        height: 200,
        borderBottomWidth: 1,
        borderColor: COLORS.PRIMARY
    },
    popularLineBox: {
        flex: 1
    },
    popularLineContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    kingPart: {
        height: 250,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen
