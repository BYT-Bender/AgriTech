import * as React from "react";
import { WebView } from "@nativescript/web-view";

type VideoStreamProps = {
    isStreaming: boolean;
    streamUrl?: string;
};

export function VideoStream({ isStreaming, streamUrl }: VideoStreamProps) {
    if (!isStreaming || !streamUrl) {
        return (
            <stackLayout className="bg-gray-900 items-center justify-center">
                <label className="text-white">Stream not available</label>
            </stackLayout>
        );
    }

    return (
        <WebView
            src={streamUrl}
            className="h-full w-full"
        />
    );
}