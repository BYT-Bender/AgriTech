import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { useOrders } from "../../hooks/useOrders";
import { useAuth } from "../../hooks/useAuth";
import { OrderList } from "../orders/OrderList";

type SellerHomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "SellerHome">;
};

export function SellerHomeScreen({ navigation }: SellerHomeScreenProps) {
    const { orders, isLoading, error, fetchOrders } = useOrders();
    const { user, logout } = useAuth();

    React.useEffect(() => {
        fetchOrders();
    }, []);

    const handleOrderPress = (orderId: string) => {
        navigation.navigate("PlaceOrder", { orderId });
    };

    return (
        <gridLayout rows="auto, *" className="h-full">
            <flexboxLayout row={0} className="p-4 bg-white border-b border-gray-200">
                <stackLayout>
                    <label className="text-xl font-bold">Welcome, {user?.name}</label>
                    <label className="text-sm text-gray-600">Region: {user?.region}</label>
                </stackLayout>
                <button className="ml-auto text-blue-600" onTap={logout}>
                    Logout
                </button>
            </flexboxLayout>

            {isLoading ? (
                <activityIndicator row={1} busy={true} />
            ) : error ? (
                <label row={1} className="text-red-500 text-center p-4">{error}</label>
            ) : (
                <OrderList 
                    row={1}
                    orders={orders}
                    onOrderPress={handleOrderPress}
                />
            )}
        </gridLayout>
    );
}