import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import './DatePicker.css'
import "react-datepicker/dist/react-datepicker.css";


export const DatePickerField = ({ label, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <label className="label-datetime" htmlFor={field.name}>{label}</label>
            <DatePicker className={`normal ${meta.touched && meta.error && 'error'}`}
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={(val) => {
                    setFieldValue(field.name, val);
                }}
            />
            <ErrorMessage component="div" name={field.name} className="error-message" />
        </div>
    );
};