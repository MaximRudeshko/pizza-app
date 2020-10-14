import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import MyLoader from '../content-loader/content-loader';
import { addItemToCart } from '../../redux/actions/cart';

const PizzaBlock = ({imageUrl, name, types, sizes, price, isLoading, onAddItem, id}) => {
    const typesNames = ['тонкое', 'традиционное'];
    const avaibleSizes = [26, 30, 40]

    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(sizes[0])

    const onTypeSelect = (index) => {
        setActiveType(index)
    }

    const onSizeSelect = (index) => {
        setActiveSize(index)
    }

    const addClickHandler = () => {
        const obj = {
            imageUrl,
            name,
            id,
            size: activeSize,
            type: typesNames[activeType]
        }

        onAddItem(obj)
    }

    

    if(isLoading){
        return <MyLoader/>
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt={name}
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        typesNames.map((type, index) => {
                            return <li 
                                      key = {`${type}_${index}`}
                                      className = {classNames({
                                          'active': activeType === index,
                                          'disabled': !types.includes(index)
                                      })}
                                      onClick = {() => {onTypeSelect(index)}}
                                   >{type}</li>
                        })
                    }
                </ul>
                <ul>
                    {
                        avaibleSizes.map((size, index) => {
                            return <li
                                     key = {`${size}`}
                                     className = {classNames({
                                         'active': activeSize === size,
                                         'disabled': !sizes.includes(size)
                                     })}
                                     onClick = {() => onSizeSelect(size)}
                                   >
                                    {size} см
                                   </li>
                        })    
                    }
                  {/* <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li> */}
                </ul>
            </div>
            <div onClick = {addClickHandler} className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
            </div>
        </div>
    );
}

PizzaBlock.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    price: PropTypes.number
}

export default PizzaBlock;
