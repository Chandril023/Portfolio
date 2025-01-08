import React from "react";

const apiKey = "2a8d47a9-835d-4791-a00f-d407265dce12";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract form data
    const formData = {
      access_key: apiKey,
      name: e.currentTarget.elements.namedItem("name").value,
      Phone: e.currentTarget.elements.namedItem("Phone").value,
      message: e.currentTarget.elements.namedItem("message").value,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        console.log("Form submitted successfully:", result);
        alert("Form submitted successfully!");
        window.location.reload();
      } else {
        console.error("Form submission error:", result);
        alert("Error!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-10 space-y-6">
    
      <div className="w-full max-w-md flex justify-center items-center my-10">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-transparent p-6 rounded-lg shadow-lg space-y-4 border border-gray-300 dark:border-gray-600"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:text-white dark:bg-gray-700"
            required
          />
          <input
            type="tel"
            name="Phone"
            placeholder="Enter your phone number"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:text-white dark:bg-gray-700"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:text-white dark:bg-gray-700"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
