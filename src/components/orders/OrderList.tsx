import * as React from "react";
import { Order } from "../../store/types";
import { OrderCard } from "./OrderCard";

type OrderListProps = {
    orders: Order[];
    onOrderPress: (orderId: string) => void;
};

export function OrderList({ orders, onOrderPress }: OrderListProps) {
    if (orders.length === 0) {
        return (
            <label className="text-gray-500 text-center p-4">
                No orders found
            </label>
        );
    }

    return (
        <scrollView>
            <stackLayout className="space-y-4 p-4">
                {orders.map(order => (
                    <OrderCard 
                        key={order.id} 
                        order={order} 
                        onPress={() => onOrderPress(order.id)} 
                    />
                ))}
            </stackLayout>
        </scrollView>
    );
}