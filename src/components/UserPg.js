import React, { useEffect, useState } from 'react'
import "../App.css"
import tempimg from "../images/tempImg.png"
import mailIcon from "../icons/mailIcon.png"

function Card(props) {
    let name, mailId, imgsrc, id;
    name = props.first_name + " " + props.last_name;
    mailId = props.email;
    imgsrc = props.avatar;
    id = props.id;

    function showID(element, id) {
        element.innerHTML = id
    }

    function hideId(element) {
        element.innerHTML = "ID"
    }

    function copyemail(emailID) {

        const text = emailID;
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
                alert("Email copied.")
            })
            .catch(error => {
                console.error('Error copying text:', error);
            });

    }

    return <>
        <div className='Usercard' id={props.id}>
            <div id={id} className='Usercard-imgBox'>
                <img className='UserAvatar' src={imgsrc} alt='' />
                <div className="img-overlay">
                    <img className='mailIcon' onClick={() => copyemail(mailId)} src={mailIcon} alt='' />
                    <span className='card-id' onMouseOver={(e) => showID(e.target, props.id)} onMouseLeave={(e) => hideId(e.target)} >ID</span>
                </div>
            </div>
            <span className='userCard-name' >{name}</span>
        </div>
    </>
}


export default function UserPg() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())

            .then(pagedata => {
                setData(pagedata.data);
                // console.log(pagedata.data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                // console.log('Error:');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div id='UserPg'>
            <div id="userCards">
                {data.map(user => (
                    <Card
                        first_name={user.first_name}
                        last_name={user.last_name}
                        email={user.email}
                        id={user.id}
                        avatar={user.avatar}
                    />
                ))}
            </div>
            <div id='pageIndexBar'>
                page index bar
            </div>
        </div>
    );
}
