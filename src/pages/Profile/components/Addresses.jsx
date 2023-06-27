import React, { useEffect, useRef, useState } from "react";
import "./styles/addresses.scss";
import { useDispatch, useSelector } from "react-redux";

import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import * as yup from "yup";
import { showInvalidMessage } from "../../../utils";
import { Button } from "primereact/button";
import {
  addAddressAsync,
  deleteAddressAsync,
  getAddressListAsync,
} from "../../../redux/address/addressSlice";
import { toast } from "react-hot-toast";
import MetaData from "../../../components/MetaData";
import { confirmDialog } from "primereact/confirmdialog";

const validationSchema = yup.object().shape({
  name: yup.string().required("Adınızı daxil edin"),
  city: yup.string().required("Şəhər daxil edilməyib"),
  address: yup.string().required("Küçə daxil edilməyib"),
  postalCode: yup.string().required("Poçt indeksi daxil edilməyib"),
});

const initialValues = {
  name: "",
  city: "",
  address: "",
  postalCode: "",
};

const Addresses = () => {
  const shippingFormRef = useRef();
  const billingFormRef = useRef();
  const dispatch = useDispatch();

  const [billingAddress, setBillingAddress] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(false);

  const addressList = useSelector((state) => state.address.addressList.data);
  const isLoading = useSelector((state) => state.address.addressList.loading);

  useEffect(() => {
    dispatch(getAddressListAsync(toast));
  }, []);

  const onSubmitBilling = (body) => {
    dispatch(
      addAddressAsync({ ...body, typeAddress: "billingAddress" }, toast)
    );
    billingFormRef.current.reset();
    setBillingAddress(false);
  };

  const onSubmitShipping = (body) => {
    dispatch(
      addAddressAsync({ ...body, typeAddress: "shippingAddress" }, toast)
    );
    setShippingAddress(false);
    shippingFormRef.current.reset();
  };

  const formikBillingAddress = useFormik({
    initialValues,
    onSubmit: async (body) => onSubmitBilling(body),
    validationSchema,
  });

  const formikShippingAddress = useFormik({
    initialValues,
    onSubmit: (body) => onSubmitShipping(body),
    validationSchema,
  });

  const billingAddressHandler = () => {
    setBillingAddress(!billingAddress);
  };

  const shippingAddressHandler = () => {
    setShippingAddress(!shippingAddress);
  };

  const deleteAddressHandler = (id, type) => {
    confirmDialog({
      message: "Ünvanı silməyə əminsiniz?",
      rejectLabel: "Xeyr",
      acceptLabel: "Bəli",
      header: "Confirmation",
      icon: "pi  pi-exclamation-triangle",
      accept: () => dispatch(deleteAddressAsync(id, type, toast)),
    });
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
                    <div className="actions_address">
                      {/* <div className="edit_address">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </div> */}
                      <div
                        className="delete_address"
                        onClick={() =>
                          deleteAddressHandler(item._id, "billingAddress")
                        }
                      >
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>
                    <p>
                      Ad : <span>{item.name}</span>
                    </p>
                    <p>
                      Ünvan : <span>{item.address}</span>
                    </p>
                    <p>
                      Şəhər : <span>{item.city}</span>
                    </p>
                    <p>
                      Poçt indeksi : <span>{item.postalCode}</span>
                    </p>
                  </div>
                );
              })}
            {addressList.billingAddress.length < 1 && (
              <form
                onSubmit={formikBillingAddress.handleSubmit}
                ref={billingFormRef}
                className={!billingAddress ? "hide" : ""}
              >
                <InputText
                  name="name"
                  onChange={formikBillingAddress.handleChange}
                  onBlur={formikBillingAddress.handleBlur}
                  className="input"
                  placeholder="Ad"
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
                  name="address"
                  onChange={formikBillingAddress.handleChange}
                  onBlur={formikBillingAddress.handleBlur}
                  className="input"
                  placeholder="Ünvan"
                />
                {showInvalidMessage(
                  formikBillingAddress.errors.address,
                  formikBillingAddress.touched.address
                )}
                <InputText
                  name="postalCode"
                  onChange={formikBillingAddress.handleChange}
                  onBlur={formikBillingAddress.handleBlur}
                  className="input"
                  placeholder="Poçt indeksi"
                />
                {showInvalidMessage(
                  formikBillingAddress.errors.postalCode,
                  formikBillingAddress.touched.postalCode
                )}

                <Button type="submit" loading={isLoading} label="Saxla" />
              </form>
            )}
          </div>
          {addressList.billingAddress.length < 1 && (
            <button onClick={billingAddressHandler}>
              {billingAddress ? (
                <>
                  İMTİNA ET <i className="fa-solid fa-xmark"></i>
                </>
              ) : (
                <>
                  ƏLAVƏ ET <i className="fa-solid fa-plus"></i>
                </>
              )}
            </button>
          )}
        </div>
        <div className="profile_addresses--shipping">
          <h3>Çatdırılma Ünvanı</h3>
          <div id="shipping__list">
            {addressList.shippingAddress &&
              addressList.shippingAddress.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="actions_address">
                      {/* <button className="edit_address">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button> */}
                      <button
                        className="delete_address"
                        onClick={() =>
                          deleteAddressHandler(item._id, "shippingAddress")
                        }
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                    <p>
                      Ad : <span>{item.name}</span>
                    </p>
                    <p>
                      Ünvan : <span>{item.address}</span>
                    </p>
                    <p>
                      Şəhər : <span>{item.city}</span>
                    </p>
                    <p>
                      Poçt indeksi : <span>{item.postalCode}</span>
                    </p>
                  </div>
                );
              })}

            {addressList.shippingAddress.length < 3 && (
              <form
                onSubmit={formikShippingAddress.handleSubmit}
                ref={shippingFormRef}
                className={!shippingAddress ? "hide" : ""}
              >
                <InputText
                  name="name"
                  onChange={formikShippingAddress.handleChange}
                  onBlur={formikShippingAddress.handleBlur}
                  className="input"
                  placeholder="Ad"
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
                  name="address"
                  onChange={formikShippingAddress.handleChange}
                  onBlur={formikShippingAddress.handleBlur}
                  className="input"
                  placeholder="Ünvan"
                />
                {showInvalidMessage(
                  formikShippingAddress.errors.address,
                  formikShippingAddress.touched.address
                )}
                <InputText
                  name="postalCode"
                  onChange={formikShippingAddress.handleChange}
                  onBlur={formikShippingAddress.handleBlur}
                  className="input"
                  placeholder="Poçt indeksi"
                />
                {showInvalidMessage(
                  formikShippingAddress.errors.postalCode,
                  formikShippingAddress.touched.postalCode
                )}

                <Button
                  type="submit"
                  loading={isLoading}
                  label="Saxla"
                  className="submit_btn"
                />
              </form>
            )}
          </div>
          {addressList.shippingAddress.length < 3 && (
            <button onClick={shippingAddressHandler}>
              {shippingAddress ? (
                <>
                  İMTİNA ET <i className="fa-solid fa-xmark"></i>
                </>
              ) : (
                <>
                  ƏLAVƏ ET <i className="fa-solid fa-plus"></i>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
