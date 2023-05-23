import React, { useEffect, useState } from "react";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../redux/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { showInvalidMessage } from "../../utils/";
import fbSvg from "../../assets/fb.svg";
import googleSvg from "../../assets/google.svg";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.getItem("user") && navigate("/");
  }, []);

  const loginState = useSelector((state) => state.auth.login);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email düzgün formada daxil edilməyib")
      .required("Email daxil edilməyib"),
    password: yup
      .string()
      .min(8, "Şifrə ən az 8 simvoldan ibarət olmalıdır")
      .required("Şifrə daxil edilməyib"),
  });

  const onSubmit = (body) => {
    dispatch(loginAsync(body, navigate, toast));
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema,
    }
  );

  return (
    <div className="login_page">
      <div className="container">
        <div className="login_page--content">
          <form onSubmit={handleSubmit}>
            <h3>Daxil ol</h3>
            <InputText
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              placeholder="Email"
            />
            {showInvalidMessage(errors.email, touched.email)}
            <Password
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              feedback={false}
              placeholder="Şifrə"
              className="cover_input"
              inputClassName="input"
              autoComplete="on"
              toggleMask
            />
            {showInvalidMessage(errors.password, touched.password)}
            <Button
              type="submit"
              loading={loginState.loading}
              label="Daxil ol"
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

            <p className="no_account">
              Mövcud hesabınız yoxdur?{" "}
              <NavLink to="/register">Qeydiyyatdan keç</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
