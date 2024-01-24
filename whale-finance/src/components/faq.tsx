import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const accordionData = [
  {
    id: '1',
    question: 'Is it in mainnet?',
    answer: 'No, we are currently in development.'
  },
];

export function Faq() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
        <h1 className='text-center text-primary font-bold text-3xl mb-4'>FAQ</h1>
        <Accordion type="single" collapsible className="px-4 w-full lg:w-[60%]">
        {accordionData.map(item => (
            <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
                {item.answer}
            </AccordionContent>
            </AccordionItem>
        ))}
        </Accordion>
    </div>
  )
}