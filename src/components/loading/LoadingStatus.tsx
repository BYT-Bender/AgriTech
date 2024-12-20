import * as React from "react";
import { LoadingState, LoadingCounts } from "../../types/loading";

type LoadingStatusProps = {
    status: LoadingState;
    counts: LoadingCounts;
    error: string | null;
};

export function LoadingStatus({ status, counts, error }: LoadingStatusProps) {
    return (
        <stackLayout className="p-4 bg-white border-t border-gray-200">
            {error && (
                <label className="text-red-500 mb-2">{error}</label>
            )}
            
            <gridLayout columns="*, *" rows="auto, auto" className="space-y-2">
                <label col={0} row={0} className="font-semibold">Status:</label>
                <label col={1} row={0} className={`
                    ${status.state === 'in_progress' ? 'text-green-600' : 
                      status.state === 'completed' ? 'text-blue-600' : 'text-gray-600'}
                `}>
                    {status.state}
                </label>

                <label col={0} row={1} className="font-semibold">Count:</label>
                <stackLayout col={1} row={1} orientation="horizontal">
                    <label className="text-gray-600">Auto: {counts.automatic}</label>
                    <label className="text-gray-600 ml-4">Manual: {counts.manual}</label>
                </stackLayout>
            </gridLayout>
        </stackLayout>
    );
}