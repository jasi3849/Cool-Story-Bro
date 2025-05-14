import ContactForm from "./contact-form"

export default function ContactUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Have any query?</h2>
            <h3 className="text-2xl font-bold mb-6">CONTACT US</h3>
            <p className="mb-8">
              Feel free to reach out to us! Our team is here to help with any inquiries. Contact us today, and we'll get
              back to you promptly!
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">coolstorybro.in@gmail.com</h4>
                {/* <p>coolstorybro.in@gmail.com</p> */}
                <p>+91 8888676074 </p>
                <p>+91 97668 91629</p>

                </div>
              <div>
                {/* <h4 className="font-bold">XYZ</h4> */}
                {/* <p>XYZ@Sample.com</p>
                <p>+9547253678</p> */}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
