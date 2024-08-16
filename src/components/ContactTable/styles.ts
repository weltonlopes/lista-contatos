import favoriteImage from '../../img/isfavorite.png'
import styled from 'styled-components'

type Props = {
  isFavorite: boolean
}

export const Table = styled.table`
  margin-top: 10px;
  width: 100%;
  border-collapse: collapse;
  border-style: hidden;
  td {
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }
`
export const THead = styled.thead`
  th {
    text-align: start;
    border-bottom: 1px solid #ccc;
  }
`

export const TRow = styled.tr`
  :hover {
    background-color: #afddfc;
    img {
      display: block;
    }
  }
`

export const actionsContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const FavoriteIcon = styled.img<Props>`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: ${(props) => (props.isFavorite ? 'block' : 'none')};
  :hover {
    content: url(${favoriteImage});
  }
  position: absolute;
  left: 0;
  bottom: -10px;
`
export const RemoveIcon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: -10px;
`
