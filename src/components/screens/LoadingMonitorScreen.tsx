import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { useLoadingMonitor } from "../../hooks/useLoadingMonitor";
import { LoadingStatus } from "../loading/LoadingStatus";
import { VideoStream } from "../loading/VideoStream";
import { LoadingControls } from "../loading/LoadingControls";

type LoadingMonitorScreenProps = {
    route: { params: { orderId: string } };
    navigation: FrameNavigationProp<MainStackParamList, "LoadingMonitor">;
};

export function LoadingMonitorScreen({ route }: LoadingMonitorScreenProps) {
    const { orderId } = route.params;
    const { 
        status,
        counts,
        isStreaming,
        error,
        startLoading,
        stopLoading,
        updateManualCount
    } = useLoadingMonitor(orderId);

    return (
        <gridLayout rows="*, auto, auto" className="h-full">
            <VideoStream
                row={0}
                isStreaming={isStreaming}
                streamUrl={status.streamUrl}
            />
            
            <LoadingStatus
                row={1}
                status={status}
                counts={counts}
                error={error}
            />
            
            <LoadingControls
                row={2}
                isStreaming={isStreaming}
                onStart={startLoading}
                onStop={stopLoading}
                onUpdateCount={updateManualCount}
            />
        </gridLayout>
    );
}