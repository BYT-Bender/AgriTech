import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { useBids } from "../../hooks/useBids";
import { BidsList } from "../bids/BidsList";
import { OrderDetails } from "../orders/OrderDetails";
import { useOrders } from "../../hooks/useOrders";

type BidsListScreenProps = {
    route: { params: { orderId: string } };
    navigation: FrameNavigationProp<MainStackParamList, "BidsList">;
};

export function BidsListScreen({ route, navigation }: BidsListScreenProps) {
    const { orderId } = route.params;
    const { bids, isLoading: bidsLoading, error: bidsError, acceptBid } = useBids(orderId);
    const { orders, isLoading: orderLoading } = useOrders();
    const order = orders.find(o => o.id === orderId);

    const handleAcceptBid = async (bidId: string) => {
        await acceptBid(bidId);
        navigation.navigate("LoadingMonitor", { orderId });
    };

    if (orderLoading || !order) {
        return <activityIndicator busy={true} />;
    }

    return (
        <gridLayout rows="auto, *" className="h-full">
            <OrderDetails order={order} row={0} />
            
            {bidsLoading ? (
                <activityIndicator row={1} busy={true} />
            ) : bidsError ? (
                <label row={1} className="text-red-500 text-center p-4">{bidsError}</label>
            ) : (
                <BidsList
                    row={1}
                    bids={bids}
                    onAcceptBid={handleAcceptBid}
                />
            )}
        </gridLayout>
    );
}