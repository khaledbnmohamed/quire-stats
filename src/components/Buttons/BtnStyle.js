import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Btn = styled(Button)`
  border:none;
  transition:  ${(props) => (props.variant === "link" ? props.theme.transitionBase : "")};
  padding:${(props) =>
    (props.btnsize === "sm" ? "0.313rem 1.5rem 0.5rem" : "")
    || (props.btncontent === "text" ? "0.438rem 2.813rem 0.625rem" : "")
      || (props.btncontent === "textWithIcon" ? "0.438rem 1rem 0.625rem 1.188rem" : "")
      || (props.btncontent === "icon" ? "1.188rem" : "")};
  color: ${(props) => (props.variant !== "link" ? props.theme.white : props.theme.primary)};
  background-color: ${(props) =>
    (props.variant === "link" ? "transparent" : "")};
  white-space: nowrap;
  font-size: ${(props) =>
    (props.btncontent === "text" ? props.theme.fontSizeLg : "")};
  font-family: ${(props) =>
    (props.btncontent === "text" ? props.theme.primaryFontBold : "")};
  .add-icon{
    color: ${(props) => (props.theme.white)};
    width: 0.6rem;
    padding-right:  ${(props) => (props.btncontent === "textWithIcon" ? "1.813rem" : "")};
    width:  ${(props) => (props.btncontent === "textWithIcon" ? "2.5rem" : "")};
  }
  &:hover, &:not(:disabled):not(.disabled):active{
    text-decoration:none;
    border:none;
    color: ${(props) => (props.variant === "link" ? props.theme.primary : props.theme.white)};
    background-color: ${(props) =>
    (props.variant === "primary" ? props.theme.primary1 : "")
    || (props.variant === "secondary" ? props.theme.secondary1 : "")};
  }
  &:hover{
    background-color: ${(props) =>
    (props.variant === "link" ? props.theme.light : "")};
  }
  &:not(:disabled):not(.disabled):active{
    background-color: ${(props) =>
    (props.variant === "link" ? props.theme.light1 : "")};
  }
  &:focus{
    background-color: ${(props) =>
    (props.variant === "primary" ? props.theme.primary : "")
    || (props.variant === "secondary" ? props.theme.secondary : "")
    || (props.variant === "link" ? "transparent" : "")};
    color: ${(props) => (props.variant !== "link" ? props.theme.white : "")};
    text-decoration:none;
  }
  &.btn:disabled, &:disabled .add-icon{
    color: ${(props) =>
    (props.variant === "link" ? props.theme.gray300 : props.theme.gray400)};
    background-color: ${(props) =>
    (props.variant === "link" ? "transparent" : props.theme.gray200)};
    pointer-events:none;
  }
  &.btn:not(:disabled):not(.disabled):active:focus{
    box-shadow:none;
    padding: ${(props) => (props.btncontent === "text" && props.btnsize !== "sm" ? "0.438rem 2.813rem 0.625rem" : "")};
  }
  &.danger, &.danger.btn:not(:disabled):not(.disabled):active{
    color: ${(props) => (props.theme.danger)};
  }
  &.btn-with-arrow span:before{
    content:"\f105";
    font-family:${(props) => (props.theme.fontAwesomeIcon)};
    position: absolute;
    right: 1.8rem;
    top: 0.17rem;
    font-size: 1.5rem;
  }
`;
export default Btn;
