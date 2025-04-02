import { Mail, MapPin, Phone, Send } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { Footer } from "./Footer";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to answer your questions and hear your feedback
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-xl shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 hover:bg-secondary/5 rounded-lg transition-colors">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">General Inquiries</h3>
                    <p className="text-muted-foreground">contact@ClimaVision.com</p>
                    <p className="text-muted-foreground text-sm mt-1">Typically responds within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-secondary/5 rounded-lg transition-colors">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Technical Support</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm mt-1">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-secondary/5 rounded-lg transition-colors">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Weather Lane<br />
                      Boston, MA 02108, USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.665953483728!2d-71.059486924014!3d42.35185197119379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708e46b5b6cd%3A0x7f0e9c4a4d6b8e1e!2sBoston%20City%20Hall!5e0!3m2!1sen!2sus!4v1623257987734!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-background px-4 py-2 rounded-full border mb-4">
            <Send className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Fast Responses</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Urgent Support Needed?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Our 24/7 critical support team is standing by
          </p>
          <a
            href="mailto:support@ClimaVision.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contact Support
          </a>
        </div>
      </section>
         <Footer />
    </div>
  );
}