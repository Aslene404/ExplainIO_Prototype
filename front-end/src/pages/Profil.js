import React, { useState } from "react";
import background from "../assets/gs.jpg";
import avatar from "../assets/avatar1.png";
import scene1 from "../assets/cr1.png";
import scene2 from "../assets/gd1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faCalendarDays,
  faLocationDot,
  faPhone,
  faUser,
  faSchool,
  faXmark,faCamera
} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
    const [name, setName] = useState("Aeloria Magnar");
  const [address, setAddress] = useState("Musterstraße 123 12345 Musterstadt Deutschland");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [email, setEmail] = useState("Aeloria-magnar@gmail.com");
  const [school, setSchool] = useState("Hauptschule");
  const [birthdate, setBirthdate] = useState("12/08/2023");
  const [activeItem, setActiveItem] = useState(1);
  const [avatarImage, setAvatarImage] = useState(avatar);

  const handleImageChange = (e) => {
    const selectedImage = URL.createObjectURL(e.target.files[0]);
    setAvatarImage(selectedImage);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleSaveClick = () => {
    // make an API call or store in local storage.
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("School:", school);
    console.log("Birthdate:", birthdate);
    console.log("Avatar Image:", avatarImage);
  };

  let content;

  if (activeItem === 1) {
    content = (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" ,
              flexDirection: "column",
              position: "relative", justifyContent:"center"}}>
            <img
              src={avatarImage}
              alt="Avatar"
              className="rounded-circle me-2"
              width="200"
              height="200"
              style={{ border: "3px solid #eee", cursor: "pointer" }}
            />
           <input
            type="file"
            id="imageUpload"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faCamera}
              style={{
                position: "absolute",
                bottom: "60px",
                right: "10px",
                background: "#fff",
                padding: "5px",
                color: "#ccc",
                border: "3px solid #eee",
                borderRadius: "50%",
                fontSize: "24px",
              }}
            />
          </label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "10px" }}>
            <FontAwesomeIcon icon={faUser} style={{ color: "#86b7fe" }} />
            <span style={{ padding: "10px" }}>Aeloria Magnar</span>
          </div>{" "}
          <div style={{ padding: "10px" }}>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#86b7fe" }}
            />
            <span style={{ padding: "10px" }}>
              Musterstraße 123 12345 Musterstadt Deutschland
            </span>
          </div>
          <div style={{ padding: "10px" }}>
            <FontAwesomeIcon icon={faPhone} style={{ color: "#86b7fe" }} />
            <span style={{ padding: "10px" }}>+1 (555) 123-4567</span>
          </div>
          <div style={{ padding: "10px" }}>
            <FontAwesomeIcon icon={faAt} style={{ color: "#86b7fe" }} />
            <span style={{ padding: "10px" }}>Aeloria-magnar@gmail.com</span>
          </div>
          <div style={{ padding: "10px" }}>
            <FontAwesomeIcon icon={faSchool} style={{ color: "#86b7fe" }} />
            <span style={{ padding: "10px" }}>Hauptschule</span>
          </div>
          <div style={{ padding: "10px" }}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: "#86b7fe" }}
            />
            <span style={{ padding: "10px" }}>12/08/2023</span>
          </div>
        </div>
      </div>
    );
  } else if (activeItem === 2) {
    content = (
      <div style={{ marginLeft: "10px" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative", 
            }}
          >
            <img
              src={scene1}
              alt="Avatar"
              width="250"
              height="150"
              style={{ border: "2px solid #eee" }}
            />
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                position: "absolute",
                top: 0, 
                right: 0, 
                background: "rgba(0, 0, 0, 0.4)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff",
                cursor:"pointer"
              }}
            />
            <span>Newton and gravity</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={scene2}
              alt="Avatar"
              width="250"
              height="150"
              style={{ border: "2px solid #eee" }}
            />
             <FontAwesomeIcon
              icon={faXmark}
              style={{
                position: "absolute",
                top: 0, 
                right: 0, 
                background: "rgba(0, 0, 0, 0.4)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff",
cursor:"pointer"
              }}
            />
            <span>Einstein's theory</span>
          </div>
         
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative", 
            }}
          >
            <img
              src={scene1}
              alt="Avatar"
              width="250"
              height="150"
              style={{ border: "2px solid #eee" }}
            />
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                position: "absolute",
                top: 0, 
                right: 0, 
                background: "rgba(0, 0, 0, 0.4)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff",
