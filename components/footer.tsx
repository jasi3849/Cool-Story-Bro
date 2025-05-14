import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/images/logo.png" alt="COOL STORY BRO" width={150} height={100} className="mb-4" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#ffd100]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ffd100]">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="hover:text-[#ffd100]">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/terms" className="hover:text-[#ffd100]">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#ffd100]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-bold mb-4">Wholesale</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/track" className="hover:text-[#ffd100]">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-[#ffd100]">
                  Return & Cancellations
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <p className="font-bold">Phone Number</p>
                <p>+91 97668 91629</p>
                <p>+91 8888676074 </p>
              </li>
              <li>
                <p className="font-bold">Email Address</p>
                <p>coolstorybro.in@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} COOL STORY BRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
