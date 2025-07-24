import { Toaster, toast } from "sonner";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      toast.error("Hey, what's your good name? Don’t be mysterious like Batman.");
      return;
    }
    if (!email) {
      toast.error("No email? How am I supposed to slide into your inbox?");
      return;
    }
    if (!message) {
      toast.error("C'mon, at least say hi. I don’t bite… usually.");
      return;
    }
    if(!emailRegex.test(email)){
      toast.error('Haha I like that, now give me a valid emailId')
    }

    form.submit(); 
    toast.success("Thanks! Your message has been launched into the inbox void");
    form.reset();
  };

  return (
    <section
      id="getintouch"
      className="h-screen bg-gradient-to-b from-[#302b63] to-[#24243e] pt-20 px-5 pb-20 flex items-center justify-center"
    >
      <Toaster richColors />
      <form
        ref={formRef}
        action="https://formsubmit.co/rojinraj96@gmail.com"
        method="POST"
        className="w-full max-w-xl glassmorphic p-8 sm:p-10 flex flex-col gap-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 text-transparent bg-clip-text mb-2">
          Get in Touch
        </h1>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://rojinraj641.github.io/Portfolio/thanks" />

        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Your Name"
          className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Your Email"
          className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <textarea
          name="message"
          rows="3"
          autoComplete="off"
          placeholder="Your Message"
          className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        ></textarea>

        <button
          type="button"
          onClick={handleSubmit}
          className="mt-2 bg-pink-500 hover:from-pink-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
