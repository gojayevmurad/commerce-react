import React, { useState } from "react";
import "./styles/addresses.scss";

import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import * as yup from "yup";
import { showInvalidMessage } from "../../../utils";
import { Button } from "primereact/button";

const validationSchema = yup.object().shape({
  name: yup.string().required("Adınızı daxil edin"),
  city: yup.string().required("Şəhər daxil edilməyib"),
  street: yup.string().required("Küçə daxil edilməyib"),
  street1: yup.string(),
});

const Addresses = () => {
  const [billingAddress, setBillingAddress] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(false);

  const addressList = {
    // billingAddress: [
    //   {
    //     name: "Billing address",
    //     address: "address",
    //     city: "Baku",
    //   },
    // ],
    // shippingAddress: [
    //   {
    //     name: "Shipping address",
    //     address: "address",
    //     city: "Surakani",
    //   },
    // ],
  };

  const onSubmitBilling = (body) => {
    console.log(body);
  };

  const onSubmitShipping = (body) => {
    console.log(body);
  };

  const formikBillingAddress = useFormik({
    initialValues: {},
    onSubmit: onSubmitBilling,
    validationSchema,
  });

  const formikShippingAddress = useFormik({
    initialValues: {},
    onSubmit: onSubmitShipping,
    validationSchema,
  });

  const billingAddressHandler = () => {
    setBillingAddress(!billingAddress);
  };

  const shippingAddressHandler = () => {
    setShippingAddress(!shippingAddress);
  };

  return (
    <div className="profile_addresses">
      <h3>Ünvanlar</h3>
      <div>
        <div className="profile_addresses--billing">
          <h3>Qeydiyyat Ünvanı</h3>
          <div>
            {addressList.billingAddress &&
              addressList.billingAddress.map((item, index) => {
                return (
                  <div key={index}>
                    <p>
                      Name : <span>{item.name}</span>
                    </p>
                    <p>
                      Address : <span>{item.address}</span>
                    </p>
                    <p>
                      City : <span>{item.city}</span>
                    </p>
                  </div>
                );
              })}

            {!addressList.billingAddress && (
              <form
                onSubmit={formikBillingAddress.handleSubmit}
                className={!billingAddress && "hide"}
              >
                <InputText
                  name="name"
                  onChange={formikBillingAddress.handleChange}
                  onBlur={formikBillingAddress.handleBlur}
                  className="input"
                  placeholder="Name"
                />
                {showInvalidMessage(
                  formikBillingAddress.errors.name,
                  formikBillingAddress.touched.name
                )}
                <InputText
                  name="city"
                  onChange={formikBillingAddress.handleChange}
                  onBlur={formikBillingAddress.handleBlur}
                  className="input"
                  placeholder="Şəhər"
                />
                {showInvalidMessage(
                  formikBillingAddress.errors.city,
                  formikBillingAddress.touched.city
                )}
                <InputText
                  name="street"
                  onChange={formikBillingAddress.handleChange}
                  onBlur={formikBillingAddress.handleBlur}
                  className="input"
                  placeholder="Ünvan"
                />
                {showInvalidMessage(
                  formikBillingAddress.errors.street,
                  formikBillingAddress.touched.street
                )}
                <InputText
                  name="street1"
                  onChange={formikBillingAddress.handleChange}
                  onBlur={formikBillingAddress.handleBlur}
                  className="input"
                  placeholder="Ünvan"
                />
                {showInvalidMessage(
                  formikBillingAddress.errors.street1,
                  formikBillingAddress.touched.street1
                )}

                <Button
                  type="submit"
                  // loading={loginState.loading}
                  label="Saxla"
                />
              </form>
            )}
          </div>
          {!addressList.billingAddress && (
            <button onClick={billingAddressHandler}>
              {billingAddress ? (
                <>
                  İMTİNA ET <i class="fa-solid fa-xmark"></i>
                </>
              ) : (
                <>
                  ƏLAVƏ ET <i class="fa-solid fa-plus"></i>
                </>
              )}
            </button>
          )}
          {addressList.billingAddress && (
            <button>
              REDAKTƏ ET <i class="fa-regular fa-pen-to-square"></i>
            </button>
          )}
        </div>
        <div className="profile_addresses--shipping">
          <h3>Çatdırılma Ünvanı</h3>
          <div>
            {addressList.shippingAddress &&
              addressList.shippingAddress.map((item, index) => {
                return (
                  <div key={index}>
                    <p>
                      Name : <span>{item.name}</span>
                    </p>
                    <p>
                      Address : <span>{item.address}</span>
                    </p>
                    <p>
                      City : <span>{item.city}</span>
                    </p>
                  </div>
                );
              })}

            {!addressList.shippingAddress && (
              <form
                onSubmit={formikShippingAddress.handleSubmit}
                className={!shippingAddress && "hide"}
              >
                <InputText
                  name="name"
                  onChange={formikShippingAddress.handleChange}
                  onBlur={formikShippingAddress.handleBlur}
                  className="input"
                  placeholder="Name"
                />
                {showInvalidMessage(
                  formikShippingAddress.errors.name,
                  formikShippingAddress.touched.name
                )}
                <InputText
                  name="city"
                  onChange={formikShippingAddress.handleChange}
                  onBlur={formikShippingAddress.handleBlur}
                  className="input"
                  placeholder="Şəhər"
                />
                {showInvalidMessage(
                  formikShippingAddress.errors.city,
                  formikShippingAddress.touched.city
                )}
                <InputText
                  name="street"
                  onChange={formikShippingAddress.handleChange}
                  onBlur={formikShippingAddress.handleBlur}
                  className="input"
                  placeholder="Ünvan"
                />
                {showInvalidMessage(
                  formikShippingAddress.errors.street,
                  formikShippingAddress.touched.street
                )}
                <InputText
                  name="street1"
                  onChange={formikShippingAddress.handleChange}
                  onBlur={formikShippingAddress.handleBlur}
                  className="input"
                  placeholder="Ünvan"
                />
                {showInvalidMessage(
                  formikShippingAddress.errors.street1,
                  formikShippingAddress.touched.street1
                )}

                <Button
                  type="submit"
                  // loading={loginState.loading}
                  label="Daxil ol"
                  className="submit_btn"
                />
              </form>
            )}
          </div>
          {!addressList.shippingAddress && (
            <button onClick={shippingAddressHandler}>
              {shippingAddress ? (
                <>
                  İMTİNA ET <i class="fa-solid fa-xmark"></i>
                </>
              ) : (
                <>
                  ƏLAVƏ ET <i class="fa-solid fa-plus"></i>
                </>
              )}
            </button>
          )}
          {addressList.shippingAddress && (
            <button>
              REDAKTƏ ET<i class="fa-regular fa-pen-to-square"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
