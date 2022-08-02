import styled from "styled-components";

const BaseSkeletonStyled = styled.div`
  background-color: ${({ theme }) => theme.skeleton.backgroundColor};
  border-radius: 5px;
  &.title {
    width: max(150px, 11.375em);
    height: 23px;
  }
  &.history-title {
    width: max(60px, 6em);
    height: 15px;
  }
  &.text {
    width: max(120px, 10em);
    height: 50px;
  }
  &.history-detail-title {
    width: max(150px, 11.375em);
    height: 35px;
  }
  &.calendar,
  &.name {
    width: max(91px, 5em);
    height: 15px;
  }
  &.status {
    width: max(61px, 3em);
    height: 15px;
  }

  &.arrow {
    width: max(15px, 0.75em);
    height: 15px;
  }

  &.progress{
    width:100%;
    height:15px;
  }

  @media (max-width: 950px) and (min-width: 750px) {
    &.text {
      width: 8em;
    }
  }

  @media (max-width: 750px) {
    &.text {
      width: 10em;
    }
  }

  @media (max-width: 560px) {
    margin-top: 3.4em;
  }
  @media (max-width: 530px) and (min-width: 400px) {
    &.text {
      width: 8.5em;
    }
  }
  @media (max-width: 419px) {
    &.text {
      width: 9em;
    }
  }
`;
export default BaseSkeletonStyled;
