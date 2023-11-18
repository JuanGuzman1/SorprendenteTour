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
export declare type TourUpdateFormInputValues = {
    name?: string;
    pppValles?: number;
    pppXilitla?: number;
};
export declare type TourUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    pppValles?: ValidationFunction<number>;
    pppXilitla?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TourUpdateFormOverridesProps = {
    TourUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    pppValles?: PrimitiveOverrideProps<TextFieldProps>;
    pppXilitla?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TourUpdateFormProps = React.PropsWithChildren<{
    overrides?: TourUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tour?: any;
    onSubmit?: (fields: TourUpdateFormInputValues) => TourUpdateFormInputValues;
    onSuccess?: (fields: TourUpdateFormInputValues) => void;
    onError?: (fields: TourUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TourUpdateFormInputValues) => TourUpdateFormInputValues;
    onValidate?: TourUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TourUpdateForm(props: TourUpdateFormProps): React.ReactElement;
