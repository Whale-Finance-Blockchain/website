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
    <div className="grid grid-cols-2 gap-4 items-center mt-8">
      <div>
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
      <div>
        <h3 className="font-bold text-2xl text-secondary-color">{title}</h3>
        <p className="text-md mt-4">{description}</p>
      </div>
    </div>
  );

const FeaturesSection = () => {

    return (
        <RevealWrapper>
            <div className="">
            <Reveal>
                <h1 className="w-full text-center text-5xl mt-16 text-primary-color font-bold">Features</h1>
                <div className="mt-16 grid grid-cols-2 gap-8 px-[var(--size-gap)]">
                    {items.map((item, index) => (
                    <FeatureItem key={index} {...item} />
                    ))}
                </div>
            </Reveal>
            </div>
        </RevealWrapper>
    )
}

export default FeaturesSection