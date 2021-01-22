import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

class Main extends Component{

    render(){
        const mapStyles = {
            width: '80%',
            height: '50%',
          };

        const {obj} = this.props
        let year = new Date().getFullYear()
        let byear = obj.dob.split("-").map(a=>parseInt(a))
        return(
            <>
                <main id="main">
                {/* <!-- ======= About Section ======= --> */}
                <section id="about" class="about">
                <div class="container">

                    <div class="section-title">
                    <h2>About</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">
                    <div class="col-lg-4" data-aos="fade-right">
                        <div class="mb-2">
                            <img src={obj.photo} class="img-fluid" alt=""/>
                        </div>
                        <div class="mb-2">
                            <button class="btn btn-primary btn-block"><a href={obj.aadhaar1} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"white"}}>Aadhar Front</a></button>
                        </div>
                        <div class="mb-2">
                            <button class="btn btn-primary btn-block"><a href={obj.aadhaar2} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"white"}}>Aadhar Back</a></button>
                        </div>
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>My Detail</h3>
                        <p class="font-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                        <div class="row">
                        <div class="col-lg-6">
                            <ul>
                            <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> {obj.dob}</li>
                            <li><i class="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                            <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> {obj.mob}</li>
                            <li><i class="icofont-rounded-right"></i> <strong>City:</strong> City : {obj.locationName} INDIA</li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                            <li><i class="icofont-rounded-right"></i> <strong>Age:</strong>{year-byear[2]}</li>
                            <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> {obj.edudetail}</li>
                            <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> email@example.com</li>
                            <li><i class="icofont-rounded-right"></i> <strong>Aadhar No:</strong> {obj.aadhaarno}</li>
                            </ul>
                        </div>
                        </div>
                        <p>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </p>
                    </div>
                    </div>

                </div>
                </section>
                {/* <!-- End About Section --> */}
                {/* <!-- ======= Facts Section ======= --> */}
                <section id="facts" class="facts">
                <div class="container">

                    <div class="section-title">
                    <h2>Introduction Video</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <iframe src={obj.intro} frameborder="10" ></iframe>
                </div>
                </section>
                {/* <!-- End Facts Section --> */}
                {/* <!-- ======= Skills Section ======= --> */}
                <section id="skills" class="skills section-bg">
                <div class="container">

                    <div class="section-title">
                    <h2>Skills</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row skills-content">

                    <div class="col-lg-12" data-aos="fade-up">
                        {obj && obj.candSkills.map(value=>(
                        <div class="progress">
                        <span class="skill">{value.skill.skillName} <i class="val">100%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        ))}
                    </div>
                    </div>

                </div>
                </section>
                {/* <!-- End Skills Section --> */}
                {/* <!-- ======= Resume Section ======= --> */}
                <section id="resume" class="resume">
                <div class="container">

                    <div class="section-title">
                    <h2>Resume</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">
                    <div class="col-lg-6" data-aos="fade-up">
                        <h3 class="resume-title">Sumary</h3>
                        <div class="resume-item pb-0">
                        <h4>{obj.fullname}</h4>
                        <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                        <ul>
                            <li>{obj.locationName}, INDIA</li>
                            <li>{obj.mob}</li>
                            <li>Deepak@example.com</li>
                        </ul>
                        </div>

                        <h3 class="resume-title">Education</h3>
                        <div class="resume-item">
                        <h4>{obj.edudetail}</h4>
                        </div>
                    </div>
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 class="resume-title">Professional Experience</h3>
                        {obj && obj.candSkills.map(skill=>(
                        <div class="resume-item">
                        <h4>{skill.skill.skillName}</h4>
                        <img src={skill.skill.skillPhotoUrl} alt=""/>
                        <h5>{skill.skill.skillShortDesc}</h5>
                        
                        <p>{skill.skill.skillLongDesc}</p>
                        </div>
                        ))}
                    </div>
                    </div>

                </div>
                </section>
                {/* <!-- End Resume Section --> */}
    
                {/* <!-- ======= Contact Section ======= --> */}
                <section id="contact" class="contact">
                <div class="container">

                    <div class="section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row" data-aos="fade-in">

                    <div class="col-lg-5 d-flex align-items-stretch">
                        <div class="info">
                        <div class="address">
                            <i class="icofont-google-map"></i>
                            <h4>Location:</h4>
                            <p>{obj.locationName}, INDIA</p>
                        </div>

                        <div class="email">
                            <i class="icofont-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                        </div>

                        <div class="phone">
                            <i class="icofont-phone"></i>
                            <h4>Call:</h4>
                            <p>{obj.mob}</p>
                        </div>
                        <Map
                        google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: 28.45005682872383, lng: 77.02200977293947}}
                        />
                        </div>

                    </div>

                    <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form class="php-email-form">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="name">Your Name</label>
                            <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="name">Your Email</label>
                            <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                            <div class="validate"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Subject</label>
                            <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <label for="name">Message</label>
                            <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                            <div class="validate"></div>
                        </div>
                        <div class="mb-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                    </div>

                </div>
                </section>
                {/* <!-- End Contact Section --> */}
                </main>
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCZ0_WtqLg96_t6oWNQ2179Nsy3Ega1wC8'
  })(Main);