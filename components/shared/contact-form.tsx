// // export default function ContactForm() {
// //   return (
// //     <div className="bg-white py-12">
// //       <div className="container mx-auto px-4">
// //         <form className="max-w-lg mx-auto">
// //           <div className="mb-4">
// //             <input
// //               type="text"
// //               placeholder="What's your Name?"
// //               className="w-full p-3 border border-gray-300 rounded"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <input
// //               type="email"
// //               placeholder="Your email"
// //               className="w-full p-3 border border-gray-300 rounded"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <textarea
// //               placeholder="Message"
// //               className="w-full p-3 border border-gray-300 rounded h-32"
// //               required
// //             ></textarea>
// //           </div>
// //           <button
// //             type="submit"
// //             className="bg-[#ffd100] text-[#1a1a1a] font-bold py-3 px-6 rounded w-full hover:bg-[#e6bc00] transition duration-300"
// //           >
// //             Send Message
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }


// "use client"

// import { useState } from "react"

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     company: "",
//     serviceNeeded: "",
//     projectDetails: "",
//     referralSource: "",
//   })

//   const [errors, setErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitSuccess, setSubmitSuccess] = useState(false)

//   const serviceOptions = [
//     "Social Media Marketing",
//     "Influencer Campaigns",
//     "Content Creation / Video Production",
//     "Performance Marketing",
//     "Web Development",
//     "E-commerce Growth",
//     "Branding & Design",
//     "Not Sure Yet / Need a Consultation",
//   ]

//   const referralOptions = [
//     "Google Search",
//     "Social Media",
//     "Referral from a Friend",
//     "Online Advertisement",
//     "Event or Conference",
//     "Other",
//   ]

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })

//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null,
//       })
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     // Validate required fields
//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required"
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email address is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email address is invalid"
//     }

//     if (!formData.serviceNeeded) {
//       newErrors.serviceNeeded = "Please select a service"
//     }

//     if (!formData.projectDetails.trim()) {
//       newErrors.projectDetails = "Please provide some details about your project"
//     }

//     return newErrors
//   }

//   // const handleSubmit = (e) => {
//   //   e.preventDefault()

//   //   // Validate form
//   //   const formErrors = validateForm()
//   //   if (Object.keys(formErrors).length > 0) {
//   //     setErrors(formErrors)
//   //     return
//   //   }

//   const handleSubmit = async (e) => {
//   e.preventDefault()

//   const formErrors = validateForm()
//   if (Object.keys(formErrors).length > 0) {
//     setErrors(formErrors)
//     return
//   }

//   setIsSubmitting(true)

//   try {
//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })

//     if (!response.ok) {
//       throw new Error("Failed to submit form")
//     }

//     setSubmitSuccess(true)
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       company: "",
//       serviceNeeded: "",
//       projectDetails: "",
//       referralSource: "",
//     })

//     setTimeout(() => setSubmitSuccess(false), 5000)
//   } catch (error) {
//     console.error("Submission error:", error)
//     alert("Something went wrong while submitting the form. Please try again.")
//   } finally {
//     setIsSubmitting(false)
//   }
// }


//     // Submit form
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setSubmitSuccess(true)

//       // Reset form after successful submission
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         company: "",
//         serviceNeeded: "",
//         projectDetails: "",
//         referralSource: "",
//       })

//       // Reset success message after 5 seconds
//       setTimeout(() => {
//         setSubmitSuccess(false)
//       }, 5000)
//     }, 1500)
//   }

//   return (
//     <div className="bg-white py-12">
//       <div className="container mx-auto px-4">
//         <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
//           {/* Success Message */}
//           {submitSuccess && (
//             <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
//               Thank you for your submission! We'll be in touch soon.
//             </div>
//           )}

//           {/* Full Name */}
//           <div className="mb-6">
//             <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
//               Full Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className={`w-full p-3 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]`}
//               required
//             />
//             {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
//           </div>

//           {/* Email Address */}
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//               Email Address <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full p-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]`}
//               required
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           {/* Phone Number */}
//           <div className="mb-6">
//             <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
//               Phone Number <span className="text-gray-500 text-sm">(optional)</span>
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]"
//             />
//           </div>

//           {/* Company / Brand Name */}
//           <div className="mb-6">
//             <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
//               Company / Brand Name <span className="text-gray-500 text-sm">(optional)</span>
//             </label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]"
//             />
//           </div>

