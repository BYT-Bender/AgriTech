import * as React from "react";
import { StyleSheet } from "react-nativescript";

type TextFieldProps = {
    hint: string;
    value: string;
    onChangeText: (value: string) => void;
    secure?: boolean;
    keyboardType?: 'text' | 'phone' | 'email';
    className?: string;
};

export function TextField({ 
    hint, 
    value, 
    onChangeText, 
    secure = false, 
    keyboardType = 'text',
    className = ''
}: TextFieldProps) {
    return (
        <textField
            className={`p-4 border rounded-lg w-64 ${className}`}
            hint={hint}
            text={value}
            secure={secure}
            keyboardType={keyboardType}
            onTextChange={(e) => onChangeText(e.value)}
        />
    );
}