/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type Tour4x4CreateFormInputValues = {
    name?: string;
    quad?: number;
    u2p?: number;
    rzr900?: number;
    maverickX3?: number;
    defender?: number;
};
export declare type Tour4x4CreateFormValidationValues = {
    name?: ValidationFunction<string>;
    quad?: ValidationFunction<number>;
    u2p?: ValidationFunction<number>;
    rzr900?: ValidationFunction<number>;
    maverickX3?: ValidationFunction<number>;
    defender?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Tour4x4CreateFormOverridesProps = {
    Tour4x4CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quad?: PrimitiveOverrideProps<TextFieldProps>;
    u2p?: PrimitiveOverrideProps<TextFieldProps>;
    rzr900?: PrimitiveOverrideProps<TextFieldProps>;
    maverickX3?: PrimitiveOverrideProps<TextFieldProps>;
    defender?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Tour4x4CreateFormProps = React.PropsWithChildren<{
    overrides?: Tour4x4CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Tour4x4CreateFormInputValues) => Tour4x4CreateFormInputValues;
    onSuccess?: (fields: Tour4x4CreateFormInputValues) => void;
    onError?: (fields: Tour4x4CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Tour4x4CreateFormInputValues) => Tour4x4CreateFormInputValues;
    onValidate?: Tour4x4CreateFormValidationValues;
} & React.CSSProperties>;
export default function Tour4x4CreateForm(props: Tour4x4CreateFormProps): React.ReactElement;
