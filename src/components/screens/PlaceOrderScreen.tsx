import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { useOrders } from "../../hooks/useOrders";
import { OrderForm } from "../orders/OrderForm";
import { Order } from "../../store/types";

type PlaceOrderScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "PlaceOrder">;
};

export function PlaceOrderScreen({ navigation }: PlaceOrderScreenProps) {
    const { createOrder, isLoading, error } = useOrders();

    const handleSubmit = async (orderData: Omit<Order, 'id' | 'createdAt'>) => {
        await createOrder(orderData);
        navigation.navigate("BuyerHome");
    };

    return (
        <scrollView>
            <stackLayout className="p-4">
                <label className="text-2xl font-bold mb-6">Place New Order</label>
                {error && (
                    <label className="text-red-500 mb-4">{error}</label>
                )}
                <OrderForm onSubmit={handleSubmit} isLoading={isLoading} />
            </stackLayout>
        </scrollView>
    );
}