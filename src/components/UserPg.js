import React from 'react'
import "../App.css"
import tempimg from "../images/tempImg.png"
import mailIcon from "../icons/mailIcon.png"

function Card(props) {
    const d = new Date()
    let name, mailId, imgsrc, id;
    name = "unavailable";
    mailId = "unavailable";
    imgsrc = tempimg;
    id = d.getTime();

    name = props.first_name + props.last_name;
    mailId = props.email;
    imgsrc = props.avatar;
    id = props.id;
    
    return <>
        <div className='Usercard'>
            <div id={id} className='Usercard-imgBox'>
                <img className='UserAvatar' src={tempimg} />
                <div className="img-overlay">
                    <img className='mailIcon' src={mailIcon} />
                    <span className='card-id'>ID</span>
                </div>
            </div>
            <span>"some name"</span>
        </div>
    </>
}

export default function UserPg() {
    return (
        <div id="UserPg">
            <Card />
            <Card />
        </div>
    )
}
