import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0 4px;
  padding: 1rem;
  border-radius: 4px;
  border: solid 1px rebeccapurple;
`;

//This is a callback function because it pulls from the parent and then calls back up
const Button = props => {
    const { clickHandler, name } = props;
    return <StyledButton onClick={clickHandler}>{name}</StyledButton>;
};

export default Button;
