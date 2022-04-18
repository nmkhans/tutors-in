import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="Blog">
            <div className="inner__blog container">
                <div className="blog__content">
                    <div className="single__blog">
                        <div className="blog__title">
                            <h2>What are The Difference between authorization and authentication</h2>
                        </div>
                        <div className="blog__description">
                            <p>Authentication is the process of checking who someone is. Authenticaion is done before authoraization. In authentication process, an users identity is verified for providing the access to system. on the other hand Authorization gives those users permission to access a resource.in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.</p>
                        </div>
                    </div>
                    <div className="single__blog">
                        <div className="blog__title">
                            <h2>Why Firebase? Alternative of Firebase.</h2>
                        </div>
                        <div className="blog__description">
                            <p>Firebase is a platform for creating web applications and more. Firebase is developed by google to make our development life easier. it provides us with authentication, realtime databse, storge, hosting and many more. There anr few Alternative avilable of firebase. They are Sentry.io, Parse, Black4app, aws etc</p>
                        </div>
                    </div>
                    <div className="single__blog">
                        <div className="blog__title">
                            <h2>What other services does firebase provide other than authentication?</h2>
                        </div>
                        <div className="blog__description">
                            <p>Firebase is a platform to help us build web app and mobile apps. Its build by google. Firebase provide us soo many features for free. The authnticaiton is the most usefull among them. There are many more features that firebase provides us. Realtime Databse, Fire storage, Hosting, Authntication and many more.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;