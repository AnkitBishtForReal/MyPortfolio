import { FC } from "react";
type HomeProps = {}
const Home: FC<HomeProps> = (props) => {
    return <section id="about">
        <div className="flex justify-between bg-hero-pattern">
            <div>
                <h1 className=" text-5xl text-purple-700 md:text-7xl font-bold">
                    HI! I AM ANKIT BISHT. FRONT-END DEVELOPER.</h1>
                <h2 className="py-3 text-5xl  md:text-7xl font-bold">I like coding. </h2>
            </div>
            <div>
                <img className="rounded-full object-cover border-8 border-gray-400  w-3/4   " src="https://media.discordapp.net/attachments/966570615236595712/982989698773450822/IMG-20220103-WA00263.jpg?width=320&height=427" />
            </div>
        </div>
    </section>
};

Home.defaultProps = {

}

export default Home; 