//           {/* Service Needed */}
//           <div className="mb-6">
//             <label htmlFor="serviceNeeded" className="block text-gray-700 font-medium mb-2">
//               What do you need help with? <span className="text-red-500">*</span>
//             </label>
//             <select
//               id="serviceNeeded"
//               name="serviceNeeded"
//               value={formData.serviceNeeded}
//               onChange={handleChange}
//               className={`w-full p-3 border ${errors.serviceNeeded ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]`}
//               required
//             >
//               <option value="" disabled>
//                 Select a service...
//               </option>
//               {serviceOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//             {errors.serviceNeeded && <p className="text-red-500 text-sm mt-1">{errors.serviceNeeded}</p>}
//           </div>

//           {/* Project Details */}
//           <div className="mb-6">
//             <label htmlFor="projectDetails" className="block text-gray-700 font-medium mb-2">
//               Tell us more about your project <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               id="projectDetails"
//               name="projectDetails"
//               value={formData.projectDetails}
//               onChange={handleChange}
//               rows={5}
//               className={`w-full p-3 border ${errors.projectDetails ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]`}
//               required
//             ></textarea>
//             {errors.projectDetails && <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>}
//           </div>

//           {/* Referral Source */}
//           <div className="mb-8">
//             <label htmlFor="referralSource" className="block text-gray-700 font-medium mb-2">
//               How did you hear about us? <span className="text-gray-500 text-sm">(optional)</span>
//             </label>
//             <select
//               id="referralSource"
//               name="referralSource"
//               value={formData.referralSource}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]"
//             >
//               <option value="" disabled>
//                 Select an option...
//               </option>
//               {referralOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-[#ffd100] text-[#1a1a1a] font-bold py-4 px-6 rounded hover:bg-[#e6bc00] transition duration-300 flex items-center justify-center"
//           >
//             {isSubmitting ? (
//               <span className="inline-block w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin mr-2"></span>
//             ) : (
//               <span className="mr-2">👉</span>
//             )}
//             Let's Get Started
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceNeeded: "",
    projectDetails: "",
    referralSource: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const serviceOptions = [
    "Social Media Marketing",
    "Influencer Campaigns",
    "Content Creation / Video Production",
    "Performance Marketing",
    "Web Development",
    "E-commerce Growth",
    "Branding & Design",
    "Not Sure Yet / Need a Consultation",
  ]

  const referralOptions = [
    "Google Search",
    "Social Media",
    "Referral from a Friend",
    "Online Advertisement",
    "Event or Conference",
    "Other",
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid"
    }

    if (!formData.serviceNeeded) {
      newErrors.serviceNeeded = "Please select a service"
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please provide some details about your project"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setSubmitSuccess(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        serviceNeeded: "",
        projectDetails: "",
        referralSource: "",
      })

      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Submission error:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
              Thank you for your submission! We'll be in touch soon.
            </div>
          )}

          {/* Full Name */}
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]`}
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number <span className="text-gray-500 text-sm">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]"
            />
          </div>

          {/* Company */}
          <div className="mb-6">
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
              Company / Brand Name <span className="text-gray-500 text-sm">(optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]"
            />
          </div>

          {/* Service Needed */}
          <div className="mb-6">
            <label htmlFor="serviceNeeded" className="block text-gray-700 font-medium mb-2">
              What do you need help with? <span className="text-red-500">*</span>
            </label>
            <select
              id="serviceNeeded"
              name="serviceNeeded"
              value={formData.serviceNeeded}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.serviceNeeded ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]`}
              required
            >
              <option value="" disabled>Select a service...</option>
              {serviceOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            {errors.serviceNeeded && <p className="text-red-500 text-sm mt-1">{errors.serviceNeeded}</p>}
          </div>

          {/* Project Details */}
          <div className="mb-6">
            <label htmlFor="projectDetails" className="block text-gray-700 font-medium mb-2">
              Tell us more about your project <span className="text-red-500">*</span>
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows={5}
              className={`w-full p-3 border ${errors.projectDetails ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]`}
              required
            ></textarea>
            {errors.projectDetails && <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>}
          </div>

          {/* Referral Source */}
          <div className="mb-8">
            <label htmlFor="referralSource" className="block text-gray-700 font-medium mb-2">
              How did you hear about us? <span className="text-gray-500 text-sm">(optional)</span>
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ffd100]"
            >
              <option value="" disabled>Select an option...</option>
              {referralOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#ffd100] text-[#1a1a1a] font-bold py-4 px-6 rounded hover:bg-[#e6bc00] transition duration-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <span className="inline-block w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : (
              <span className="mr-2">👉</span>
            )}
            Let's Get Started
          </button>
        </form>
      </div>
    </div>
  )
}
