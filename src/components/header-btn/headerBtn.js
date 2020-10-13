import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'

const HeaderBtn = ({children, className, outline}) => {
    return (
       <button className = {classNames('button', className, {
           'button--outline': outline
       })}>
           {children}
       </button>
    );
}

HeaderBtn.propTypes = {
    className: PropTypes.string,
    outline: PropTypes.bool
}

export default HeaderBtn;
