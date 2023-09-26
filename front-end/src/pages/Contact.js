import React, { useState } from "react";
import clock from "../assets/clock.png";
import background from "../assets/contact.jpg";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setEmail("");
    setName("");
    setAddress("");
    setMessage("");

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div
      style={{
        padding: 0,
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.65), rgba(0,0,0,0.65)),url(${background})`,
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
          margin: "10%",
          width: "100%",
          height: "100%",
          fontFamily: "Oswald,sans-serif",
          display: "flex",
        }}
      >
        <div style={{ padding: "90px 60px 0" }} class="col-6">
          <h2
            style={{
              color: "#fff",
              fontSize: "3rem",
              fontWeight: "700",
              padding: "20px",
            }}
          >
            CONTACT US
          </h2>
          <div style={{ padding: "80px 20px 0" }}>
            <div style={{ padding: "10px 0px" }}>
              <h5
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  padding: "10px 30px",
                }}
              >
                {" "}
                Call Us
              </h5>
              <p style={{ color: "#fff" }}>1 (112) 567-555, 1 (112) 555-555</p>
            </div>
            <div style={{ padding: "10px 0px" }}>
              <h5
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  padding: "10px 30px",
                }}
              >
                Localisation
              </h5>
              <p style={{ color: "#fff" }}>
                Musterstraße 123, 12345 Musterstadt, Deutschland, 555
              </p>
            </div>
            <div style={{ padding: "10px 0px" }}>
              <h5
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  padding: "10px 0px",
                }}
              >
                <span style={{ fontSize: "1.1em", marginRight: "10px" }}>
                  <img style={{ height: "1em" }} src={clock} />
                </span>
                Working hours{" "}
              </h5>
              <p style={{ color: "#fff" }}>
                Mon – Fri …… 10 a.m. – 8 p.m., Sat, Sun ....… Closed
              </p>
            </div>
          </div>
        </div>
        <div style={{ padding: "120px 15px 0" }} class="col-6">
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              display: "flex",
              padding: "0px 30px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                color: "#fff",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "30px",
                paddingLeft: "30px",
              }}
            >
              <label style={{ fontWeight: "700", color: "#fff" }}>Email</label>
              <input
                type="email"
                placeholder="Enter a valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  color: "white",
                  outline: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "solid 2px #fff",
                  padding: "10px",
                }}
                required
              />
            </div>
            <div
              style={{
                color: "#fff",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "30px",
                paddingLeft: "30px",
              }}
            >
              <label style={{ fontWeight: "700", color: "#fff" }}>Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  color: "white",
                  outline: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "solid 2px #fff",
                  padding: "10px",
                }}
                required
              />
            </div>
            <div
              style={{
                color: "#fff",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "30px",
                marginLeft: "30px",
              }}
            >
              <label style={{ fontWeight: "700", color: "#fff" }}>
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  color: "white",
                  outline: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "solid 2px #fff",
                  padding: "10px",
                }}
              />
            </div>
            <div
              style={{
                color: "#fff",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "30px",
                marginLeft: "30px",
              }}
            >
              <label style={{ fontWeight: "700", color: "#fff" }}>
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  color: "white",
                  outline: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "solid 2px #fff",
                  padding: "10px 10px 40px",
                }}
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                position: "relative",
              }}
            >
              {!showMessage ? (
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    margin: "40px 0px 0px 30px",
                    backgroundColor: "#f1a40e ",
                    color: "#fff",
                    textTransform: "uppercase",
                    border: "none",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "50px",
                    height: "50px",
                    alignItems: "center",
                    fontWeight: "700",
                    letterSpacing: "2px",
                  }}
                >
                  Send
                </button>
              ) : (
                <div
                  style={{
                    width: "100%",
                    margin: "30px 0px 0px 30px",
                    backgroundColor: "#62C584",
                    color: "#fff",
                    zIndex: "1",
                    padding: "20px",
                    right: "0",
                    fontSize: "1rem",
                  }}
                >
                  Thank you! Your message has been sent.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
