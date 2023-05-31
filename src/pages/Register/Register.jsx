import React from "react";
import "./register.scss";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import * as yup from "yup";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import fbSvg from "../../assets/fb.svg";
import googleSvg from "../../assets/google.svg";

import { showInvalidMessage } from "../../utils";
import { toast } from "react-hot-toast";
import { registerAsync } from "../../redux/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.auth.register);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    surname: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Ad daxil edilməyib"),
    surname: yup.string().required("Soyad daxil edilməyib"),
    email: yup
      .string()
      .email("Email düzgün formada daxil edilməyib")
      .required("Email daxil edilməyib"),
    password: yup
      .string()
      .min(8, "Şifrə ən az 8 simvoldan ibarət olmalıdır")
      .required("Şifrə daxil edilməyib")
      .matches(/[0-9]/, "Şifrədə rəqəm olmalıdır")
      .matches(/[a-z]/, "Şifrədə kiçik hərf olmalıdır")
      .matches(/[A-Z]/, "Şifrədə böyük hərf olmalıdır")
      .matches(/[^\w]/, "Şifrədə simvol olmalıdır"),
  });

  const onSubmit = (values) => {
    const body = {
      ...values,
    };
    dispatch(registerAsync(body, navigate, toast));
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema,
    }
  );

  return (
    <div className="register_page">
      <NavLink to="/">
        <i className="fa-solid fa-arrow-left-long"></i> Mağazaya qayıt
      </NavLink>
      <div className="container">
        <div className="register_page--content">
          <form onSubmit={handleSubmit}>
            <h3>Qeydiyyat</h3>
            <InputText
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              placeholder="Ad"
            />
            {showInvalidMessage(errors.name, touched.name)}
            <InputText
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              placeholder="Email"
            />
            {showInvalidMessage(errors.email, touched.email)}
            <InputText
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              placeholder="Soyad"
            />
            {showInvalidMessage(errors.surname, touched.surname)}
            <Password
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              feedback={false}
              placeholder="Şifrə"
              className="cover_input"
              inputClassName="input"
              toggleMask
            />
            {showInvalidMessage(errors.password, touched.password)}
            <Button
              type="submit"
              loading={registerState.loading}
              label="Qeydiyyat"
              className="submit_btn"
            />
            <p>Və ya</p>
            <div className="social_login">
              <Button>
                <img src={fbSvg} alt="Facebook" />
              </Button>
              <Button>
                <img src={googleSvg} alt="Google" />
              </Button>
            </div>
            <p className="have_account">
              Mövcud hesabınız var? <NavLink to="/login">Daxil ol</NavLink>
            </p>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
