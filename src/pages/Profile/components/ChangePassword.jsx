import React from "react";
import "./styles/changePassword.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import * as yup from "yup";
import { showInvalidMessage } from "../../../utils";
import { Formik, Form, Field } from "formik";
import { Button } from "primereact/button";
import { changePasswordAsync } from "../../../redux/auth/authSlice";

const FormSchema = yup.object().shape({
  password: yup
    .string()
    .required("Şifrənizi daxil edin")
    .min(8, "Şifrə minimum 8 simvoldan ibarət olmalıdır")
    .matches(/[0-9]/, "Şifrədə rəqəm olmalıdır")
    .matches(/[a-z]/, "Şifrədə kiçik hərf olmalıdır")
    .matches(/[A-Z]/, "Şifrədə böyük hərf olmalıdır")
    .matches(/[^\w]/, "Şifrədə simvol olmalıdır"),
  newPassword: yup
    .string()
    .required("Yeni şifrənizi daxil edin")
    .min(8, "Şifrə minimum 8 simvoldan ibarət olmalıdır")
    .matches(/[0-9]/, "Şifrədə rəqəm olmalıdır")
    .matches(/[a-z]/, "Şifrədə kiçik hərf olmalıdır")
    .matches(/[A-Z]/, "Şifrədə böyük hərf olmalıdır")
    .matches(/[^\w]/, "Şifrədə simvol olmalıdır"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Şifrələr eyni olmalıdır"),
});

const ChangePassword = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.changePassword.loading);

  const onSubmitHandler = (body) => {
    const data = { password: body.password, newPassword: body.newPassword };

    dispatch(changePasswordAsync(data, toast));
  };

  return (
    <div className="profile_changepass">
      <h3>Şifrəni yenilə</h3>
      <Formik
        initialValues={{
          password: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={FormSchema}
        onSubmit={async (values, { resetForm }) => {
          onSubmitHandler(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <p>Köhnə şifrəniz : </p>
              <Field
                type="password"
                name="password"
                placeholder="Şifrəniz"
                autoComplete="off"
              />
              {showInvalidMessage(errors.password, touched.password)}
            </div>
            <div>
              <p>Yeni şifrəniz : </p>
              <Field
                type="password"
                name="newPassword"
                placeholder="Yeni şifrəniz"
                autoComplete="off"
              />
              {showInvalidMessage(errors.newPassword, touched.newPassword)}
            </div>
            <div>
              <p>Yeni şifrənizin təkrarı : </p>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Yeni şifrənizin təkrarı"
                autoComplete="off"
              />
              {showInvalidMessage(
                errors.confirmPassword,
                touched.confirmPassword
              )}
            </div>
            <Button loading={isLoading} type="submit" label="Dəyişdir" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
