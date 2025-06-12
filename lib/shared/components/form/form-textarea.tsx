import { Control, FieldValues, Path } from 'react-hook-form';

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/lib/shared/components/ui/form';
import { Textarea } from '@/lib/shared/components/ui/textarea';

type FormTextareaProps<FormFieldsValues extends FieldValues> = {
    control: Control<FormFieldsValues, unknown>;
    name: Path<FormFieldsValues>;
    label: string;
    placeholder?: string;
    rows?: number;
};

export const FormTextarea = <FormFieldsValues extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    rows = 4,
}: FormTextareaProps<FormFieldsValues>) => (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <div className="relative">
                        <Textarea placeholder={placeholder} rows={rows} {...field} />
                    </div>
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);
