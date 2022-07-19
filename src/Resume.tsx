import { FC } from "react";
type ResumeProps = {}
const Resume: FC<ResumeProps> = (props) => {
    return <div>
        <div>
        <section id="resume">
          
        <div className=" p-2 border-b-8 border-gray-200 " >
                <div className="flex justify-around" >
                    <h1 className="text-4xl leading-6 font-medium text-indigo-900 ">Resume</h1>
                </div>
                
                </div>


                <div >
                    
          
         
        
                <dt>
                  <div className="px-4 py-6 flex grid grid-cols-2 gap">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
             
              <dd  >Ankit Bisht </dd>
              </div>
       
    
         
          <div className="flex  px-4 py-6 grid grid-cols-2 gap">
              <dt className="text-sm font-medium text-gray-500">Education</dt>
              
              <dd   >Civil Engineering Diploma From GP Lohaghat </dd>
          </div>
          <div className="flex  px-4 py-6 grid grid-cols-2 gap ">
              <dt className="text-sm font-medium text-gray-500">Intermediate</dt>
          
              <dd>Oakland Public School Lohaghat </dd>
          </div>
          <div className="flex  px-4 py-6 grid grid-cols-2 gap ">
              <dt className="text-sm font-medium text-gray-500">Certiificates</dt>
           
              <dd >Code Yogi 6 months Completion Certificate</dd>
          </div>
          <div className="flex  px-4 py-6 grid grid-cols-2 gap ">
              <dt className="text-sm font-medium text-gray-500">Skills</dt>
              
              <dd >Tailwind Css,JavaScript,React,Redux,Redux Saga,TypeScript</dd>
          </div>
</dt>


      </div>

                </section>
                </div>

                </div>
               
             

};

Resume.defaultProps={
    
}

export default Resume;
