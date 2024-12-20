import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Button } from "../ui/Button";
import { TextField } from "../ui/TextField";
import { useAuth } from "../../hooks/useAuth";

type LoginFormProps = {
    type: 'buyer' | 'seller';
    onSuccess: () => void;
};

export function LoginForm({ type, onSuccess }: LoginFormProps) {
    const { login, isLoading, error } = useAuth();
    const [identifier, setIdentifier] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async () => {
        try {
            await login({ identifier, password, type });
            onSuccess();
        } catch (err) {
            // Error is handled by useAuth
        }
    };

    const identifierLabel = type === 'buyer' ? 'Phone Number' : 'License Number';
    const keyboardType = type === 'buyer' ? 'phone' : 'text';

    return (
        <flexboxLayout className="flex-col items-center">
            {error && (
                <label className="text-red-500 mb-4">{error}</label>
            )}
            
            <TextField
                hint={identifierLabel}
                value={identifier}
                onChangeText={setIdentifier}
                keyboardType={keyboardType}
                className="mb-4"
            />
            
            <TextField
                hint="Password"
                value={password}
                onChangeText={setPassword}
                secure={true}
                className="mb-6"
            />
            
            <Button
                variant={type === 'buyer' ? 'primary' : 'secondary'}
                onTap={handleSubmit}
                className="mb-4"
                disabled={isLoading}
            >
                {isLoading ? 'Logging in...' : 'Login'}
            </Button>
            
            <label className="text-blue-600">
                Register as New {type === 'buyer' ? 'Buyer' : 'Seller'}
            </label>
        </flexboxLayout>
    );
}