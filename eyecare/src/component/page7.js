import React from "react";
function Page7() {
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
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="counter_main">
                    <h3 className="counter_title text-white text-center">
                      Patients waiting for Technician
                    </h3>
                    <div className="counter_wrapper">
                      <button className="counter_btn">-</button>
                      <span className="counter_input">3</span>
                      <button className="counter_btn">+</button>
                    </div>
                  </div>
                  <div className="patients_list_container">
                    <div className="list_header">
                      <span className="text-center">Room No.</span>
                      <span>Status</span>
                    </div>
                    <div className="patients_list_wrapper">
                      <div className="patients_list">
                        <span className="text-center">1</span>
                        <span>Available</span>
                        <span className="text-center"></span>
                      </div>
                      <div className="patients_list">
                        <span className="text-center">2</span>
                        <span>Waiting for Dr. Mcadmas </span>
                        <span className="text-center">5:12</span>
                      </div>
                      <div className="patients_list">
                        <span className="text-center">2</span>
                        <span>Waiting for Dr. Mcadmas </span>
                        <span className="text-center">5:12</span>
                      </div>
                      <div className="patients_list">
                        <span className="text-center">2</span>
                        <span>Waiting for Dr. Mcadmas </span>
                        <span className="text-center">5:12</span>
                      </div>
                      <div className="patients_list">
                        <span className="text-center">2</span>
                        <span>Waiting for Dr. Mcadmas </span>
                        <span className="text-center">5:12</span>
                      </div>
                      <div className="patients_list">
                        <span className="text-center">2</span>
                        <span>Waiting for Dr. Mcadmas </span>
                        <span className="text-center">5:12</span>
                      </div>
                      <div className="patients_list">
                        <span className="text-center">2</span>
                        <span>Waiting for Dr. Mcadmas </span>
                        <span className="text-center">5:12</span>
                      </div>
                      <div className="patients_list">
                        <span className="text-center">2</span>
                        <span>Waiting for Dr. Mcadmas </span>
                        <span className="text-center">5:12</span>
                      </div>
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

export default Page7;
