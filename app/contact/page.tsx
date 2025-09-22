import Footer from "@/components/Footer";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => (
  <>
    <section className="flex items-center justify-center pt-20">
      <div className="w-full max-w-(--breakpoint-xl) mx-auto px-4 md:px-6 xl:px-0">
        <h1 className="text-7xl md:text-9xl text-center font-semibold tracking-tighter">
          Contact Us
        </h1>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-8 font-bold text-xl">Email</h3>
            <p className="mt-2.5 mb-4 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <Link className="font-medium" href="mailto:info@cwg-plc.com">
              info@cwg-plc.com
            </Link>
          </div>
          <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-8 font-bold text-xl">Office</h3>
            <p className="mt-2.5 mb-4 text-muted-foreground">
              Come say hello at our office HQ.
            </p>
            <Link
              className="font-medium"
              href="https://map.google.com"
              target="_blank"
            >
              Block 54A, Plot 10, Off Rufus Giwa Street, Off Adebayo Doherty
              Road, Off Admiralty Way, Lekki Phase 1, Lagos.
            </Link>
          </div>
          <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-8 font-bold text-xl">Phone</h3>
            <p className="mt-2.5 mb-4 text-muted-foreground">
              Mon-Fri from 8am to 5pm.
            </p>
            <Link className="font-medium" href="tel:07074699822">
              07074699822 | WhatsApp
            </Link>
          </div>
          <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-8 font-bold text-xl">Live chat</h3>
            <p className="mt-2.5 mb-4 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <Link className="font-medium" href="#">
              Start new chat
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Contact;
