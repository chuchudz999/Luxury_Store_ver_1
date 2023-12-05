import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">LUXURY STORE</h1>
          <p className="text-sm">Nơi bạn tìm thấy phong cách và chất lượng.</p>
		  
          <span className="text-sm">Số điện thoại: +84 123 456 789</span>
          <br/>
          <span className="text-sm">Địa chỉ: 123 Đường ABC, Thành phố XYZ</span>
        </div>
		<div className="text-sm flex items-center space-x-4">
			<a href='/' className="hover:text-gray-300">
				<FacebookIcon />
			</a>
			<a href="/" className="hover:text-gray-300">
				<InstagramIcon />
			</a>
			<a href="/" className="hover:text-gray-300">
				<TwitterIcon />
			</a>
		</div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Luxury Store. Đã thiết kế bởi <span className="font-bold">ChuChu</span>
        </div>
      </div>
    </footer>
	);
};

export default Footer;
