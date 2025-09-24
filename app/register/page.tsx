"use client";

import { RegistrationForm } from "@/components/Home-Page/Forms/Registration";
import Image from "next/image";
import RegisterImg from "@/public/register.jpg";

const Register = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2 items-center pt-12 md:pt-0">
        <RegistrationForm />
        <div className="bg-muted hidden lg:block border-l h-4/5 rounded-tl-2xl rounded-bl-2xl overflow-hidden">
          <Image
            src={RegisterImg}
            alt="register"
            className="w-full h-full object-cover lg:object-left xl:object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
