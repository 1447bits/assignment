import React, { useEffect, useState } from 'react'
import "../App.css"
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
    // const [loading, setLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [pageurl, setpageurl] = useState("");
    const [Bool_getuser, setBool_getuser] = useState(false);

    function GetUserBtn(props) {
        return <button onClick={() => {
            setBool_getuser(true)
            setpageurl("https://reqres.in/api/users?page=1")
            setLoading(true)
        }} id='getUserBtn'>
            Get User
        </button>
    }

    useEffect(() => {

        // fetch('https://reqres.in/api/users?page=1')
        fetch(pageurl)
            .then(response => response.json())
            .then(pagedata => {
                setData(pagedata.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, [pageurl]);

    if (loading) {
        return <div>Loading...</div>;
    }


    function ButtonRenderer(props) {

        function changePg(n) {
            setpageurl("https://reqres.in/api/users?page=" + n)
        }

        let n = props.noOfBtns;
        const renderButtons = () => {
            const buttons = [];
            for (let i = 0; i < n; i++) {
                buttons.push(<button className='pagenavBtn' onClick={() => changePg(i + 1)} key={i}>Page {i + 1}</button>);
            }
            return buttons;
        };

        return props.display ? <div id='pagenavBtns'>{renderButtons()}</div> : <></>;
    }

    return (
        <div id='UserPg'>
            {!Bool_getuser ? <GetUserBtn /> : <div id="userCards">
                {data.map(user => (
                    <Card
                        first_name={user.first_name}
                        last_name={user.last_name}
                        email={user.email}
                        id={user.id}
                        avatar={user.avatar}
                    />
                ))}
            </div>}
            <ButtonRenderer display={Bool_getuser} noOfBtns={2} />
        </div>
    );
}