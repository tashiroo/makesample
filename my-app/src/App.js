import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <headr>
          <a></a>
          <h1>Discover the world's top Designers &amp; Creatives</h1>
        <div>image</div>
        <p>
          Art by <a href="#">Peteer Tarka</a>
        </p>
        </headr>
      </section>
      <section className="tiping">
        <nav>
          Already a member?<a href="#">Sign In</a>
        </nav>
        <main>
          <div className="mainBox">
          <h2>Sign up to Dribbble</h2>
            <fieldset>
              <p>Google</p>
              <p>
                Wrong identity? Sign out at Google and
                <a href="#">start over.</a>
              </p>
            </fieldset>

          <div className="nametag">
            <div>
              <fieldset className="name">
                <label>Name</label>
                <input></input>
              </fieldset>
            </div>
            <div>
              <fieldset className="name">
                <label>Username</label>
                <input></input>
              </fieldset>
            </div>
          </div>
          <div>
            <fieldset>
              <label>Email</label>
              <input></input>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <label >Password</label>
              <input></input>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <label>
                <input type="radio" className="radio"></input>Creating an account means you're
                okay with our <a href="#">Terms of Service,PrivacyPolicy,</a>and
                our default <a href="#">Notification Settings.</a>
              </label>
            </fieldset>
          </div>
          <input type="submit" value="Create Account" className="button"></input>
          <p>
            This site is protected by reCAPTCHA and the Google
            <a href="#">Privacy Policy,</a>and our default{" "}
            <a href="#">Notification Settings.</a>
          </p>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
