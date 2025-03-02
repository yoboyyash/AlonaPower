import React from 'react';

const ContactForm = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Append Web3Forms Access Key
        formData.append("access_key", "72ee0237-ea3f-464e-912c-bf436396b153");

        // Debugging: Log FormData before sending
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                console.log("Success", result);
                alert("Message sent successfully!");
                event.target.reset(); // Reset form after submission
            } else {
                console.error("Error", result);
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-300 via-purple-400 to-blue-300 p-10">
            <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-lg mb-6">Touch Base</h2>
            <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4 outline-3 outline-black">
                <input 
                    name="name" 
                    type="text" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-center" 
                    placeholder="Your Name" 
                    required 
                />
                <input 
                    name="email" 
                    type="email" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center" 
                    placeholder="Email" 
                    required 
                />
                <input 
                    name="phone" 
                    type="text" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-center" 
                    placeholder="Phone Number (Optional)" 
                />
                <textarea 
                    name="message" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center" 
                    placeholder="Your Message" 
                    required
                ></textarea>
                <button 
                    type="submit" 
                    className="w-full p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all"
                >
                    Send
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
