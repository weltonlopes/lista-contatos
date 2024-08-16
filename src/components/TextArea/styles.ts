import styled from 'styled-components'

export const TextArea = styled.textarea`
  padding: 8px;
  width: 100%;
  margin-bottom: 15px;
  resize: none;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border: 3px solid #3f72c5;
    outline: none;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-80%) translateX(-10%) scale(0.75);
    color: #3f72c5;
  }
`
