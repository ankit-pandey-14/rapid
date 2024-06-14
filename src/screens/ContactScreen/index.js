import React, { useState } from 'react';
import { SectionHeadingStyle } from '../../styles/components/SectionHeadingStyle';
import { ContactWrapper, ContactDataWrapper, SingleDataWrapper, DataLabel, DataValue } from '../../styles/screens/ContactStyle';
import CustomForm from '../../components/customForm';

import * as Yup from 'yup';
import CustomModal from '../../components/customModal';
import CustomImagePreview from '../../components/customImagePreview';

const contactFieldList = () => [
    {
        type: 'text',
        title: 'Name',
        id: 'name',
        name: 'name',
        displayError: 'true',
    },
    {
        type: 'email',
        title: 'Email',
        id: 'email',
        name: 'email',
        displayError: 'true',
    },
    {
        type: 'date',
        title: 'Date of Birth',
        id: 'dob',
        name: 'dob',
        displayError: 'true',
    },
    {
        type: 'text',
        title: 'Address',
        id: 'address',
        renderAs: 'textarea',
        name: 'address',
        displayError: 'true',
    },
    {
        type: 'text',
        title: 'Bio',
        id: 'bio',
        renderAs: 'textarea',
        name: 'bio',
        displayError: 'true',
    },
    {
        type: 'file',
        title: 'Profile Image',
        id: 'profile',
        name: 'profile',
        displayError: 'true',
    },
    {
        type: 'file',
        title: 'Banner Image',
        id: 'banner',
        name: 'banner',
        displayError: 'true',
    },
];

const initialValues = {
    name: '',
    email: '',
    address: '',
    dob: '',
    bio: '',
    profile: '',
    banner: '',
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required.').matches(/^[A-Za-z\s]+$/, 'Invalid name'),
    email: Yup.string()
        .email('Please enter a valid email.')
        .required('This field is required')
        .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email.'),
    address: Yup.string().required('This field is required.'),
    dob: Yup.date().max(new Date(), 'Date of birth cannot be in future.').required('This field is required.'),
    bio: Yup.string().required('This field is required.'),
    profile: Yup.mixed()
        .nullable()
        .required('This field is required.')
        .test(
            'FILE_SIZE',
            'File is too large(max 5MB)',
            (value) => {
                return !value || (value && value.size <= 5242880); //5MB
            }
        )
        .test(
            'FILE_FORMAT',
            'Invalid file type',
            (value) => {
                return !value || (value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type));
            }
        ),
    banner: Yup.mixed()
        .nullable()
        .required('This field is required.')
        .test(
            'FILE_FORMAT',
            'Invalid file type',
            (value) => {
                return !value || (value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type));
            }
        )
        .test(
            'FILE_SIZE',
            'File is too large(max 10MB)',
            (value) => {
                return !value || (value && value.size <= 10485760); // 10MB
            }
        ),
});

const DisplayDataInModal = ({ data }) => {
    return (
        <ContactDataWrapper className='d-grid'>
            <SingleDataWrapper className='d-flex'>
                <DataLabel>Profile Image :</DataLabel>
                <DataValue>
                    {
                        data?.profile
                        ? <CustomImagePreview classes='profile-image' file={data?.profile}/>
                        : null
                    }
                </DataValue>
            </SingleDataWrapper>

            <SingleDataWrapper className='d-flex'>
                <DataLabel>Name :</DataLabel>
                <DataValue>{data?.name}</DataValue>
            </SingleDataWrapper>

            <SingleDataWrapper className='d-flex'>
                <DataLabel>Email :</DataLabel>
                <DataValue>{data?.email}</DataValue>
            </SingleDataWrapper>

            <SingleDataWrapper className='d-flex'>
                <DataLabel>Date of Birth :</DataLabel>
                <DataValue>{data?.dob}</DataValue>
            </SingleDataWrapper>

            <SingleDataWrapper className='d-flex'>
                <DataLabel>Address :</DataLabel>
                <DataValue>{data?.address}</DataValue>
            </SingleDataWrapper>

            <SingleDataWrapper className='d-flex'>
                <DataLabel>Bio :</DataLabel>
                <DataValue>{data?.bio}</DataValue>
            </SingleDataWrapper>

            <SingleDataWrapper className='d-flex'>
                <DataLabel>Banner Iamge :</DataLabel>
                <DataValue>
                    {
                        data?.banner
                        ? <CustomImagePreview classes='banner-image' file={data?.banner}/>
                        : null
                    }
                </DataValue>
            </SingleDataWrapper>
        </ContactDataWrapper>
    );
}

const ContactScreen = () => {
    const [modalInfo, setModalInfo] = useState({
        data: null,
        visible: false,
    })
    const onContact = (values, action) => {
        setModalInfo({
            visible: true,
            data: values,
        });

        action.resetForm();
    };

    return (
        <>
            <ContactWrapper className='container d-flex align-items-center'>
                <SectionHeadingStyle>Contact Us</SectionHeadingStyle>

                <CustomForm
                    formFieldList={contactFieldList()}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onContact}
                />
            </ContactWrapper>

            <CustomModal
                show={modalInfo.visible}
                onClose={() => {
                    setModalInfo({
                        visible: false,
                        data: null,
                    })
                }}
                heading={'Form Data'}
                closeButton={true}
                body={<DisplayDataInModal data={modalInfo.data} />}
            />
        </>
    );
}

export default ContactScreen;