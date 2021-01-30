import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return <h6 className='section-title'>No Cocktails Found</h6>
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Elegant Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
