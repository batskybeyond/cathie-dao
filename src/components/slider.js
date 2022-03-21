import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

export default function AutoPlay() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 0,
		cssEase: "linear",
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="transition-all relative">
			<Slider {...settings}>
				<div className="w-full">
					<div className="rounded-3xl overflow-hidden flex items-center justify-center w-full">
						<Image
							src="/7.png"
							alt=""
							width="300"
							height="300"
							className="rounded-3xl"
						/>
					</div>
				</div>

				<div className="w-full">
					<div className="rounded-3xl overflow-hidden flex items-center justify-center w-full">
						<Image
							src="/5.png"
							alt=""
							width="300"
							height="300"
							className="rounded-3xl"
						/>
					</div>
				</div>
				<div className="w-full">
					<div className="rounded-3xl overflow-hidden flex items-center justify-center w-full">
						<Image
							src="/2.png"
							alt=""
							width="300"
							height="300"
							className="rounded-3xl"
						/>
					</div>
				</div>
				<div className="w-full">
					<div className="rounded-3xl overflow-hidden flex items-center justify-center w-full">
						<Image
							src="/1.png"
							alt=""
							width="300"
							height="300"
							className="rounded-3xl"
						/>
					</div>
				</div>
				<div className="w-full">
					<div className="rounded-3xl overflow-hidden flex items-center justify-center w-full">
						<Image
							src="/6.png"
							alt=""
							width="300"
							height="300"
							className="rounded-3xl"
						/>
					</div>
				</div>
			</Slider>
			<div className="absolute top-0 left-0 w-full h-full"></div>
		</div>
	);
}
