import React from 'react';

const Featured = () => {
	return (
		<div className="px-8 lg:px-4 py-12">
			<div className="mb-8">
				<h1 className="text-2xl md:text-xl font-bold">Featured</h1>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-1 gap-4">
				<div
					className="relative h-[800px] md:h-[500px] transition transform hover:opacity-100 hover:rotate-39 hover:scale-105"
					style={{
						backgroundImage:
							'url(https://dongphucdongnai.vn/upload/images/bang-size-ao-nam-2.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="absolute inset-0 bg-black opacity-20 transition hover:opacity-60" />
					<div className="absolute bottom-8 left-8 space-y-4 z-10 text-white">
						<div className="flex flex-col space-y-1">
							<h4 className="text-white  text-sm">New Shirt Releases</h4>
							<p className="text-white text-lg font-medium">Expressing style</p>
						</div>
						<div>
							<a href="/shop">
								<span className="px-4 py-2 bg-white text-black font-medium text-sm rounded-full hover:bg-black hover:text-white cursor-pointer">
								Shop
								</span>
							</a>
						</div>
					</div>
				</div>
				<div
					className="relative h-[800px] md:h-[500px] transition transform hover:opacity-100 hover:rotate-39 hover:scale-105"
					style={{
						backgroundImage:
							'url(https://tmluxury.vn/wp-content/uploads/jogger-nam-cao-cap.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="absolute inset-0 bg-black opacity-20 transition hover:opacity-60" />
					<div className="absolute bottom-8 left-8 space-y-4 z-10">
						<div className="flex flex-col space-y-1">
							<h4 className="text-white  text-sm">New Pants Releases</h4>
							<p className="text-white text-lg font-medium">Comfort meets style</p>
						</div>
						<div>
							<a href="/shop">
								<span className="px-4 py-2 bg-white text-black font-medium text-sm rounded-full hover:bg-black hover:text-white cursor-pointer">
									Shop
								</span>
							</a>
						</div>
					</div>
				</div>
				<div
					className="relative h-[800px] md:h-[500px] transition transform hover:opacity-100 hover:rotate-39 hover:scale-105"
					style={{
						backgroundImage:
							'url(https://sanxuatcaptuida.com/uploads/cap-da-doanh-nhan-cao-cap-da-bo-that-mua-o-dau-tai-quan-tan-binh-2.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="absolute inset-0 bg-black opacity-20 transition hover:opacity-60" />
					<div className="absolute bottom-8 left-8 space-y-4 z-10">
						<div className="flex flex-col space-y-1">
							<h4 className="text-white  text-sm">New Bags Releases</h4>
							<p className="text-white text-lg font-medium">Highlighting your personality</p>
						</div>
						<div>
							<a href="/shop">
								<span className="px-4 py-2 bg-white text-black font-medium text-sm rounded-full hover:bg-black hover:text-white cursor-pointer">
									Shop
								</span>
							</a>
						</div>
					</div>
				</div>
				<div
					className="relative h-[800px] md:h-[500px] transition transform hover:opacity-100 hover:rotate-39 hover:scale-105"
					style={{
						backgroundImage:
							'url(https://media3.scdn.vn/img4/2021/03_15/9LRC8CVpv3rJahmWo8XA.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="absolute inset-0 bg-black opacity-20 transition hover:opacity-60" />
					<div className="absolute bottom-8 left-8 space-y-4 z-10">
						<div className="flex flex-col space-y-1">
							<h4 className="text-white  text-sm">New Accessories Releases</h4>
							<p className="text-white text-lg font-medium">Tailored to your style</p>
						</div>
						<div>
							<a href="/shop">
								<span className="px-4 py-2 bg-white text-black font-medium text-sm rounded-full hover:bg-black hover:text-white cursor-pointer">
									Shop
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
