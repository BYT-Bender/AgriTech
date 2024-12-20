import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Button } from "../ui/Button";
import { TextField } from "../ui/TextField";

type LoginFormProps = {
    type: 'buyer' | 'seller';
    onSubmit: (credentials: { identifier: string; password: string }) => void;
};

export function LoginForm({ type, onSubmit }: LoginFormProps) {
    const [identifier, setIdentifier] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = () => {
        onSubmit({ identifier, password });
    };

    const identifierLabel = type === 'buyer' ? 'Phone Number' : 'License Number';
    const keyboardType = type === 'buyer' ? 'phone' : 'text';

    return (
        <flexboxLayout className="flex-col items-center">
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
            >
                Login
            </Button>
            
            <label className="text-blue-600">
                Register as New {type === 'buyer' ? 'Buyer' : 'Seller'}
            </label>
        </flexboxLayout>
    );
}