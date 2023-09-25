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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (item) => {
    setActiveItem(item);
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={avatar}
            alt="Avatar"
            class="rounded-circle me-2"
            width="200"
            height="200"
            style={{ border: "3px solid #eee" }}
          />
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
                background: "rgba(0, 0, 0, 0.5)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff"
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
                background: "rgba(0, 0, 0, 0.5)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff"
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
                background: "rgba(0, 0, 0, 0.5)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff"
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
                background: "rgba(0, 0, 0, 0.5)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff"
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
                background: "rgba(0, 0, 0, 0.5)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff"
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
                background: "rgba(0, 0, 0, 0.5)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff"
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
                background: "rgba(0, 0, 0, 0.5)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff"
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
                background: "rgba(0, 0, 0, 0.5)",  
                padding: "4px", 
                borderRadius:"5px",
                color:"#fff"
              }}
            />
            <span>Einstein's theory</span>
          </div>
         
        </div>
      </div>
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
          height: "480px",
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
                href="#step1"
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
                href="#step2"
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
                href="#step3"
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
