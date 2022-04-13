import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/creator-clash-logo.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const scriptUrl = "https://script.google.com/macros/s/AKfycbwuUQ0Bjzq3ND73D7lhYLbD0L07iROSqK50bZFqDE6SvKpTnr0f2P5sX_PVlXB5h_EjjQ/exec";
  // const form = document.forms["google-sheet"];

  const onSubmit = (data) => {
    if (data) {
      const form = document.forms["google-sheet"];
      fetch(scriptUrl, { method: "POST", body: new FormData(form) })
        .then((response) => setSuccess(true))
        .catch((error) => console.error("Error!", error.message));
    }
  };

  function handleCheck(box) {
    const allCheckboxes = Array.from(document.querySelectorAll('input[type="radio"]'));
    allCheckboxes.forEach((checkbox) => {
      if (checkbox.value !== box.value) {
        checkbox.checked = false;
      }
    });
  }

  return (
    <div className="App">
      <img className="logo container sign-up" src={logo} alt="Creator Clash Logo" />
      {success ? (
        <div>
          <h2 className="form-font">Thank you for your submission</h2>
          <div className="tickets show media">
            <Link className="ticket" exact="true" to="/">
              BACK TO HOME
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="form-font">PLEASE FILL OUT THE FORM</h2>
          <form onSubmit={handleSubmit(onSubmit)} name="google-sheet">
            {/* <label htmlFor="name">Name</label> */}
            <input placeholder="NAME" {...register("name", { required: true, maxLength: 100 })} />
            {errors.name && <span className="error">Name is required</span>}
            {/* <label htmlFor="company">Company</label> */}
            <input placeholder="COMPANY" {...register("company", { required: true, maxLength: 100 })} />
            {errors.company && <span className="error">Company is required</span>}
            {/* <label htmlFor="email">Email</label> */}
            <input placeholder="EMAIL" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
            {errors.email && <span className="error">A valid email is required</span>}
            {/* <label htmlFor="phone">Phone</label> */}
            <input placeholder="PHONE" {...register("phone", { required: true, pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/ })} />
            {errors.phone && <span className="error">A valid phone number is required</span>}
            {/* <p className="font">Link To Recent Publications</p> */}
            <textarea placeholder="LINK TO RECENT PUBLICATIONS" {...register("recent", { required: true, maxLength: 1000 })} />
            {errors.recent && <span className="error">Links to recent publications are required.</span>}
            <p className="font">Requesting PPV or Media Pass</p>
            <div className="chex">
              <div className="box">
                <label htmlFor="pass">PPV</label>
                <input onClick={(e) => handleCheck(e.target)} type="radio" name="ppv" value="ppv" {...register("ppv")} />
              </div>
              <div className="box">
                <label htmlFor="pass">Media Pass</label>
                <input className="target" onClick={(e) => handleCheck(e.target)} type="radio" name="media-pass" value="media-pass" {...register("media-pass")} />
              </div>
            </div>
            <input className="submit ticket" type="submit" />
          </form>
        </div>
      )}
    </div>
  );
}
