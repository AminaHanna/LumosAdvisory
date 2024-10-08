import React, { useEffect, useRef, useState } from 'react';
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img7 from "../../assets/Img/pexels-photo-7698819.jpg";

function Business_valuations() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <>
      <div id='service-four' className="relative flex">
        <div className="flex w-full justify-between">
          <div className="w-[650px] px-5 text-justify">
            <img className='mt-5 w-[200px]' src={LA} alt="Lumos Advisory Logo" />
            <h1 className='mt-10 text-black text-xl font-medium'>Business Valuations</h1>
            <p className='text-teal-600 pt-2 text-sm'>Business valuations are critical for numerous purposes, including mergers and acquisitions, estate planning, tax planning, and financing. They provide a clear and accurate depiction of your business's market value. For SME clients, having an accurate valuation is essential for strategic growth, competitive edge, and informed decision-making in terms of potential divestment and monetization.</p>

            <h1 className='pt-2 text-teal-600 text-xl font-medium'>Services Offered</h1>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Company Valuation:</span> Determining the potential selling price of your business in the open market.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Income Approach Valuations for Products and Services:</span> Identifying the contribution to business valuation by assessing the income and profit-generating capacity from key products or services.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Asset-Based Valuations:</span> Evaluating the total value of your business's assets.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Comparative Market Analysis:</span> Benchmarking your business against similar companies in your industry.</p>

            <div className="flex gap-5">
              <h1 className='pt-2 text-teal-600 text-xl font-medium'>Our Process and Approach</h1>
              <button 
                className="text-teal-600 underline mt-2"
                onClick={togglePopup}
              >
                <p className='flex gap-3 items-center'>Click to know more</p>
              </button>
            </div>

            {isPopupVisible && (
              <div ref={popupRef} className="absolute top-28 right-0 bg-teal-600 text-white bg-opacity-50 py-1 px-5 w-[520px] z-50">
                <h2 className="text-xl font-bold mb-4">Our Process and Approach</h2>
                <p className='pt-2 text-sm'>Our methodical approach ensures that your business valuation is comprehensive, clear, and directly aligned with your goals. Our process is streamlined and thorough, designed to deliver accurate and actionable valuations:</p>
                <p className='pt-2 text-sm'><span className='font-medium'>Initial Consultation:</span> We begin with an in-depth discussion to understand your business and valuation needs.</p>
                <p className='pt-2 text-sm'><span className='font-medium'>Data Collection:</span> Gathering necessary financial, operational, and market data to form a comprehensive information base.</p>
                <p className='text-sm'><span className='font-medium'>Analysis:</span> Utilizing various valuation methods to analyze collected data, ensuring a multi-faceted view of your business's worth.</p>
                <p className='pt-2 text-sm'><span className='font-medium'>Report Preparation:</span> Compiling findings into a detailed valuation report, highlighting key insights and recommendations.</p>
                <p className='pt-2 text-sm'><span className='font-medium'>Review and Delivery:</span> Presenting the report to you and addressing any questions or concerns to ensure clarity and understanding.</p>

                <button
                  className="bg-teal-600 text-white px-4 py-2 rounded"
                  onClick={togglePopup}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <div className="bg-white w-1.5 h-[50%]"></div>
              <div className="bg-black w-1.5 h-[50%]"></div>
            </div>
            <img className='w-[510px] h-screen' src={img7} alt="Business Valuations" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Business_valuations;
