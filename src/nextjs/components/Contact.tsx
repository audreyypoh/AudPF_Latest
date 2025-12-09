"use client";

import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      alert("Thank you for your interest! I'll get back to you within 24 hours to schedule a consultation.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      alert("There was an error sending your message. Please try again or email me directly at audreyy.poh@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-px bg-foreground/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 italic">Get In Touch</h2>
          <p className="text-xl opacity-60">
            Schedule a complimentary consultation to discuss your financial goals
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl mb-10 italic">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="border border-foreground/20 p-4">
                  <Mail className="opacity-70" size={24} />
                </div>
                <div>
                  <p className="mb-2 opacity-60">Email</p>
                  <a href="mailto:audreyy.poh@gmail.com" className="hover:opacity-60 transition-opacity underline decoration-1">
                    audreyy.poh@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="border border-foreground/20 p-4">
                  <MapPin className="opacity-70" size={24} />
                </div>
                <div>
                  <p className="mb-2 opacity-60">Location</p>
                  <p className="opacity-75">Singapore</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full border-foreground/20 bg-card"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full border-foreground/20 bg-card"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number (e.g., +65 9123 4567)"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[\+]?[0-9\s\-]+"
                  disabled={isSubmitting}
                  className="w-full border-foreground/20 bg-card"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full min-h-[150px] border-foreground/20 bg-card"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-foreground text-background hover:bg-foreground/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request Consultation"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}