
import React from 'react';
import Jumbotron from '../components/jumbotron';
// images
import icon_0 from '../images/icon_0.png';
import icon_1 from '../images/icon_1.png';
import icon_2 from '../images/icon_2.png';
import postits from '../images/new/postits.png';
import crossroad from '../images/new/crossroad.png';

const Home = (props) => {
    return (
        <div className="parent_container">
            <Jumbotron slogan={props.slogan} />
            <section className="parent_container shadow background">
                    <div className="specialties secondary_section">
                        <div>
                        <div data-aos="fade-in"></div>
                            <h2 data-aos="fade-up">Sociolinguistics Researcher</h2>
                            <span className="underline">
                                <div></div>
                                <div></div>
                            </span>
                            <p className="center">
                                I am a researcher in sociolinguistics studying the correlation between the construction of 
                                identity and the use of language. I've had the priviledge of teaching at various different institutes, 
                                including the University of Hong Kong, University of California, Los Angeles, and Pepperdine, 
                                for nearly 8 years. 
                                {/* I am also a Visiting Instructor of Chinese language and culture at Pepperdine University 
                                teaching Asian religions and traditions, Chinese Literature as well as Mandarin Chinese at all levels.
                                I have been working as a Cantonese dialect coach in Los Angeles for CBS television broadcasting 
                                company and Amazon.com. */}
                            </p>
                        </div>
                        <div className='three_icons'>
                            <img className="icon shadow" src={icon_2} />                           
                            <img className="icon shadow" src={icon_1} />
                            <img className="icon shadow" src={icon_0} />
                       </div>
                    </div>
            </section>

            <section>
                <div className="parent_container shadow">
                    <div className="banner">
                        <div className="screen">
                            <div className="specialties secondary_section">
                                <h2 data-aos="fade-up">Subjects Taught</h2>
                                <span className="underline white">
                                    <div></div>
                                    <div></div>
                                </span>
                                <p className="center">
                                    I've tought courses on: 
                                    such as sociolinguistics, pragmatics, syntax, as well as phonetics and phonology, Hong Kong 
                                    literature and cinema, Modern Chinese literature, introduction to Chinese and Sinophone cultures, 
                                    language and gender in Greater China, Culture and Society in Greater China, Asian languages and 
                                    cultures, Cantonese and Mandarin Chinese at all levels. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="parent_container shadow background">
                <article className="text_content">
                    <section className='work_section'>
                        <h2 data-aos="fade-up">Current work & interests</h2>
                        <span className="underline">
                            <div></div>
                            <div></div>
                        </span>
                        {/* <div className="postits">
                            <img src={postits} alt="" />
                        </div> */}
                        <p>
                        I am working as a Visiting Instructor at Pepperdine University teaching Asian religions and traditions, 
                        Chinese Literature as well as Mandarin Chinese at all levels. I am also serving as a Division representative of 
                        Teaching, Technology and Learning Committee as well as a Faculty Advisor for the Chinese Drama Club at Pepperdine 
                        University. Prior to joining Pepperdine, I was working as an instructor and teaching assistant at UCLA teaching 
                        Languages and Cultures in Asia, Chinese linguistics and society, Cantonese and Mandarin Chinese. I was awarded 
                        the Mellon-EPIC fellowship to participate in a quarter-long training workshop at UCLA to improve my skills in 
                        course design and assessment techniques in 2018.
                        <br /><br/>
                        Apart from teaching, my current research interests lie on various types of language variation 
                        with the special focus of identity construction across different sociocultural settings in Hong Kong. 
                        My current doctoral research elucidates how politicians in Hong Kong employ various linguistic strategies a
                        nd gestures in political debates to project their political stances. Besides this, another research project 
                        of mine also examines the use of a gender labelling, ‘Leftover Woman’, in the Hong Kong media and applies 
                        quantitative methodology to analyse what sociocultural impacts it might have to this group of women by the 
                        extensive use of this gender labelling in media discourse.
                        </p>
                    </section>
                </article>
                
            </section>
            

        </div>
    )
}

export default Home;