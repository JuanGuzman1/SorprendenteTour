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
export declare type BundleUpdateFormInputValues = {
    name?: string;
    p2pXilitla?: number;
    p3pXilitla?: number;
    p4pXilitla?: number;
    p5pXilitla?: number;
    p2pValles?: number;
    p3pValles?: number;
    p4pValles?: number;
    p5pValles?: number;
};
export declare type BundleUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    p2pXilitla?: ValidationFunction<number>;
    p3pXilitla?: ValidationFunction<number>;
    p4pXilitla?: ValidationFunction<number>;
    p5pXilitla?: ValidationFunction<number>;
    p2pValles?: ValidationFunction<number>;
    p3pValles?: ValidationFunction<number>;
    p4pValles?: ValidationFunction<number>;
    p5pValles?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BundleUpdateFormOverridesProps = {
    BundleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    p2pXilitla?: PrimitiveOverrideProps<TextFieldProps>;
    p3pXilitla?: PrimitiveOverrideProps<TextFieldProps>;
    p4pXilitla?: PrimitiveOverrideProps<TextFieldProps>;
    p5pXilitla?: PrimitiveOverrideProps<TextFieldProps>;
    p2pValles?: PrimitiveOverrideProps<TextFieldProps>;
    p3pValles?: PrimitiveOverrideProps<TextFieldProps>;
    p4pValles?: PrimitiveOverrideProps<TextFieldProps>;
    p5pValles?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BundleUpdateFormProps = React.PropsWithChildren<{
    overrides?: BundleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bundle?: any;
    onSubmit?: (fields: BundleUpdateFormInputValues) => BundleUpdateFormInputValues;
    onSuccess?: (fields: BundleUpdateFormInputValues) => void;
    onError?: (fields: BundleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BundleUpdateFormInputValues) => BundleUpdateFormInputValues;
    onValidate?: BundleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BundleUpdateForm(props: BundleUpdateFormProps): React.ReactElement;
