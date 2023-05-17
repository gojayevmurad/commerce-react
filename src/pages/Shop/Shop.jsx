import React, { useEffect, useState } from "react";
import "./shop.scss";

//! components
import StarRating from "../../components/StarRating/StarRating";
import Product from "../../components/Product/Product";
import Loading from "../../components/Loading/Loading";

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

function convertObjectToUrlParams(obj) {
  const params = new URLSearchParams();

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] && !Array.isArray(obj[key])) {
      params.append(key, obj[key]);
    }
    if (key == "price") {
      params.append("min_price", obj[key][0]);
      params.append("max_price", obj[key][1]);
    }
  }

  return params.toString();
}

const initialState = {
  _limit: 6,
  _sort: "",
  _order: "desc",
  price: [0, 18000],
  rating: 1.5,
  category: null,
  _page: 1,
};

const categoryList = [
  "Mobil və Laptoplar",
  "Əyləncə",
  "Şəkil və Video",
  "Məişət",
];
const ratingList = [1.5, 2.5, 3.5, 4.5, 5];

const Shop = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  //! products states
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);

  //! pagination states
  const [pages, setPages] = useState();
  const [countItems, setcountItems] = useState(6);

  //! params

  const [searchParams, setSearchParams] = useState(initialState);

  const paramsChange = (name, value) =>
    setSearchParams({ ...searchParams, [name]: value });

  const getProducts = async () => {
    let params =
      convertObjectToUrlParams(searchParams) + `&_page=${currentPage}`;
    await FetchData.getData("?" + params).then((res) => {
      setProducts(res.data.products);
      setProductsCount(res.data.totalCount);
      setPages(Math.ceil(res.data.totalCount / countItems));
    });
  };

  return (
    <>
      {isLoading && <Loading isLoading={isLoading} />}
      <div className="shop_products">
        <div className="container">
          <div className="shop_products--content">
            <div className="shop_products--filter">
              <div className="filter--categories">
                <h4>Məhsul kateqoriyaları</h4>
                <ul>
                  <FormControl>
                    <h4 id="demo-controlled-radio-buttons-group">Reytinq</h4>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={searchParams.category}
                      onChange={(e) => paramsChange("category", e.target.value)}
                    >
                      {categoryList.map((item, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            value={index + 1}
                            control={<Radio />}
                            label={<p>{item}</p>}
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </ul>
              </div>
              <div className="filter--price_range">
                <h4>Qiymət aralığı</h4>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={searchParams.price}
                  onChange={(event, newValue) =>
                    paramsChange("price", event.target.value)
                  }
                  valueLabelDisplay="auto"
                  // getAriaValueText={valuetext}
                  min={0}
                  max={18000}
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
                      value={searchParams.rating}
                      onChange={(e) => paramsChange("rating", e.target.value)}
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
              <button
                className="reset_filter"
                onClick={() => setSearchParams(initialState)}
              >
                Sıfırla
              </button>
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
                          value={searchParams._sort}
                          label="Age"
                          onChange={(e) =>
                            paramsChange("_sort", e.target.value)
                          }
                        >
                          <MenuItem value="order_count">Sifariş Sayı</MenuItem>
                          <MenuItem value="rating">Reytinq</MenuItem>
                          <MenuItem value="price">Qiymət</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
              {products.length ? (
                <div className="shop_products--list--content">
                  {products.map((item, index) => {
                    return <Product key={index} product={item} />;
                  })}
                </div>
              ) : (
                <p className="products_not_found">
                  Təəssüf ki, məhsul tapılmadı :(
                </p>
              )}
              {countItems < productsCount && (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
