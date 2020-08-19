import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri]);
    };

    const handleRemove = (uri) => {
        const newUris = values[name].filter((imageUri) => uri !== imageUri);
        setFieldValue(name, newUris);
    };

    return (
        <>
            <ImageInputList
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImagePicker;
