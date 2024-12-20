import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { useOrders } from "../../hooks/useOrders";
import { useAuth } from "../../hooks/useAuth";
import { OrderList } from "../orders/OrderList";
import { Button } from "../ui/Button";

type BuyerHomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "BuyerHome">;
};

export function BuyerHomeScreen({ navigation }: BuyerHomeScreenProps) {
    const { orders, isLoading, error, fetchOrders } = useOrders();
    const { user, logout } = useAuth();

    React.useEffect(() => {
        fetchOrders();
    }, []);

    const handleOrderPress = (orderId: string) => {
        navigation.navigate("BidsList", { orderId });
    };

    return (
        <gridLayout rows="auto, *, auto" className="h-full">
            <flexboxLayout row={0} className="p-4 bg-white border-b border-gray-200">
                <label className="text-xl font-bold">Welcome, {user?.name}</label>
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

            <Button
                row={2}
                variant="primary"
                onTap={() => navigation.navigate("PlaceOrder")}
                className="m-4"
            >
                Place New Order
            </Button>
        </gridLayout>
    );
}