import React, { memo } from 'react';
import PropTypes from 'prop-types'

const Categories = memo(({items, activeCategory, onCategorySelect}) => {
    return (
        <div className="categories">
              <ul>
                <li 
                    className = {activeCategory === null ? 'active': ''}
                    onClick = {() => onCategorySelect(null)}
                >
                    Все
                </li>
                {items &&
                    items.map((name, index) => {
                        return (
                            <li 
                                key ={`${name}_${index}`}
                                className = {activeCategory === index ? 'active' : ''}
                                onClick = {() => onCategorySelect(index)}
                            >{name}</li>
                        )
                    })
                }
              </ul>
        </div>
    );
})

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    activeCategory: PropTypes.number,
    onCategorySelect: PropTypes.func
}

export default Categories;
