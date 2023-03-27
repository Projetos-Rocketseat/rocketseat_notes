import { Button, Modal } from "antd";
import { useState } from "react";

import { Container } from "./styles";

import { Details } from "../../pages/Details";

export const CustomModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <div class="page-wrapper">
        <a class="btn trigger" href="javascript:;">
          Click Me!
        </a>
      </div>
      <div class="modal-wrapper">
        <div class="modal">
          <div class="head">
            <a class="btn-close trigger" href="javascript:;"></a>
          </div>
          <div class="content"></div>
        </div>
      </div>
    </Container>
  );
};
