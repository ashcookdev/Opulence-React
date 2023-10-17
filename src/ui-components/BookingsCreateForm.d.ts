/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookingsCreateFormInputValues = {
    Name?: string;
    Email?: string;
    Location?: string;
    Time?: string;
    Paid?: string;
    Price?: string;
    Treatment?: string;
    Telephone?: string;
};
export declare type BookingsCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Time?: ValidationFunction<string>;
    Paid?: ValidationFunction<string>;
    Price?: ValidationFunction<string>;
    Treatment?: ValidationFunction<string>;
    Telephone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookingsCreateFormOverridesProps = {
    BookingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Time?: PrimitiveOverrideProps<TextFieldProps>;
    Paid?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
    Treatment?: PrimitiveOverrideProps<TextFieldProps>;
    Telephone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookingsCreateFormProps = React.PropsWithChildren<{
    overrides?: BookingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BookingsCreateFormInputValues) => BookingsCreateFormInputValues;
    onSuccess?: (fields: BookingsCreateFormInputValues) => void;
    onError?: (fields: BookingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookingsCreateFormInputValues) => BookingsCreateFormInputValues;
    onValidate?: BookingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function BookingsCreateForm(props: BookingsCreateFormProps): React.ReactElement;
