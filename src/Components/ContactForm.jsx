const Contact = () => {
    return (
        <section className="p-10">
            
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            
            <form className="flex flex-col space-y-4">

                <input className="p-2 border" type="text" placeholder="Your Name" required/>
                <input className="p-2 border" type="email" placeholder="Email" required/>
                <input className="p-2 border" type="text" placeholder="Phone Number (Optional)"/>
                <input className="p-2 border" type="text" placeholder=" Your Message" required/>
                <button className="p-2 bg-blue-500 text-white">Send</button>              

            </form>

        </section>
    );
};

export default Contact;