import * as React from 'react';

export function useRegions() {
    const [regions, setRegions] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchRegions = async () => {
            setIsLoading(true);
            try {
                // TODO: Implement API call
                const regions = ['North', 'South', 'East', 'West'];
                setRegions(regions);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Failed to fetch regions');
            } finally {
                setIsLoading(false);
            }
        };

        fetchRegions();
    }, []);

    return { regions, isLoading, error };
}