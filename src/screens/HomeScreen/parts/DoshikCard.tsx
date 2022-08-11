import React, {FC} from 'react'
import {StyleSheet, View, Text, Image} from "react-native";
import {COLORS} from "../../../constants/Colors";
import {HotBar} from "../../../components/HotBar";
import {DoshikCardProps} from "../types";
import {HotSticker} from "../../../components/HotSticker";

const DoshikCard: FC<DoshikCardProps> = ({ doshik }): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: doshik.assetUri || ' ' }}
                resizeMode={'contain'}
            />
            <View style={styles.descriptionBox}>
                <Text numberOfLines={1} style={styles.description}>
                    {doshik.name}
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                {doshik.sticker === 'hot' && (
                    <HotSticker />
                )}
                {doshik.level > 0 && (
                    <HotBar level={doshik.level}/>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: COLORS.PRIMARY,
        marginHorizontal: 10,
        height: 170,
        width: 170,
        borderRadius: 15,
        backgroundColor: COLORS.WHITE
    },
    image: {
        height: 120,
        width: 170,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    descriptionBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        color: COLORS.BLACK,
        fontSize: 16,
        letterSpacing: 0.025,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    stickerBox: {
        borderWidth: 1,
        justifyContent: 'flex-end'
    }
})

export default DoshikCard
