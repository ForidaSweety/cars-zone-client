

const Blogs = () => {
    return (
        <div className="mb-20">
            <h2 className="text-4xl font-semibold bg-slate-300 text-center mb-5 p-4">Blogs</h2>
            <div className="card justify-center mb-5 border-2 border-indigo-300  p-5">
                <h2>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <br />
                <p>Ans: Access Token: An access token is a credential that represents the authorization granted to a client to access certain resources or perform specific actions on a server. It is typically short-lived and has an expiration time associated with it. Access tokens are used to authenticate the client during each request to the server by including the token in the request headers.
                    <br />
                    Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to re-authenticate. It is usually issued alongside the access token and has a longer expiration time. Refresh tokens are securely stored and should be kept confidential.
                    <br />
                    Access tokens and refresh tokens are commonly used in authentication systems to provide secure access to resources on the client-side. The access token is a short-lived credential obtained during authentication and is included in request headers to access protected resources. On the other hand, the refresh token is a long-lived credential securely stored on the client-side and is used to obtain a new access token when the current one expires. The client sends the refresh token to the server, and if valid, a new access token is issued. It is important to store tokens securely on the client-side. Common options include secure HTTP-only cookies, web storage with encryption, or in-memory storage. Security measures should be implemented to protect tokens from unauthorized access and ensure secure communication.
                </p>
            </div>
            <div className="card justify-center mb-5 border-2 border-indigo-300  p-5">
                <h2>2. Compare SQL and NoSQL databases?</h2>
                <br />
                <p>Ans: SQL and NoSQL databases differ in their data models, scalability options, handling of data relationships, flexibility, and use cases. SQL databases follow a structured, tabular data model with predefined schemas, making them suitable for complex data relationships and applications requiring strong data consistency. NoSQL databases, on the other hand, have a flexible, schema-less data model and excel in scalability, handling large amounts of data, and high traffic loads. They are preferred for use cases with simpler data relationships, evolving data structures, and horizontal scalability needs. SQL databases offer ACID compliance and are commonly used in financial systems and traditional enterprise applications, while NoSQL databases are popular for handling unstructured or semi-structured data, real-time data, and scenarios where horizontal scalability is vital, such as IoT applications and content management systems.</p>
            </div>
            <div className="card justify-center mb-5 border-2 border-indigo-300  p-5">
                <h2>3. What is express js? What is Nest JS?</h2> <br />
                <p>Ans: Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It is a layer built on the top of the Node js that helps manage servers and routes
                    <br />
                    Nest js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript
                </p>
            </div>
            <div className="card justify-center mb-5 border-2 border-indigo-300  p-5">
                <h2>4. What is MongoDB aggregate and how does it work?</h2> <br />
                <p>Ans: It is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    <br />
                    The MongoDB aggregate method is a powerful tool for data processing and analysis in MongoDB collections. It operates on a collection and takes an array of pipeline stages as input. Each stage performs a specific operation on the documents, such as filtering, grouping, sorting, or calculations. The documents flow through the pipeline, with the output of one stage becoming the input for the next. The aggregation framework enables complex data transformations and computations, allowing for advanced querying, report generation, and statistical analysis. It provides a flexible and efficient way to process and analyze data within MongoDB collections.
                </p>
            </div>

        </div>
    );
};

export default Blogs;