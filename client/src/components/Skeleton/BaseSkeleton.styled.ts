import styled from "styled-components"

const BaseSkeletonStyled = styled.div`
  background-color: ${({theme}) => theme.skeleton.backgroundColor};
  border-radius:5px;
  &.title{
    width:175px;
    height:23px;
  }
  &.text{
    width:182px;
    height:50px;
  }
`
export default BaseSkeletonStyled