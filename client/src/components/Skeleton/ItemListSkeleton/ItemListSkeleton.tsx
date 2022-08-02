import React from 'react'
import ItemListSkeletonStyled from './ItemListSkeleton.styled'
import BaseSkeleton from '../BaseSkeleton'

function ItemListSkeleton() {
  return (
    <ItemListSkeletonStyled>
      <BaseSkeleton type = "title"/>
      <div className="item-container">
        {[1,2,3,4,5].map((n:number) => (
          <BaseSkeleton key ={n} type = "text"/>
        ))}
      </div>
    </ItemListSkeletonStyled>
  )
}

export default ItemListSkeleton