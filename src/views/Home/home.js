import React from 'react';
import Jumbotron from "../../components/jumbotron/jumbotron";

export default () => {
    return (
        <>
            <Jumbotron title="EightRayedSun" />
            <div className="container-fluid section">
                <section className="container introCopy">
                    <div className="row">
                        <div className="col-12">
                            <h2>Hi, my name is Edward Paulo Ganuelas and I am currently working as a Software Engineer.</h2>
                            <p>I got started with coding back at grade school with some small lessons in BASIC and tried (and failed) to learn how to make video games by learning C.<br />
                                During High School I got introduced to HTML 4,
                                had Visual Basic and COBOL lessons in my High School computer classNamees and joined the Computer Club.</p>
                                
                            <p>When I arrived in Toronto, I learned Turing in my computer classNamees and 
                                made a small RPG dungeon game.
                            </p>

                            <p>I took a Computer Programmer Analyst Course in George Brown College where I learned VB, C#, Java, PHP, MySQL and Oracle 10g.<br />I also had courses that taught Android mobile development
                                and Game Development using XNA.</p>
                            <p> I am currently a Software Engineer primarily working on an Ember.js web application. In the past I have worked as a web develepor and have worked with a 
                                variety of clients including <a href="https://www.gm.ca" target="_blank" rel="noopener noreferrer">GM Canada</a>, <a href="http://www.mastercard.ca/" target="_blank" rel="noopener noreferrer">MasterCard Canada</a>, <a href="http://visitniagaracanada.com" target="_blank" rel="noopener noreferrer">Trade Partner Niagara</a>,
                                Transcanada, OLG, and AlarmForce.
                            </p>

                            <p>I enjoy watching the Raptors play, take some photographs with my old Nikon F4, workout in the gym, watch some pro wrasslin and play some video games.</p>

                        </div>
                    </div>
                </section>
            </div>

            <div className="container-fluid skills section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <section>
                                <h2>Skills</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Front End <i className="fas fa-code" aria-hidden="true"></i></th>
                                            <th>Back End <i className="fas fa-terminal" aria-hidden="true"></i></th>
                                            <th>Operating Systems <i className="fab fa-windows" aria-hidden="true"></i></th>
                                            <th>Version Control <i className="fas fa-code-branch" aria-hidden="true"></i></th>
                                            <th>Issue Tracker <i className="fas fa-ticket-alt" aria-hidden="true"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Front End">HTML</td>
                                            <td data-label="Back End">Java
                                                <ul>
                                                    <li>Apache Struts</li>
                                                    <li>Android Development</li>
                                                </ul>
                                            </td>
                                            <td data-label="Operating Systems">Windows</td>
                                            <td data-label="Version Control">SVN</td>
                                            <td data-label="Issue Tracker">Jira</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Front End">CSS/Sass</td>
                                            <td data-label="Back End">PHP
                                                <ul>
                                                    <li>CodeIgniter</li>
                                                    <li>Laravel</li>
                                                    <li>Composer</li>
                                                </ul>
                                            </td>
                                            <td data-label="Operating Systems">Linux (Ubuntu)</td>
                                            <td data-label="Version Control">Git
                                                <ul>
                                                    <li>Github</li>
                                                    <li>Stash</li>
                                                    <li>Bitbucket</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Front End">Javascript</td>
                                            <td data-label="Back End">.NET
                                                <ul>
                                                    <li>ASP.NET</li>
                                                    <li>Sitefinity</li>
                                                </ul>
                                            </td>
                                            <td data-label="Operating Systems">Mac OSX</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Front End">Bootstrap</td>
                                            <td data-label="Back End">Databases
                                                <ul>
                                                    <li>MySQL</li>
                                                    <li>MariaDB</li>
                                                    <li>T-SQL</li>
                                                    <li>Oracle</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Front End">Accessibility</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid section">
                <div className="container experience">
                    <div className="row">
                        <div className="col-12">
                            <h2>Experience</h2>
                            <h3><a href="https://uncharted.software/" target="_blank" rel="noopener noreferrer">Uncharted Software</a><br />
                            March 2019 - Present</h3>
                            <p>Role: Software Engineer</p>
                            <p>Primarily working on an Ember.js web application.</p>
                            <h3><a href="http://mccann.ca" target="_blank" rel="noopener noreferrer">McCann Canada</a>: <br />Programmer 2013 - March 2019 <br />Programming Intern 2012-2013</h3>
                            <p>Role: Full Stack Developer.</p>
                            <p>I have worked on various technologies such as Java, PHP, and .NET</p>
                            <h3>Clients</h3>
                            <p>Here are some of the clients that I have worked with:</p>
                            <ul>
                                <li>GM Canada</li>
                                <li>MasterCard</li>
                                <li>Trade Partner Niagara</li>
                                <li>Transcanada</li>
                                <li>OLG</li>
                                <li>AlarmForce</li>
                                <li>Adapt Pharma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
