import { Label, FileInput, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import Select from 'react-select';

import { useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {

    const navigate = useNavigate()

    const [error, setError] = useState("");
    const [avatar, setAvatar] = useState();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
   // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [DOB, setDOB] = useState("");
    const [Language, setLanguage] = useState("");
    const [Address, setAddress] = useState("");
    const [HomeWorkDistance, setHomeWorkDistance] = useState("");
    const [PrivateCarPlate, setPrivateCarPlate] = useState("");
    const [MaritalStatus, setMaritalStatus] = useState("");
    const [NumberofDependentChildren, setNumberofDependentChildren] = useState("");
    const [CertificateLevel, setCertificateLevel] = useState("");
    const [FieldofStudy, setFieldofStudy] = useState("");   
     const [School, setSchool] = useState("");
     const [ContactName, setContactName] = useState("");
    // const [ , set] = useState("");
     const [Nationality, setNationality] = useState("");
     const [IdentificationNo, setIdentificationNo] = useState("");
     const [PassportNo, setPassportNo] = useState("");
     const [Gender, setGender] = useState("");
     const [PlaceOfBirth, setPlaceOfBirth] = useState("");
     const [CountryOfBirth, setCountryOfBirth] = useState("");
     const [NonResident, setNonResident] = useState("");

    const [VisaNo, setVisaNo] = useState("");
    const [WorkPermitNo, setWorkPermitNo] = useState("");
    const [VisaExpireDate, setVisaExpireDate] = useState("");
    const [WorkPermitExpirationDate, setWorkPermitExpirationDate] = useState("");
    const [WorkPermit, setWorkPermit] = useState("");
    const [EmployeeType, setEmployeeType] = useState("");
    const [RelatedUser, setRelatedUser] = useState("");
    const [PinCode, setPinCode] = useState("");
    const [BadgeID, setBadgeID] = useState("");
    const [JobPosition, setJobPosition] = useState("");
    const [RegistrationNumberOfTheEmployee, setRegistrationNumberOfTheEmployee] = useState("");
    const [FleetMobilityCard, setFleetMobilityCard] = useState("");
    const [WorkLocation, setWorkLocation] = useState("");
    const [WorkAddress, setWorkAddress] = useState("");
    const [Expense, setExpense] = useState("");
    const [TimeOff, setTimeOff] = useState("");
    const [WorkingHours, setWorkingHours] = useState("");
    const [Timezone, setTimezone] = useState("");
    const [Roles, setRoles] = useState("");
    const [DefaultRole, setDefaultRole] = useState("");
    const [WorkMobile, setWorkMobile] = useState("");
    const [WorkPhone, setWorkPhone] = useState("");
    const [WorkEmail, setWorkEmail] = useState("");
    const [Department, setDepartment] = useState("");
    const [Manager, setManager] = useState("");
    const [Coach, setCoach] = useState("");
     const [HourlyCost, setHourlyCost] = useState("");
    // const [DOB, setDOB] = useState("");
    // const [DOB, setDOB] = useState("");

  

    // const languageOptions = [
    //     { value: 'Female', label: 'Female' },
    //     { value: 'Male', label: 'Male' },
    //     { value: 'Other', label: 'Other' }
    //   ]
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call your API using Axios here, with the form data
        try {
            if (password !== confirmPassword) {
                setError('Passwords do not match')
                console.error('Passwords do not match');
                return;
            }

            setError('Loading.........')
            const formData = new FormData();
            formData.append('avatar', avatar);
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('DOB', DOB);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('phonenumber', phoneNumber);         
           formData.append('Address', Address);
            formData.append('Language', Language);
            formData.append('HomeWorkDistance', HomeWorkDistance);
            formData.append('PrivateCarPlate', PrivateCarPlate);
            formData.append('MaritalStatus', MaritalStatus);
            formData.append('NumberofDependentChildren', NumberofDependentChildren);
            formData.append('CertificateLevel', CertificateLevel);
            formData.append('FieldofStudy', FieldofStudy);
            formData.append('School', School);
            formData.append('ContactName', ContactName);
            formData.append('Nationality', Nationality);
            formData.append('IdentificationNo', IdentificationNo);
            formData.append('PassportNo', PassportNo);
            formData.append('Gender', Gender);
            formData.append('PlaceOfBirth', PlaceOfBirth);
            formData.append('CountryOfBirth', CountryOfBirth);
            formData.append('NonResident', NonResident);
            formData.append('VisaNo', VisaNo);
            formData.append('WorkPermitNo', WorkPermitNo);
            formData.append('VisaExpireDate', VisaExpireDate);
            formData.append('WorkPermitExpirationDate', WorkPermitExpirationDate);
            formData.append('WorkPermit', WorkPermit);
            formData.append('EmployeeType', EmployeeType);      
            formData.append('RelatedUser', RelatedUser);
            formData.append('PinCode', PinCode);

            formData.append('BadgeID', BadgeID);
            formData.append('JobPosition', JobPosition);
            formData.append('RegistrationNumberOfTheEmployee', RegistrationNumberOfTheEmployee);
            formData.append('HourlyCost', HourlyCost);
            formData.append('FleetMobilityCard', FleetMobilityCard);
            formData.append('WorkAddress', WorkAddress);
            formData.append('WorkLocation', WorkLocation);
            formData.append('Expense', Expense);
            formData.append('TimeOff', TimeOff);


            formData.append('WorkingHours', WorkingHours);
            formData.append('Timezone', Timezone);
            formData.append('Roles', Roles);
            formData.append('DefaultRole', DefaultRole);
            formData.append('WorkMobile', WorkMobile);
            formData.append('WorkPhone', WorkPhone);
            formData.append('WorkEmail', WorkEmail);
            formData.append('Department', Department);
            formData.append('Manager', Manager);
            formData.append('Coach', Coach);


            //formData.append('dob', DateOfBirth);
            //formData.append('companyname', companyName);
           // formData.append('Language', Language)

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };

            const response = await axios.post(`http://localhost:3000/api/v1/user/register`, formData, config);
            console.log('API Response:', response.data);
            setError(response.data.messsage + "Loading.....")
            
          
            // navigate("/login")
            // Add any additional handling after API call
        } catch (error) {
            setError(error.response.data.message)
            console.error('API Error:', error.response.data.message);
            // Handle API error
        }
    };



    return (
        <>
            <div className="w-[100%] flex flex-col items-center py-12">
                <h1 className="text-3xl font-bold mb-4">Register</h1>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form className="w-[100%] flex flex-col items-center py-12" onSubmit={handleSubmit}>
                    {/* upload file - avatar */}
                    <div className="mb-4 w-3/5">
                        <div>
                            <Label htmlFor="avatar" value="Upload Your Avatar" />
                        </div>
                        <FileInput id="avatar" sizing="lg" onChange={(e) => setAvatar(e.target.files[0])} />
                    </div>

                    {/* First name*/}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="First name" value="Your First name" />
                        </div>
                        <TextInput id="First name" type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    </div>


                    {/* Last name*/}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Last name" value="Your Last name" />
                        </div>
                        <TextInput id="Last name" type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>


                    {/* Language */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Language" value="Language" />
                        </div>
                        <TextInput id="Language" type="Language" placeholder="" value={Language} onChange={(e) => setLanguage(e.target.value)} />
                    </div>

                    {/* Email */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your Email" />
                        </div>
                        <TextInput id="email" type="email" placeholder="abc@abc.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    {/* Password */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your Password" />
                        </div>
                        <TextInput id="password" type="password" placeholder="Must Include (!@#$%^&*())" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {/* Confirm Password */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="confirmPassword" value="Your Confirm Password" />
                        </div>
                        <TextInput id="confirmPassword" type="password" placeholder="Must Be same as upper" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    {/* Phone no. */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="phoneNumber" value="Your Phone Number" />
                        </div>
                        <TextInput id="phoneNumber" type="phoneNumber" placeholder="+91 5416625431" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>

                    {/* DOB */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="DOB" value="Your Date of Birth" />
                        </div>
                        <TextInput id="DOB" type="date" placeholder="03/09/2002" required value={DOB} onChange={(e) => setDOB(e.target.value)} />
                    </div>

{/*                     
                     {/* Address */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Address" value="Your Address" />
                        </div>
                        <TextInput id="Address" type="address" placeholder="Address" required value={Address} onChange={(e) => setAddress(e.target.value)} />
                    </div>


                    {/* HomworkDistance */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="HomeworkDistance" value="Home work Distance" />
                        </div>
                        <TextInput id="HomeworkDistance" type="HomeworkDistance" placeholder="" required value={HomeWorkDistance} onChange={(e) => setHomeWorkDistance(e.target.value)} />
                    </div>



                    {/* PrivateCarPlate */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="PrivateCarPlate" value="Private Car Plate" />
                        </div>
                        <TextInput id="PrivateCarPlate" type="PrivateCarPlate" placeholder="Private Car Plate" required value={PrivateCarPlate} onChange={(e) => setPrivateCarPlate(e.target.value)} />
                    </div>



                    {/* MaritalStatus */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="MaritalStatus" value="Marital Status" />
                        </div>
                        <TextInput id="MaritalStatus" type="" placeholder="" required value={MaritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} />
                    </div>




                    {/* NumberofDependentChildren */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="NumberofDependentChildren" value="Number of Dependent Children" />
                        </div>
                        <TextInput id="NumberofDependentChildren" type="NumberofDependentChildren" placeholder="" required value={NumberofDependentChildren} onChange={(e) => setNumberofDependentChildren(e.target.value)} />
                    </div>




                    {/* CertificateLevel*/}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="CertificateLevel" value="Certificate Level" />
                        </div>
                        <TextInput id="CertificateLevel" type="CertificateLevel" placeholder="" required value={CertificateLevel} onChange={(e) => setCertificateLevel(e.target.value)} />
                    </div>




                    {/*  FieldofStudy */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor=" FieldofStudy" value=" Field of Study" />
                        </div>
                        <TextInput id=" FieldofStudy" type=" FieldofStudy" placeholder="" required value={FieldofStudy} onChange={(e) => setFieldofStudy(e.target.value)} />
                    </div>





                    {/* School */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="School" value="School" />
                        </div>
                        <TextInput id="School" type="School" placeholder="" required value={School} onChange={(e) => setSchool(e.target.value)} />
                    </div>




                    {/* ContactName */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="ContactName" value="Contact Name" />
                        </div>
                        <TextInput id="ContactName" type="ContactName" placeholder="" required value={ContactName} onChange={(e) => setContactName(e.target.value)} />
                    </div>



                    {/* Nationality*/}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Nationality" value="Nationality" />
                        </div>
                        <TextInput id="Nationality" type="Nationality" placeholder="" required value={Nationality} onChange={(e) => setNationality(e.target.value)} />
                    </div>





                    {/* IdentificationNo */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="IdentificationNo" value="Identification No" />
                        </div>
                        <TextInput id="IdentificationNo" type="IdentificationNo" placeholder="" required value={IdentificationNo} onChange={(e) => setIdentificationNo(e.target.value)} />
                    </div>


                    {/* PassportNo */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="PassportNo" value="Passport No" />
                        </div>
                        <TextInput id="PassportNo" type="PassportNo" placeholder="" required value={PassportNo} onChange={(e) => setPassportNo(e.target.value)} />
                    </div>


                    {/* Gender */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Gender" value="Gender" />
                        </div>
                        <TextInput id="Gender" type="Gender" placeholder="" required value={Gender} onChange={(e) => setGender(e.target.value)} />
                    </div>


                    {/* PlaceOfBirth */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="PlaceOfBirth" value="Place Of Birth" />
                        </div>
                        <TextInput id="PlaceOfBirth" type="PlaceOfBirth" placeholder="" required value={PlaceOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
                    </div>



                    {/* CountryOfBirth */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="CountryOfBirth" value="Country Of Birth" />
                        </div>
                        <TextInput id="CountryOfBirth" type="CountryOfBirth" placeholder="" required value={CountryOfBirth} onChange={(e) => setCountryOfBirth(e.target.value)} />
                    </div>



                    {/* NonResident */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="NonResident" value="Non-Resident" />
                        </div>
                        <TextInput id="NonResident" type="NonResident" placeholder="" required value={NonResident} onChange={(e) => setNonResident(e.target.value)} />
                    </div>





                    {/* VisaNo */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="VisaNo" value="Visa No" />
                        </div>
                        <TextInput id="VisaNo" type="VisaNo" placeholder="" required value={VisaNo} onChange={(e) => setVisaNo(e.target.value)} />
                    </div>


                    {/* WorkPermitNo */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="WorkPermitNo" value="Work Permit No" />
                        </div>
                        <TextInput id="WorkPermitNo" type="WorkPermitNo" placeholder="" required value={WorkPermitNo} onChange={(e) => setWorkPermitNo(e.target.value)} />
                    </div>


                    {/* VisaExpireDate */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="VisaExpireDate" value="Visa Expire Date" />
                        </div>
                        <TextInput id="VisaExpireDate" type="VisaExpireDate" placeholder="" required value={VisaExpireDate} onChange={(e) => setVisaExpireDate(e.target.value)} />
                    </div>


                    {/* WorkPermitExpirationDate */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="WorkPermitExpirationDate" value="Work Permit Expiration Date" />
                        </div>
                        <TextInput id="WorkPermitExpirationDate" type="WorkPermitExpirationDate" placeholder="" required value={WorkPermitExpirationDate} onChange={(e) => setWorkPermitExpirationDate(e.target.value)} />
                    </div>



                    {/* WorkPermit */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="WorkPermit" value="Work Permit" />
                        </div>
                        <TextInput id="WorkPermit" type="WorkPermit" placeholder="" required value={WorkPermit} onChange={(e) => setWorkPermit(e.target.value)} />
                    </div>


                    {/* EmployeeType */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="EmployeeType" value="Employee Type" />
                        </div>
                        <TextInput id="EmployeeType" type="EmployeeType" placeholder="" required value={EmployeeType} onChange={(e) => setEmployeeType(e.target.value)} />
                    </div>


                    {/* RelatedUser */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="RelatedUser" value="Related User" />
                        </div>
                        <TextInput id="RelatedUser" type="RelatedUser" placeholder="" required value={RelatedUser} onChange={(e) => setRelatedUser(e.target.value)} />
                    </div>


 {/*PinCode */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="PinCode" value="PinCode" />
                        </div>
                        <TextInput id="PinCode" type="PinCode" placeholder="" required value={PinCode} onChange={(e) => setPinCode(e.target.value)} />
                    </div>




 {/* BadgeID */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="BadgeID" value="Badge ID" />
                        </div>
                        <TextInput id="BadgeID" type="BadgeID" placeholder="" required value={BadgeID} onChange={(e) => setBadgeID(e.target.value)} />
                    </div>




 {/* JobPosition*/}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="JobPosition" value="Job Position" />
                        </div>
                        <TextInput id="JobPosition" type="JobPosition" placeholder="" required value={JobPosition} onChange={(e) => setJobPosition(e.target.value)} />
                    </div>



 {/* RegistrationNumberOfTheEmployee */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="RegistrationNumberOfTheEmployee" value="Registration Number Of The Employee" />
                        </div>
                        <TextInput id="RegistrationNumberOfTheEmployee" type="RegistrationNumberOfTheEmployee" placeholder="" required value={RegistrationNumberOfTheEmployee} onChange={(e) => setRegistrationNumberOfTheEmployee(e.target.value)} />
                    </div>




 {/* HourlyCost */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="HourlyCost" value="Hourly Cost" />
                        </div>
                        <TextInput id="HourlyCost" type="HourlyCost" placeholder="" required value={HourlyCost} onChange={(e) => setHourlyCost(e.target.value)} />
                    </div>





 {/* FleetMobilityCard*/}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="FleetMobilityCard" value="Fleet Mobility Card" />
                        </div>
                        <TextInput id="FleetMobilityCard" type="FleetMobilityCard" placeholder="" required value={FleetMobilityCard} onChange={(e) => setFleetMobilityCard(e.target.value)} />
                    </div>





 {/* WorkAddress */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="WorkAddress" value="WorkAddress" />
                        </div>
                        <TextInput id="WorkAddress" type="WorkAddress" placeholder="" required value={WorkAddress} onChange={(e) => setWorkAddress(e.target.value)} />
                    </div>




 {/*  */}
 {/* WorkLocation */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="WorkLocation" value="" />Work Location
                        </div>
                        <TextInput id="WorkLocation" type="WorkLocation" placeholder="" required value={WorkLocation} onChange={(e) => setWorkLocation(e.target.value)} />
                    </div>


                     {/* Expense */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Expense" value="Expense" />
                        </div>
                        <TextInput id="Expense" type="Expense" placeholder="" required value={Expense} onChange={(e) => setExpense(e.target.value)} />
                    </div>




 {/* TimeOff */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="TimeOff" value="Time Off" />
                        </div>
                        <TextInput id="TimeOff" type="TimeOff" placeholder="" required value={TimeOff} onChange={(e) => setTimeOff(e.target.value)} />
                    </div>






 {/* WorkingHours */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="WorkingHours" value="WorkingHours" />
                        </div>
                        <TextInput id="WorkingHours" type="WorkingHours" placeholder="" required value={WorkingHours} onChange={(e) => setWorkingHours(e.target.value)} />
                    </div>







 {/* Timezone */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Timezone" value="Timezone" />
                        </div>
                        <TextInput id="Timezone" type="Timezone" placeholder="" required value={Timezone} onChange={(e) => setTimezone(e.target.value)} />
                    </div>







 {/* Roles */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Roles" value="Roles" />
                        </div>
                        <TextInput id="Roles" type="Roles" placeholder="" required value={Roles} onChange={(e) => setRoles(e.target.value)} />
                    </div>






 {/* DefaultRole*/}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="DefaultRole" value="Default Role" />
                        </div>
                        <TextInput id="DefaultRole" type="DefaultRole" placeholder="" required value={DefaultRole} onChange={(e) => setDefaultRole(e.target.value)} />
                    </div>




 {/*WorkMobile */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="WorkMobile" value="Work Mobile" />
                        </div>
                        <TextInput id="WorkMobile" type="WorkMobile" placeholder="" required value={WorkMobile} onChange={(e) => setWorkMobile(e.target.value)} />
                    </div>





 {/* WorkPhone */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="WorkPhone" value="Work Phone" />
                        </div>
                        <TextInput id="WorkPhone" type="WorkPhone" placeholder="" required value={WorkPhone} onChange={(e) => setWorkPhone(e.target.value)} />
                    </div>





 {/* WorkEmail */}
 <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="WorkEmail" value="WorkEmail" />
                        </div>
                        <TextInput id="WorkEmail" type="WorkEmail" placeholder="" required value={WorkEmail} onChange={(e) => setWorkEmail(e.target.value)} />
                    </div>


{/* Department */}
<div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Department" value="Department" />
                        </div>
                        <TextInput id="Department" type="Department" placeholder="" required value={Department} onChange={(e) => setDepartment(e.target.value)} />
                    </div>




{/* Manager */}
<div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Manager" value="Manager" />
                        </div>
                        <TextInput id="Manager" type="Manager" placeholder="" required value={Manager} onChange={(e) => setManager(e.target.value)} />
                    </div>





{/* Coach */}
<div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Coach" value="Coach" />
                        </div>
                        <TextInput id="Coach" type="Coach" placeholder="" required value={Coach} onChange={(e) => setCoach(e.target.value)} />
                    </div>



                    {/* Submit Button */}
                    <div className="w-3/5">
                        <Button gradientDuoTone="purpleToPink" type="submit"  >
                            Register
                        </Button>
                    </div>

                </form>
            </div>
            

        </>
    );
};

export { Register };