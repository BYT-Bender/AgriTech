import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type SplashScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Splash">;
};

export function SplashScreen({ navigation }: SplashScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-3xl font-bold mb-8">
                AgriTech B2B Marketplace
            </label>
            <button
                className="bg-green-600 text-white p-4 rounded-lg mb-4 w-64 text-center"
                onTap={() => navigation.navigate("BuyerLogin")}
            >
                Login as Buyer
            </button>
            <button
                className="bg-blue-600 text-white p-4 rounded-lg w-64 text-center"
                onTap={() => navigation.navigate("SellerLogin")}
            >
                Login as Seller
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4"
    }
});