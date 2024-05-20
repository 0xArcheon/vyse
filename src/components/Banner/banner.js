import React from "react";
import { Button, ConfigProvider } from "antd";
import "./banner.css";
import ProductForm from "../ProductForm/ProductForm";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

function Banner({ data }) {
  const [open, setOpen] = useState(false);
  console.log(data);
  const handleClick = () => {
    if (data === "empty") {
      console.log("login first");
      window.location.href = "/login";
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="banner">
      <div className="left">
        <h1 className="bannertxt">
          Buy, Sell or Trade <br />
          your goods
          <br />
          easily with Zero fees
        </h1>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: "#262171",
              },
            },
          }}
        >
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={handleClick}
          >
            Sell now
          </Button>
          <Dialog maxWidth="xl" open={open} onClose={() => setOpen(false)}>
            <div style={{ width: 700 }}>
              <DialogTitle>
                <DialogContent>
                  <ProductForm />
                </DialogContent>
              </DialogTitle>
            </div>
          </Dialog>
        </ConfigProvider>
      </div>
      <div className="right">
        <div>
          <img src="/images/BannerImg.png" alt="eCommerce Illustrsation"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
