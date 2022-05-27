import React from 'react';

const Blog = () => {
    return (
        <div className='my-12'>
            <div>
                <h1 className="text-2xl font-semibold">How will you improve the performance of a React Application?</h1>
                <p>In order to make a React website faster, you need to have a general knowledge about React or web application. And not just React website. Website speed or performance is very important for all types of web applications. Below are some tricks to make the React website faster. <br /> 1. The code must be organized. <br /> 2. Duplicate code cannot be used (if the same code is used in different places then component must be used and custom hooks must be used) <br /> 3. Image optimization should be used. In addition, lazy loading should be used in the case of images. <br /> 4. Rendering should be reduced <br /> 5. Keep the condition of the material local where necessary</p>
            </div>
            <div className='mt-4'>
                <h1 className="text-2xl font-semibold">What are the different ways to manage a state in a React application?</h1>
                <p>React states can generally be used in 4 ways e.g. <br /> 1. Local State <br /> 2. Global State <br /> 3. Server State
                <br /> 4. URL State</p>
            </div>
            <div className='mt-4'>
                <h1 className="text-2xl font-semibold">How does prototypical inheritance work?</h1>
                <p>In React, data can be easily transferred from one component to another. And if there is any data in a parent component, then its child component is already getting the data. This is why it is called inheriting data because of getting child data from this medium or from the parent. The father's property is inherited by his children. However, even if the child receives data from the parent component, he can only use that data. Cannot modify or delete</p>
            </div>
            <div className='mt-4'>
                <h1 className="text-2xl font-semibold">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <p>useState is a function created by React. It provides React. The state is declared to hold the data and to use the data and useState (...) This parameter is used because of the dependency of what kind of data will be kept in that state such as if the object needs to be set in the state. If you want to put an empty object in the parameter of useState () then you have to put empty [].Like setData is another function inside useState. Usually two functions are called on useState hooks and returns the function inside it. For this reason we have to keep the data in the parameters of setData (). What kind of data will be sent to the setData () parameter that acts as a parameter dependency of useState</p>
            </div>
            <div className='mt-4'>
                <h1 className="text-2xl font-semibold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>If there are many objects inside the array and if we want to get the property or value of the object then we have to loop that array and convert it into one object. And the best way to do this is to run a map on the array so that every object can be found directly. And the map is a function and this function takes a parameter and sets each object in that parameter. And if you learn the name of the object's property with dot after that parameter then the value of that property will be found</p>
            </div>
        </div>
    );
};

export default Blog;