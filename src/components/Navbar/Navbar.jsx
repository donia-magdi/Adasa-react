import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#161616] p-4 mx-0 flex items-center justify-around gap-4">
      <div className="flex gap-2 justify-between items-center ">
        <div>
          <img src="/logo-GdqARQRt.png" alt="" className="h-10 w-auto" />
        </div>
        <div>
          <p className="text-2xl text-white">عدسة</p>
          <small className="block text-[#f06310]">
            عالم التصوير الفوتوغرافي
          </small>
        </div>
      </div>
      {/* navigate Buttons */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <ButtonGroup
          variant="contained"
          sx={{
            borderRadius: "999px",
            overflow: "hidden",
            backgroundColor: "#161616",
            "& .MuiButton-root": {
              backgroundColor: "#161616",
              color: "#fff",
              textTransform: "none",
            },
          }}
        >
          <Button
            component={Link}
            to="/"
            sx={{
              borderRadius: 0,
              fontSize: "20px",
              fontFamily: "sans-serif",
            }}
          >
            الرئيسيه
          </Button>

          <Button
          component={Link}
          to="/blog"
            sx={{ borderRadius: 0, fontSize: "20px", fontFamily: "sans-serif" }}
          >
            المدونة
          </Button>

          <Button
            sx={{ borderRadius: 0, fontSize: "20px", fontFamily: "sans-serif" }}
          >
            من نحن
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
