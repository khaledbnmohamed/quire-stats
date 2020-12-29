import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Btn from "./BtnStyle";

const Button = (props) => {
  const {
    btnText,
    btnsize,
    handleBtnClick,
    variant,
    disabledBtn,
    btncontent,
    btnType,
    classes
  } = props;
  return (
    <Btn
      variant={variant}
      onClick={() => (handleBtnClick ? handleBtnClick() : null)}
      disabled={disabledBtn}
      btncontent={btncontent}
      btnsize={btnsize}
      type={btnType}
      className={classes}
    >

      {btncontent === "textNoSpace" && (
        <span>{btnText}</span>
      )}

      {btncontent === "text" && (
        <span>{btnText}</span>
      )}

      {btncontent === "textWithIcon" && (
        <span>
          {btnText}
          <FontAwesomeIcon
            className="add-icon"
            icon={faPlus}
          />
        </span>
      )}

      {btncontent === "iconBtn" && (
        <FontAwesomeIcon
          className="add-icon"
          icon={faPlus}
        />
      )}
    </Btn>
  );
};

Button.propTypes = {
  btnText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.PropTypes.arrayOf(PropTypes.object),
  ]),
  btnType: PropTypes.string,
  btnsize: PropTypes.string,
  handleBtnClick: PropTypes.func,
  variant: PropTypes.string.isRequired,
  disabledBtn: PropTypes.bool,
  btncontent: PropTypes.string.isRequired,
  classes: PropTypes.string
};
Button.defaultProps = {
  btnText: null,
  btnType: null,
  btnsize: null,
  handleBtnClick: null,
  disabledBtn: false,
  classes: null
};

export default Button;
