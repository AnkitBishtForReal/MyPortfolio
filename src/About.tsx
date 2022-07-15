import { FC } from "react";
type AboutProps = {}
const About: FC<AboutProps> = (props) => {
    return <section id="products">

        <div >
            <div className=" p-2 border-b-8 border-gray-200 " >
                <div className="flex justify-center" >
                    <h1 className="text-4xl leading-6 font-medium text-indigo-900 ">About Me</h1>
                </div>
            </div>
            <div className="flex justify-around  ">
                <h2 className="text-sm font-medium text-gray-500">Name</h2>
                <h3  >Ankit Bisht </h3>
            </div>
            <div className="flex justify-around ">
                <h2 className="text-sm font-medium text-gray-500" >Email Adress</h2>
                <h3  >Eminentman91@gmail.com </h3>
            </div>
            <div className="flex justify-around  ">
                <h2 className="text-sm font-medium text-gray-500">Mobile No</h2>
                <h3  >8534807411 </h3>
            </div>
            <div className="flex justify-around ">
                <h2 className="text-sm font-medium text-gray-500">About</h2>
                <h3 >I have studied from code yogi batch.
                    And developed interest in coding. </h3>
            </div>



        </div>
    </section>
};

About.defaultProps = {

}

export default About;

