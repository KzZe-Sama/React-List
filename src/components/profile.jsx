import React from 'react'

function Profile(props) {
    return (
        <div className="ui list">
            <div className="item">
                <img className="ui avatar image" src={props.profileProps.img} alt=""/>
                <div className="content">
    <a href="/"className="header">{props.profileProps.name}</a>
                    <div className="description">{props.profileProps.description}</div>
                </div>
            </div>
            
        </div>
    )
}
export default Profile


