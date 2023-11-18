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
export declare type Tour4x4UpdateFormInputValues = {
    name?: string;
    quad?: number;
    u2p?: number;
    rzr900?: number;
    maverickX3?: number;
    defender?: number;
};
export declare type Tour4x4UpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    quad?: ValidationFunction<number>;
    u2p?: ValidationFunction<number>;
    rzr900?: ValidationFunction<number>;
    maverickX3?: ValidationFunction<number>;
    defender?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Tour4x4UpdateFormOverridesProps = {
    Tour4x4UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quad?: PrimitiveOverrideProps<TextFieldProps>;
    u2p?: PrimitiveOverrideProps<TextFieldProps>;
    rzr900?: PrimitiveOverrideProps<TextFieldProps>;
    maverickX3?: PrimitiveOverrideProps<TextFieldProps>;
    defender?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Tour4x4UpdateFormProps = React.PropsWithChildren<{
    overrides?: Tour4x4UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tour4x4?: any;
    onSubmit?: (fields: Tour4x4UpdateFormInputValues) => Tour4x4UpdateFormInputValues;
    onSuccess?: (fields: Tour4x4UpdateFormInputValues) => void;
    onError?: (fields: Tour4x4UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Tour4x4UpdateFormInputValues) => Tour4x4UpdateFormInputValues;
    onValidate?: Tour4x4UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Tour4x4UpdateForm(props: Tour4x4UpdateFormProps): React.ReactElement;
