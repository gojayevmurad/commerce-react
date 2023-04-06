import React, { useEffect, useState } from "react";
import "./shop.scss";

//! components
import StarRating from "../../components/StarRating/StarRating";
import Product from "../../components/Product/Product";

//! material ui
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Slider } from "@mui/material";
import FetchData from "../../api/api";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function valuetext(value) {
  return `${value}°C`;
}

const Shop = () => {
  const [parameterSortBy, setParameterSortBy] = useState("");

  const [productsCount, setProductsCount] = useState(0);

  //! filter states
  const [priceValue, setPriceValue] = useState([0, 400]);
  const [sortBy, setSortBY] = useState("");

  //! products states
  const [products, setProducts] = useState([]);
  const [ratingValue, setRatingValue] = useState(1.5);

  //! pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [countItems, setcountItems] = useState(6);

  //! pagination
  useEffect(() => {
    getProducts();
  }, [currentPage]);

  //! sort by

  useEffect(() => {
    if (sortBy === "rating") {
      setParameterSortBy("&_sort=rating&_order=desc");
    } else if (sortBy === "price") {
      setParameterSortBy("&_sort=price&_order=desc");
    } else {
      setParameterSortBy("&_sort=order_count&_order=desc");
    }
  }, [sortBy]);

  //! get products
  async function getProducts() {
    let valuableUrl = `products?_page=${currentPage}&_limit=${countItems}`;

    parameterSortBy && (valuableUrl += parameterSortBy);

    const res = await FetchData.getData(valuableUrl);
    setProducts(res.data);
    setProductsCount(res.headers.get("x-total-count"));
    setPages(Math.ceil(+res.headers.get("x-total-count") / countItems));
  }

  useEffect(() => {
    getProducts();
  }, [parameterSortBy]);
  //! categories
  const categoryList = [
    "Mobil və Laptoplar",
    "Əyləncə",
    "Şəkil və Video",
    "Məişət",
  ];
  //! rating
  const ratingList = [1.5, 2.5, 3.5, 4.5, 5];

  //! price range
  const setPriceValueHandler = (event, newValue) => {
    setPriceValue(newValue);
  };

  //! sort by
  const setSortByHandler = (event) => {
    setSortBY(event.target.value);
  };

  const handleChangeRadio = (event) => {
    setRatingValue(event.target.value);
  };

  const changeActive = (e) => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    e.target.classList.add("active");
  };

  return (
    <>
      <div className="shop_products">
        <div className="container">
          <div className="shop_products--content">
            <div className="shop_products--filter">
              <div className="filter--categories">
                <h4>Məhsul kateqoriyaları</h4>
                <ul>
                  {categoryList.map((item, index) => {
                    return (
                      <li
                        data-value={item}
                        onClick={(e) => changeActive(e)}
                        key={index}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="filter--price_range">
                <h4>Qiymət aralığı</h4>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={priceValue}
                  onChange={setPriceValueHandler}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={0}
                  max={400}
                  step={10}
                />
              </div>
              <div className="filter--rating">
                <ul>
                  <FormControl>
                    <h4 id="demo-controlled-radio-buttons-group">Reytinq</h4>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={ratingValue}
                      onChange={handleChangeRadio}
                    >
                      {ratingList.map((item, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            value={item}
                            control={<Radio />}
                            label={
                              <div
                                style={{
                                  display: "flex",
                                  gap: 10,
                                  alignItems: "center",
                                }}
                              >
                                <StarRating rating={item} />{" "}
                                {item < 5 && "və yuxarı"}
                              </div>
                            }
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </ul>
              </div>
            </div>
            <div className="shop_products--list">
              <div className="shop_products--list--title">
                <div className="left_side">
                  Göstərilir {productsCount} -dən{" "}
                  {currentPage > 1 ? (currentPage - 1) * countItems + 1 : 1}-
                  {currentPage * countItems > productsCount
                    ? productsCount
                    : currentPage * countItems}
                </div>
                <div className="right_side">
                  <div className="sort_by">
                    <Box sx={{ width: 200 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Sırala
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={sortBy}
                          label="Age"
                          onChange={(e) => setSortByHandler(e)}
                        >
                          <MenuItem value="popularity">Populyarlıq</MenuItem>
                          <MenuItem value="rating">Reytinq</MenuItem>
                          <MenuItem value="price">Qiymət</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
              <div className="shop_products--list--content">
                {products.map((item, index) => {
                  return <Product key={index} product={item} />;
                })}
              </div>
              <div className="shop_products--list--pagination">
                <ul>
                  <li className="pagination_prev_btn">
                    <button
                      onClick={() => {
                        currentPage > 1 &&
                          (setCurrentPage(currentPage - 1) ||
                            window.scrollTo(0, 0));
                      }}
                      className={currentPage === 1 ? "disabled" : ""}
                    >
                      <i className="fas fa-angle-left"></i>
                    </button>
                  </li>
                  {currentPage > 2 && (
                    <>
                      <li className="pagination_first_page">
                        <button
                          onClick={() => {
                            window.scrollTo(0, 0);
                            setCurrentPage(1);
                          }}
                        >
                          1
                        </button>
                      </li>
                      <p style={{ alignSelf: "flex-end" }}>...</p>
                    </>
                  )}
                  {currentPage > 1 && (
                    <li className="pagination_prev_page">
                      <button
                        onClick={() => {
                          window.scrollTo(0, 0);
                          setCurrentPage(currentPage - 1);
                        }}
                      >
                        {currentPage - 1}
                      </button>
                    </li>
                  )}
                  <li>
                    <button className="pagination_current_page">
                      {currentPage}
                    </button>
                  </li>
                  {currentPage < pages && (
                    <li className="pagination_next_page">
                      <button
                        onClick={() => {
                          window.scrollTo(0, 0);
                          setCurrentPage(currentPage + 1);
                        }}
                      >
                        {currentPage + 1}
                      </button>
                    </li>
                  )}

                  {currentPage < pages - 1 && (
                    <>
                      <p style={{ alignSelf: "end" }}>...</p>
                      <li className="pagination_last_page">
                        <button
                          onClick={() => {
                            window.scrollTo(0, 0);
                            setCurrentPage(pages);
                          }}
                        >
                          {pages}
                        </button>
                      </li>
                    </>
                  )}

                  <li className="pagination_next_btn">
                    <button
                      onClick={() => {
                        currentPage < pages &&
                          (setCurrentPage(currentPage + 1) ||
                            window.scrollTo(0, 0));
                      }}
                      className={currentPage == pages ? "disabled" : ""}
                    >
                      <i className="fas fa-angle-right"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
