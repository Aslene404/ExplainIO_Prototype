import React from "react";
import "./Profile.css";
import avatar from "../assets/avatar1.png";
import scene1 from "../assets/cr1.png";
import scene2 from "../assets/gd1.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faCalendarDays,
  faLocationDot,
  faPhone,
  faUser,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const navigation = useNavigate();
  const logout = () => {
    navigation("/");
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#eee",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: " fit-content",
          padding: "40px",
          marginTop: "10px",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          borderRadius: " 5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={avatar}
            alt="Avatar"
            class="rounded-circle me-2"
            width="200"
            height="200"
            style={{ border: "4px solid #eee" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "15px",
              alignItems: "center",
            }}
          >
            <span>Aeloria Magnar</span>
            <span style={{ whiteSpace: "nowrap" }}>
              {" "}
              Aeloria-magnar@gmail.com
            </span>
          </div>
        </div>
        <div>
          <button
            style={{
              border: "none",
              marginTop: "50px",
              width: "175px",
              height: "40px",
              borderRadius: "5px",
            }}
            onClick={logout}
          >
            Log out
          </button>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              backgroundColor: "#fff",
              height: " fit-content",
              width: "100%",
              padding: "40px",
              marginTop: "10px",
              marginLeft: "5px",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: " 5px",
            }}
          >
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
                <span style={{ padding: "10px" }}>
                  Aeloria-magnar@gmail.com
                </span>
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
        </div>
          <div
            style={{
              position: "fixed",
              backgroundColor: "#fff",
              height: " 100%",
              width: "100%",
              padding: "30px 40px",
              marginTop: "10px",
              marginLeft: "5px",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: " 5px",
            }}
          >
            <div>
              <span style={{    fontSize:" x-large",
    fontWeight: "500",
    color: "#86b7fe"}}>Your projects</span>
            </div>
            <div style={{display:"flex", gap:"10px",    flexWrap: "wrap", marginTop:"25px"}}>
              <div style={{    display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
            <img
            src={scene1}
            alt="Avatar"
            width="300"
            height="200"
            style={{ border: "4px solid #eee" }}
          />
          <span>Newton and gravity</span></div>
          <div style={{    display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
          <img
            src={scene2}
            alt="Avatar"
            width="300"
            height="200"
            style={{ border: "4px solid #eee" }}
          />  <span>Einstein's theory</span></div>
          
              </div>
        </div>
      </div>
    </div>
  );
}
