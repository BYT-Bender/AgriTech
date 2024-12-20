import * as React from "react";
import { Order } from "../../store/types";
import { TextField } from "../ui/TextField";
import { Button } from "../ui/Button";
import { useRegions } from "../../hooks/useRegions";
import { QualityTypePicker } from "../ui/QualityTypePicker";
import { DatePicker } from "../ui/DatePicker";

type OrderFormProps = {
    onSubmit: (data: Omit<Order, 'id' | 'createdAt'>) => Promise<void>;
    isLoading: boolean;
};

export function OrderForm({ onSubmit, isLoading }: OrderFormProps) {
    const { regions } = useRegions();
    const [formData, setFormData] = React.useState({
        quantity: "",
        qualityType: "",
        region: "",
        loadingDate: new Date(),
        deliveryLocation: ""
    });

    const handleSubmit = () => {
        onSubmit({
            ...formData,
            quantity: parseInt(formData.quantity, 10),
            status: 'pending',
            buyerId: 'current-user-id' // This will be handled by the backend
        });
    };

    return (
        <stackLayout className="space-y-4">
            <TextField
                hint="Quantity (units)"
                value={formData.quantity}
                keyboardType="number"
                onChangeText={(value) => setFormData(prev => ({ ...prev, quantity: value }))}
            />

            <QualityTypePicker
                selectedValue={formData.qualityType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, qualityType: value }))}
            />

            <dropDown
                items={regions}
                selectedIndex={regions.indexOf(formData.region)}
                onSelectedIndexChanged={(args) => {
                    setFormData(prev => ({ ...prev, region: regions[args.newIndex] }));
                }}
                hint="Select Region"
                className="p-4 border rounded-lg"
            />

            <DatePicker
                date={formData.loadingDate}
                onDateChange={(date) => setFormData(prev => ({ ...prev, loadingDate: date }))}
                minDate={new Date()}
            />

            <TextField
                hint="Delivery Location"
                value={formData.deliveryLocation}
                onChangeText={(value) => setFormData(prev => ({ ...prev, deliveryLocation: value }))}
            />

            <Button
                onTap={handleSubmit}
                variant="primary"
                disabled={isLoading}
            >
                {isLoading ? "Creating Order..." : "Place Order"}
            </Button>
        </stackLayout>
    );
}