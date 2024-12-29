import React from "react";
import NavigationCard from "../Navigation/Nav";
import "./Front.css"; // Importing a CSS file for styling
import { Link } from 'react-router-dom';

const Front = () => {
  const users = [
    {
      name: "John Doe",
      time: "10:30 AM",
      date: "2024-12-29",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
      content: "This is a sample post content for John Doe. Enjoy reading!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
    },
    {
      name: "Jane Smith",
      time: "11:00 AM",
      date: "2024-12-29",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
      content: "Jane shares her experience with the platform in this post. Check it out!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
    },
    {
      name: "Alice Johnson",
      time: "12:00 PM",
      date: "2024-12-29",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
      content: "Alice discusses some great tips and tricks in this post. Don't miss it!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
    },
    {
        name: "John Doe",
        time: "10:30 AM",
        date: "2024-12-29",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
        content: "This is a sample post content for John Doe. Enjoy reading!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
      },
      {
        name: "Jane Smith",
        time: "11:00 AM",
        date: "2024-12-29",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
        content: "Jane shares her experience with the platform in this post. Check it out!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
      },
      {
        name: "Alice Johnson",
        time: "12:00 PM",
        date: "2024-12-29",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
        content: "Alice discusses some great tips and tricks in this post. Don't miss it!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s",
      },
  ];

  return (
    <div className="front-container">
      <div className="right-card">
        <div className="profile-section">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s"
            alt="Profile"
            className="profile-photo"
          />
          <h3 className="profile-username">User123</h3>
          <div className="profile-buttons">
            <button className="btn">Profile</button>
            <button className="btn">Your Points</button>
            <button className="btn">Asked History</button>
            <button className="btn">Solved History</button>
            <Link to="/login" style={{textDecoration:"none"}} >
            <button className="btn">Logout</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="middle-section">
        <NavigationCard />
        <br />
        <br />
        <br />
        <br />
        <div className="user-cards">
          {users.map((user, index) => (
            <div className="user-card" key={index}>
              <div className="user-card-header">
                <img src={user.photo} alt={user.name} className="user-photo" />
                <div className="user-details">
                  <h3>{user.name}</h3>
                  <p>
                    {user.time} | {user.date}
                  </p>
                </div>
              </div>
              <div className="user-card-content">
                <p>{user.content}</p>
                <img
                  src={user.image}
                  alt="Post content"
                  className="user-post-image"
                />
              </div>
              <div className="user-actions">
                <button className="btn">See Solution</button>
                <button className="btn">Upload Solution</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="left-card">
        <div className="right-buttons">
          <button className="btn">Ask Question</button>
          <button className="btn">Add Points</button>
          <button className="btn">Subscription</button>
        </div>
      </div>
    </div>
  );
};

export default Front;
