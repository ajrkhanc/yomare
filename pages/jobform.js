import { useState, useEffect } from "react";
import Head from "next/head";


export async function getServerSideProps() {
    const res = await fetch('https://yoma-admin.herokuapp.com/uploads/proanto/resume/state.json')
    const Stateall = await res.json()
    const State = Object.keys(Stateall).map(key => Stateall[key])

    return {
        props: {
            State,
        },
    }
}



export default function PrivatePage(State, currentState) {
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [random1, randomIn1] = useState(null);
    const [random2, randomIn2] = useState(null);
    const [stateData, setStates] = useState(null)
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [citiesData, setCities] = useState(null);
    const [permanentCitiesData, setPermanentCities] = useState(null);

    useEffect(() => {
        setStates(State)
    }, [State])

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            randomIn1(Math.floor((Math.random() * 2000) + 1))
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const uploadToClient2 = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage2(i);
            randomIn2(Math.floor((Math.random() * 2000) + 1))
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        // console.log("file", image)
        body.append("file", image);
        body.append("randomno", random1);
        // body.append("randomno2", random2);    
        // body.append("file2", image2);

        console.log(random1)
        const response = await fetch("https://yoma-admin.herokuapp.com/api/resume", {
            method: "POST",
            body
        });
    };



    function fetchCities() {
        var stateval = document.getElementById("CurrentState").value
        var valofstateindex = stateval.split('_')[0]
        // var cities = stateData[stateval]
        // console.log(stateData.State[0][valofstateindex].districts)
        setCities(stateData.State[0][valofstateindex].districts)

    }

    function fetchPermanentCities(){
        var stateval = document.getElementById("PermanentState").value
        var valofstateindex = stateval.split('_')[0]
        // var cities = stateData[stateval]
        // console.log(stateData.State[0][valofstateindex].districts)
        setPermanentCities(stateData.State[0][valofstateindex].districts)
    }


    const submitFeedback = async (event) => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        const FullName = event.target.FullName.value;
        const Gender = event.target.Gender.value;
        const Dob = event.target.Dob.value;
        const MobileNumber = event.target.MobileNumber.value;
        const WhatsappMobileNumber = event.target.WhatsappMobileNumber.value;
        const EmailAddress = event.target.EmailAddress.value;
        const CurrentCity = event.target.CurrentCity.value
        const CurrentState = event.target.CurrentState.value.split('_')[1];
        const PermanentCity = event.target.PermanentCity.value;
        const PermanentState = event.target.PermanentState.value.split('_')[1];
        const PermanentAddress = event.target.PermanentAddress.value;
        const CurrentAddress = event.target.CurrentAddress.value;
        const HighestQualification = event.target.HighestQualification.value;
        const ExperienceYears = event.target.ExperienceYears.value;
        const ExperienceMonths = event.target.ExperienceMonths.value;
        const Designation = event.target.Designation.value;
        const Expectedsalary = event.target.Expectedsalary.value;
        const VehicleRequirement = event.target.VehicleRequirement.value;
        const SmartPhone = event.target.SmartPhone.value;
        const NativeLanguage = event.target.NativeLanguage.value;
        const file = image.name.replace(/\s/g, '')


        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://yoma-admin.herokuapp.com/api/jobform/');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('FullName=' + FullName +
            '&Gender=' + Gender +
            '&Dob=' + Dob +
            '&MobileNumber=' + MobileNumber +
            '&WhatsappMobileNumber=' + WhatsappMobileNumber +
            '&EmailAddress=' + EmailAddress +
            '&CurrentCity=' + CurrentCity +
            '&CurrentState=' + CurrentState +
            '&PermanentCity=' + PermanentCity +
            '&PermanentState=' + PermanentState +
            '&PermanentAddress=' + PermanentAddress +
            '&CurrentAddress=' + CurrentAddress +
            '&HighestQualification=' + HighestQualification +
            '&ExperienceYears=' + ExperienceYears +
            '&ExperienceMonths=' + ExperienceMonths +
            '&Designation=' + Designation +
            '&Expectedsalary=' + Expectedsalary +
            '&VehicleRequirement=' + VehicleRequirement +
            '&SmartPhone=' + SmartPhone +
            '&NativeLanguage=' + NativeLanguage +
            '&file=' + file + '&random=' + random1);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                document.getElementById("feebackform").reset()
                document.getElementById("response").innerHTML = "Job Applican Submitted"

                setTimeout(function () {
                    document.getElementById("response").innerHTML = "";
                    document.getElementById("submitbuttonform").value = "Submit JobForm";
                }, 3000)
            }
        }

        xhr.onerror = function () {
            console.log('error');
        }
    };

    return (
        <>


            <Head>
                <title>JobForm - Yomamultinational</title>
                <meta name="description" content="Blanchard Research and Training LLP is the leading training provider in South Asia, with expertise in leadership development across hierarchies. Having a global establishment of over 35 years and operational in India since 2008 by Mr Yogesh Sood who is a veteran in business operations and leadership development." />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className="pt-40 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="blog-details-content singleblog">
                                <div className="comment-form-wrap wow fadeInUp delay-0-2s animated">
                                    <h3 className="comment-title mb-55">Job Applicant Form</h3>
                                    <form id="feebackform" onSubmit={submitFeedback} className="comment-form">
                                        <div className="row clearfix justify-content-center">

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" id="FullName" name="FullName" pattern="[a-z, A-Z]*" title="Only alphabets are allowed" className="form-control" placeholder="Full Name*" required />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <select name="Gender" required>
                                                        <option value="">Your Gender*</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Femail">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label className="dob">DOB*</label>
                                                    <input type="date" id="Dob" name="Dob" min="1970-01-01" max="2004-05-18" className="form-control datepicker" placeholder="DOB" required />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" id="MobileNumber" name="MobileNumber" maxlength="10" minlength="10" pattern="[0-9]*" title="Only numbers are allowed" className="form-control" placeholder="Mobile Number*" required />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" id="WhatsappMobileNumber" name="WhatsappMobileNumber" maxlength="10" minlength="10" pattern="[0-9]*" title="Only numbers are allowed" className="form-control" placeholder="Whatsapp Mobile Number*" required />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="email" id="EmailAddress" name="EmailAddress" className="form-control" placeholder="Email Address*" required />
                                                </div>
                                            </div>


                                            <div className="col-sm-6">
                                                <div className="form-group">                                                    
                                                    <select onChange={fetchCities} name="CurrentState" id="CurrentState" required>
                                                        <option value="">Current State*</option>
                                                        {
                                                            State.State[0].map((getstate, i) => {
                                                                return (
                                                                    <option value={`${i}_${getstate.state}`}>{getstate.state}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                <label className="dob">Current City*</label>
                                                    <select name="CurrentCity" id="CurrentCity" required>
                                                    
                                                        {
                                                            (citiesData) ? 
                                                            citiesData.map((getCity , i) => {
                                                                return (
                                                                    <option value={getCity}>{getCity}</option>
                                                                )
                                                            }) :    <option>Select State First</option>
                                                        }
                                                    </select>
                                                </div>
                                            </div>

                                            
                                            <div className="col-sm-6">
                                                <div className="form-group">                                                    
                                                    <select onChange={fetchPermanentCities} name="PermanentState" id="PermanentState" required>
                                                        <option value="">Permanent State*</option>
                                                        {
                                                            State.State[0].map((getstate, i) => {
                                                                return (
                                                                    <option value={`${i}_${getstate.state}`}>{getstate.state}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label className="dob">Permanent City*</label>
                                                    <select name="PermanentCity" id="PermanentCity" required>                                                    
                                                        {
                                                            (permanentCitiesData) ? 
                                                            permanentCitiesData.map((getCity , i) => {
                                                                return (
                                                                    <option value={getCity}>{getCity}</option>
                                                                )
                                                            }) :    <option>Select State First</option>
                                                        }
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" id="PermanentAddress" name="PermanentAddress" className="form-control" placeholder="Permanent Address*" />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" id="CurrentAddress" name="CurrentAddress" className="form-control" placeholder="Current Address*" required />
                                                </div>
                                            </div>



                                            <div className="col-sm-6">
                                                <div className="form-group">                                                    
                                                    <select name="HighestQualification" required>
                                                        <option value="">Your Qualification*</option>
                                                        <option value="10th pass">10th Pass</option>
                                                        <option value="12th pass">12th Pass</option>
                                                        <option value="Graduation">Graduation</option>
                                                        <option value="Post Graduation">Post Graduation</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="ResumeFile">Resume File</label>
                                                    <input type="file" id="ResumeFile" name="ResumeFile" onChange={uploadToClient} required />
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <h4 className="h3themecolor">Total Experience*</h4>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <select name="ExperienceYears" id="ExperienceYears" required>
                                                        <option value="">Year(s)</option>
                                                        <option value="0 years">0 years</option>
                                                        <option value="1 years">1 years</option>
                                                        <option value="2 years">2 years</option>
                                                        <option value="3 years">3 years</option>
                                                        <option value="4 years">4 years</option>
                                                        <option value="5 years">5 years</option>
                                                        <option value="6 years">6 years</option>
                                                        <option value="7 years">7 years</option>
                                                        <option value="8 years">8 years</option>
                                                        <option value="9 years">9 years</option>
                                                        <option value="10 years">10 years</option>
                                                        <option value="11 years">11 years</option>
                                                        <option value="12 years">12 years</option>
                                                        <option value="13 years">13 years</option>
                                                        <option value="14 years">14 years</option>
                                                        <option value="15 years">15 years</option>
                                                        <option value="16 years">16 years</option>
                                                        <option value="17 years">17 years</option>
                                                        <option value="18 years">18 years</option>
                                                        <option value="19 years">19 years</option>
                                                        <option value="20 years">20 years</option>
                                                        <option value="20+ years">20+ years</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <select name="ExperienceMonths" id="ExperienceMonths" required>
                                                        <option value="">Month(s)</option>
                                                        <option value="0">0</option>
                                                        <option value="1 Month">1 Month</option>
                                                        <option value="2 Month(s)">2 Month(s)</option>
                                                        <option value="3 Month(s)">3 Month(s)</option>
                                                        <option value="4 Month(s)">4 Month(s)</option>
                                                        <option value="5 Month(s)">5 Month(s)</option>
                                                        <option value="6 Month(s)">6 Month(s)</option>
                                                        <option value="7 Month(s)">7 Month(s)</option>
                                                        <option value="8 Month(s)">8 Month(s)</option>
                                                        <option value="9 Month(s)">9 Month(s)</option>
                                                        <option value="10 Month(s)">10 Month(s)</option>
                                                        <option value="11 Month(s)">11 Month(s)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" id="Designation" name="Designation" className="form-control" placeholder="Designation*" required />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" id="Expectedsalary" name="Expectedsalary" className="form-control" placeholder="Expected salary*" pattern="[0-9]*" title="Only numbers are allowed" required />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <select id="VehicleRequirement" name="VehicleRequirement" required>
                                                        <option value="">Vehicle</option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <select id="SmartPhone" name="SmartPhone" required>
                                                        <option value="">Smart Phone</option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" id="NativeLanguage" name="NativeLanguage" pattern="[a-z, A-Z]*" title="Only alphabets are allowed" className="form-control" placeholder="Native Language*" required />
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Submit JobForm" onClick={uploadToServer} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <p class="feedbackcolor" id="response"></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>

    );
}