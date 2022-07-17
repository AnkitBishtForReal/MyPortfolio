import { FC } from "react";
type AboutProps = {}
const About: FC<AboutProps> = (props) => {
    return <section id="about">

        <div >
          
            <div className=" p-2 border-b-8 border-gray-200 " >
                <div className="flex justify-around" >
                    <h1 className="text-4xl leading-6 font-medium text-indigo-900 ">About Me</h1>
                </div>
             
            </div>
          
                  <dl>
                    <div className="px-4 py-6 flex">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <span className="px-32"></span>
                <dd  >Ankit Bisht </dd>
                </div>
         
      
            <div className="px-4 py-6 flex ">
                <dt className="text-sm font-medium text-gray-500" >Email Adress</dt>
                <span className="px-28"></span>
                <dd  >Eminentman91@gmail.com </dd>
                <a href="mailto:eminentman91@gmail.com">
                    <img  className="animate-bounce" alt="Send Email" src="https://cdn.discordapp.com/attachments/944189291427430421/987949772642066473/email-removebg-preview.png" width="50" height="50"/></a>
            </div>
            <div className="flex  px-4 py-6">
                <dt className="text-sm font-medium text-gray-500">Mobile No</dt>
                <span className="px-32"></span>
                <dd   >8534807411 </dd>
            </div>
            <div className="flex  px-4 py-6 ">
                <h2 className="text-sm font-medium text-gray-500">About</h2>
                <span className="px-32"></span>
                <h3 >I have studied from code yogi batch.
                    And developed interest in coding. </h3>
            </div>
</dl>


        </div>
    </section>
};

About.defaultProps = {

}

export default About;

