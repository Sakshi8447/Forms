import React from 'react';
import { Label, TextInput} from 'flowbite-react';

const WorkInformation = () => {
  return (
 <div> 
    <div className='flex mx-auto flex-col md:flex-row md:items-center '>
 {/* left side */}
 <div className='mt-20 ml-5 flex-1 w[50%]'>
 <h4 className="text-md font-medium"> Location </h4>
 <div className="mb-2 block mt-5">
          <Label htmlFor="Work Address" value="Work Address" />
          </div>
          <div className="mb-2 block mt-5">
          <Label htmlFor="Work Location" value="Work Location" />
          </div>
          

           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> APPROVERS</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Expense" value="Expense" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Time-Off" value="Time-Off" />
           </div>
          
           </div>

           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> SCHEDULE</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Working Hours" value="Working Hours" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Time Zone" value="Time Zone" />
           </div>
           
           </div>

           <div className="mb-2 block mt-20">
           <h4 className="text-md font-medium"> PLANNING</h4>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Roles" value="Roles" />
           </div>
           <div className="mb-2 block mt-5">
         <Label htmlFor="Default-Role" value="Default-Role" />
           </div>
           
           </div>




 </div>

 
 </div>
 </div>
      )
}

export default WorkInformation;
