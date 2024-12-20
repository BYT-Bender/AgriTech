import * as React from "react";
import { Order } from "../../store/types";
import { formatDate } from "../../utils/dateUtils";

type OrderCardProps = {
    order: Order;
    onPress: () => void;
};

export function OrderCard({ order, onPress }: OrderCardProps) {
    return (
        <gridLayout 
            className="bg-white p-4 rounded-lg shadow-sm"
            rows="auto, auto"
            columns="*, auto"
            onTap={onPress}
        >
            <stackLayout row={0} col={0} className="space-y-1">
                <label className="font-bold">{order.quantity} units</label>
                <label className="text-sm text-gray-600">{order.qualityType}</label>
            </stackLayout>
            
            <stackLayout row={0} col={1} className="text-right">
                <label className={`
                    text-sm font-semibold rounded-full px-2 py-1
                    ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      order.status === 'active' ? 'bg-green-100 text-green-800' : 
                      'bg-gray-100 text-gray-800'}
                `}>
                    {order.status}
                </label>
            </stackLayout>
            
            <stackLayout row={1} col={0} colSpan={2} className="mt-2">
                <label className="text-sm text-gray-600">
                    Loading: {formatDate(order.loadingDate)}
                </label>
                <label className="text-sm text-gray-600">
                    Region: {order.region}
                </label>
            </stackLayout>
        </gridLayout>
    );
}