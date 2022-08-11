import React from "react";
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";

interface TabBarIcon {
    color: string
}

export interface FeatherIconProps extends TabBarIcon {
    name: React.ComponentProps<typeof Feather>['name'];
}

export interface MaterialCommunityIconProps extends TabBarIcon {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    size?: number
}
