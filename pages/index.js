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
                <h1 className="md:text-6xl text-5xl pb-20 text-center tracking-wide">
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
                  690 Genesis PARTNER NFTs
                </h1>
              </section>
            </Bounce>
            <Zoom cascade>
              <section>
                <div className="flex justify-center -ml-10">
                  <div className="md:w-96 md:h-96 mx-auto p-12 pt-0 md:p-0 relative">
                    <Image src="/pchart.svg" alt="" width={900} height={900} />
                    <h1 className="absolute md:top-36 top-24 md:left-16 left-24 md:text-2xl text-lg text-center leading-6 tracking-wide">
                      600 <br /> MINT
                    </h1>
                    <h1 className="absolute md:bottom-28 bottom-20 md:-right-36 -right-3 md:text-2xl text-lg text-center leading-6 tracking-wide">
                      90 <br /> GIVeAWAYS
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
                <p className="text-center font-inter text-lg max-w-3xl opacity-70 pt-4 leading-6 mx-auto">
                  we are figuring out the price of mint. Don{"'"}t worry, it
                  would be some randomly high number but a number which can
                  balance access to a wide range of audience and also fill up
                  the DAO treasury enough
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
            <img src="/nft_tp_3.png" alt="" />
          </div>
          <div className="square">🍾</div>
          <div className="square">🚀</div>
          <div className="square w-20">
            <img src="/nft_tp_4.png" alt="" />
          </div>
          <div className="square">🚀</div>
          <div className="square">🍾</div>
          <div className="square w-20">
            <img src="/nft_tp_6.png" alt="" />
          </div>
          <div className="square">🚀</div>
          <div className="square w-20">
            <img src="/nft_tp_7.png" alt="" />
          </div>
          <div className="square">🚀</div>
          <div className="square w-20">
            <img src="/nft_tp_8.png" alt="" />
          </div>
        </div>
        <Bounce top cascade>
          <h1 className="md:text-6xl text-5xl md:pb-20 text-center tracking-wide">
            FIRST EVER PE STYLE DAO
          </h1>
        </Bounce>
        <Zoom left cascade>
          <section>
            <h2 className="lg:text-4xl text-3xl pt-48 text-center tracking-wide text-[#BFBFBF] leading-[2.5em]">
              GRAB A #CATHIEDAO NFT & BECOME A PARTNER <br /> EQUAL VOTING
              RIGHTS & EQUAL PROFIT SHARE TO ALL HOLDERS
            </h2>
          </section>
        </Zoom>
      </div>
      <div className="relative lg:p-20 md:p-14 p-6 pt-32 w-full flex flex-col justify-between bg-[#F5F5F7]">
        <Bounce top cascade>
          <h1 className="md:text-6xl text-5xl pb-28 text-center tracking-wide text-main">
            FIRST EVER PE STYLE DAO
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
                  MEMBERSHIP
                </h1>
                <p className="lowercase font-light md:py-10 font-inter text-lg">
                  top tier projects. We talk to team managing the project, vet
                  the community involvement & enthusiasm, art quality and
                  otherfactors{" "}
                </p>
              </div>
            </section>
          </Zoom>
          <Zoom right cascade>
            <section>
              <div className="bg-white rounded-3xl px-7 pb-24 pt-12 w-full">
                <div className="flex justify-center h-72 items-center overflow-hidden">
                  <div className="w-72 h-64 -mt-32">
                    <Image src="/why-dao.gif" alt="" width={500} height={500} />
                  </div>
                </div>

                <h1 className="md:pb-12 pb-10 text-left text-[33px]">
                  What DAO DOES?
                </h1>
                <p className="lowercase font-light md:py-10 font-inter text-lg">
                  top tier projects. We talk to team managing the project, vet
                  the community involvement & enthusiasm, art quality and
                  otherfactors{" "}
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
                      top tier projects. We talk to team managing the project,
                      vet the community involvement & enthusiasm, art quality
                      and otherfactors{" "}
                    </p>
                  </div>
                </section>
              </Zoom>
              <Zoom cascade>
                <div className="">
                  <div className="flex justify-center items-center overflow-hidden">
                    <div className="w-72 h-64">
                      <Image src="/cube.gif" alt="" width={500} height={500} />
                    </div>
                  </div>

                  <p className="lowercase font-light py-12 font-inter text-lg">
                    top tier projects. We talk to team managing the project, vet
                    the community involvement & enthusiasm, art quality and
                    otherfactors{" "}
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
                    top tier projects. We talk to team managing the project, vet
                    the community involvement & enthusiasm, art quality and
                    otherfactors{" "}
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
              TEAM
            </h1>
          </Bounce>
          <div className="lg:grid grid-cols-3 lg:gap-10 space-y-10 lg:space-y-0 items-start lg:px-20 w-full">
            <Flip left cascade>
              <section>
                <div className="flex flex-col items-center justify-center p-4 px-10">
                  <div className="rounded-full overflow-hidden h-40 w-40">
                    <Image
                      src="/download.jpeg"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <h2 className="text-center text-2xl pt-4 tracking-wide">
                    BATSKY
                  </h2>
                  <p className="text-sm font-inter text-center opacity-60 leading-5 pt-3">
                    Full Time DeFi, Ex - Private Equity, Focusing on strategy,
                    and communitv
                  </p>
                </div>
              </section>
            </Flip>
            <Flip cascade>
              <section>
                <div className="flex flex-col items-center justify-center p-4 px-10">
                  <div className="rounded-full overflow-hidden h-40 w-40">
                    <Image
                      src="/download.jpeg"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <h2 className="text-center text-2xl pt-4 tracking-wide">
                    ADDY
                  </h2>
                  <p className="text-sm font-inter text-center opacity-60 leading-5 pt-3">
                    NFT degen, multiple Clonex Holder, Ex- Wall Street Trader
                    Focusing on Alpha and Growth
                  </p>
                </div>
              </section>
            </Flip>
            <Flip right cascade>
              <section>
                <div className="flex flex-col items-center justify-center p-4 px-10">
                  <div className="rounded-full overflow-hidden h-40 w-40">
                    <Image
                      src="/download.jpeg"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <h2 className="text-center text-2xl pt-4 tracking-wide">
                    MR. KeYBOARD
                  </h2>
                  <p className="text-sm font-inter text-center opacity-60 leading-5 pt-3">
                    7+ years Full Stack Developer, currently dabbling full time
                    with solidity & rust
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
                  MInt Details?
                </h2>
              }
            >
              <h2 className="font-inter md:text-2xl text-lg text-opacity-90 font-light pt-2 tracking-wide">
                top tier projects. We talk to team managing the project, vet the
                community involvement & enthusiasm, art quality and otherfactors
              </h2>
            </Collapse>
            <Collapse
              title={
                <h2 className="md:text-3xl text-xl tracking-wide">
                  What projects would the dao invest in?
                </h2>
              }
            >
              <h2 className="font-inter md:text-2xl text-lg text-opacity-90 font-light pt-2 tracking-wide">
                top tier projects. We talk to team managing the project, vet the
                community involvement & enthusiasm, art quality and otherfactors
              </h2>
            </Collapse>
            <Collapse
              title={
                <h2 className="md:text-3xl text-xl tracking-wide">FUNDS?</h2>
              }
            >
              <h2 className="font-inter md:text-2xl text-lg text-opacity-90 font-light pt-2 tracking-wide">
                top tier projects. We talk to team managing the project, vet the
                community involvement & enthusiasm, art quality and otherfactors
              </h2>
            </Collapse>
            <Collapse
              title={
                <h2 className="md:text-3xl text-xl tracking-wide">PROFITS?</h2>
              }
            >
              <h2 className="font-inter md:text-2xl text-lg text-opacity-90 font-light pt-2 tracking-wide">
                top tier projects. We talk to team managing the project, vet the
                community involvement & enthusiasm, art quality and otherfactors
              </h2>
            </Collapse>
            <Collapse
              title={
                <h2 className="md:text-3xl text-xl tracking-wide">
                  FUTURE PLANS?
                </h2>
              }
            >
              <h2 className="font-inter md:text-2xl text-lg text-opacity-90 font-light pt-2 tracking-wide">
                top tier projects. We talk to team managing the project, vet the
                community involvement & enthusiasm, art quality and otherfactors
              </h2>
            </Collapse>
            <Collapse
              title={
                <h2 className="md:text-3xl text-xl tracking-wide">COMMUNITY</h2>
              }
            >
              <h2 className="font-inter md:text-2xl text-lg text-opacity-90 font-light pt-2 tracking-wide">
                top tier projects. We talk to team managing the project, vet the
                community involvement & enthusiasm, art quality and otherfactors
              </h2>
            </Collapse>
          </Collapse.Group>
        </Zoom>
      </div>
    </div>
  );
}
