import React from 'react'
import themeToggle from '../HOCs/themeToggle';

const ThemeChanger = props => {
    console.log(props);
    return (
        <div className={props.themeObj.theme}>
            <button className='toggle-btn' onClick={props.themeObj.toggleFn}>
                {props.themeObj.theme}
            </button>
        </div>
    )
}

export default themeToggle(ThemeChanger);