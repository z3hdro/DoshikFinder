import React, {useEffect} from 'react'
import {View, StyleSheet, Text} from "react-native";
import {MaterialCommunityIcon} from "../../../components/TabBarIcon";
import {COLORS} from "../../../constants/Colors";

const KingDoshik = (): JSX.Element => {
    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.crown}>
                <MaterialCommunityIcon size={66} name={'shield-crown-outline'} color={COLORS.PRIMARY} />
            </View>
            <Text>
                King
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    crown: {
        marginVertical: 10,
    }
})

export default KingDoshik
