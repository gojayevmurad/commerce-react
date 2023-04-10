import React, { useState } from "react";
import "./auth.scss";
import { Login } from "../../axios";
import { setUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [singIn, setSingIn] = useState(true);
  const [singInData, setSingInData] = useState({
    email: "",
    password: "",
  });

  const singInHandler = (e) => {
    e.preventDefault();

    Login(singInData)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch(setUser(res.data.user));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!singIn && (
        <div className="auth_main">
          <div className="container">
            <div className="auth_main--content ">
              <div className="signup--form">
                <h2>Qeydiyyat</h2>
                <div className="signup--form__sociall">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-google"></i>
                </div>
                <p>və ya sosial media istifadə edin</p>
                <form>
                  <div className="input--group">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" placeholder="Adınız və soyadınız" />
                  </div>
                  <div className="input--group">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Emailiniz" />
                  </div>
                  <div className="input--group">
                    <i class="fa-solid fa-phone"></i>
                    <input type="text" placeholder="Nömrəniz" />
                  </div>
                  <div className="input--group">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Şifrəniz" />
                  </div>
                  <button>GÖNDƏR</button>
                </form>
                <p
                  onClick={() => setSingIn(!singIn)}
                  style={{ marginTop: 40, cursor: "pointer" }}
                >
                  Artıq hesabınız var?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {singIn && (
        <div className="auth_main">
          <div className="container">
            <div className="auth_main--content ">
              <div className="signup--form">
                <h2>Daxil ol</h2>
                <div className="signup--form__sociall">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-google"></i>
                </div>
                <p>və ya sosial media istifadə edin</p>
                <form onSubmit={singInHandler}>
                  <div className="input--group">
                    <i className="fa-solid fa-envelope"></i>
                    <input
                      type="email"
                      onChange={(e) =>
                        setSingInData({ ...singInData, email: e.target.value })
                      }
                      placeholder="Emailiniz"
                    />
                  </div>
                  <div className="input--group">
                    <i className="fa-solid fa-lock"></i>
                    <input
                      onChange={(e) =>
                        setSingInData({
                          ...singInData,
                          password: e.target.value,
                        })
                      }
                      type="password"
                      placeholder="Şifrəniz"
                    />
                  </div>
                  <button type="submit">GÖNDƏR</button>
                </form>
                <p
                  onClick={() => setSingIn(!singIn)}
                  style={{ marginTop: 40, cursor: "pointer" }}
                >
                  Hesabınız yoxdur?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
