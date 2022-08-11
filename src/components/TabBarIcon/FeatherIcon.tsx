import React, {FC} from "react";
import { Feather } from '@expo/vector-icons';
import {FeatherIconProps} from "./types";

const FeatherIcon: FC<FeatherIconProps> = (props): JSX.Element => (
    <Feather size={24} style={{ marginBottom: -3 }} {...props} />
)

export default FeatherIcon
