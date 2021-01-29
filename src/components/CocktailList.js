import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  console.log(cocktails)

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <h6 className='section-title'>
        No Cocktails matched your searched criteria
      </h6>
    )
  }

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList
