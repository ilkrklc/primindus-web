import React from 'react'
import { ErrorMessage } from 'formik'
export const NewRadioButtons = ({ heading, ...rest }) => {
    return (
        <>
            <div style={{ fontWeight: 'bold', marginBottom: '5px', marginTop: '20px', color: 'black' }} id="my-radio-group">{heading}</div>
            <div role="group" aria-labelledby="my-radio-group">
                {rest.children}
                <ErrorMessage component="div" name={rest.name} className="error-message" />
            </div>
        </>
    )
}