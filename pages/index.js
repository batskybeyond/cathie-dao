import Head from "next/head";
import Image from "next/image";
import { Collapse } from "@nextui-org/react";
import Slider from "../src/components/slider";
import { useEffect } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

export default function Home() {
	const data = [
		{
			title: (
				<>
					<div className="relative md:py-40 lg:pb-24 py-28 md:pt-56 lg:pt-24 w-full min-h-screen flex flex-col justify-between text-white">
						<LightSpeed left cascade>
							<section>
								<h1 className="md:text-7xl text-6xl pb-20 text-center tracking-wide">
									CATHIE DAO
								</h1>
							</section>
						</LightSpeed>
						<div className="px-0">
							<Slider />
						</div>
					</div>
				</>
			),
		},
		{
			title: (
				<>
					<div className="relative lg:p-20 md:p-14 p-6 pt-40 md:pt-56 lg:pt-44 md:pb-48 lg:pb-48 pb-32 w-full min-h-screen flex flex-col justify-between text-white">
						<Bounce left cascade>
							<section>
								<h1 className="md:text-6xl text-5xl pb-10 text-center tracking-wide">
									2969 Genesis PARTNER NFTs
								</h1>
							</section>
						</Bounce>
						<Zoom cascade>
							<section>
								<div className="flex justify-center -ml-10">
									<div className="md:w-96 md:h-96 mx-auto p-12 pt-0 md:p-0 relative">
										<Image
											src="/pchart.svg"
											alt=""
											width={900}
											height={900}
										/>
										<h1 className="absolute md:top-36 top-24 md:left-16 left-24 md:text-2xl text-lg text-center leading-6 tracking-wide">
											2869 <br /> MINT
										</h1>
										<h1 className="absolute md:bottom-28 bottom-20 md:-right-36 -right-3 md:text-2xl text-lg text-center leading-6 tracking-wide">
											100 <br /> GIVEAWAYS
										</h1>
									</div>
								</div>
							</section>
						</Zoom>
						<Bounce right cascade>
							<section>
								<h2 className="md:text-4xl text-3xl md:pt-10 text-center tracking-wide text-secondary">
									mint details coming soon!
								</h2>
							</section>
						</Bounce>
						<Zoom cascade>
							<section>
								<p className="text-center font-inter text-base max-w-3xl opacity-70 pt-4 leading-6 mx-auto">
									we are figuring out the price of mint. Don
									{"'"}t worry, it would not be some randomly
									high number but a number which can balance
									access to a wide range of audience and also
									fill up the DAO treasury enough
								</p>
							</section>
						</Zoom>
					</div>
				</>
			),
		},
	];

	const onScroll = (el) => {
		if (window.scrollY > window.innerHeight / 2) {
			return document.body.classList.add("bg-color");
		} else {
			return document.body.classList.remove("bg-color");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="">
			<Head>
				<title>CATHIE DAO</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{data.map((group, i) => {
				return (
					<div key={i} className={` min-h-screen`}>
						{group.title}
					</div>
				);
			})}
			<div className="relative bg-[#010203] lg:p-20 md:p-14 p-6 pt-40 md:pt-56 lg:pt-44 pb-40 lg:pb-44 md:pb-64 w-full flex flex-col justify-between text-white">
				<div className="squares absolute top-0 left-0 h-full w-full">
					<div className="square">🚀</div>
					<div className="square w-20">
						<img src="/nft_tp_1.png" alt="" />
					</div>
					<div className="square w-20">
						<img src="/nft_tp_2.png" alt="" />
					</div>
					<div className="square">🚀</div>
					<div className="square">🍾</div>
					<div className="square w-20">
						<img src="/anchor.svg" alt="" />
					</div>
					<div className="square">🍾</div>
					<div className="square w-20">
						<img src="/nft_tp_4.png" alt="" />
					</div>
					<div className="square">🚀</div>
					<div className="square">🍾</div>
					<div className="square w-20">
						<img src="/uniswap.png" alt="" />
					</div>
					<div className="square">🚀</div>
					<div className="square w-20">
						<img src="/nft_tp_7.png" alt="" />
					</div>
					<div className="square w-20">
						<img src="/nft_tp_8.png" alt="" />
					</div>
				</div>
				<Bounce top cascade>
					<h1
						className="lg:text-4xl text-4xl md:pb-20 sm:text-xl text-center tracking-wide mb-10 sm:mb-10
						leading-[4.5em]"
					>
						EMPOWER & EDUCATE Women, young people in Defi & NFTs
					</h1>
				</Bounce>
				<Zoom left cascade>
					<section>
						<h2 className="lg:text-xl text-xl pt-48 text-center tracking-wide text-[#BFBFBF] leading-[2.5em] mt-10 sm:mt-10">
							GRAB A #CATHIEDAO NFT & BECOME A PARTNER <br />{" "}
							EQUAL VOTING RIGHTS & EQUAL PROFIT SHARE TO ALL
							HOLDERS
						</h2>
					</section>
				</Zoom>
			</div>
			<div className="relative lg:p-20 md:p-14 p-6 pt-32 w-full flex flex-col justify-between bg-[#F5F5F7]">
				<Bounce top cascade>
					<h1 className="md:text-6xl text-5xl pb-28 text-center tracking-wide text-main">
						RUN A FUND
					</h1>
				</Bounce>

				<div className="lg:grid lg:grid-cols-2 gap-24 space-y-20 lg:space-y-0">
					<Zoom left cascade>
						<section>
							<div className="bg-white rounded-3xl px-7 pb-24 pt-12 w-full">
								<div className="flex justify-center h-72 items-center overflow-hidden">
									<div className="w-72 h-64">
										<Image
											src="/membership.gif"
											alt=""
											width={500}
											height={500}
										/>
									</div>
								</div>

								<h1 className="md:pb-12 pb-10 text-left text-[33px]">
									NFT HOLDER
								</h1>
								<p className="lowercase font-light md:py-10 font-inter text-lg">
									holding one NFT gives you access to 1 vote
									on all decisions and 1 share of profit from
									the DAO's investments.
								</p>
							</div>
						</section>
					</Zoom>
					<Zoom right cascade>
						<section>
							<div className="bg-white rounded-3xl px-7 pb-24 pt-12 w-full">
								<div className="flex justify-center h-72 items-center overflow-hidden">
									<div className="w-72 h-64 -mt-32">
										<Image
											src="/why-dao.gif"
											alt=""
											width={500}
											height={500}
										/>
									</div>
								</div>

								<h1 className="md:pb-12 pb-10 text-left text-[33px]">
									What CathieDAO Fund DOES?
								</h1>
								<p className="lowercase font-light md:py-10 font-inter text-lg">
									allows holders to run an experimental fund,
									to test their understanding of Defi, NFTs,
									Portfolio management.
								</p>
							</div>
						</section>
					</Zoom>

					<div className="bg-white rounded-3xl py-10 md:px-24 px-10 col-span-2">
						<Bounce left cascade>
							<section>
								<h1 className="text-[33px]">OUR ALPHA</h1>
							</section>
						</Bounce>
						<div className="lg:grid grid-cols-3 gap-14 pt-8 pb-6">
							<Zoom left cascade>
								<section>
									<div className="">
										<div className="flex justify-center items-center overflow-hidden">
											<div className="w-72 h-64">
												<Image
													src="/math.gif"
													alt=""
													width={500}
													height={500}
												/>
											</div>
										</div>

										<p className="lowercase font-light py-12 font-inter text-lg">
											Experienced Founding Team would
											teach, & provide insights to the DAO
											on best of investment strategies and
											alpha.
										</p>
									</div>
								</section>
							</Zoom>
							<Zoom cascade>
								<div className="">
									<div className="flex justify-center items-center overflow-hidden">
										<div className="w-72 h-64">
											<Image
												src="/cube.gif"
												alt=""
												width={500}
												height={500}
											/>
										</div>
									</div>

									<p className="lowercase font-light py-12 font-inter text-lg">
										Community Wisdom - with members of some
										amazing projects joining us as Holder,
										their wisdom from being in this space
										enriches the community to make wiser
										decisions. Also, it's alpha from
										bultiple places splling into one
										destination - CathieDAO.
									</p>
								</div>
							</Zoom>
							<Zoom right cascade>
								<div className="">
									<div className="flex justify-center items-center overflow-hidden">
										<div className="w-72 h-64">
											<Image
												src="/black-box.gif"
												alt=""
												width={500}
												height={500}
											/>
										</div>
									</div>

									<p className="lowercase font-light py-12 font-inter text-lg">
										Black Box Strategy - instituional level
										insights, secrets from the big world of
										finance and Defi, and more secret tea
										spllied only to holders.
									</p>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
			</div>
			<div className="relative lg:p-20 md:p-14 p-6 pt-28 md:pt-44 lg:pt-40 w-full text-white bg-[#010203]">
				<div className="w-full">
					<Bounce bottom cascade>
						<h1 className="md:text-5xl text-3xl px-2 pb-16 tracking-wide">
							Founding Team
						</h1>
					</Bounce>
					<div className="lg:grid grid-cols-3 lg:gap-10 space-y-10 lg:space-y-0 items-start lg:px-20 w-full">
						<Flip left cascade>
							<section>
								<div className="flex flex-col items-center justify-center p-4 px-10">
									<div className="rounded-full overflow-hidden h-40 w-40">
										<Image
											src="/batskynoun.svg"
											alt=""
											width={250}
											height={250}
										/>
									</div>
									<h2 className="text-center text-2xl pt-4 tracking-wide">
										BATSKY
									</h2>
									<p className="text-sm font-inter text-center opacity-60 leading-5 pt-3">
										Full Time DeFi & Private Equity,
										Focusing on strategy, and investment
										decisions.
									</p>
								</div>
							</section>
						</Flip>
						<Flip cascade>
							<section>
								<div className="flex flex-col items-center justify-center p-4 px-10">
									<div className="rounded-full overflow-hidden h-40 w-40">
										<Image
											src="/robotclone.png"
											alt=""
											width={250}
											height={250}
										/>
									</div>
									<h2 className="text-center text-2xl pt-4 tracking-wide">
										ADDY
									</h2>
									<p className="text-sm font-inter text-center opacity-60 leading-5 pt-3">
										NFT degen, multiple Clonex Holder, Ex-
										Wall Street Trader Focusing on Alpha and
										Community
									</p>
								</div>
							</section>
						</Flip>
						<Flip right cascade>
							<section>
								<div className="flex flex-col items-center justify-center p-4 px-10">
									<div className="rounded-full overflow-hidden h-40 w-40">
										<Image
											src="/8.png"
											alt=""
											width={250}
											height={250}
										/>
									</div>
									<h2 className="text-center text-2xl pt-4 tracking-wide">
										Veronica
									</h2>
									<p className="text-sm font-inter text-center opacity-60 leading-5 pt-3">
										Artist since she was 8. Design student.
										Lives in NYC. If she is not playing with
										art & crafting products, you'd find her
										trying out artisanal coffee.
									</p>
								</div>
							</section>
						</Flip>
					</div>
				</div>
			</div>
			<div className="relative bg-[#010203] lg:p-20 md:p-14 p-6 pt-28 md:pt-20 lg:pt-20 pb-64 lg:pb-64 md:pb-64 w-full flex flex-col justify-between text-white">
				<Zoom left cascade>
					<h1 className="md:text-5xl text-3xl px-2 pb-16 tracking-wide">
						FAQS
					</h1>
				</Zoom>
				<Zoom right cascade>
					<Collapse.Group divider={false} className="space-y-7">
						<Collapse
							title={
								<h2 className="md:text-3xl text-xl tracking-wide">
									Mint Details
								</h2>
							}
						>
							<h2 className="font-inter md:text-xl text-md text-opacity-90 font-light pt-2 tracking-wide">
								TBD. Coming soon!
							</h2>
						</Collapse>
						<Collapse
							title={
								<h2 className="md:text-3xl text-xl tracking-wide">
									What will the DAO (fund managed by holders)
									invest in?
								</h2>
							}
						>
							<h2 className="font-inter md:text-xl text-md text-opacity-90 font-light pt-2 tracking-wide">
								DeFi protocols, NFT projects, & Hodling some
								community first crypto coins with solid
								fundementals
							</h2>
						</Collapse>
						<Collapse
							title={
								<h2 className="md:text-3xl text-xl tracking-wide">
									What will be the holders learning?
								</h2>
							}
						>
							<h2 className="font-inter md:text-xl text-md text-opacity-90 font-light pt-2 tracking-wide">
								From the basics of finance to modern aspects
								like DeFi, and personal finance management will
								be the core focus areas of the community. Our
								team brings years of experience in top notch
								firms from the finance world like TPG Global,
								Optiver, etc and so many trade secrets. However,
								as newer opprtunities arrive, the community can
								pitch in lots of ideas and we can expand on
								them.
							</h2>
						</Collapse>
						<Collapse
							title={
								<h2 className="md:text-3xl text-xl tracking-wide">
									COMMUNITY
								</h2>
							}
						>
							<h2 className="font-inter md:text-xl text-md text-opacity-90 font-light pt-2 tracking-wide">
								Each NFT gives you access to be take part in the
								DAO as an investment partner. Each one gives you
								1 vote and 1 share of all profits generated.
							</h2>
						</Collapse>
						<Collapse
							title={
								<h2 className="md:text-3xl text-xl tracking-wide">
									FUNDS
								</h2>
							}
						>
							<h2 className="font-inter md:text-xl text-md text-opacity-90 font-light pt-2 tracking-wide">
								Part of primary sales proceeds would be given by
								the founders to the DAo treasury as seed money
								to the fund. Also, a big chunk of secondary
								royalities would be directly sent to the
								treasury. Later on, if proven with that money,
								the founding team will keep allocating more
								funds.
							</h2>
						</Collapse>
						<Collapse
							title={
								<h2 className="md:text-3xl text-xl tracking-wide">
									FUTURE PLANS?
								</h2>
							}
						>
							<h2 className="font-inter md:text-xl text-md text-opacity-90 font-light pt-2 tracking-wide">
								For now, project provides education & runs an
								investment DAO. We have lots of exciting ideas
								to expand on the scope of the DAO and to bring
								in more people into it. However, we would like
								to take it slow, give amazing value to our
								genisis community and we all can discuss
								together to see where to go ahead.
							</h2>
						</Collapse>
					</Collapse.Group>
				</Zoom>
			</div>
		</div>
	);
}
