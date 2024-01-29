// BasicModal.js
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LogInForm from "./LogInForm";
import { useNavigate, useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LogInModal() {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LogInForm
            callback={() => {
              navigate(from, { replace: true });
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}
