import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary':''
    
    returcomcomn (
        <div>
            <h1 className={`${className} font-xl`}>
                Pimples go away!!
            </h1>
        </div>
    )
}

export default StyleSheet