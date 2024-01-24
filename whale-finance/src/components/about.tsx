import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const aboutData = [
  {
    title: 'Autonomy and Control',
    description: 'Investors and managers have more control over their assets and investments, without the influence or interference of centralized entities.',
  },
  {
    title: 'Cost-Effectiveness',
    description: 'By eliminating intermediaries, the platform can potentially reduce the costs associated with asset management.',
  },
  {
    title: 'Transparency',
    description: 'Utilizing a decentralized platform ensures that all transactions and fund performances are recorded on a transparent and immutable ledger.',
  },
  {
    title: 'Security',
    description: 'Our main idea behind whale.finance, the use of ERC 6551 secures the way that manager can hold and manage assets from investors.',
  },
  {
    title: 'Profit Opportunities for Managers',
    description: 'The platform creates opportunities for managers to profit by offering their expertise to a wider audience.',
  },
  {
    title: 'Regulatory Compliance',
    description: 'The use of smart contracts can automate compliance with regulatory requirements.',
  }
];


export function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
        <h1 className='text-center text-primary font-bold text-3xl mb-12'>ABOUT BENEFITS</h1>
        <div className="px-4 w-full grid grid-cols-1 lg:w-[60%] lg:grid lg:grid-cols-2 lg:gap-6">
          {aboutData.map(item => (
            <Card className="w-full mb-2">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {item.description}
              </CardContent>
            </Card>
            // <div className="w-full flex flex-col items-center justify-center mb-4">
            //   <h1 className="text-primary font-bold text-xl mb-2">{item.title}</h1>
            //   <p className="text-center text-gray-400">{item.description}</p>
            // </div>
          ))}
        </div>
    </div>
  )
}