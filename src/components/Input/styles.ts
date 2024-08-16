import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;

  label {
    position: absolute;
    background-color: #fff;
    top: 8px;
    left: 8px;
    transition: 0.2s;
    color: #8c8c8c;
  }
`

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  margin-bottom: 15px;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border: 2px solid #3f72c5;
    outline: none;
  }

  .text-area {
    height: 80px;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-80%) translateX(-10%) scale(0.75);
    color: #3f72c5;
  }
`
