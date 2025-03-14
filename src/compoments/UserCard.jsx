import React from 'react'

const UserCard = (props) => {
    console.log("====> Props Data", props.data);
    
  return (
    <div>
    <img src={props.data.picture.large} alt="" />
        <h3>{props.data.name.first}</h3>
        <h6>{props.data.gender}</h6>
        <p>{props.data.phone}</p>
        <p>{props.data.email}</p>
   <p>{props.data.location.city}, {props.data.location.state}</p>


    </div>
  )
}

export default UserCard