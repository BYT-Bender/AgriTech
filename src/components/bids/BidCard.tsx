import * as React from "react";
import { Bid } from "../../store/types";
import { formatCurrency } from "../../utils/formatters";
import { Button } from "../ui/Button";

type BidCardProps = {
    bid: Bid;
    onAccept: () => void;
};

export function BidCard({ bid, onAccept }: BidCardProps) {
    return (
        <gridLayout
            className="bg-white p-4 rounded-lg shadow-sm"
            rows="auto, auto"
            columns="*, auto"
        >
            <stackLayout row={0} col={0} className="space-y-1">
                <label className="font-bold">{formatCurrency(bid.price)}</label>
                <label className="text-sm text-gray-600">
                    Seller ID: {bid.sellerId}
                </label>
            </stackLayout>

            <stackLayout row={0} col={1}>
                <label className={`
                    text-sm font-semibold rounded-full px-2 py-1
                    ${bid.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    bid.status === 'accepted' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'}
                `}>
                    {bid.status}
                </label>
            </stackLayout>

            {bid.status === 'pending' && (
                <Button
                    row={1}
                    colSpan={2}
                    variant="primary"
                    onTap={onAccept}
                    className="mt-4"
                >
                    Accept Bid
                </Button>
            )}
        </gridLayout>
    );
}