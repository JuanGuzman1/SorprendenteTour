/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormCreateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    phoneType?: string;
    subject?: string;
    message?: string;
};
export declare type ContactFormCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    phoneType?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormCreateFormOverridesProps = {
    ContactFormCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    phoneType?: PrimitiveOverrideProps<SelectFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactFormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactFormCreateFormInputValues) => ContactFormCreateFormInputValues;
    onSuccess?: (fields: ContactFormCreateFormInputValues) => void;
    onError?: (fields: ContactFormCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormCreateFormInputValues) => ContactFormCreateFormInputValues;
    onValidate?: ContactFormCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactFormCreateForm(props: ContactFormCreateFormProps): React.ReactElement;
