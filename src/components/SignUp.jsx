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
            <input placeholder="NAME" {...register("name", { required: true, maxLength: 100 })} />
            {errors.name && <span className="error">Name is required</span>}
            <input placeholder="TITLE" {...register("title", { required: true, maxLength: 100 })} />
            {errors.title && <span className="error">Title is required</span>}
            <input placeholder="PUBLICATION" {...register("publication", { required: true, maxLength: 100 })} />
            {errors.publication && <span className="error">Publication is required</span>}
            <input
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
            {errors.email && <span className="error">A valid email is required</span>}
            <p className="font">Three links to recent articles/coverage/news contributed by you</p>
            <input placeholder="LINK 1" {...register("recent1", { required: true, maxLength: 200 })} />
            <input placeholder="LINK 2" {...register("recent2", { required: true, maxLength: 200 })} />
            <input placeholder="LINK 3" {...register("recent3", { required: true, maxLength: 200 })} />
            <p className="font">Requesting Media Pass Type</p>
            <div className="chex">
              {/* <div className="box">
                <label htmlFor="pass">PPV</label>
                <input
                  onClick={(e) => handleCheck(e.target)}
                  type="radio"
                  name="ppv"
                  value="ppv"
                  {...register("ppv")}
                />
              </div> */}
              <div className="box">
                <label htmlFor="pass">In-Person Weigh In/Press Conference (May 13)</label>
                <input className="target" onClick={(e) => handleCheck(e.target)} type="radio" name="media-pass1" value="media-pass1" {...register("media-pass1")} />
              </div>
              <div className="box">
                <label htmlFor="pass">Event (May 14)</label>
                <input className="target" onClick={(e) => handleCheck(e.target)} type="radio" name="media-pass2" value="media-pass2" {...register("media-pass2")} />
              </div>
              <div className="box">
                <label htmlFor="pass">Both In-Person Weigh In/Press Conference & Main Event</label>
                <input className="target" onClick={(e) => handleCheck(e.target)} type="radio" name="media-pass3" value="media-pass3" {...register("media-pass3")} />
              </div>
              <div className="box">
                <label htmlFor="pass">Moment House Livestream (Digital Only)</label>
                <input className="target" onClick={(e) => handleCheck(e.target)} type="radio" name="media-pass4" value="media-pass4" {...register("media-pass4")} />
              </div>
            </div>
            <input className="submit ticket" type="submit" />
          </form>
        </div>
      )}
    </div>
  );
}
