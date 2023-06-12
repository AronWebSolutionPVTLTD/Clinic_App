import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Page1() {
  const navigate = useNavigate();
  const handle_doctor = async (event) => {
    event.preventDefault();
    localStorage.setItem("dr_tech_name", event.currentTarget.textContent);
    localStorage.setItem("dr_tech_pic", event.currentTarget.title);

    const today = new Date();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const body = {
      roomid: 5,
      technicianid: 2,
      technicianentrytime: time,
      activitystatus: "t",
    };
      const data = await axios.post(
        "http://localhost:6000/api/create_role",
        {
          roomid: 5,
          technicianid: 2,
          technicianentrytime: time,
          activitystatus: "t",
        }
      ).then((res)=>console.log(res)).catch((err)=>console.log(err))

  };
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      <title>Document</title>
      <header className="site-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="site-logo">
                <a>
                  <img src="images/logo.png" />
                </a>
              </div>
            </div>
            <div className="col-6 text-end">
              <p className="header-text">Room No. 01</p>
            </div>
          </div>
        </div>
      </header>
      <main className="main_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 doctors_row">
              <div className="">
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <div
                      className="doctor_card"
                      value="dr.nale"
                      title="images/Doc-Neale-2.png"
                      onClick={handle_doctor}
                    >
                      <div className="doctor_img">
                        <img src="images/Doc-Neale-2.png" />
                      </div>
                      <h3 className="doctor_name">Dr. Neale</h3>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4">
                    <div
                      className="doctor_card"
                      value="Dr. McAdams"
                      title="images/Doc-Mcadama 2.png"
                      onClick={handle_doctor}
                    >
                      <div className="doctor_img">
                        <img src="images/Doc-Mcadama 2.png" />
                      </div>
                      <h3 className="doctor_name">Dr. McAdams</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <div
                      className="doctor_card"
                      value="Calvin"
                      title="images/Calvin1.png"
                      onClick={handle_doctor}
                    >
                      <div className="doctor_img">
                        <img src="images/Calvin1.png" />
                      </div>
                      <h3 className="doctor_name">Calvin</h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div
                      className="doctor_card"
                      value="Dustin"
                      title="images/Dustin1.png"
                      onClick={handle_doctor}
                    >
                      <div className="doctor_img">
                        <img src="images/Dustin1.png" />
                      </div>
                      <h3 className="doctor_name">Dustin</h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div
                      className="doctor_card"
                      value="Leena"
                      title="images/Tech41.png"
                      onClick={handle_doctor}
                    >
                      <div className="doctor_img">
                        <img src="images/Tech41.png" />
                      </div>
                      <h3 className="doctor_name">Leena</h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div
                      className="doctor_card"
                      value="Kattie"
                      title="images/Tech11.png"
                      onClick={handle_doctor}
                    >
                      <div className="doctor_img">
                        <img src="images/Tech11.png" />
                      </div>
                      <h3 className="doctor_name">Kattie</h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div
                      className="doctor_card"
                      value="Hailie"
                      title="images/Tech21.png"
                      onClick={handle_doctor}
                    >
                      <div className="doctor_img">
                        <img src="images/Tech21.png" />
                      </div>
                      <h3 className="doctor_name">Hailie</h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div
                      className="doctor_card"
                      value="Dawn"
                      title="images/Tech31.png"
                      onClick={handle_doctor}
                    >
                      <div className="doctor_img">
                        <img src="images/Tech31.png" />
                      </div>
                      <h3 className="doctor_name">Dawn</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sidebar_main">
                <div className="sidebar_col_wrapper">
                  <div className="sidebar_card">
                    <div className="sidebar_card_img">
                      <img src="images/dr-1.png" />
                      <div className="sidebar_card_content">
                        <h3 className="card_title">Dr. Matthew Neale</h3>
                        <span className="card_caption">M.D.</span>
                      </div>
                    </div>
                    <div className="card_bottom_content">
                      <p className="bottom_title">Next Room</p>
                      <div className="bottom_content_rooms">
                        <span className="active-room">12</span>
                        <span>10</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar_card">
                    <div className="sidebar_card_img">
                      <img src="images/dr-2.png" />
                      <div className="sidebar_card_content">
                        <h3 className="card_title">Dr. Matthew Neale</h3>
                        <span className="card_caption">M.D.</span>
                      </div>
                    </div>
                    <div className="card_bottom_content">
                      <p className="bottom_title">Next Room</p>
                      <div className="bottom_content_rooms">
                        <span className="active-room">12</span>
                        <span>10</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page1;
