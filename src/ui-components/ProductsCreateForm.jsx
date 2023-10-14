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
import { createProducts } from "../../mutations";
export default function ProductsCreateForm(props) {
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
    Category: "",
    Name: "",
    Price: "",
    StripeID: "",
    ImageSrc: "",
    href: "",
  };
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [Name, setName] = React.useState(initialValues.Name);
  const [Price, setPrice] = React.useState(initialValues.Price);
  const [StripeID, setStripeID] = React.useState(initialValues.StripeID);
  const [ImageSrc, setImageSrc] = React.useState(initialValues.ImageSrc);
  const [href, setHref] = React.useState(initialValues.href);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCategory(initialValues.Category);
    setName(initialValues.Name);
    setPrice(initialValues.Price);
    setStripeID(initialValues.StripeID);
    setImageSrc(initialValues.ImageSrc);
    setHref(initialValues.href);
    setErrors({});
  };
  const validations = {
    Category: [],
    Name: [],
    Price: [],
    StripeID: [],
    ImageSrc: [],
    href: [],
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
          Category,
          Name,
          Price,
          StripeID,
          ImageSrc,
          href,
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
            query: createProducts.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ProductsCreateForm")}
      {...rest}
    >
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category: value,
              Name,
              Price,
              StripeID,
              ImageSrc,
              href,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Name: value,
              Price,
              StripeID,
              ImageSrc,
              href,
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
        label="Price"
        isRequired={false}
        isReadOnly={false}
        value={Price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Name,
              Price: value,
              StripeID,
              ImageSrc,
              href,
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
        label="Stripe id"
        isRequired={false}
        isReadOnly={false}
        value={StripeID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Name,
              Price,
              StripeID: value,
              ImageSrc,
              href,
            };
            const result = onChange(modelFields);
            value = result?.StripeID ?? value;
          }
          if (errors.StripeID?.hasError) {
            runValidationTasks("StripeID", value);
          }
          setStripeID(value);
        }}
        onBlur={() => runValidationTasks("StripeID", StripeID)}
        errorMessage={errors.StripeID?.errorMessage}
        hasError={errors.StripeID?.hasError}
        {...getOverrideProps(overrides, "StripeID")}
      ></TextField>
      <TextField
        label="Image src"
        isRequired={false}
        isReadOnly={false}
        value={ImageSrc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Name,
              Price,
              StripeID,
              ImageSrc: value,
              href,
            };
            const result = onChange(modelFields);
            value = result?.ImageSrc ?? value;
          }
          if (errors.ImageSrc?.hasError) {
            runValidationTasks("ImageSrc", value);
          }
          setImageSrc(value);
        }}
        onBlur={() => runValidationTasks("ImageSrc", ImageSrc)}
        errorMessage={errors.ImageSrc?.errorMessage}
        hasError={errors.ImageSrc?.hasError}
        {...getOverrideProps(overrides, "ImageSrc")}
      ></TextField>
      <TextField
        label="Href"
        isRequired={false}
        isReadOnly={false}
        value={href}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Category,
              Name,
              Price,
              StripeID,
              ImageSrc,
              href: value,
            };
            const result = onChange(modelFields);
            value = result?.href ?? value;
          }
          if (errors.href?.hasError) {
            runValidationTasks("href", value);
          }
          setHref(value);
        }}
        onBlur={() => runValidationTasks("href", href)}
        errorMessage={errors.href?.errorMessage}
        hasError={errors.href?.hasError}
        {...getOverrideProps(overrides, "href")}
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