cursor:"pointer"
              }}
            />
            <span>Newton and gravity</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={scene2}
              alt="Avatar"
              width="250"
              height="150"
              style={{ border: "2px solid #eee" }}
            />
             <FontAwesomeIcon
              icon={faXmark}
              style={{
                position: "absolute",
                top: 0, 
                right: 0, 
                background: "rgba(0, 0, 0, 0.4)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff",
cursor:"pointer"
              }}
            />
            <span>Einstein's theory</span>
          </div>
         
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative", 
            }}
          >
            <img
              src={scene1}
              alt="Avatar"
              width="250"
              height="150"
              style={{ border: "2px solid #eee" }}
            />
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                position: "absolute",
                top: 0, 
                right: 0, 
                background: "rgba(0, 0, 0, 0.4)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff",
cursor:"pointer"
              }}
            />
            <span>Newton and gravity</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={scene2}
              alt="Avatar"
              width="250"
              height="150"
              style={{ border: "2px solid #eee" }}
            />
             <FontAwesomeIcon
              icon={faXmark}
              style={{
                position: "absolute",
                top: 0, 
                right: 0, 
                background: "rgba(0, 0, 0, 0.4)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff",
cursor:"pointer"
              }}
            />
            <span>Einstein's theory</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative", 
            }}
          >
            <img
              src={scene1}
              alt="Avatar"
              width="250"
              height="150"
              style={{ border: "2px solid #eee" }}
            />
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                position: "absolute",
                top: 0, 
                right: 0, 
                background: "rgba(0, 0, 0, 0.4)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff",
