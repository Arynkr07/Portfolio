import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 px-6 max-w-6xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6 text-indigo-400">Contact Me</h3>
      <p className="mb-4">You can reach me at <a href="mailto:aryan@example.com" className="text-indigo-300">aryan@example.com</a></p>
      <button className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition">
        Say Hello
      </button>
    </section>
  );
}
