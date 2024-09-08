import { Section } from "../Interface";
const Contact = () => {
  return (
    <Section>
        <h2 className="text-5xl font-bold">Contact me</h2>
        <div className=" mt-8 p-8 rounded-md bg-white w-96 max-w-full">
          <form>
            <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 py-1.5 px-2.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />

            <label htmlFor="email" className="font-medium text-gray-900 block mb-1">
              Email
            </label>
            <input
              type="email" 
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 py-1.5 px-2.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />

            <label htmlFor="message" className="font-medium text-gray-900 block mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 py-1.5 px-2.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />

            <button
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
              Submit
            </button>

          </form>

        </div>
    </Section>
  )
};

export default Contact;