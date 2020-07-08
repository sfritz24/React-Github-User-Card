import React from 'react';

const MyInfo = props =>{
    return (
        <div>
            <h1>My Github User Information:</h1>
            <div className='card'>
                <img src={props.myInfo.avatar_url}/>
                <div className='myinfo'>
                    <h3>{props.myInfo.name}</h3>
                    <a href={props.myInfo.html_url}>{props.myInfo.login}</a>
                    <p>Location: {props.myInfo.location}</p>
                    <p>Followers: {props.myInfo.followers}</p>
                    <p>Following: {props.myInfo.following}</p>
                    <p>Bio: {props.myInfo.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default MyInfo;