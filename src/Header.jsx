import React, { Component } from 'react'
import axios from 'axios';
import Hero from './Hero';
import Main from './Main';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            aadhaarno:"",
            dob:"",
            intro:"",
            mob:"",
            photo:"",
            aadhaar1:"",
            aadhaar2:"",
            expinmon:"",
            lat:"",
            long:"",
            locationName:"",
            fullname:"",
            gender:"",
            edudetail:"",
            candSkills:[]
        }
    }

    componentDidMount(){
        axios({
            method:'get',
            url:'http://pandora.unihyr.com/pandora-service/v1/candidate/0f8f0fe1-84ae-43ee-b8d2-1f68af34b614',
            headers:{
                ContentType:'application/json',
                Authorization:'0NLxYYQIUJ6TNXrG7hQN',
                language:'hi',
            }            
        })
        .then((res)=>{
            console.log(res.data)
            this.setState({
                aadhaarno:res.data.aadharNumber,
                dob:res.data.dateOfBirth,
                mob:res.data.mobileNumber,
                intro:res.data.introVideoUrl,
                photo:res.data.photoS3Url,
                aadhaar1:res.data.aadharS3Url,
                aadhaar2:res.data.aadharS3BackUrl,
                edudetail:res.data.educationDetail,
                gender:res.data.gender,
                fullname:res.data.fullName,
                locationName:res.data.candidateLocations[0].location.locationName,
                lat:res.data.candidateLocations[0].location.latitude,
                long:res.data.candidateLocations[0].location.longitude,
                expinmon:res.data.candidateExperience[0].experienceInMonth,
                candSkills:res.data.candidateSkills
            })
        })
        .catch((e)=>console.log(e))
    }

    render(){
        const {fullname,photo} = this.state

        const detailObj = {
            aadhaarno:this.state.aadhaarno,
            dob:this.state.dob,
            intro:this.state.intro,
            mob:this.state.mob,
            photo:this.state.photo,
            aadhaar1:this.state.aadhaar1,
            aadhaar2:this.state.aadhaar2,
            expinmon:this.state.expinmon,
            lat:this.state.lat,
            long:this.state.long,
            locationName:this.state.locationName,
            fullname:this.state.fullname,
            gender:this.state.gender,
            edudetail:this.state.edudetail,
            candSkills:this.state.candSkills
        }

        return(
            <>
                {/* <!-- ======= Mobile nav toggle button ======= --> */}
                <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
                <header id="header">
                    <div class="d-flex flex-column">
                        <div class="profile">
                        <img src={photo} alt="" class="img-fluid rounded-circle"/>
                        <h1 class="text-light"><a href="index.html">{fullname}</a></h1>
                        <div class="social-links mt-3 text-center">
                            <a href="twitter" class="twitter"><i class="bx bxl-twitter"></i></a>
                            <a href="facebook" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="instagram" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a href="googleplus" class="google-plus"><i class="bx bxl-skype"></i></a>
                            <a href="linkedin" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                        </div>
                        </div>
                        <nav class="nav-menu">
                            <ul>
                            <li class="active"><a href="index.html"><i class="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
                            <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                            {/* <li><a href="#portfolio"><i class="bx bx-book-content"></i> Portfolio</a></li> */}
                            {/* <li><a href="#services"><i class="bx bx-server"></i> Services</a></li> */}
                            <li><a href="#contact"><i class="bx bx-envelope"></i> Contact</a></li>
                            </ul>
                        </nav>
                        <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
                    </div>
                </header>
                <Hero name={fullname}/>
                <Main obj={detailObj}/>
            </>
        )
    }
}

export default Header