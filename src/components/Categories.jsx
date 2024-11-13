import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setSelectedCategory} from '../redux/slices/filters'


const Categories = (props) => {
  const selectedCategory = useSelector(state => state.filterSlice.selectedCategory)
  const dispatch = useDispatch()
    const [activeIndex , setActiveIndex] = useState(0)
    const categoryList = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',]
    const changeIndex = (i) => {
        setActiveIndex(i)
        dispatch(setSelectedCategory(i))
    }
  return (
    <div className="categories">
              <ul>
                {categoryList.map((value , i) => <li key={i} onClick={() => changeIndex(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>)}
              </ul>
            </div>
  )
}

export default Categories