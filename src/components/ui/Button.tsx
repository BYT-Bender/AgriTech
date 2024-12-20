import * as React from "react";
import { StyleSheet } from "react-nativescript";

type ButtonProps = {
    onTap: () => void;
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    className?: string;
};

export function Button({ onTap, variant = 'primary', children, className = '' }: ButtonProps) {
    const buttonClass = variant === 'primary' 
        ? 'bg-green-600' 
        : 'bg-blue-600';

    return (
        <button
            className={`${buttonClass} text-white p-4 rounded-lg w-64 text-center ${className}`}
            onTap={onTap}
        >
            {children}
        </button>
    );
}