import * as React from "react";
import Button from "react-bootstrap/Button";

import css from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className="section">
      <h3 className={css.title}>- Css Modules -</h3>
      <Button variant="info">Try!</Button>
    </div>
  );
};
