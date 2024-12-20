import * as React from "react";
import { Bid } from "../../store/types";
import { BidCard } from "./BidCard";

type BidsListProps = {
    bids: Bid[];
    onAcceptBid: (bidId: string) => void;
};

export function BidsList({ bids, onAcceptBid }: BidsListProps) {
    if (bids.length === 0) {
        return (
            <label className="text-gray-500 text-center p-4">
                No bids received yet
            </label>
        );
    }

    return (
        <scrollView>
            <stackLayout className="space-y-4 p-4">
                {bids.map(bid => (
                    <BidCard
                        key={bid.id}
                        bid={bid}
                        onAccept={() => onAcceptBid(bid.id)}
                    />
                ))}
            </stackLayout>
        </scrollView>
    );
}