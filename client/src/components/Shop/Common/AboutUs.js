import React from 'react';
// import { BsArrowLeft } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

const AboutUs = () => {
	
	return (
		<>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" />

            <style>
                {`
                    @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

                    .font-family-karla {
                        font-family: 'Karla', sans-serif;
                    }
                `}
            </style>

            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer />
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"
                integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs="
                crossOrigin="anonymous"
            />
			<Header />
            <nav className="w-full py-4 bg-blue-800 shadow">
                {/* ... */}
            </nav>
            <header class="w-full container mx-auto">
                <div class="flex flex-col items-center py-12">
                    <a class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="/">
                        About Us
                    </a>
                    <p class="text-lg text-gray-600">
                        Elevate Your Style, Express Your Identity.
                    </p>
                </div>
            </header>
			<div className="container mx-auto flex flex-wrap py-6">
                {/* Post Section */}
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                    <article className="flex flex-col shadow my-4">
                        {/* Article Image */}
                        <a href="/" className="hover:opacity-75">
                            <img src="https://source.unsplash.com/collection/5039078/1000x500?sig=1" alt="Article" />
                        </a>
                            <div className="bg-white flex flex-col justify-start p-6">
                                <a href="/" className="text-blue-700 text-sm font-bold uppercase pb-4">Luxury Store</a>
                                <a href="/" class="text-3xl font-bold hover:text-gray-700 pb-4">Welcome to Luxury Store</a>
                                <p href="/" class="text-sm pb-8">
                                    By <a href="/" class="font-semibold hover:text-gray-800">Chu Chu</a>, Published on November 26, 2023
                                </p>
                                <h1 class="text-2xl font-bold pb-3">Our Mission</h1>
                                <p class="pb-3">We believe that fashion is not just about looking good. Luxury Store is built with a mission to offer customers a comprehensive fashion experience, where each product is a work of art.</p>
                                <h1 class="text-2xl font-bold pb-3">Our Selection</h1>
                                <p class="pb-3">At Luxury Store, we focus on curating the best brands and the highest quality products. Every design we select reflects class and refined beauty.</p>
                                <h1 class="text-2xl font-bold pb-3">The Difference</h1>
                                <p class="pb-3">What sets Luxury Store apart is not just the products but also our commitment to customer care. We pledge to provide you with an unparalleled online shopping experience, from the selection process to the delivery of the product to your doorstep.</p>
                                <h1 class="text-2xl font-bold pb-3">The Luxury Community</h1>
                                <p class="pb-3">Luxury Store is not just a store; We take pride in creating a space where fashion enthusiasts can connect, share opinions, and explore the world of style and beauty together.</p>
                                <h1 class="text-2xl font-bold pb-3">Contact Us</h1>
                                <p class="pb-3">If you have any questions or would like to share your thoughts, feel free to contact us at Chuchu@gmail.com. 
                                Follow us on social media for updates on the latest trends and events.

                                Thank you for being a part of the Luxury Store journey!</p>
                            </div>
                    </article>

                    {/* Add more sections as needed */}

                    <div className="w-full flex pt-6">
                        <a href="/" class="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
                            <p class="text-lg text-blue-800 font-bold flex items-center"><i class="fas fa-arrow-left pr-1"></i> Previous</p>
                            
                        </a>
                        <a href="/" class="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
                            <p class="text-lg text-blue-800 font-bold flex items-center justify-end">Next <i class="fas fa-arrow-right pl-1"></i></p>
                            
                        </a>
                    </div>

                    <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
                        <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                            <img src="https://source.unsplash.com/collection/9380914/150x150?sig=1" className="rounded-full shadow h-32 w-32" alt="Author" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center md:justify-start">
                            <p className="font-semibold text-2xl">Luxury Store</p>
                            <p className="pt-2">Luxury Store is your gateway to a world of refined elegance, where fashion meets sophistication. </p>
                            <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
                                <a className="" href="/">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a className="pl-4" href="/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="pl-4" href="/">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="pl-4" href="/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sidebar Section */}
                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p class="text-xl font-semibold pb-5">Luxury Blog</p>
                        <p class="pb-2">
                        Here, we unravel the latest trends, fashion tips, and insider insights to elevate your sense of luxury. 
                        Welcome to a space where sophistication meets innovation – welcome to the Luxury Store blog.</p>
                        <a href="/" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                            Get to know us
                        </a>
                    </div>
                    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p class="text-xl font-semibold pb-5">Instagram</p>
                        <div class="grid grid-cols-3 gap-3">
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/9530594/150x150?sig=1" alt="Instagram 1" />
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/9530594/150x150?sig=2"  alt="Instagram 1"/>
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/9530594/150x150?sig=3"  alt="Instagram 1"/>
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/9530594/150x150?sig=4"  alt="Instagram 1"/>
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/9530594/150x150?sig=5"  alt="Instagram 1"/>
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/9530594/150x150?sig=6"  alt="Instagram 1"/>
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/9530594/150x150?sig=7"  alt="Instagram 1"/>
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/9530594/150x150?sig=8"  alt="Instagram 1"/>
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/9530594/150x150?sig=9"  alt="Instagram 1"/>
                        </div>
                        <a href="/" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                            <i class="fab fa-instagram mr-2"></i> Follow Luxury Store
                        </a>
                    </div>
            
                </aside>
            </div>
			<Footer />
		</>
	);
};

export default AboutUs;
