import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props) {
    //implementasi proptypes yg diterima
    const className = [props.className]
    if(props.isPrimary) className.push["btn-primary"]
    if(props.isLarge) className.push["btn-lg"]
    if(props.isSmall) className.push["btn-sm"]
    if(props.isBlock) className.push["btn-block"]
    if(props.hasShadow) className.push["btn-shadow"]

    //function ngehandle onclick pastiin button nerima props onClick agar tidak crash
    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    //cek button punya property isDisabled or isLoading
    if(props.isDisabled || props.isLoading){
        //munculin className agar button jadi gak bisa dipencet
        if(props.isDisabled) className.push("disabled")
        //munculin react fragment loading dir sr only= 
        //kasih tahu screen reader button punya state loading  
        return(
            <span
                className={className.join(" ")} 
                style={props.style} 
            >
                {
                    props.isLoading ? (
                    <>
                        <span className="spinner-border spinner-border-sm mx-5"></span>
                        <span className="sr-only">Loading...</span>
                    </>
                    ) : (
                        props.children
                    )
                }
            </span>
        );
    }

    //kondisi kalau tipenya link external dan internal
    if(props.type === "link") {
        if(props.isExternal){
            return(
                <a 
                    href={props.href} 
                    className={className.join(" ")} 
                    style={props.style} 
                    target={props.target ==="_blank" ?"_blank":undefined} 
                    rel={props.target==="_blank" ? "noopener noreferrer":undefined}
                >
                    {props.children}
                </a>
            );
        } else{
            return(
                <Link 
                    to={props.href} 
                    className={className.join(" ")} 
                    style={props.style}
                    onClick={onClick}
                >
                    {props.children}
                </Link>
            )
        }
    }
    //kondisi return button
    return(
            <button
                className={className.join(" ")} 
                style={props.style}
                onClick={onClick}
            >
                {props.children}
            </button>
        );
}

// Property untuk button dengan propTypes
Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    isExternal: propTypes.bool,
    hasShadow: propTypes.bool,
};