cursor:"pointer"
              }}
            />
            <span>Newton and gravity</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={scene2}
              alt="Avatar"
              width="250"
              height="150"
              style={{ border: "2px solid #eee" }}
            />
             <FontAwesomeIcon
              icon={faXmark}
              style={{
                position: "absolute",
                top: 0, 
                right: 0, 
                background: "rgba(0, 0, 0, 0.4)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff",
cursor:"pointer"
              }}
            />
            <span>Einstein's theory</span>
          </div>
         
        </div>
      </div>
    );
  }
  else if(activeItem === 3) {
    content = (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            justifyContent: "center",
          }}
        >
            <img
              src={avatarImage}
              alt="Avatar"
              className="rounded-circle me-2"
              width="200"
              height="200"
              style={{ border: "3px solid #eee", cursor: "pointer" }}
            />
           <input
            type="file"
            id="imageUpload"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faCamera}
              style={{
                position: "absolute",
                bottom: "60px",
                right: "10px",
                background: "#fff",
                padding: "5px",
                color: "#ccc",
                border: "3px solid #eee",
                borderRadius: "50%",
                fontSize: "24px",
              }}
            />
          </label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{padding:"1px 10px",display:"flex",
                alignItems:"center", }}>
            <div style={{width:"20px"}}><FontAwesomeIcon icon={faUser} style={{ color: "#86b7fe" }} /></div>
            <span
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "text",
                marginLeft:"10px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                width:"320px"
              }}
              contentEditable
              onBlur={(e) => setName(e.target.textContent)}
            >
              {name}
            </span>
          </div>
          <div style={{padding:"1px 10px",display:"flex",
                alignItems:"center", }}>
           <div style={{width:"20px"}}> <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#86b7fe" }}
            /></div>
            <span
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "text",marginLeft:"10px",
                display:"flex",
                alignItems:"center",
                overflow: "hidden",
                whiteSpace: "nowrap",
                width:"320px"

              }}
              contentEditable
              onBlur={(e) => setAddress(e.target.textContent)}
            >
              {address}
            </span>
          </div>
          <div style={{padding:"1px 10px",display:"flex",
                alignItems:"center", }}>
           <div style={{width:"20px"}}> <FontAwesomeIcon icon={faPhone} style={{ color: "#86b7fe" }} /></div>
            <span
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "text",
                marginLeft:"10px", overflow: "hidden",
                whiteSpace: "nowrap",
                width:"320px"
              }}
              contentEditable
              onBlur={(e) => setPhone(e.target.textContent)}
            >
              {phone}
            </span>
          </div>
          <div style={{padding:"1px 10px",display:"flex",
                alignItems:"center", }}>
           <div style={{width:"20px"}}><FontAwesomeIcon icon={faAt} style={{ color: "#86b7fe" }} /></div> 
            <span
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "text",marginLeft:"10px", overflow: "hidden",
                whiteSpace: "nowrap",
                width:"320px"
              }}
              contentEditable
              onBlur={(e) => setEmail(e.target.textContent)}
            >
              {email}
            </span>
          </div>
          <div style={{padding:"1px 10px",display:"flex",
                alignItems:"center", }}>
            <div style={{width:"20px"}}><FontAwesomeIcon icon={faSchool} style={{ color: "#86b7fe" }} /></div>
            <span
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "text",marginLeft:"10px", overflow: "hidden",
                whiteSpace: "nowrap",
                width:"320px"
              }}
              contentEditable
              onBlur={(e) => setSchool(e.target.textContent)}
            >
              {school}
            </span>
          </div>
          <div style={{padding:"1px 10px",display:"flex",
                alignItems:"center", }}>
           <div style={{width:"20px"}}> <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: "#86b7fe" }}
            /></div>
            <span
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "text",marginLeft:"10px", overflow: "hidden",
                whiteSpace: "nowrap",
                width:"320px"
              }}
              contentEditable
              onBlur={(e) => setBirthdate(e.target.textContent)}
            >
              {birthdate}
            </span>
          </div>
        </div>
      </div>
      <div style={{  
            position: "relative",
           }}>
      <button 
      onClick={handleSaveClick}
      style={{
              position: "absolute",
              right: "10px",
              background: "green",
              padding: "3px",
              color: "#fff",
              cursor: "pointer",
              border:"none",top:"22px",
              borderRadius:"5px",
              width:"70px"
            }}>Save</button>
    </div></div>
    );
  }

  return (
    <div
      style={{
        padding: 0,
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "810px",
          height: "500px",
          padding: "10px 0px",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          borderRadius: " 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <h3 style={{ fontSize: "28px", margin: "20px 0 10px" }}>
            Your
            <b> Profile</b>
            <br />
            <small
              style={{ color: "#999999", fontWeight: "300", lineHeight: "1" }}
            >
              This information will let us know more about you.
            </small>
          </h3>
        </div>

        <nav style={{ width: "100%" }}>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              backgroundColor: activeItem === 1 ? "green" : "#ccc",
            }}
          >
            <li
              class="col-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <a
                href="#about"
                onClick={() => handleItemClick(1)}
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  backgroundColor: activeItem === 1 ? "green" : "#ccc",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                About
              </a>
            </li>
            <li
              class="col-4"
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: activeItem === 2 ? "green" : "#ccc",
              }}
            >
              <a
                href="#projects"
                onClick={() => handleItemClick(2)}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Projects
              </a>
            </li>
            <li
              class="col-4"
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: activeItem === 3 ? "green" : "#ccc",
              }}
            >
              <a
                href="#setting"
                onClick={() => handleItemClick(3)}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <div
          style={{
            width: "100%",
            height: "calc(100% - 140px)",
            overflowY: "auto",
            overflowX: "auto", // Enable vertical scrolling
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
