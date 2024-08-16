import styled from 'styled-components'

type Props = {
  active: boolean
}

export const Card = styled.div<Props>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: ${(props) => (props.active ? '#c2e7ff' : 'none')};
  color: #5e5e5e;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? '#AFDDFC' : '#F0EFEF')};
  }
`
export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
