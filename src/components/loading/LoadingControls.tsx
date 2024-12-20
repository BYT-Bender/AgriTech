import * as React from "react";
import { Button } from "../ui/Button";
import { TextField } from "../ui/TextField";

type LoadingControlsProps = {
    isStreaming: boolean;
    onStart: () => void;
    onStop: () => void;
    onUpdateCount: (count: number) => void;
};

export function LoadingControls({
    isStreaming,
    onStart,
    onStop,
    onUpdateCount
}: LoadingControlsProps) {
    const [manualCount, setManualCount] = React.useState("");

    const handleUpdateCount = () => {
        const count = parseInt(manualCount, 10);
        if (!isNaN(count)) {
            onUpdateCount(count);
            setManualCount("");
        }
    };

    return (
        <stackLayout className="p-4 space-y-4 bg-white border-t border-gray-200">
            <Button
                variant={isStreaming ? "secondary" : "primary"}
                onTap={isStreaming ? onStop : onStart}
            >
                {isStreaming ? "Stop Loading" : "Start Loading"}
            </Button>

            <gridLayout columns="*, auto" className="space-x-2">
                <TextField
                    col={0}
                    hint="Manual Count"
                    keyboardType="number"
                    value={manualCount}
                    onChangeText={setManualCount}
                />
                <Button
                    col={1}
                    variant="secondary"
                    onTap={handleUpdateCount}
                    disabled={!manualCount}
                >
                    Update
                </Button>
            </gridLayout>
        </stackLayout>
    );
}