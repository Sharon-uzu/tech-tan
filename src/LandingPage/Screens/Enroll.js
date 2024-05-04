import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import vector from "../../Images/Vector 1.png";
import Modal from "react-modal";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Supabase } from "../../config/supabase-config";
import {  useNavigate } from "react-router-dom";

// paystack config
import { 
  // usePaystackPayment,
   PaystackButton } from "react-paystack";

const Enroll = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [pay, setPay] = useState(false);

  // const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
    amount: "",
    schedule: "",
    session: "",
    batch: "",
  };

  // const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  // const congrat = () => {
  //   navigate("/Congrat");
  // };

  const [formData, setFormData] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});

  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleSubmit = (e) => {
  //   setFormErrors(validate(formData));
  //   setIsSubmit(true);
  // };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formData);
  //   }
  // }, [formErrors]);

  const config = {
    reference: new Date().getTime(),
    email: formData.email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_0ae598740dd4cbdfc0b09614de18230643765609", 
  };

  const dataBase = (e) => {
    Supabase.from("techtan")
      .upsert([
        {
          fullname: formData.fullname,
          email: formData.email,
          amount: amount,
          metadata: formData,
        },
      ])
      .then((response) => {
        console.log(response);
        navigate("/");
      });
  };

  // you can call this function anything
  // const onSuccess = (reference) => {
  //   // Implementation for whatever you want to do with reference and after success call.
  //   console.log(reference);
  //   dataBase();
  // };

  // you can call this function anything
  // const onClose = () => {
  //   // implementation for  whatever you want to do when the Paystack dialog closed.
  //   console.log("closed");
  // };

  // const initializePayment = usePaystackPayment(config);

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.fullname) {
  //     errors.fullname = "Full name is required";
  //   } else if (!values.phone) {
  //     errors.phone = "Phone number is required";
  //   } else if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email";
  //   } else if (!values.gender) {
  //     errors.gender = "Select your gender";
  //     // } else if (!values.course) {
  //     //     errors.course = "Select your course";
  //     // }  else if (!values.schedule) {
  //     //   errors.schedule = "Select preferred schedule";
  //     // } else if (!values.address) {
  //     //   errors.address = "Fill in your address";
  //   } else {
  //     //     Supabase.from("techtan")
  //     // .upsert([
  //     //   {
  //     //     fullname: formData.fullname,
  //     //     email: formData.email,
  //     //     amount: amount,
  //     //     metadata: formData,
  //     //   },
  //     // ])
  //     // .then((response) => {
  //     //   console.log(response);
  //     //   navigate("/");
  //     // });

  //     initializePayment(onSuccess, onClose);
  //   }
  //   return errors;
  // };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    // const selectedValue = e.target.value;
    setFormData({
      ...formData,
      amount: amount,
    });
  };

  // const handleFinalSubmit = () => {
  //   // initializePayment(onSuccess, onClose)
  //   handleSubmit();
  // };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto"; // Enable scrolling
  }, [pathname]);

  const [course, setCourse] = useState(true);
  const [schedule, setSchedule] = useState(false);

  const [product, setProduct] = useState(false);
  const [front, setFront] = useState(false);
  const [dc, setDc] = useState(false);
  const [back, setBack] = useState(false);
  
  const [fullstack, setFullstack] = useState(false);
  const [productMgt, setProductMgt] = useState(false);
  const [data, setData] = useState(false);
  const [cyber, setCyber] = useState(false);
  const [dataScience, setDataScience] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [selectedText, setSelectedText] = useState("");

  const handleSelectChange = (event) => {
    setSelectedText(event.target.selectedOptions[0].textContent);
    const selectedValue = event.target.value;
    setFormData({
      ...formData,
      course: selectedValue,
    });

    if (selectedValue !== "") {
      setIsModalOpen(!isModalOpen);
      setAmount("00.00");
    }

    // Set showComponent1 and showComponent2 based on the selected option
    setProduct(selectedValue === "productDesign");
    setFront(selectedValue === "frontend");
    setDc(selectedValue === "dc");
    setBack(selectedValue === "backend");
    setFullstack(selectedValue === "fullstack");
    setDataScience(selectedValue === "datascience");
    setData(selectedValue === "dataAnalysis");
    setCyber(selectedValue === "cybersecurity");
    setProductMgt(selectedValue === "productmgt");

    if (selectedValue === "productDesign") {
      setAmount(175000);
    } else if (selectedValue === "frontend") {
      setAmount(250000);
    } else if (selectedValue === "dc") {
      setAmount(150000);
    } else if (selectedValue === "backend") {
      setAmount(300000);
    } else if (selectedValue === "fullstack") {
      setAmount(500000);
    } else if (selectedValue === "datascience") {
      setAmount(350000);
    } else if (selectedValue === "dataAnalysis") {
      setAmount(150000);
    } else if (selectedValue === "cybersecurity") {
      setAmount(150000);
    }else if (selectedValue === "productmgt") {
      setAmount(175000);
    }
  };

  // const handleUpload = (e) => {
  //   setFormData({
  //     ...formData,
  //     course: e.target.value,
  //   });
  // };

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function rev() {
    setIsModalOpen(false);
    setCourse(true);
    setSchedule(false);
  }

  const [productWeekdays, setProductWeekdays] = useState(false);
  const [frontWeekdays, setFrontWeekdays] = useState(false);
  const [dcWeekdays, setDcWeekdays] = useState(false);
  const [backWeekdays, setBackWeekdays] = useState(false);
  
  const [dataWeekdays, setDataWeekdays] = useState(false);
  const [cyberWeekdays, setCyberWeekdays] = useState(false);

  const [datascienceWeekdays, setDatascienceWeekdays] = useState(false);
  const [fullstackWeekdays, setFullstackWeekdays] = useState(false);
  const [productmgtWeekdays, setProductmgtWeekdays] = useState(false);

  const [productWeekend, setProductWeekend] = useState(false);
  const [frontWeekend, setFrontWeekend] = useState(false);
  const [dcWeekend, setDcWeekend] = useState(false);
  const [backWeekend, setBackWeekend] = useState(false);
  
  const [dataWeekend, setDataWeekend] = useState(false);
  const [cyberWeekend, setCyberWeekend] = useState(false);

  const [datascienceWeekend, setDatascienceWeekend] = useState(false);
  const [fullstackWeekend, setFullstackWeekend] = useState(false);
  const [productmgtWeekend, setProductmgtWeekend] = useState(false);

  const [scheduleText, setScheduleText] = useState("");

  const handleScheduleChange = (event) => {
    const selectedValue = event.target.value;
    setFormData({
      ...formData,
      schedule: selectedValue,
    });

    setScheduleText(event.target.selectedOptions[0].textContent);
    // setIsModalOpen(true)

    // Set showComponent1 and showComponent2 based on the selected option
    setProductWeekdays(selectedValue === "productweekdays");
    setProductWeekend(selectedValue === "productweekend");

    setCyberWeekdays(selectedValue === "cyberWeekdays");
    setCyberWeekend(selectedValue === "cyberWeekend");
    setFrontWeekdays(selectedValue === "frontweekdays");
    setFrontWeekend(selectedValue === "frontweekend");
    setDcWeekdays(selectedValue === "dcWeekdays");
    setDcWeekend(selectedValue === "dcWeekend");
    setBackWeekdays(selectedValue === "backWeekdays");
    setBackWeekend(selectedValue === "backWeekend");
    setDataWeekdays(selectedValue === "dataWeekdays");
    setDataWeekend(selectedValue === "dataWeekend");

    setDatascienceWeekdays(selectedValue === "datascienceWeekdays");
    setDatascienceWeekend(selectedValue === "datascienceWeekend");
    setFullstackWeekdays(selectedValue === "fullstackweekdays");
    setFullstackWeekend(selectedValue === "fullstackweekend");
    setProductmgtWeekdays(selectedValue === "productmgtWeekdays");
    setProductmgtWeekend(selectedValue === "productmgtWeekend");
  };

  const [clickedContent, setClickedContent] = useState("");

  const handleClick = (event) => {
    // Get the content of the clicked div
    const content = event.target.textContent;
    // Update the state with the clicked content
    setClickedContent(content);
    setIsModalOpen(false);
    setCourse(false);
    setSchedule(true);
    setDk(false);
    setFormData({
      ...formData,
      session: content,
    });
  };

  const [time1, setTime1] = useState(false);
  const [time2, setTime2] = useState(false);
  const [time3, setTime3] = useState(false);

  function activate1() {
    setTime1(true);
    setTime2(false);
    setTime3(false);
    setPay(true);
    // setCohortContent('Cohort1');
    const content = "Cohort1";
    setFormData({
      ...formData,
      batch: content,
    });
  }

  function activate2() {
    setTime2(true);
    setTime1(false);
    setTime3(false);
    setPay(true);
    const content = "Cohort2";
    setFormData({
      ...formData,
      batch: content,
    });
  }

  function activate3() {
    setTime3(true);
    setTime2(false);
    setTime1(false);
    setPay(true);
    const content = "Cohort3";
    setFormData({
      ...formData,
      batch: content,
    });
  }

  const [dk, setDk] = useState(true);

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    dataBase();
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    alert("You closes the payment page")
  };

  const componentProps = {
    ...config,
    text: "Pay now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
    
  }

  return (
    <div>
      <Header />
      <div className="enrollment">
        <h3>Enroll Section</h3>
        <div className="form">
          <label htmlFor="course">
            <p>Full Name:</p>
            <div>
              <input
                type="text"
                placeholder="Fullname"
                value={formData.fullname}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    fullname: e.target.value,
                  });
                }}
              />
            </div>

            {/* <p
              style={{
                color: "red",
                fontSize: "14px",
                width: "86%",
                textAlign: "start",
                marginLeft: "auto",
              }}
            >
              {formErrors.fullname}
            </p> */}
          </label>

          <label htmlFor="course">
            <p>Email:</p>
            <div>
              <input
                type="email"
                // onChange={handleEmailChange}
                // value={email}
                placeholder="Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
              />
            </div>

            {/* <p
              style={{
                color: "red",
                fontSize: "14px",
                width: "86%",
                textAlign: "start",
                marginLeft: "auto",
              }}
            >
              {formErrors.email}
            </p> */}
          </label>

          <label htmlFor="course">
            <p>Phone:</p>
            <div>
              <input
                type="tel"
                name=""
                id=""
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  });
                }}
              />
            </div>

            {/* <p
              style={{
                color: "red",
                fontSize: "14px",
                width: "86%",
                textAlign: "start",
                marginLeft: "auto",
              }}
            >
              {formErrors.phone}
            </p> */}
          </label>

          <label htmlFor="gender">
            <p>Gender:</p>
            <div>
              <select
                id="selectOption"
                value={formData.gender}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    gender: e.target.value,
                  });
                }}
              >
                <option value={null}>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* <p
              style={{
                color: "red",
                fontSize: "14px",
                width: "86%",
                textAlign: "start",
                marginLeft: "auto",
              }}
            >
              {formErrors.gender}
            </p> */}
          </label>

          {course ? (
            <>
              <label htmlFor="course">
                <p>Courses:</p>
                <div>
                  <select id="selectOption" onChange={handleSelectChange}>
                    <option value={null}>Select Course</option>
                    <option value="productDesign">Product Design</option>
                    <option value="dc">
                      Digital Marketing & Content Creation
                    </option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="dataAnalysis">Data Analysis</option>
                    <option value="datascience">Data Science</option>
                    <option value="fullstack">Fullstack Web Developmaent</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="productmgt">Product Management</option>
                  </select>
                </div>
              </label>
            </>
          ) : null}

          <label htmlFor="course">
            <p>Amount:</p>
            <div>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                disabled
              />
            </div>
          </label>

          {/* <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                        <select>
                            <option value="weekdays">Week Days</option>
                            <option value="weekend">Weekend</option>

                        </select>
                    </div>
                    
                </label> */}

          {schedule ? (
            <>
              <section className="sche">
                <h3>Your Schedule</h3>
                <img src={vector} alt="" />

                <div className="sche-c">
                  <p></p>
                  <div className="schedule">
                    <h4>
                      Course: <span>{selectedText}</span>
                    </h4>
                    <h4>
                      Amount: <span>{amount}</span>
                    </h4>
                    <h4>
                      Schedule: <span>{scheduleText}</span>
                    </h4>

                    {clickedContent && (
                      <div>
                        <h4>Session:</h4>
                        {/* Output all content */}
                        <div>{clickedContent}</div>
                      </div>
                    )}

                    <h6 onClick={openModal}>
                      <i>Change</i>
                    </h6>
                  </div>
                </div>
              </section>
            </>
          ) : null}

          <h3>Select Batch</h3>
          <img src={vector} alt="" />

          <section className="batch" disabled>
            <div
              className="div"
              style={{
                backgroundColor: time1 ? "#232B58" : "#fff",
                color: time1 ? "#fff" : "#000",
              }}
            >
              <h5>Cohort 1</h5>
              <p>Classes Begin: 1st March,2024</p>
              <button
                type="button"
                onClick={() => {
                  activate1();
                }}
              >
                Select
              </button>

              {dk ? <div className="dk"></div> : null}
            </div>

            <div
              className="div"
              style={{
                backgroundColor: time2 ? "#232B58" : "#fff",
                color: time2 ? "#fff" : "#000",
              }}
            >
              <h5>Cohort 2</h5>
              <p>Classes Begin: 1st July,2024</p>
              <button
                type="button"
                onClick={() => {
                  activate2();
                }}
              >
                Select
              </button>

              {dk ? <div className="dk"></div> : null}
            </div>

            <div
              className="div"
              style={{
                backgroundColor: time3 ? "#232B58" : "#fff",
                color: time3 ? "#fff" : "#000",
              }}
            >
              <h5>Cohort 3</h5>
              <p>Classes Begin: 1st July,2024</p>
              <button
                type="button"
                onClick={() => {
                  activate3();
                }}
              >
                Select
              </button>

              {dk ? <div className="dk"></div> : null}
            </div>
          </section>

          {pay ? (
            <PaystackButton
              className="pay"
              onClick={() => {
                // handleFinalSubmit();
                console.log("ready to pay")
              }}
              style={{ cursor: "pointer" }}
              {...componentProps}
            />
          ) : // <button
          //   onClick={() => {
          //     handleFinalSubmit();
          //   }}
          //   className="pay"
          //   style={{ cursor: "pointer" }}
          // >
          //   Pay Now
          // </button>
          null}

          <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{
              overlay: {
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex: 100000,
              },
            }}
          >
            <div className="modal">
              <div className="modal-c">
                <div className="close">
                  <button onClick={closeModal}>x</button>
                </div>

                {product ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="productweekdays">Week Days</option>
                        <option value="productweekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {productWeekdays ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:10am <br />
                          <br />
                          Wednessday:11am <br />
                          <br />
                          Friday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:2pm <br />
                          <br />
                          Wednessday:2pm <br />
                          <br />
                          Friday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:4pm <br />
                          <br />
                          Wednessday:5pm <br />
                          <br />
                          Friday:4pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {productWeekend ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>Saturday: 10am</p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session: </h5>
                        <p>Saturday: 1:30pm</p>
                      </div>

                      <div className="div">
                        <h5>Evening Session: </h5>
                        <p>Saturday: 4pm</p>
                      </div>
                    </section>
                  </>
                ) : null}

                {/* FRONTEND */}

                {front ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="frontweekdays">Week Days</option>
                        <option value="frontweekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {frontWeekdays ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:10am <br />
                          <br />
                          Tuesday:11am <br />
                          <br />
                          Thursday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:2pm <br />
                          <br />
                          Tuessday:2pm <br />
                          <br />
                          Thursday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:4pm <br />
                          <br />
                          Tuesday:5pm <br />
                          <br />
                          Thursday:4pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {frontWeekend ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>Saturday: 9am</p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session: </h5>
                        <p>Saturday: 2pm</p>
                      </div>

                      <div className="div">
                        <h5>Evening Session: </h5>
                        <p>Saturday: 5pm</p>
                      </div>
                    </section>
                  </>
                ) : null}

                {/* D&C */}

                {dc ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="dcWeekdays">Week Days</option>
                        <option value="dcWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {dcWeekdays ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:9am <br />
                          <br />
                          Tuesday:11am <br />
                          <br />
                          Wednessday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:2pm <br />
                          <br />
                          Tuessday:2pm <br />
                          <br />
                          Wednessday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:4pm <br />
                          <br />
                          Tuesday:5pm <br />
                          <br />
                          Wednesday:4pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {dcWeekend ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>Saturday: 9am</p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session: </h5>
                        <p>Saturday: 2pm</p>
                      </div>

                      <div className="div">
                        <h5>Evening Session: </h5>
                        <p>Saturday: 5pm</p>
                      </div>
                    </section>
                  </>
                ) : null}

                {/* BACKEND */}

                {back ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="backWeekdays">Week Days</option>
                        <option value="backWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {backWeekdays ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:9am <br />
                          <br />
                          Tuesday:11am <br />
                          <br />
                          Wednessday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:2pm <br />
                          <br />
                          Tuessday:2pm <br />
                          <br />
                          Wednessday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:4pm <br />
                          <br />
                          Tuesday:5pm <br />
                          <br />
                          Wednesday:4pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {backWeekend ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>Saturday: 9am</p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session: </h5>
                        <p>Saturday: 2pm</p>
                      </div>

                      <div className="div">
                        <h5>Evening Session: </h5>
                        <p>Saturday: 5pm</p>
                      </div>
                    </section>
                  </>
                ) : null}

                {/* Data Analysis */}

                {data ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="dataWeekdays">Week Days</option>
                        <option value="dataWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {dataWeekdays ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:9am <br />
                          <br />
                          Tuesday:11am <br />
                          <br />
                          Wednessday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:2pm <br />
                          <br />
                          Tuessday:2pm <br />
                          <br />
                          Wednessday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:4pm <br />
                          <br />
                          Tuesday:5pm <br />
                          <br />
                          Wednesday:4pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {dataWeekend ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>Saturday: 9am</p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session: </h5>
                        <p>Saturday: 2pm</p>
                      </div>

                      <div className="div">
                        <h5>Evening Session: </h5>
                        <p>Saturday: 5pm</p>
                      </div>
                    </section>
                  </>
                ) : null}

                {/* fullstack */}

                {fullstack ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="fullstackweekdays">Week Days</option>
                        <option value="fullstackweekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {fullstackWeekdays ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:9am <br />
                          <br />
                          Tuesday:11am <br />
                          <br />
                          Wednessday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:2pm <br />
                          <br />
                          Tuessday:2pm <br />
                          <br />
                          Wednessday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:4pm <br />
                          <br />
                          Tuesday:5pm <br />
                          <br />
                          Wednesday:4pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {fullstackWeekend ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>Saturday: 9am</p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session: </h5>
                        <p>Saturday: 2pm</p>
                      </div>

                      <div className="div">
                        <h5>Evening Session: </h5>
                        <p>Saturday: 5pm</p>
                      </div>
                    </section>
                  </>
                ) : null}

                {/* Data science */}

                {dataScience ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="datascienceWeekdays">Week Days</option>
                        <option value="datascienceWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {datascienceWeekdays ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:9am <br />
                          <br />
                          Tuesday:11am <br />
                          <br />
                          Wednessday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:2pm <br />
                          <br />
                          Tuessday:2pm <br />
                          <br />
                          Wednessday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:4pm <br />
                          <br />
                          Tuesday:5pm <br />
                          <br />
                          Wednesday:4pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {datascienceWeekend ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>Saturday: 9am</p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session: </h5>
                        <p>Saturday: 2pm</p>
                      </div>

                      <div className="div">
                        <h5>Evening Session: </h5>
                        <p>Saturday: 5pm</p>
                      </div>
                    </section>
                  </>
                ) : null}


                {/* Product Management */}

                {productMgt ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="productmgtWeekdays">Week Days</option>
                        <option value="productmgtWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {productmgtWeekdays ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:9am <br />
                          <br />
                          Tuesday:11am <br />
                          <br />
                          Wednessday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:2pm <br />
                          <br />
                          Tuessday:2pm <br />
                          <br />
                          Wednessday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:4pm <br />
                          <br />
                          Tuesday:5pm <br />
                          <br />
                          Wednesday:4pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {productmgtWeekend ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>Saturday: 9am</p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session: </h5>
                        <p>Saturday: 2pm</p>
                      </div>

                      <div className="div">
                        <h5>Evening Session: </h5>
                        <p>Saturday: 5pm</p>
                      </div>
                    </section>
                  </>
                ) : null}

                {/* Cybersecurity */}

                {cyber ? (
                  <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                      <select onChange={handleScheduleChange}>
                        <option value="">Select schedule</option>
                        <option value="cyberWeekdays">Week Days</option>
                        <option value="cyberWeekend">Weekend</option>
                      </select>
                    </div>
                  </label>
                ) : null}

                {cyberWeekdays ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>
                          Monday:9am <br />
                          <br />
                          Tuesday:11am <br />
                          <br />
                          Wednessday:9am{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session</h5>
                        <p>
                          Monday:2pm <br />
                          <br />
                          Tuessday:2pm <br />
                          <br />
                          Wednessday:1pm{" "}
                        </p>
                      </div>

                      <div className="div">
                        <h5>Evening Session</h5>
                        <p>
                          Monday:4pm <br />
                          <br />
                          Tuesday:5pm <br />
                          <br />
                          Wednesday:4pm{" "}
                        </p>
                      </div>
                    </section>

                    <p className="arr-back" onClick={rev}>
                      <FaArrowCircleLeft /> Back{" "}
                    </p>
                  </>
                ) : null}

                {cyberWeekend ? (
                  <>
                    <i className="click">
                      Click on any of the box below to select a schedule *
                    </i>

                    <section className="batch" onClick={handleClick}>
                      <div className="div">
                        <h5>Morning Session: </h5>
                        <p>Saturday: 9am</p>
                      </div>

                      <div className="div">
                        <h5>Afternoon Session: </h5>
                        <p>Saturday: 2pm</p>
                      </div>

                      <div className="div">
                        <h5>Evening Session: </h5>
                        <p>Saturday: 5pm</p>
                      </div>
                    </section>
                  </>
                ) : null}
              </div>
            </div>
          </Modal>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enroll;
