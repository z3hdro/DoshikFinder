import React, {FC} from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {MaterialCommunityIconProps} from "./types";

const MaterialCommunityIcon: FC<MaterialCommunityIconProps> = (props): JSX.Element => {
    const { size = 24 } = props
    return <MaterialCommunityIcons size={size} style={{ marginBottom: -3 }} {...props} />
}

export default MaterialCommunityIcon
