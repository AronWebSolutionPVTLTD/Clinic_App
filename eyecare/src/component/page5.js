import React from "react";
import { useNavigate } from "react-router-dom";
function Page5() {

    const navigate = useNavigate();
    const handle_start_cleaning=()=>{
        navigate("/page6");
    }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/style.css" />
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
              <div className="priority_sec">
                <div className="priority_row">
                  <div className="priority_col_lg">
                    <div className="rounded_header_wrapper">
                      <div className="header_icon">
                        <img src="images/cleaning-mop-svgrepo-com 1.png" />
                      </div>
                      <p className="header_title">Room is ready for cleaning</p>
                    </div>
                    <div className="broom_wrap mb-5">
                      <img src="images/broom.png" />
                    </div>
                    <div className="cmn_btn_wrapper">
                      <button className="cmn_btn" onClick={handle_start_cleaning}>Start Cleaning</button>
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

export default Page5;
