import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react' 
import {fetchPizzas} from '../../redux/actions/pizzas';
import {setCategory, setSortBy} from '../../redux/actions/fillters'

import {Categories} from '../categories'
import {PizzaBlock} from '../pizzaBlock';
import {SortPopup} from '../sort-popup'
import MyLoader from '../content-loader/content-loader';


const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortNames = [
    {name:'популярности', type: 'popular'},
    {name:'цене', type: 'price'},
    {name:'алфавиту', type: 'alphabet'}
]

const Home = () => {
  const dispatch = useDispatch();

  const activeCategory = useSelector(({fillters}) => fillters.category) 
  const activeSortType = useSelector(({fillters}) => fillters.sortBy)
  
  const onCategorySelect = useCallback((index) => {
      dispatch(setCategory(index))
  }, [])

  const onSortTypeSelect = useCallback((sortType) => {
      dispatch(setSortBy(sortType))
  },[])

  useEffect(() => {
    dispatch(fetchPizzas())
  }, [activeCategory])

    const items = useSelector(({pizzas}) => pizzas.pizzas)
    const isLoading = useSelector(({pizzas}) => pizzas.isLoading)

    return (
        <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories items = {categoryNames} activeCategory = {activeCategory} onCategorySelect = {onCategorySelect}/>
            <SortPopup items = {sortNames} activeSortType = {activeSortType} onSortTypeSelect = {onSortTypeSelect}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading ? 
              Array(10).fill(null).map( ( _ , index) => <MyLoader key = {index}/>)
              : items.map(item => {
                  return <PizzaBlock key = {item.id} {...item} />
                }) 
                
            }
          </div>
        </div>
      </div>
    );
}


export default Home;
