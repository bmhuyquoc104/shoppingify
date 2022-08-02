import React from 'react'
import BaseSkeletonStyled from "./BaseSkeleton.styled"
type BaseSkeletonProps = {
  type: string

}


function BaseSkeleton({type}:BaseSkeletonProps) {
  return (
    <BaseSkeletonStyled className = {`skeleton ${type}`}>
    </BaseSkeletonStyled>
  )
}

export default BaseSkeleton