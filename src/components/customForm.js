import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { OutlineButtonStyle, PrimaryButtonStyle } from '../styles/ButtonStyle';
import { FormButtonWrapper, FormFieldWrapper } from '../styles/components/FormStyle';

const DisplayFormField = ({ title, id, renderAs, type, name, displayError, setFieldValue }) => {
    return (
        <FormFieldWrapper>
            {
                title
                ? <label htmlFor={id}>{title}</label>
                : null
            }

            {
                type === 'file'
                ? (
                    <input
                        id={id}
                        name={name}
                        type={'file'}
                        onChange={(event) => {
                            setFieldValue(name, event?.target?.files?.[0])
                        }}
                    />
                )
                : <Field as={renderAs || 'input'} type={type} id={id} name={name} />
            }

            {
                displayError
                ? <ErrorMessage className='error' name={name} component={'div'} />
                : null
            }
        </FormFieldWrapper>
    );
};

const CustomForm = ({ initialValues, validationSchema, formFieldList, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange
            onSubmit={onSubmit}
        >
            {
                ({ setFieldValue }) => {
                    return (
                        <Form>
                            {
                                formFieldList?.map((formField) => {
                                    return (
                                        <DisplayFormField
                                            key={formField.id}
                                            type={formField.type}
                                            title={formField.title}
                                            id={formField.id}
                                            renderAs={formField.renderAs}
                                            name={formField.name}
                                            displayError={formField.displayError}
                                            setFieldValue={setFieldValue}
                                        />
                                    );
                                })
                            }

                            <FormButtonWrapper className='d-flex'>
                                <PrimaryButtonStyle as={'button'} type='submit'>Submit</PrimaryButtonStyle>
                                <OutlineButtonStyle as={'button'} type='reset'>Reset</OutlineButtonStyle>
                            </FormButtonWrapper>
                        </Form>
                    );
                }
            }
        </Formik>
    );
};

export default CustomForm;