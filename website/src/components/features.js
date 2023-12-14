import * as React from "react"

import { Reveal, RevealWrapper } from "../components/reveal"

const items = [
    {
      title: 'Autonomy and Control',
      description: 'Investors and managers have more control over their assets and investments, without the influence or interference of centralized entities.',
      image: '/path-to-image-autonomy.jpg',
    },
    {
      title: 'Cost-Effectiveness',
      description: 'By eliminating intermediaries, the platform can potentially reduce the costs associated with asset management.',
      image: '/path-to-image-cost.jpg',
    },
    {
      title: 'Transparency',
      description: 'Utilizing a decentralized platform ensures that all transactions and fund performances are recorded on a transparent and immutable ledger.',
      image: '/path-to-image-transparency.jpg',
    },
    {
      title: 'Security',
      description: 'Our main idea behind whale.finance, the use of ERC 6551 secures the way that manager can hold and manage assets from investors.',
      image: '/path-to-image-security.jpg',
    },
    {
      title: 'Profit Opportunities for Managers',
      description: 'The platform creates opportunities for managers to profit by offering their expertise to a wider audience.',
      image: '/path-to-image-profit.jpg',
    },
    {
      title: 'Regulatory Compliance',
      description: 'The use of smart contracts can automate compliance with regulatory requirements.',
      image: '/path-to-image-regulatory.jpg',
    }
  ];

const FeatureItem = ({ title, description, image }) => (
    // <div className="grid grid-cols-2 gap-4 items-center mt-8">
    //   <div>
    //     <img src={image} alt={title} className="w-full h-auto" />
    //   </div>
    //   <div>
    //     <h3 className="font-bold text-2xl text-secondary-color">{title}</h3>
    //     <p className="text-md mt-4">{description}</p>
    //   </div>
    // </div>
    <div className="bg-transparent rounded-lg shadow-md p-6 hover:bg-slate-50 hover:cursor-pointer">
      <h3 className="text-xl text-primary-color font-semibold mb-6">{title}</h3>
      {/* <div className="text-indigo-600 border border-indigo-600 rounded-full px-4 py-1 text-sm mb-4">Release</div> */}
      <p className="text-gray-600 mb-4">{description}</p>
      {/* <div className="flex items-center">
        <span className="h-3 w-3 bg-green-400 rounded-full mr-2"></span>
        <span className="text-sm text-gray-600">Popup Window</span>
      </div> */}
    </div>
  );

const FeaturesSection = () => {

    return (
        // <RevealWrapper>
        //     <div className="">
        //     <Reveal>
        //         <h1 className="w-full text-center text-5xl mt-16 text-primary-color font-bold">Features</h1>
        //         <div className="mt-16 grid grid-cols-2 gap-8 px-[var(--size-gap)]">
        //             {items.map((item, index) => (
        //             <FeatureItem key={index} {...item} />
        //             ))}
        //         </div>
        //     </Reveal>
        //     </div>
        // </RevealWrapper>
        <RevealWrapper>
        <div className="bg-gradient-to-b from-transparent to-slate-100 p-10 py-24">
          <Reveal>
          <h1 className="pb-20 font-600 text-center text-6xl text-primary-color">Our Benefits</h1>
          <div className="flex flex-row">
            {/* Colocar botao para About na esquerda */}
            <div className="flex-1 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <FeatureItem key={index} {...item} />
              ))}
            </div>
          </div>
          </Reveal>
        </div>
        </RevealWrapper>
    )
}

export default FeaturesSection