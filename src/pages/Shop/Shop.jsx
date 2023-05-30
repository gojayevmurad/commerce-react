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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { toast } from "react-hot-toast";
import { getProductsAsync } from "../../redux/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  limit: 6,
  sort: "order_count",
  order: "desc",
  price: [0, 18000],
  rating: 1.5,
  category: null,
  page: 1,
};

const categoryList = [
  "Mobil və Laptoplar",
  "Əyləncə",
  "Şəkil və Video",
  "Məişət",
];

const ratingList = [1.5, 2.5, 3.5, 4.5, 5];

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products.data);

  const productsCount = useSelector(
    (state) => state.products.products.totalCount
  );
  const productLoading = useSelector(
    (state) => state.products.products.loading
  );

  const [isLoading, setIsLoading] = useState(true);

  //! pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);

  //! search params
  const [searchParams, setSearchParams] = useState(initialState);
  const [applayedParams, setApplayedParams] = useState({ ...searchParams });

  //! aside filter
  const [showFilter, setShowFilter] = useState(false);

  const paramsChange = (name, value) =>
    setSearchParams({ ...searchParams, [name]: value });

  const submitHandler = (e) => {
    e.preventDefault();
    setApplayedParams(searchParams);
    dispatch(getProductsAsync(searchParams, toast));
    setCurrentPage(1);
    window.scrollTo(0, 0);
    showFilter && setShowFilter(false);
  };

  const resetHandler = () => {
    setSearchParams(initialState);
    setApplayedParams(initialState);
    currentPage == 1
      ? dispatch(getProductsAsync(initialState, toast))
      : setCurrentPage(1);
    showFilter && setShowFilter(false);
  };

  useEffect(() => {
    dispatch(getProductsAsync(applayedParams, toast));
  }, []);

  useEffect(() => {
    dispatch(getProductsAsync({ ...applayedParams, page: currentPage }, toast));
  }, [currentPage]);

  useEffect(() => {
    setPages(Math.ceil(productsCount / applayedParams.limit));
  }, [productsCount]);

  useEffect(() => {
    products ? setIsLoading(false) : setIsLoading(true);
  }, [products]);

  useEffect(() => {
    if (showFilter) {
      console.log("ok");
      document.body.style.paddingRight = "7px";
      document.body.style.overflow = "hidden";
    } else {
      console.log("ok");

      document.body.style.paddingRight = 0;
      document.body.style.overflow = "auto";
    }
  }, [showFilter]);

  return (
    <>
      {isLoading && <Loading isLoading={isLoading} />}
      <div
        data-show={showFilter}
        onClick={() => setShowFilter(false)}
        className="shop_products--overlay"
      ></div>
      <div className="shop_products">
        <div className="container">
          <div className="shop_products--content">
            <form
              onSubmit={submitHandler}
              onReset={resetHandler}
              className="shop_products--filter"
              data-show={showFilter}
            >
              <button
                type="button"
                className="show-filter"
                onClick={() => setShowFilter(true)}
              >
                Filter
              </button>
              <div className="filter--categories">
                <ul>
                  <FormControl>
                    <h4 id="demo-controlled-radio-buttons-group">
                      Məhsul kateqoriyaları
                    </h4>
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
              <button type="reset" className="reset_filter">
                Sıfırla
              </button>
              <button type="submit" className="reset_filter">
                Tətbiq et
              </button>
            </form>
            <div className="shop_products--list">
              <div className="shop_products--list--title">
                <div className="left_side">
                  Göstərilir {productsCount} -dən{" "}
                  {currentPage > 1
                    ? (currentPage - 1) * initialState.limit + 1
                    : 1}
                  -
                  {currentPage * initialState.limit > productsCount
                    ? productsCount
                    : currentPage * initialState.limit}
                </div>
                <div className="right_side">
                  <div className="sort_by">
                    <Box sx={{ width: 100 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Sırala
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={searchParams.sort}
                          label="Age"
                          onChange={(e) => paramsChange("sort", e.target.value)}
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
              {products ? (
                <div className="shop_products--list--content">
                  {products.map((item, index) => {
                    return (
                      <Product
                        loading={productLoading}
                        key={index}
                        product={item}
                      />
                    );
                  })}
                </div>
              ) : (
                <p className="products_not_found">
                  Təəssüf ki, məhsul tapılmadı :(
                </p>
              )}
              {initialState.limit < productsCount && (
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
                    {currentPage > 2 && pages > 3 && (
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

                    {currentPage < pages - 1 && pages > 3 && (
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
