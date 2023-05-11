import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { notification } from "antd";
// import axios from "axios";


type FormRefType = {
  current: any
}

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const formRef:FormRefType = useRef();

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };



  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    // const url = "";
    
    if (Object.keys(values).length === 3) {
      console.log('current is: ', formRef)
      emailjs.sendForm('service_ur2ymz9', 'template_z85ozad', formRef.current, 'TmidqJ90X0ixaX5tD')
      .then((result) => {
        console.log('current is: ', formRef)
          console.log(result.text);
          setShouldSubmit(true);
      }, (error) => {
          console.log(error.text);
      });

      // axios
      //   .post(url, {
      //     ...values,
      //   })
      //   .then(() => {
      //     setShouldSubmit(true);
      //   });
    }


    else{
      console.log(errors === true)
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    formRef,
    values,
    errors,
  };
};
