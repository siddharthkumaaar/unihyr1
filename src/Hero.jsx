import React, { Component } from "react";

class Hero extends Component {
  render() {
    const {name} = this.props
    return (
      <>
        {/* <!-- ======= Hero Section ======= --> */}
        <section
          id="hero"
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="hero-container" data-aos="fade-in">
            <h1>Hello</h1>
            <p>
              I'm {name}
              {/* <span
                class="typed"
                data-typed-items="Designer, Developer, Freelancer, Photographer"
              ></span> */}
            </p>
          </div>
        </section>
        {/* <!-- End Hero --> */}
      </>
    );
  }
}

export default Hero;
