import React from 'react';

interface ButtonProps {
    type?: string;
    icon?: string;
    label?: string;
}

const Button: React.FC<ButtonProps> = ({ type, icon, label }) => {

    return (
        <button className={`sc-button ${ type === "filled" ? "sc-button--filled" : "" || type === "outlined" ? "sc-button--outlined" : "" }`}>
            <ButtonIcon icon={ icon } />
            <ButtonLabel label={ label } />
        </button>
    );

};

const ButtonIcon = (props: any) => {

    if (!props.icon) return <></>

    return (
        <i className="sc-button__icon material-icons">
            { props.icon }
        </i>
    );

}

const ButtonLabel = (props: any) => {

    if (!props.label) return <></>

    return (
        <span className="sc-button__label">{ props.label }</span>
    )

}

export default Button;
