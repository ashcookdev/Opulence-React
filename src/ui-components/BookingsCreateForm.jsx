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
import { createBookings } from "../../mutations";
export default function BookingsCreateForm(props) {
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
    Name: "",
    Email: "",
    Location: "",
    Time: "",
    Paid: "",
    Price: "",
    Treatment: "",
    Telephone: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [Time, setTime] = React.useState(initialValues.Time);
  const [Paid, setPaid] = React.useState(initialValues.Paid);
  const [Price, setPrice] = React.useState(initialValues.Price);
  const [Treatment, setTreatment] = React.useState(initialValues.Treatment);
  const [Telephone, setTelephone] = React.useState(initialValues.Telephone);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setEmail(initialValues.Email);
    setLocation(initialValues.Location);
    setTime(initialValues.Time);
    setPaid(initialValues.Paid);
    setPrice(initialValues.Price);
    setTreatment(initialValues.Treatment);
    setTelephone(initialValues.Telephone);
    setErrors({});
  };
  const validations = {
    Name: [],
    Email: [],
    Location: [],
    Time: [],
    Paid: [],
    Price: [],
    Treatment: [],
    Telephone: [],
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
          Name,
          Email,
          Location,
          Time,
          Paid,
          Price,
          Treatment,
          Telephone,
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
            query: createBookings.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "BookingsCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Email,
              Location,
              Time,
              Paid,
              Price,
              Treatment,
              Telephone,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email: value,
              Location,
              Time,
              Paid,
              Price,
              Treatment,
              Telephone,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Location: value,
              Time,
              Paid,
              Price,
              Treatment,
              Telephone,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        value={Time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Location,
              Time: value,
              Paid,
              Price,
              Treatment,
              Telephone,
            };
            const result = onChange(modelFields);
            value = result?.Time ?? value;
          }
          if (errors.Time?.hasError) {
            runValidationTasks("Time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("Time", Time)}
        errorMessage={errors.Time?.errorMessage}
        hasError={errors.Time?.hasError}
        {...getOverrideProps(overrides, "Time")}
      ></TextField>
      <TextField
        label="Paid"
        isRequired={false}
        isReadOnly={false}
        value={Paid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Location,
              Time,
              Paid: value,
              Price,
              Treatment,
              Telephone,
            };
            const result = onChange(modelFields);
            value = result?.Paid ?? value;
          }
          if (errors.Paid?.hasError) {
            runValidationTasks("Paid", value);
          }
          setPaid(value);
        }}
        onBlur={() => runValidationTasks("Paid", Paid)}
        errorMessage={errors.Paid?.errorMessage}
        hasError={errors.Paid?.hasError}
        {...getOverrideProps(overrides, "Paid")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        value={Price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Location,
              Time,
              Paid,
              Price: value,
              Treatment,
              Telephone,
            };
            const result = onChange(modelFields);
            value = result?.Price ?? value;
          }
          if (errors.Price?.hasError) {
            runValidationTasks("Price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("Price", Price)}
        errorMessage={errors.Price?.errorMessage}
        hasError={errors.Price?.hasError}
        {...getOverrideProps(overrides, "Price")}
      ></TextField>
      <TextField
        label="Treatment"
        isRequired={false}
        isReadOnly={false}
        value={Treatment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Location,
              Time,
              Paid,
              Price,
              Treatment: value,
              Telephone,
            };
            const result = onChange(modelFields);
            value = result?.Treatment ?? value;
          }
          if (errors.Treatment?.hasError) {
            runValidationTasks("Treatment", value);
          }
          setTreatment(value);
        }}
        onBlur={() => runValidationTasks("Treatment", Treatment)}
        errorMessage={errors.Treatment?.errorMessage}
        hasError={errors.Treatment?.hasError}
        {...getOverrideProps(overrides, "Treatment")}
      ></TextField>
      <TextField
        label="Telephone"
        isRequired={false}
        isReadOnly={false}
        value={Telephone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Location,
              Time,
              Paid,
              Price,
              Treatment,
              Telephone: value,
            };
            const result = onChange(modelFields);
            value = result?.Telephone ?? value;
          }
          if (errors.Telephone?.hasError) {
            runValidationTasks("Telephone", value);
          }
          setTelephone(value);
        }}
        onBlur={() => runValidationTasks("Telephone", Telephone)}
        errorMessage={errors.Telephone?.errorMessage}
        hasError={errors.Telephone?.hasError}
        {...getOverrideProps(overrides, "Telephone")}
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
