import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from './TextField';
import './Interests.css'
import * as Yup from 'yup';
import { DatePickerField } from './DatePickerField'
import { NewRadioButtons } from './RadioButtons';
import { RadioLabels } from './RadioLabels';
import axios from "axios";
import { baseUrl } from '../constants/BaseUrl'
import { useNavigate } from 'react-router';
import dateFormat from "dateformat";

export const Interests = () => {
    const navigate = useNavigate();
    const [data, setData] = useState('')
    useEffect(() => {
        getInitialCreds();
    }, [])
    const getInitialCreds = async () => {
        try {
            const number = JSON.parse(localStorage.getItem('number'))
            const res = await axios.get(`${baseUrl}/api/v1/nurses/getnurse`, {
                params: {
                    number
                }
            })
            if (res.status === 200) {
                console.log(res.data.data)
                return setData(res.data.data)
            }
            return alert("fail")
        }
        catch (err) {
            console.log(err)
        }
    }

    const validate = Yup.object({
        availability: Yup.string()
            .required('Required')
            .nullable('Date can not be empty'),
        expectedSalary: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        prefRegion: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        prefGender: Yup.string()
            .required('Required'),
        addiMembers: Yup.string()
            .required('Required'),
        incontinence: Yup.string()
            .required('Required'),
        demPatients: Yup.string()
            .required('Required'),
        nightShift: Yup.string()
            .required('Required'),
        area: Yup.string()
            .required('Required'),
        smoking: Yup.string()
            .required('Required'),
        german: Yup.string()
            .required('Required'),
        numberOfPatients: Yup.string()
            .required('Required'),
        name: Yup.string()
            .required('Required'),
        firstName: Yup.string()
            .required('Required'),
        surName: Yup.string()
            .required('Required'),
        age: Yup.string()
            .required('Required'),
        sex: Yup.string()
            .required('Required'),
        immobility: Yup.array().min(1).required('select atleast one value'),

    })
    return (
        <Formik enableReinitialize={true}
            initialValues={{
                availability: data.availability ? dateFormat(data.availability, "fullDate") : "",
                expectedSalary: data.expectedSalary ? data.expectedSalary : '',
                prefRegion: data.prefRegion ? data.prefRegion : '',
                prefGender: data.prefGender ? data.prefGender : '',
                addiMembers: data.addiMembers ? data.addiMembers : '',
                incontinence: data.incontinence ? data.incontinence : '',
                demPatients: data.demPatients ? data.demPatients : '',
                nightShift: data.nightShift ? data.nightShift : '',
                area: data.area ? data.area : '',
                smoking: data.smoking ? data.smoking : '',
                german: data.german ? data.german : '',
                drivingLic: data.driveLic ? data.driveLic : '',
                numberOfPatients: data.numberOfPatients ? data.numberOfPatients : '',
                name: data.name ? data.name : '',
                firstName: data.firstName ? data.firstName : '',
                surName: data.surName ? data.surName : '',
                age: data.age ? data.age : '',
                sex: data.sex ? data.sex : '',
                immobility: data.immobility ? data.immobility : []

            }}
            validationSchema={validate}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const number = JSON.parse(localStorage.getItem('number'))
                    const res = await axios.patch(`${baseUrl}/api/v1/nurses/updatenurse`, { data: values }, {
                        params: {
                            number
                        }
                    });
                    if (res.status === 200) {
                        setSubmitting(false);
                        alert(res.data.data)
                        navigate('/')
                        return
                    }
                    return alert("fail")
                } catch (error) {
                    console.log(error)
                }
            }}
        >
            {({ isSubmitting }) => (
                <div style={{ marginBottom: '20px' }} className='form-main'>
                    <div className='form-main-inner'>
                        <h1>Indicate Your Preferences</h1>
                        <Form className='form-actual'>
                            <div className='form'>
                                <div className='first-half'>
                                    <DatePickerField label="Earliest Starting Date" name="availability" type="date" />
                                    <TextField label="Expected Salary" name="expectedSalary" type="text" />
                                    <TextField label="Preferred Region" name="prefRegion" type="text" />

                                    <NewRadioButtons heading='Preferred Gender' name='prefGender'>
                                        <RadioLabels name='prefGender' type='radio' value='male' title='Male' />
                                        <RadioLabels name='prefGender' type='radio' value='female' title='Female' />
                                    </NewRadioButtons>

                                    <NewRadioButtons heading='Do you accept additional house hold persons?' name='addiMembers'>
                                        <RadioLabels name='addiMembers' type='radio' value='yes' title='Yes' />
                                        <RadioLabels name='addiMembers' type='radio' value='no' title='No' />
                                    </NewRadioButtons>

                                    <NewRadioButtons heading='Do you accept incontinence?' name='incontinence'>
                                        <RadioLabels name='incontinence' type='radio' value='yes' title='Yes' />
                                        <RadioLabels name='incontinence' type='radio' value='no' title='No' />
                                    </NewRadioButtons>

                                    <NewRadioButtons heading='Do you do night shifts?' name='nightShift'>
                                        <RadioLabels name='nightShift' type='radio' value='yes' title='Yes' />
                                        <RadioLabels name='nightShift' type='radio' value='no' title='No' />
                                    </NewRadioButtons>

                                    <NewRadioButtons heading='Do you accept demented patients?' name='demPatients'>
                                        <RadioLabels name='demPatients' type='radio' value='none' title='None' />
                                        <RadioLabels name='demPatients' type='radio' value='mild' title='Mild' />
                                        <RadioLabels name='demPatients' type='radio' value='advance' title='Advance' />
                                    </NewRadioButtons>

                                    <NewRadioButtons heading='Area' name='area'>
                                        <RadioLabels name='area' type='radio' value='urban' title='Urban' />
                                        <RadioLabels name='area' type='radio' value='rural' title='Rural' />
                                    </NewRadioButtons>


                                    <NewRadioButtons heading='Number of persons' name='numberOfPatients'>
                                        <RadioLabels name='numberOfPatients' type='radio' value='single' title='Single' />
                                        <RadioLabels name='numberOfPatients' type='radio' value='couple' title='Couple' />
                                    </NewRadioButtons>



                                </div>
                                <div className='second-half'>

                                    <TextField label="Name" name="name" type="text" />
                                    <TextField label="First Name" name="firstName" type="text" />
                                    <TextField label="Surname" name="surName" type="text" />
                                    <TextField label="Sex" name="sex" type="text" />
                                    <TextField label="Age" name="age" type="text" />
                                    <NewRadioButtons heading='Level of German?' name='german'>
                                        <RadioLabels name='german' type='radio' value='basic' title='Basic' />
                                        <RadioLabels name='german' type='radio' value='advance' title='Advance' />
                                        <RadioLabels name='german' type='radio' value='professional' title='Professional' />
                                    </NewRadioButtons>

                                    <NewRadioButtons heading='Do you have driving license and are willing to drive?' name='drivingLic'>
                                        <RadioLabels name='drivingLic' type='radio' value='yes' title='Yes' />
                                        <RadioLabels name='drivingLic' type='radio' value='no' title='No' />
                                    </NewRadioButtons>

                                    <NewRadioButtons heading='Do you smoke?' name='smoking'>
                                        <RadioLabels name='smoking' type='radio' value='yes' title='Yes' />
                                        <RadioLabels name='smoking' type='radio' value='no' title='No' />
                                    </NewRadioButtons>

                                    <div style={{ marginBottom: '15px', fontWeight: 'bold', marginTop: '20px', color: 'black' }} id="checkbox-group">Do you accept inmobility? </div>
                                    <div role="group" aria-labelledby="checkbox-group">
                                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                                            <Field type="checkbox" name="immobility" value="none" />
                                            None
                                        </label>
                                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                                            <Field type="checkbox" name="immobility" value="wheelChair" />
                                            Wheelchair
                                        </label>
                                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                                            <Field type="checkbox" name="immobility" value="bedRidden" />
                                            Bed-Ridden
                                        </label>
                                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                                            <Field type="checkbox" name="immobility" value="lifting" />
                                            Lifting
                                        </label>

                                        <ErrorMessage component="div" name="immobility" className="error-message" />

                                    </div>




                                </div>
                            </div>
                            <div className='button-div'>
                                <button className='form-button-submit'
                                    style={{ marginRight: '20px', cursor: 'pointer', marginTop: 20, backgroundColor: '#f8f8f8', borderRadius: '4px', width: '150px', color: '#1C1E26', padding: '10px 10px' }}
                                    disabled={isSubmitting} type="submit">Submit</button>
                                <button className='form-button-reset'
                                    style={{ marginTop: 20, marginBottom: '20px', cursor: 'pointer', backgroundColor: '#1C1E26', borderRadius: '4px', width: '150px', color: '#f8f8f8', padding: '10px 10px' }} type="reset">Reset</button>

                            </div>

                        </Form>
                    </div>
                </div>
            )}
        </Formik >
    )
}