/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getTour } from "../graphql/queries";
import { updateTour } from "../graphql/mutations";
export default function TourUpdateForm(props) {
  const {
    id: idProp,
    tour: tourModelProp,
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
    pppValles: "",
    pppXilitla: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [pppValles, setPppValles] = React.useState(initialValues.pppValles);
  const [pppXilitla, setPppXilitla] = React.useState(initialValues.pppXilitla);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tourRecord
      ? { ...initialValues, ...tourRecord }
      : initialValues;
    setName(cleanValues.name);
    setPppValles(cleanValues.pppValles);
    setPppXilitla(cleanValues.pppXilitla);
    setErrors({});
  };
  const [tourRecord, setTourRecord] = React.useState(tourModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getTour,
              variables: { id: idProp },
            })
          )?.data?.getTour
        : tourModelProp;
      setTourRecord(record);
    };
    queryData();
  }, [idProp, tourModelProp]);
  React.useEffect(resetStateValues, [tourRecord]);
  const validations = {
    name: [],
    pppValles: [],
    pppXilitla: [],
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
          name: name ?? null,
          pppValles: pppValles ?? null,
          pppXilitla: pppXilitla ?? null,
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
            query: updateTour,
            variables: {
              input: {
                id: tourRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TourUpdateForm")}
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
              pppValles,
              pppXilitla,
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
        label="Ppp valles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pppValles}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pppValles: value,
              pppXilitla,
            };
            const result = onChange(modelFields);
            value = result?.pppValles ?? value;
          }
          if (errors.pppValles?.hasError) {
            runValidationTasks("pppValles", value);
          }
          setPppValles(value);
        }}
        onBlur={() => runValidationTasks("pppValles", pppValles)}
        errorMessage={errors.pppValles?.errorMessage}
        hasError={errors.pppValles?.hasError}
        {...getOverrideProps(overrides, "pppValles")}
      ></TextField>
      <TextField
        label="Ppp xilitla"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pppXilitla}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pppValles,
              pppXilitla: value,
            };
            const result = onChange(modelFields);
            value = result?.pppXilitla ?? value;
          }
          if (errors.pppXilitla?.hasError) {
            runValidationTasks("pppXilitla", value);
          }
          setPppXilitla(value);
        }}
        onBlur={() => runValidationTasks("pppXilitla", pppXilitla)}
        errorMessage={errors.pppXilitla?.errorMessage}
        hasError={errors.pppXilitla?.hasError}
        {...getOverrideProps(overrides, "pppXilitla")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || tourModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || tourModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
