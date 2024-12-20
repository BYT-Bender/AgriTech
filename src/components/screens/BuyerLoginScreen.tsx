import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { LoginForm } from "../auth/LoginForm";

type BuyerLoginScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "BuyerLogin">;
};

export function BuyerLoginScreen({ navigation }: BuyerLoginScreenProps) {
    const handleLogin = (credentials: { identifier: string; password: string }) => {
        // TODO: Implement login logic
        navigation.navigate("BuyerHome");
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl font-bold mb-8">Buyer Login</label>
                <LoginForm type="buyer" onSubmit={handleLogin} />
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