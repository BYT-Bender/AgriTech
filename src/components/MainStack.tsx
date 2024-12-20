import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { SplashScreen } from "./screens/SplashScreen";
import { BuyerLoginScreen } from "./screens/BuyerLoginScreen";
import { SellerLoginScreen } from "./screens/SellerLoginScreen";
import { BuyerHomeScreen } from "./screens/BuyerHomeScreen";
import { SellerHomeScreen } from "./screens/SellerHomeScreen";
import { PlaceOrderScreen } from "./screens/PlaceOrderScreen";
import { BidsListScreen } from "./screens/BidsListScreen";
import { LoadingMonitorScreen } from "./screens/LoadingMonitorScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name="BuyerLogin"
                component={BuyerLoginScreen}
                options={{ title: "Buyer Login" }}
            />
            <StackNavigator.Screen
                name="SellerLogin"
                component={SellerLoginScreen}
                options={{ title: "Seller Login" }}
            />
            <StackNavigator.Screen
                name="BuyerHome"
                component={BuyerHomeScreen}
                options={{ title: "Home" }}
            />
            <StackNavigator.Screen
                name="SellerHome"
                component={SellerHomeScreen}
                options={{ title: "Home" }}
            />
            <StackNavigator.Screen
                name="PlaceOrder"
                component={PlaceOrderScreen}
                options={{ title: "Place Order" }}
            />
            <StackNavigator.Screen
                name="BidsList"
                component={BidsListScreen}
                options={{ title: "Bids" }}
            />
            <StackNavigator.Screen
                name="LoadingMonitor"
                component={LoadingMonitorScreen}
                options={{ title: "Loading Monitor" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);