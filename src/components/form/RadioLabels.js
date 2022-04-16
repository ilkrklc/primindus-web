import React from 'react'
import { Field } from 'formik'
export const RadioLabels = (props) => {
    return (
        <>

            <label style={{ marginRight: 10, color: 'black', fontWeight: 'bold' }}>
                <Field value={props.value} type={props.type} name={props.name} style={{ marginTop: '10px' }} />
                {props.title}
            </label>
        </>
    )
}