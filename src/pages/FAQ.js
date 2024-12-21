import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What makes Natorina's food healthy?",
    answer: "At Natorina, we prioritize using organic, locally-sourced ingredients whenever possible. Our meals are carefully balanced to provide essential nutrients while maintaining great taste. We avoid artificial preservatives and focus on whole, natural ingredients.",
  },
  {
    question: "Do you cater to specific dietary requirements?",
    answer: "Yes! We offer various options for different dietary needs, including vegetarian, vegan, gluten-free, and dairy-free meals. Each item on our menu is clearly labeled with dietary information.",
  },
  {
    question: "How do you ensure food quality and safety?",
    answer: "We maintain strict quality control measures in our kitchen. All our ingredients are carefully sourced from trusted suppliers, and our staff follows rigorous food safety protocols. Our kitchen is regularly inspected and certified.",
  },
  {
    question: "What are your delivery areas and times?",
    answer: "We currently deliver within a 10-mile radius of our location. Delivery times are available from 11 AM to 9 PM daily. Delivery fees and minimum order requirements may vary based on your location.",
  },
  {
    question: "How can I modify or cancel my order?",
    answer: "Orders can be modified or canceled within 30 minutes of placing them. Please contact our customer service team through the website or phone for assistance with any order changes.",
  },
  {
    question: "Do you offer meal plans or subscriptions?",
    answer: "Yes! We offer weekly and monthly meal plan subscriptions with special pricing. These can be customized to your dietary preferences and schedule. Contact us for more details about our meal plan options.",
  },
  {
    question: "What is your refund policy?",
    answer: "We want you to be completely satisfied with your order. If there's any issue with your meal, please contact us within 24 hours of delivery, and we'll make it right through a refund or replacement.",
  },
  {
    question: "Are your packaging materials eco-friendly?",
    answer: "Yes, we use biodegradable and recyclable packaging materials whenever possible. Our commitment to health extends to environmental responsibility, and we're constantly working to minimize our ecological footprint.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform transition duration-200'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>

          <div className="mt-10 pt-10">
            <h3 className="text-lg font-semibold text-gray-900">Still have questions?</h3>
            <p className="mt-4 text-gray-600">
              Can't find what you're looking for? Please contact our customer support team.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 