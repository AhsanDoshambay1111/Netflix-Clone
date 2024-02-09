import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const FAQItem = ({ index, question, answer, isOpen, onToggle }) => {
  const toggleAnswerVisibility = () => {
    onToggle(index);
  };

  return (
    <div
      className={`w-[90%] lg:w-[60%] mx-auto mt-2 p-4 text-[white] bg-[#2d2d2d] faq-item ${isOpen ? "open" : ""}`}
      data-aos={isOpen ? "fade-up" : ""}
    >
      <h3
        className="flex items-center pb-2 justify-between faq-question lg:text-2xl font-semibold"
        data-aos="fade-right"
      >
        {question}{" "}
        <FontAwesomeIcon
          className="icon cursor-pointer"
          icon={isOpen ? faTimes : faPlus}
          onClick={toggleAnswerVisibility}
        />
      </h3>
      <hr className=""></hr>
      {isOpen && (
        <p className="faq-answer pt-2 w-[95%]" data-aos="fade-up">
          {answer}
        </p>
      )}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[black] pb-10">
      <hr className="h-[10px] relative border-none bg-[#232323]"></hr>

      <h1 className="text-white text-center text-3xl lg:text-5xl pt-16 font-bold">
        Frequently Asked Questions
      </h1>

      <div className="flex items-center min-h-[50vh] justify-center">
        <div className="w-[100%] mt-[50px]">
          <FAQItem
            index={0}
            question="What is Netflix ?"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
            isOpen={openIndex === 0}
            onToggle={handleToggle}
          />

          <FAQItem
            index={1}
            question="How Much Does Netflix Cost ?"
            answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 1,100 to Rs 250 a month. No extra costs, no contracts."
            isOpen={openIndex === 1}
            onToggle={handleToggle}
          />

          <FAQItem
            index={2}
            question="What can I Watch On Netflix ?"
            answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
            isOpen={openIndex === 2}
            onToggle={handleToggle}
          />

          <FAQItem
            index={3}
            question="Is Netflix Good For Kids ?"
            answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
            isOpen={openIndex === 3}
            onToggle={handleToggle}
          />

          <FAQItem
            index={4}
            question="Where Can I Watch ?"
            answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            isOpen={openIndex === 4}
            onToggle={handleToggle}
          />
          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
