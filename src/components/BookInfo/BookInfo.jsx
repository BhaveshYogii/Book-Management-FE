import React from "react";
import Navbar from "../NavBar/Navbar";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./BookInfo.css";
import { Container, Grid, Button, Typography } from "@mui/material";
import { IoIosHeartEmpty } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToCartService from "../Service/AddToCartService";
import AddToListService from "../Service/AddToListService";

const BookInfo = () => {
  const { idx } = useParams();
  const location = useLocation();
  const product = location.state.book;
  const navigate = useNavigate();
  let session = document.cookie.match(/session_key=([^;]*)/);
  const handleRedirectWithDelay = (link) => {
    setTimeout(() => {
      navigate(link);
    }, 2500);
  };
  const addToCart = (BookId, Quantity) => {
    if (session == null) {
      toast.error("Log in First and try again.");
      handleRedirectWithDelay("/");
    } else {
      AddToCartService(session, BookId, Quantity);
    }
  };

  const addToList = (BookId) => {
    if (session == null) {
      toast.error("Log in First and try again.");
      handleRedirectWithDelay("/");
    } else {
      AddToListService(session,BookId);
    }
  };

  return (
    <div>
      <Navbar isAuthenticate={location.state.isAuthenticate} />
      <div className="flex justufy-center items-center h-100">
        <Container className="product-view">
          <Grid container>
            <Grid item xs={12} md={5} className="image-wrapper">
              <img className="img" src={product.Image} alt={product.Title} />
            </Grid>
            <Grid item xs={12} md={7} className="text">
              <Typography variant="h2">
                <b>{product.Title}</b>
              </Typography>
              <Typography variant="p">
                <p className="mb-5 text-center">
                  by {product.Author} <em>(Author)</em>
                </p>
              </Typography>
              <div className="flex justify-between">
                <Typography variant="h3" color="secondary">
                  <p className="mt-2">
                    Genre : <b> {product.Genre} </b>
                  </p>
                </Typography>
                <Typography variant="h3" color="secondary">
                  <p className="mt-2">
                    Language : <b> {product.Language} </b>
                  </p>
                </Typography>
              </div>

              <Typography
                variant="p"
                dangerouslySetInnerHTML={{ __html: product.Description }}
              />
              <div className="flex justify-between items-center mt-5">
                <div>
                  <Typography variant="p" color="secondary">
                    <h3 className="mt-2">
                      Price: <b> &#x20b9; {product.Price} </b>
                    </h3>
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" color="secondary">
                    <p className="text-end">
                      Publish Year: <b> {product.PublishYear} </b>
                    </p>
                  </Typography>
                  <Typography variant="h3" color="secondary">
                    <p>
                      Available Quantity: <b> {product.AvailQuantity} </b>
                    </p>
                  </Typography>
                </div>
              </div>

              <br />
              <Grid container spacing={0}>
                <Grid item xs={2}>
                  <button
                    className="bookinfo-btn h-full"
                    onClick={(e) => addToList(product.BookId)}
                  >
                    <IoIosHeartEmpty />
                    {/* <IoMdHeart /> */}
                  </button>
                </Grid>
                <Grid item xs={10}>
                  <Button
                    size="large"
                    className="custom-button"
                    onClick={(e) => addToCart(product.BookId, 1)}
                    // component={Link}
                    to="/"
                  >
                    Continue Shopping
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </div>
    </div>
  );
};

export default BookInfo;
