import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcon, FeatherIcon} from "../components/TabBarIcon";
import {HomeScreen} from "../screens/HomeScreen";
import {COLORS} from "../constants/Colors";
import {RootTabParamList} from "./types";

const EmptyScreen = () => (<>{null}</>)

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const MainTabNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.PRIMARY
                },
                headerTintColor: COLORS.WHITE,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                tabBarActiveTintColor: COLORS.PRIMARY,
                tabBarInactiveTintColor: COLORS.SECONDARY,
            }}>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcon name="noodles" color={color} />
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({ color }) => <FeatherIcon name="search" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Settings"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({ color }) => <FeatherIcon name="settings" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

export default MainTabNavigator
