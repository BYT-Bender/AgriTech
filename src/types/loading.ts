export type LoadingState = {
    state: 'pending' | 'in_progress' | 'completed';
    streamUrl: string | null;
};

export type LoadingCounts = {
    automatic: number;
    manual: number;
};

export type LoadingControls = {
    startLoading: () => Promise<void>;
    stopLoading: () => Promise<void>;
    updateManualCount: (count: number) => Promise<void>;
};