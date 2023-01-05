import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../../JS/actions/userAction';
import  "./profile.css";

const Profile = () => {
  const {iduser}=useParams()
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getOneUser(iduser))
  
  }, [iduser])

  const loading=useSelector(state=>state.user.loading)
  const user=useSelector(state=>state.user.user)
  if (loading) {
    return `...loading`

  }

  
  return (
<div className="wrapper">
  <div className="left">
    <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width={100} />
    <h4>{user&&user.name}</h4>
    <p>UI Developer</p>
  </div>
  <div className="right">
    <div className="info">
      <h3>Information</h3>
      <div className="info_data">
        <div className="data">
          <h4>Email</h4>
          <p> {user&&user.email} </p>
        </div>
        <div className="data">
          <h4>Phone</h4>
          <p>0001-213-998761</p>
        </div>
      </div>
    </div>
    <div className="projects">
      <h3>Projects</h3>
      <div className="projects_data">
        <div className="data">
          <h4>Recent</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="data">
          <h4>Most Viewed</h4>
          <p>dolor sit amet.</p>
        </div>
      </div>
    </div>
    <div className="social_media">
      <ul>
        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
        <li><a href="#"><i className="fab fa-twitter" /></a></li>
        <li><a href="#"><i className="fab fa-instagram" /></a></li>
      </ul>
    </div>
  </div>
</div>  )
}

export default Profile