import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { LoginForm } from "../auth/LoginForm";

type SellerLoginScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "SellerLogin">;
};

export function SellerLoginScreen({ navigation }: SellerLoginScreenProps) {
    const handleLogin = (credentials: { identifier: string; password: string }) => {
        // TODO: Implement login logic
        navigation.navigate("SellerHome");
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl font-bold mb-8">Seller Login</label>
                <LoginForm type="seller" onSubmit={handleLogin} />
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});