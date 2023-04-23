import React from "react";

const FAQComponent = () => {

    return(
        <>
            <div className="container mt-3">
                <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
                <hr/>
                <div className="mb-4">
                    <h4 className="fw-bold">What is Eventory?</h4>
                    <p>Eventory is an event management website. We offer exclusive Eventory websites made by verified
                    event organizers, as well as results from Ticketmaster.</p>
                </div>
                <div className="mb-4">
                    <h4 className="fw-bold">What is the purpose of this website?</h4>
                    <p>Eventory was created as a final class project for Web Development - CS5610 at Northeastern
                    University. It was created by a group of students: Jaime Si, Xinyu Hou, Xiaojin Cai, and Jianqing Ma.
                    Feel free to learn more about us on the About page.</p>
                </div>
                <div className="mb-4">
                    <h4 className="fw-bold">Why "Eventory"?</h4>
                    <p>"Eventory" is a portmanteau word, also known as a blend word, combining the words "Event" and
                        "Inventory" -- resulting in "Eventory"!</p>
                </div>
                <div className="mb-4">
                    <h4 className="fw-bold">Where can I find the source code?</h4>
                    <p>All React and Node source code is available to view on GitHub. Find our GithHub links on our
                    About page!</p>
                </div>

                <hr/>

                <div className="mb-4">
                    <h4 className="fw-bold">Thank you for taking the time to visit our website!</h4>
                    <p>Please feel free to reach out to us on LinkedIn if you have any other questions or would
                    like to discuss this project.</p>
                </div>
            </div>
        </>
    )
};

export default FAQComponent;