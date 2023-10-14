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
export declare type BookingsUpdateFormInputValues = {
    Name?: string;
    Email?: string;
    Location?: string;
    Time?: string;
    Paid?: string;
    Price?: string;
    Treatment?: string;
};
export declare type BookingsUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Time?: ValidationFunction<string>;
    Paid?: ValidationFunction<string>;
    Price?: ValidationFunction<string>;
    Treatment?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookingsUpdateFormOverridesProps = {
    BookingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Time?: PrimitiveOverrideProps<TextFieldProps>;
    Paid?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
    Treatment?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bookings?: any;
    onSubmit?: (fields: BookingsUpdateFormInputValues) => BookingsUpdateFormInputValues;
    onSuccess?: (fields: BookingsUpdateFormInputValues) => void;
    onError?: (fields: BookingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookingsUpdateFormInputValues) => BookingsUpdateFormInputValues;
    onValidate?: BookingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookingsUpdateForm(props: BookingsUpdateFormProps): React.ReactElement;
