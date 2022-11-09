import React from 'react';

const Blog = () => {
    return (
        <div className=' pl-20 pr-20'>
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">

                                <thead>
                                    <tr>
                                        <th></th>

                                        <th>SQL</th>
                                        <th>NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>1</th>

                                        <td>relational</td>
                                        <td>non-relational</td>
                                    </tr>

                                    <tr>
                                        <th>2</th>

                                        <td>use structured query language and have a predefined schema.</td>
                                        <td> NoSQL databases have dynamic schemas for unstructured data.</td>
                                    </tr>

                                    <tr>
                                        <th>3</th>

                                        <td>are vertically scalabled</td>
                                        <td>are horizontally scalable.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p>JWT or JSON Web Token, is an open standard that allows a client and a server to exchange security-related data. Every JWT has a set of encoded JSON objects, including claims. To ensure that the claims cannot be changed after the token is issued, JWTs are signed using a cryptographic technique.</p>
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>

                </div>
            </div>
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">

                            <thead>
                                <tr>
                                    <th></th>

                                    <th>Javascript</th>
                                    <th>NodeJS</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>1</th>

                                    <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                    <td>NodeJS is a Javascript runtime environment.</td>
                                </tr>

                                <tr>
                                    <th>2</th>

                                    <td>Javascript can only be run in the browsers.</td>
                                    <td> 	We can run Javascript outside the browser with the help of NodeJS.</td>
                                </tr>

                                <tr>
                                    <th>3</th>

                                    <td>It is basically used on the client-side.</td>
                                    <td>It is mostly used on the server-side.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an endless loop that accepts and handles requests.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;