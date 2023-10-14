/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getLocation } from "../../queries";
import { updateLocation } from "../../mutations";
export default function LocationUpdateForm(props) {
  const {
    id: idProp,
    location: locationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Location: "",
    Time: "",
    Date: "",
    Available: false,
  };
  const [location, setLocation] = React.useState(initialValues.Location);
  const [Time, setTime] = React.useState(initialValues.Time);
  const [Date, setDate] = React.useState(initialValues.Date);
  const [Available, setAvailable] = React.useState(initialValues.Available);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = locationRecord
      ? { ...initialValues, ...locationRecord }
      : initialValues;
    setLocation(cleanValues.Location);
    setTime(cleanValues.Time);
    setDate(cleanValues.Date);
    setAvailable(cleanValues.Available);
    setErrors({});
  };
  const [locationRecord, setLocationRecord] = React.useState(locationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getLocation.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLocation
        : locationModelProp;
      setLocationRecord(record);
    };
    queryData();
  }, [idProp, locationModelProp]);
  React.useEffect(resetStateValues, [locationRecord]);
  const validations = {
    Location: [],
    Time: [],
    Date: [],
    Available: [],
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
          Location: Location ?? null,
          Time: Time ?? null,
          Date: Date ?? null,
          Available: Available ?? null,
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
            query: updateLocation.replaceAll("__typename", ""),
            variables: {
              input: {
                id: locationRecord.id,
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
      {...getOverrideProps(overrides, "LocationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Location: value,
              Time,
              Date,
              Available,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", location)}
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
              Location: location,
              Time: value,
              Date,
              Available,
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
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Location: location,
              Time,
              Date: value,
              Available,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
      <SwitchField
        label="Available"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Available}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Location: location,
              Time,
              Date,
              Available: value,
            };
            const result = onChange(modelFields);
            value = result?.Available ?? value;
          }
          if (errors.Available?.hasError) {
            runValidationTasks("Available", value);
          }
          setAvailable(value);
        }}
        onBlur={() => runValidationTasks("Available", Available)}
        errorMessage={errors.Available?.errorMessage}
        hasError={errors.Available?.hasError}
        {...getOverrideProps(overrides, "Available")}
      ></SwitchField>
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
          isDisabled={!(idProp || locationModelProp)}
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
              !(idProp || locationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
