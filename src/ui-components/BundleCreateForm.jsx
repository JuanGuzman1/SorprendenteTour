/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createBundle } from "../graphql/mutations";
export default function BundleCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    p2pXilitla: "",
    p3pXilitla: "",
    p4pXilitla: "",
    p5pXilitla: "",
    p2pValles: "",
    p3pValles: "",
    p4pValles: "",
    p5pValles: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [p2pXilitla, setP2pXilitla] = React.useState(initialValues.p2pXilitla);
  const [p3pXilitla, setP3pXilitla] = React.useState(initialValues.p3pXilitla);
  const [p4pXilitla, setP4pXilitla] = React.useState(initialValues.p4pXilitla);
  const [p5pXilitla, setP5pXilitla] = React.useState(initialValues.p5pXilitla);
  const [p2pValles, setP2pValles] = React.useState(initialValues.p2pValles);
  const [p3pValles, setP3pValles] = React.useState(initialValues.p3pValles);
  const [p4pValles, setP4pValles] = React.useState(initialValues.p4pValles);
  const [p5pValles, setP5pValles] = React.useState(initialValues.p5pValles);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setP2pXilitla(initialValues.p2pXilitla);
    setP3pXilitla(initialValues.p3pXilitla);
    setP4pXilitla(initialValues.p4pXilitla);
    setP5pXilitla(initialValues.p5pXilitla);
    setP2pValles(initialValues.p2pValles);
    setP3pValles(initialValues.p3pValles);
    setP4pValles(initialValues.p4pValles);
    setP5pValles(initialValues.p5pValles);
    setErrors({});
  };
  const validations = {
    name: [],
    p2pXilitla: [],
    p3pXilitla: [],
    p4pXilitla: [],
    p5pXilitla: [],
    p2pValles: [],
    p3pValles: [],
    p4pValles: [],
    p5pValles: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          p2pXilitla,
          p3pXilitla,
          p4pXilitla,
          p5pXilitla,
          p2pValles,
          p3pValles,
          p4pValles,
          p5pValles,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createBundle.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BundleCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              p2pXilitla,
              p3pXilitla,
              p4pXilitla,
              p5pXilitla,
              p2pValles,
              p3pValles,
              p4pValles,
              p5pValles,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="P2p xilitla"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={p2pXilitla}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              p2pXilitla: value,
              p3pXilitla,
              p4pXilitla,
              p5pXilitla,
              p2pValles,
              p3pValles,
              p4pValles,
              p5pValles,
            };
            const result = onChange(modelFields);
            value = result?.p2pXilitla ?? value;
          }
          if (errors.p2pXilitla?.hasError) {
            runValidationTasks("p2pXilitla", value);
          }
          setP2pXilitla(value);
        }}
        onBlur={() => runValidationTasks("p2pXilitla", p2pXilitla)}
        errorMessage={errors.p2pXilitla?.errorMessage}
        hasError={errors.p2pXilitla?.hasError}
        {...getOverrideProps(overrides, "p2pXilitla")}
      ></TextField>
      <TextField
        label="P3p xilitla"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={p3pXilitla}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              p2pXilitla,
              p3pXilitla: value,
              p4pXilitla,
              p5pXilitla,
              p2pValles,
              p3pValles,
              p4pValles,
              p5pValles,
            };
            const result = onChange(modelFields);
            value = result?.p3pXilitla ?? value;
          }
          if (errors.p3pXilitla?.hasError) {
            runValidationTasks("p3pXilitla", value);
          }
          setP3pXilitla(value);
        }}
        onBlur={() => runValidationTasks("p3pXilitla", p3pXilitla)}
        errorMessage={errors.p3pXilitla?.errorMessage}
        hasError={errors.p3pXilitla?.hasError}
        {...getOverrideProps(overrides, "p3pXilitla")}
      ></TextField>
      <TextField
        label="P4p xilitla"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={p4pXilitla}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              p2pXilitla,
              p3pXilitla,
              p4pXilitla: value,
              p5pXilitla,
              p2pValles,
              p3pValles,
              p4pValles,
              p5pValles,
            };
            const result = onChange(modelFields);
            value = result?.p4pXilitla ?? value;
          }
          if (errors.p4pXilitla?.hasError) {
            runValidationTasks("p4pXilitla", value);
          }
          setP4pXilitla(value);
        }}
        onBlur={() => runValidationTasks("p4pXilitla", p4pXilitla)}
        errorMessage={errors.p4pXilitla?.errorMessage}
        hasError={errors.p4pXilitla?.hasError}
        {...getOverrideProps(overrides, "p4pXilitla")}
      ></TextField>
      <TextField
        label="P5p xilitla"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={p5pXilitla}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              p2pXilitla,
              p3pXilitla,
              p4pXilitla,
              p5pXilitla: value,
              p2pValles,
              p3pValles,
              p4pValles,
              p5pValles,
            };
            const result = onChange(modelFields);
            value = result?.p5pXilitla ?? value;
          }
          if (errors.p5pXilitla?.hasError) {
            runValidationTasks("p5pXilitla", value);
          }
          setP5pXilitla(value);
        }}
        onBlur={() => runValidationTasks("p5pXilitla", p5pXilitla)}
        errorMessage={errors.p5pXilitla?.errorMessage}
        hasError={errors.p5pXilitla?.hasError}
        {...getOverrideProps(overrides, "p5pXilitla")}
      ></TextField>
      <TextField
        label="P2p valles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={p2pValles}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              p2pXilitla,
              p3pXilitla,
              p4pXilitla,
              p5pXilitla,
              p2pValles: value,
              p3pValles,
              p4pValles,
              p5pValles,
            };
            const result = onChange(modelFields);
            value = result?.p2pValles ?? value;
          }
          if (errors.p2pValles?.hasError) {
            runValidationTasks("p2pValles", value);
          }
          setP2pValles(value);
        }}
        onBlur={() => runValidationTasks("p2pValles", p2pValles)}
        errorMessage={errors.p2pValles?.errorMessage}
        hasError={errors.p2pValles?.hasError}
        {...getOverrideProps(overrides, "p2pValles")}
      ></TextField>
      <TextField
        label="P3p valles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={p3pValles}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              p2pXilitla,
              p3pXilitla,
              p4pXilitla,
              p5pXilitla,
              p2pValles,
              p3pValles: value,
              p4pValles,
              p5pValles,
            };
            const result = onChange(modelFields);
            value = result?.p3pValles ?? value;
          }
          if (errors.p3pValles?.hasError) {
            runValidationTasks("p3pValles", value);
          }
          setP3pValles(value);
        }}
        onBlur={() => runValidationTasks("p3pValles", p3pValles)}
        errorMessage={errors.p3pValles?.errorMessage}
        hasError={errors.p3pValles?.hasError}
        {...getOverrideProps(overrides, "p3pValles")}
      ></TextField>
      <TextField
        label="P4p valles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={p4pValles}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              p2pXilitla,
              p3pXilitla,
              p4pXilitla,
              p5pXilitla,
              p2pValles,
              p3pValles,
              p4pValles: value,
              p5pValles,
            };
            const result = onChange(modelFields);
            value = result?.p4pValles ?? value;
          }
          if (errors.p4pValles?.hasError) {
            runValidationTasks("p4pValles", value);
          }
          setP4pValles(value);
        }}
        onBlur={() => runValidationTasks("p4pValles", p4pValles)}
        errorMessage={errors.p4pValles?.errorMessage}
        hasError={errors.p4pValles?.hasError}
        {...getOverrideProps(overrides, "p4pValles")}
      ></TextField>
      <TextField
        label="P5p valles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={p5pValles}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              p2pXilitla,
              p3pXilitla,
              p4pXilitla,
              p5pXilitla,
              p2pValles,
              p3pValles,
              p4pValles,
              p5pValles: value,
            };
            const result = onChange(modelFields);
            value = result?.p5pValles ?? value;
          }
          if (errors.p5pValles?.hasError) {
            runValidationTasks("p5pValles", value);
          }
          setP5pValles(value);
        }}
        onBlur={() => runValidationTasks("p5pValles", p5pValles)}
        errorMessage={errors.p5pValles?.errorMessage}
        hasError={errors.p5pValles?.hasError}
        {...getOverrideProps(overrides, "p5pValles")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
