import React from 'react';
import FollowersCard from './FollowersCard';

const FollowersList = props =>{
    return (
        <div>
            <h2>Here are my followers:</h2>
            {props.followersList.map(item =>(
                <FollowersCard key={item.id} info={item}/>
            ))}
        </div>
    );
};

export default FollowersList;