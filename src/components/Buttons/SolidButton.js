import Button from "@mui/material/Button";
import Styled from "@emotion/styled";
import { styled } from "@mui/material/styles";

export default function SolidButton(props) {
  const HButton = Styled(Button)`
    text-transform: none;
    text-decoration: none;
    color:  white;
    font-weight: 600;
    background-color: #00AA00;
    font-size:${props.fontSize?props.fontSize:"16px"};
    padding: 14px;
    font-family: "Lexend", sans-serif;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    border-radius: 10px;
    margin: 20px 0px;

  `;
  const StyledIconButton = styled(HButton)(`
  &:hover{
    border: 1px solid #00AA00;
    background-color: white;
    color: #00AA00;
  }
`);
  return (
    <StyledIconButton
      onClick={props.onClick}
      startIcon={props.startIcon}
      disableRipple={true}
     
    >
      {props.Icon} 
      {props.texttoprint}
    </StyledIconButton>
  );
}
