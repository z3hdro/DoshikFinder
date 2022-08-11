import React, {FC, useMemo} from 'react'
import {View, StyleSheet} from "react-native";
import {MaterialCommunityIcon} from "../TabBarIcon";
import {COLORS} from "../../constants/Colors";
import {HotBarProps} from "./types";

const HotBar: FC<HotBarProps> = ({ level = 0 }) => {
    const qty = useMemo(() => {
        return [...Array(level).keys()]
    }, [level])

    return (
        <View style={styles.container}>
            {qty.map((num) => (
                <MaterialCommunityIcon key={`fire_${num}`} name={'fire'} color={COLORS.PRIMARY} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})

export default HotBar
