import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { selectUser } from 'redux/auth/selectors';
import { refreshUser, updateUser } from 'redux/auth/operations'
import { patterns } from 'helpers';


import {
  Wrapper,
  User,
  FormUser,
  BlockInput,
  LabelInput,
  Input,
  StyledDatePicker,
  InputFile,
  AddBtn,
  LabelImg,
  ContainerImg,
  ImgAvatar,
  SvgAvatar,
  BtnSubmit,
  StyledErrorMessage,
  DatePickerWrap,
  IconUser,
  InputContainer,
} from './UserForm.styled';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .matches(patterns.namePattern, 'Name should contain only letters')
    .min(2, 'Must be at least 2 characters long!')
    .max(16, 'Must be up to 16 characters long!')
    .required('Name is required field'),
     
  birthday: Yup.date().nullable(),
  email: Yup.string()
    .email('Invalid email format')
    .matches(patterns.emailPattern)
    .required('Email is required'),
  
  phone: Yup.string()
    .matches(patterns.phonePattern, 'Enter your phone number in format 38 (011) 111 11 11'),
  skype: Yup.string().max(16),
 
 });


export const UserForm = () => {
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();

  const [avatarUrl, setAvatarUrl] = useState(null);
  const [isUpdateForm, setIsUpdateForm] = useState(null);
  const [newBirthday, setNewBirthday] = useState(null);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skype: '',
    birthday: '',
  });

  useEffect(() => {
    const saveFormData = localStorage.getItem('formData');
    if (saveFormData) {
      setFormData(JSON.parse(saveFormData));
    }
  }, []);

  useEffect(() => {
    if (isUpdateForm) {
      dispatch(refreshUser());
      setIsUpdateForm(null);
    }
  }, [dispatch, isUpdateForm]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleDatePicker = () => {
    setIsOpenDate(false);
  };

  return (
    <Wrapper>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: formData.name || userInfo?.name || '',
          email: formData.email || userInfo?.email || '',
          phone: formData.phone || userInfo?.phone || '',
          skype: formData.skype || userInfo?.skype || '',
          birthday:
            newBirthday || formData.birthday || userInfo?.birthday
              ? new Date(newBirthday || formData.birthday || userInfo?.birthday)
              : new Date(),
        }}
        onSubmit={async values => {
          const formData = new FormData();
          formData.append('name', values.name);
          formData.append('email', values.email);
          if (values.phone) {
            formData.append('phone', values.phone);
          }
          if (values.skype) {
            formData.append('skype', values.skype);
          }
          formData.append('birthday', values.birthday);
          if (avatarUrl) {
            formData.append('avatarUrl', avatarUrl);
          }
          await dispatch(updateUser(formData));
        }}
        validationSchema={userSchema}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <FormUser autoComplete="off" onSubmit={handleSubmit}>
            
            <ContainerImg>
              {avatarUrl ? (
                <ImgAvatar
                  src={URL.createObjectURL(avatarUrl)}
                  alt="avatar"
                />
              ) : userInfo?.userImgUrl ? (
                <ImgAvatar src={userInfo.avatar} alt="avatar" />
              ) : (
                <SvgAvatar>
                <IconUser/>
                </SvgAvatar>
              )}
              <LabelImg htmlFor="avatarUrl">
                <AddBtn />
                <InputFile
                  id="avatarUrl"
                  type="file"
                  onChange={event => setAvatarUrl(event.target.files[0])}
                  accept="image/*,.png,.jpg,.gif,.web"
                  name="avatarUrl"
                ></InputFile>
              </LabelImg>
            </ContainerImg>


            <h2>{userInfo?.name} </h2>
            <User>User</User>
            <BlockInput>
              <InputContainer>
            <LabelInput htmlFor="name" >
                <p>User Name</p>
                </LabelInput>
                   
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Name"
                  />
                  <div style={{ display: "flex", flexDirection: "column", color: "red"}
                                    }>
                  <StyledErrorMessage name="name"  />
                      </div>
                </InputContainer>
              
             <InputContainer>
                <LabelInput htmlFor="phone">
                  <p>Phone</p>
              </LabelInput>
                          <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={values.phone ? values.phone : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="38 (000) 000 00 00"
                          />
                <div style={{ display: "flex", flexDirection: "column", color: "red"}
                                    }>
                          <StyledErrorMessage name="phone" />
                        </div>
                        
                      </InputContainer>
                    
                     <InputContainer>
                <LabelInput htmlFor="birthday">
               <p>Birthday</p>
                </LabelInput>
                <DatePickerWrap>
                  <StyledDatePicker
                    type="date"
                    name="birthday"
                    id="birthday"
                    input={true}
                    maxDate={new Date()}
                    selected={values.birthday}
                    onChange={data => {
                      setNewBirthday(data);
                      handleDatePicker();
                    }}
                    placeholder="Birthday"
                    dateFormat="yyyy/MM/dd"
                    open={isOpenDate}
                    onClickOutside={() => setIsOpenDate(false)}
                    onFocus={() => setIsOpenDate(true)}
                    showYearDropdown
                    scrollableYearDropdown
                  />
                  
                  <StyledErrorMessage name="birthday" />
                  
                  </DatePickerWrap>
                  </InputContainer>
              
            <InputContainer>
              <LabelInput htmlFor="skype">
                  <p>Skype</p>
                </LabelInput>
                    <Input
                      type="text"
                      name="skype"
                      id="skype"
                      placeholder="Add a skype number"
                      value={values.skype ? values.skype : ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                <div style={{ display: "flex", flexDirection: "column", color: "red"}
                  }>
                    <StyledErrorMessage name="skype" />
                  </div>
             </InputContainer>
              
              <InputContainer>
              <LabelInput htmlFor="email">
                  <p>Email</p>
                  </LabelInput>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                <div style={{ display: "flex", flexDirection: "column", color: "red"}
                  }>
                    <StyledErrorMessage name="email" />
                  </div>
                  </InputContainer>
                
            </BlockInput>
            <BtnSubmit type="submit">Save changes</BtnSubmit>
          </FormUser>
        )}
      </Formik>
    </Wrapper>
  );
};



