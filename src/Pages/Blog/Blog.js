import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='mb-5'>
                <h3 className='text-3xl'>What is CORS?</h3>
                <p>
                    Cross-origin resource sharing (CORS) is a mechanism that allows
                    restricted resources on a web page to be requested from another
                    domain outside the domain from which the first resource was served.
                    A web page may freely embed cross-origin images, stylesheets, scripts,
                    iframes, and videos. Certain "cross-domain" requests, notably Ajax
                    requests, are forbidden by default by the same-origin security
                    policy. CORS defines a way in which a browser and server can
                    interact to determine whether it is safe to allow the cross-origin
                    request. It allows for more freedom and functionality than purely
                    same-origin requests, but is more secure than simply allowing all
                    cross-origin requests.
                </p>
            </div>
            <div className='mb-5'>
                <h3 className='text-3xl'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                    Most apps need to know the identity of a user. Knowing a user's
                    identity allows an app to securely save user data in the cloud and
                    provide the same personalized experience across all of the user's
                    devices.
                    Firebase Authentication provides backend services, easy-to-use SDKs,
                    and ready-made UI libraries to authenticate users to your app.
                    It supports authentication using passwords, phone numbers, popular
                    federated identity providers like Google, Facebook and Twitter,
                    and more.
                    Firebase Authentication integrates tightly with other Firebase
                    services, and it leverages industry standards like OAuth 2.0 and
                    OpenID Connect, so it can be easily integrated with your custom
                    backend.
                    When you upgrade to Firebase Authentication with Identity Platform,
                    you unlock additional features, such as multi-factor authentication,
                    blocking functions, user activity and audit logging, SAML and generic
                    OpenID Connect support, multi-tenancy, and enterprise-level support.
                </p>
            </div>
            <div className='mb-5'>
                <h3 className='text-3xl'>How does the private route work?</h3>
                <p>
                    The react private route component renders child components
                    (children) if the user is logged in. If not logged in the user
                    is redirected to the /login page with the return url passed in
                    the location state property.
                    The current logged in user (authUser) is retrieved from Redux
                    state with a call to the useSelector() hook. Redux is used in
                    this example however it is not required to implement a Private
                    Route component in React Router 6. You could use a different state
                    management library or any approach you prefer to get the logged
                    in status of the user.
                </p>
            </div>
            <div className='mb-5'>
                <h3 className='text-3xl'>What is Node? How does Node work?</h3>
                <p>
                    Node.js is a lean, fast, cross-platform JavaScript
                    runtime environment that is useful for both servers and
                    desktop applications.
                    Scalability, latency, and throughput are key performance indicators 
                    for web servers. Keeping the latency low and the throughput high 
                    while scaling up and out is not easy. Node.js is a JavaScript runtime
                    environment that achieves low latency and high throughput by taking a 
                    “non-blocking” approach to serving requests. In other words, Node.js 
                    wastes no time or resources on waiting for I/O requests to return.
                    In the traditional approach to creating web servers, for each 
                    incoming request or connection the server spawns a new thread 
                    of execution or even forks a new process to handle the request 
                    and send a response. Conceptually, this makes perfect sense, 
                    but in practice it incurs a great deal of overhead.
                </p>
            </div>
        </div>
    );
};

export default Blog;