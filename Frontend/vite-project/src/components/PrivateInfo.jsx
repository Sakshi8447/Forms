import React from 'react';
import { Label, TextInput} from 'flowbite-react';

const PrivateInformation= () => {
  return (
 <div> 
    <div className='flex mx-auto flex-col md:flex-row md:items-center '>
 {/* left side */}
 <div className='mt-20 ml-5 flex-1 w[50%]'>
 <h4 className="text-md font-medium"> PRIVATE CONTACT</h4>
 <div className="mb-2 block mt-5">
          <Label htmlFor="email1" value="Address" />
          </div>
          <div className="mb-2 block mt-5">
          <Label htmlFor="email" value="Email" />
          </div>
          <div className="mb-2 block mt-5">
          <Label htmlFor="phone" value="Phone" />
          </div>
          <div className="mb-2 block mt-5">
         <Label htmlFor="Language" value="Language" />
          </div>
          <div className="mb-2 block mt-5">
          <Label htmlFor="HomeWorkDistance" value="Home-Work Distance" />
          </div>
          <div className="mb-2 block mt-5">
         <Label htmlFor="PrivateCarPlate" value="Private Car Plate" />
           </div>


           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> EDUCATION</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="CertificateLevel" value="Certificate Level" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="FieldOfStudy" value="Field Of Study" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="School" value="School" />
           </div>
          
           </div>

           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> WORK PERMIT</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Visa No" value="Visa No" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Work Permit No" value="Work Permit No" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Visa Expire Date" value="Visa Expire Date" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Work Permit Expiration Date" value="Work Permit Expiration Date" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Work Permit" value="Work Permit" />
           </div>
           
           </div>



 </div>

 {/* Right side */}
 <div className=' flex-1 w-[50%]'>
 <h4 className="text-md font-medium"> FAMILY STATUS</h4>
 <div className="mb-2 block mt-5">
         <Label htmlFor="Marital Status" value="Marital Status" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Number of Dependent Children" value="Number of Dependent Children" />
           </div>
           

           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> EMERGENCY</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Contact Name" value="Contact Name" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Contact Form" value="Contact Form" />
           </div>
           </div>


           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> CITIZENSHIP</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Nationality (Country)" value="Nationality (Country)" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Identification No" value="Identification No" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Passport No" value="Passport No" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Gender" value="Gender" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Date of Birth" value="Date of Birth" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Place of Birth" value="Place of Birth" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Country of Birth" value="Country of Birth" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Non-resident " value="Non-resident" />
           </div>
           </div>

          
          
           
 
 </div>
 </div>
 </div>
      )
}

export default PrivateInformation;
