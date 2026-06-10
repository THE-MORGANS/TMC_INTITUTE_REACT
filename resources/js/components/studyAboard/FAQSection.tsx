import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Can you help students from anywhere in the world",
      answer: "Yes, we can. Our advisers can assist you from any location. Counselling sessions are done via Zoom, Meet or a digital platform that works for you; as well as over the phone. All paperwork is received via a secure portal so advice and assistance can be offered to anyone without the need to come to our physical offices."
    },
    {
      question: "Do you have a special agreement with the institutions?",
      answer: "Yes, we do. In most cases we will have a contract which allows us to represent the institution. This means that the institution will have given us the specialised training to our study advisers so we have direct access to the admissions team."
    },
    {
      question: "Do I need to do a foundation/pre-university year or can I go direct to the first year?",
      answer: "This will depend on your grades. However, in most cases, you should be able to enter the first year if you have attained high grades and have studied for at least twelve years. It also depends on your country and your institution of choice. So please discuss more with your study adviser."
    },
    {
      question: "How long will my visa last?",
      answer: "Your visa will generally be valid for the duration of your course. However, it will depend largely on the type of visa you applied for. It may be possible to move to a post-study visa, depending on your course and country you study in. Please speak to your study adviser for more details."
    },
    {
      question: "How long will my visa take once I have applied?",
      answer: "It will depend on the country and the type of visa you've applied for. There are also fast track visa application services for most countries. Speak to your study adviser to find out more."
    },
    {
      question: "Can I work while I study?",
      answer: "It will depend on your visa and country. In most cases, you will be able to work around 20hours per week and full-time during breaks."
    },
    {
      question: "Can I get my tuition deposit back if i decide not to go to the university I applied to or if I get a visa rejection?",
      answer: "This will depend on the institutions refund policy. In most cases you should be able to apply for a refund of your deposit if you have not yet arrived at the institution."
    }
  ];

  return (
    // <section className="w-full py-16 px-4 bg-white">
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-[clamp(1.7rem,3vw,2.2rem)] font-bold text-black mb-3">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-gray-700 mb-8">
          If you do not find the answer to your question below, please do not hesitate to get in touch with us. Our skilled study advisers are here to assist you in any and every way they can.
        </p>

        {/* FAQ List */}
        <div className="divide-y divide-gray-300">
          {faqs.map((item, index) => (
            <div key={index} className="py-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                {item.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;