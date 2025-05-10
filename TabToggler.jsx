import React, { useState } from 'react';

const tabs = [
  { name: 'Detailed', items: ['Apple', 'Banana', 'Cherry'] },
  { name: 'Structured', items: ['Carrot', 'Broccoli', 'Spinach'] },
  { name: 'Clear', items: ['Water', 'Juice', 'Tea'] },
];

export default function TabToggler() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto mt-10 max-xl:hidden">
      
      <h2 className="text-text2 mb-5 text-center text-2xl">$5 Basic account includes:</h2>
      
      <div className="flex border-b border-border1">
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-2 text-center font-medium transition-colors duration-200
              ${activeTab === index
                ? 'border-b-2 border-border12  text-text12'
                : 'text-gray-500 hover:text-blue-500'}
            `}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="p-4 bg-gray-50 rounded-b-lg shadow-inner">
        <div >
          <ul className="list-none list-inside space-y-1 text-gray-700">
            {tabs[activeTab].items.map((item, idx) => (
              <li className='border border-border4 w-fit rounded-lg p-2 mb-5 hover:shadow-[0px_-4px_99px_1px_#1daa91] hover:cursor-pointer' key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <hr class="border-t border-border3 my-4"></hr>
        <p className="text-text2 text-center">This is the descioptoin that Lorem, ipsum. Lorem ipsum dolor, sit amet.</p>

        <button className="border border-border3 bg-Background20/10  hover:text-text12 rounded-lg px-10 py-3 w-[350px] text-2xl text-text12/80 mt-10">Purchase Basic</button>
      </div>
    </div>
  );
}
