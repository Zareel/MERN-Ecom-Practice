import React from "react";
import Layout from "../components/layout/Layout";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto  ">
        <div className="w-full flex justify-between items-center">
          <div className="w-[50%] h-[65vh] flex justify-center items-center">
            <img src="/images/contactus.jpg" alt="" />
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center gap-2">
            <h1 className="text-5xl font-roboto text-gray-900">Contact Us</h1>
            <p className="text-xl text-gray-800">
              Get the info you are looking for right
              <span className="text-green-500 font-semibold text-xl px-2">
                Now
              </span>
            </p>
            <p className="text-xl text-grya-800">
              We are here{" "}
              <span className="text-green-500 font-semibold text-xl">24/7</span>
            </p>
            <div className="py-6 flex flex-col gap-2">
              <div>
                <span className="px-4">
                  <EmailIcon />
                </span>
                <span>: www.service@clicktocart.com</span>
              </div>
              <div>
                <span className="px-4">
                  <CallIcon />
                </span>
                <span>:012-9123459874</span>
              </div>
              <div>
                <span className="px-4">
                  <WhatsAppIcon />
                </span>
                <span>: what's app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
