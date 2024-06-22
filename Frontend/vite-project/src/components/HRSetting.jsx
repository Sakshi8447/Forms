import React from 'react';
import { Label, TextInput} from 'flowbite-react';

const HRSetting= () => {
  return (
 <div> 
    <div className='flex mx-auto flex-col md:flex-row md:items-center '>
 {/* left side */}
 <div className='mt-20 ml-5 flex-1 w[50%]'>
 <h4 className="text-md font-medium"> STATUS</h4>
 <div className="mb-2 block mt-5">
          <Label htmlFor="Employee Type" value="Employee Type" />
          </div>
          <div className="mb-2 block mt-5">
          <Label htmlFor="Related User" value="Related User" />
          </div>
          

           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> PAYROLL</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Registration Number of the Employee" value="Registration Number of the Employee" />
           </div>
           
           </div>

           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> APPLICATION SETTINGS</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Visa No" value="Visa No" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Hourly Cost" value="Hourly Cost" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Fleet Mobility Card" value="Fleet Mobility Card" />
           </div>
           
           </div>



 </div>

 {/* Right side */}
 <div className=' flex-1 w-[50%]'>
 <h4 className="text-md font-medium"> ATTANDANCE/ POINT OF SALE</h4>
 <div className="mb-2 block mt-5">
         <Label htmlFor="PIN Code" value="PIN Code" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Badge ID" value="Badge ID" />
           </div>
           

           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> PayRoll</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Job Position" value="Job Position" />
           </div>
           </div>


           
           
 
 </div>
 </div>
 </div>
      )
}

export default HRSetting;
