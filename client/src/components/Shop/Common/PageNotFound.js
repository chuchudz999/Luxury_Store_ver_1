import React from 'react';
// import { BsArrowLeft } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

const PageNotFound = () => {
	const getRandomNumber = () => Math.floor(Math.random() * 1000);
	const posts = [
		{
		  id: 1,
		  category: 'Fashion',
		  image: `https://source.unsplash.com/collection/3356576/1000x500?sig=${getRandomNumber()}`,
		  title: 'Unleash Your Style: Fashion Forward Trends',
		  author: 'Luxury Store',
		  date: 'April 25th, 2023',
		  content: 'Discover the hottest fashion trends that will elevate your style to new heights.',
		},
		// Thêm các bài viết khác tương tự
	  ];
	const posts2 = [
		{
		  id: 1,
		  category: 'Fashion',
		  image: `https://source.unsplash.com/collection/1346951/1000x500?sig=${getRandomNumber()}`,
		  title: 'Unleash Your Style: Embrace the Latest Fashion Trends',
		  author: 'Fashionista',
		  date: 'May 5th, 2023',
		  content: 'Explore the latest trends and styles in the world of fashion. ',
		},
		// Thêm các bài viết khác tương tự
	  ];

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
			<div className="bg-white font-family-karla">
      {/* Bạn cần thay đổi phần này để hiển thị thanh điều hướng */}
      <nav className="w-full py-4 bg-blue-800 shadow">
        {/* ... */}
      </nav>

      {/* Thay thế phần tiêu đề */}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
				<a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="/">
					Luxury Blog
				</a>
				<p className="text-lg text-gray-600">
					Elevate Your Style, Express Your Identity.
				</p>
				</div>
			</header>

			{/* Thay thế phần chủ đề */}
			<nav className="w-full py-4 border-t border-b bg-gray-100">
				{/* ... */}
			</nav>

			<div className="container mx-auto flex flex-wrap py-6">
				{/* Thay thế phần bài viết */}
				<section className="w-full md:w-2/3 flex flex-col items-center px-3">
				{posts.map(post => (
					<article key={post.id} className="flex flex-col shadow my-4">
					{/* Thay thế phần hình ảnh bài viết */}
					<a href="/" className="hover:opacity-75">
						<img src={post.image} alt={post.title} />
					</a>
					<div className="bg-white flex flex-col justify-start p-6">
						<a href="/" className="text-blue-700 text-sm font-bold uppercase pb-4">{post.category}</a>
						<a href="/" className="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</a>
						<p href="/" className="text-sm pb-3">
						By <a href="/" className="font-semibold hover:text-gray-800">{post.author}</a>, Published on {post.date}
						</p>
						<a href="/" className="pb-6">{post.content}</a>
						<a href="/" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
					</div>
					</article>
				))}
				{/* <div className="flex items-center py-8">
					<a href="/" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
					<a href="/" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
					<a href="/" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
				</div> */}
				
				</section>

				{/* Thay thế phần sidebar */}
				<aside className="w-full md:w-1/3 flex flex-col items-center px-3">
				{/* ... */}
				</aside>
			</div>
			<div className="container mx-auto flex flex-wrap py-6">
				{/* Thay thế phần bài viết */}
				<section className="w-full md:w-2/3 flex flex-col items-center px-3">
				{posts2.map(post => (
					<article key={post.id} className="flex flex-col shadow my-4">
					{/* Thay thế phần hình ảnh bài viết */}
					<a href="/" className="hover:opacity-75">
						<img src={post.image} alt={post.title} />
					</a>
					<div className="bg-white flex flex-col justify-start p-6">
						<a href="/" className="text-blue-700 text-sm font-bold uppercase pb-4">{post.category}</a>
						<a href="/" className="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</a>
						<p href="/" className="text-sm pb-3">
						By <a href="/" className="font-semibold hover:text-gray-800">{post.author}</a>, Published on {post.date}
						</p>
						<a href="/" className="pb-6">{post.content}</a>
						<a href="/" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
					</div>
					</article>
				))}
				{/* <div className="flex items-center py-8">
					<a href="/" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
					<a href="/" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
					<a href="/" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
				</div> */}
				
				</section>

				{/* Thay thế phần sidebar */}
				<aside className="w-full md:w-1/3 flex flex-col items-center px-3">
				{/* ... */}
				</aside>
			</div>

			{/* Thay thế phần chân trang */}
			<footer className="w-full border-t bg-white pb-12">
				{/* ... */}
			</footer>
			</div>
			<Footer />
		</>
	);
};

export default PageNotFound;
