/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTour4x4 } from "../graphql/queries";
import { updateTour4x4 } from "../graphql/mutations";
const client = generateClient();
export default function Tour4x4UpdateForm(props) {
  const {
    id: idProp,
    tour4x4: tour4x4ModelProp,
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
    quad: "",
    u2p: "",
    rzr900: "",
    maverickX3: "",
    defender: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [quad, setQuad] = React.useState(initialValues.quad);
  const [u2p, setU2p] = React.useState(initialValues.u2p);
  const [rzr900, setRzr900] = React.useState(initialValues.rzr900);
  const [maverickX3, setMaverickX3] = React.useState(initialValues.maverickX3);
  const [defender, setDefender] = React.useState(initialValues.defender);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tour4x4Record
      ? { ...initialValues, ...tour4x4Record }
      : initialValues;
    setName(cleanValues.name);
    setQuad(cleanValues.quad);
    setU2p(cleanValues.u2p);
    setRzr900(cleanValues.rzr900);
    setMaverickX3(cleanValues.maverickX3);
    setDefender(cleanValues.defender);
    setErrors({});
  };
  const [tour4x4Record, setTour4x4Record] = React.useState(tour4x4ModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTour4x4.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTour4x4
        : tour4x4ModelProp;
      setTour4x4Record(record);
    };
    queryData();
  }, [idProp, tour4x4ModelProp]);
  React.useEffect(resetStateValues, [tour4x4Record]);
  const validations = {
    name: [],
    quad: [],
    u2p: [],
    rzr900: [],
    maverickX3: [],
    defender: [],
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
          quad: quad ?? null,
          u2p: u2p ?? null,
          rzr900: rzr900 ?? null,
          maverickX3: maverickX3 ?? null,
          defender: defender ?? null,
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
          await client.graphql({
            query: updateTour4x4.replaceAll("__typename", ""),
            variables: {
              input: {
                id: tour4x4Record.id,
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
      {...getOverrideProps(overrides, "Tour4x4UpdateForm")}
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
              quad,
              u2p,
              rzr900,
              maverickX3,
              defender,
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
        label="Quad"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quad}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quad: value,
              u2p,
              rzr900,
              maverickX3,
              defender,
            };
            const result = onChange(modelFields);
            value = result?.quad ?? value;
          }
          if (errors.quad?.hasError) {
            runValidationTasks("quad", value);
          }
          setQuad(value);
        }}
        onBlur={() => runValidationTasks("quad", quad)}
        errorMessage={errors.quad?.errorMessage}
        hasError={errors.quad?.hasError}
        {...getOverrideProps(overrides, "quad")}
      ></TextField>
      <TextField
        label="U2p"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={u2p}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quad,
              u2p: value,
              rzr900,
              maverickX3,
              defender,
            };
            const result = onChange(modelFields);
            value = result?.u2p ?? value;
          }
          if (errors.u2p?.hasError) {
            runValidationTasks("u2p", value);
          }
          setU2p(value);
        }}
        onBlur={() => runValidationTasks("u2p", u2p)}
        errorMessage={errors.u2p?.errorMessage}
        hasError={errors.u2p?.hasError}
        {...getOverrideProps(overrides, "u2p")}
      ></TextField>
      <TextField
        label="Rzr900"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rzr900}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quad,
              u2p,
              rzr900: value,
              maverickX3,
              defender,
            };
            const result = onChange(modelFields);
            value = result?.rzr900 ?? value;
          }
          if (errors.rzr900?.hasError) {
            runValidationTasks("rzr900", value);
          }
          setRzr900(value);
        }}
        onBlur={() => runValidationTasks("rzr900", rzr900)}
        errorMessage={errors.rzr900?.errorMessage}
        hasError={errors.rzr900?.hasError}
        {...getOverrideProps(overrides, "rzr900")}
      ></TextField>
      <TextField
        label="Maverick x3"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maverickX3}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quad,
              u2p,
              rzr900,
              maverickX3: value,
              defender,
            };
            const result = onChange(modelFields);
            value = result?.maverickX3 ?? value;
          }
          if (errors.maverickX3?.hasError) {
            runValidationTasks("maverickX3", value);
          }
          setMaverickX3(value);
        }}
        onBlur={() => runValidationTasks("maverickX3", maverickX3)}
        errorMessage={errors.maverickX3?.errorMessage}
        hasError={errors.maverickX3?.hasError}
        {...getOverrideProps(overrides, "maverickX3")}
      ></TextField>
      <TextField
        label="Defender"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={defender}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quad,
              u2p,
              rzr900,
              maverickX3,
              defender: value,
            };
            const result = onChange(modelFields);
            value = result?.defender ?? value;
          }
          if (errors.defender?.hasError) {
            runValidationTasks("defender", value);
          }
          setDefender(value);
        }}
        onBlur={() => runValidationTasks("defender", defender)}
        errorMessage={errors.defender?.errorMessage}
        hasError={errors.defender?.hasError}
        {...getOverrideProps(overrides, "defender")}
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
          isDisabled={!(idProp || tour4x4ModelProp)}
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
              !(idProp || tour4x4ModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
