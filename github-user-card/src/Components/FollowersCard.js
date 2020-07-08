import React from 'react';

const FollowersCard = props =>{
    return (
        <div className='card'>
                <img src={props.info.avatar_url}/>
                <div className='card-info followers'>
                    <a href={props.info.html_url} target='blank'>{props.info.login}</a>
                </div>
            </div>
    );
};

export default FollowersCard;