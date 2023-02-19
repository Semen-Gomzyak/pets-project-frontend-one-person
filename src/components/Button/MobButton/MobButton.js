import styled from "styled-components";

export let MobButton = styled.button`
  width: 40px;
  height: 40px;
  margin-top: 16px;
  margin-right: 20px;
  padding: 10px 5px;

  color: #212121;
  background-color: transparent;
  border: 4px solid #212121;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  :hover,
  :focus {
    color: #f59256;
  }
`;