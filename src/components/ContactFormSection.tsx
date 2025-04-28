import { Mail, Phone, User, Building2, MessageSquare } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function EnquiryForm({ background }: { background: string }) {
  const formRef = useRef<HTMLFormElement>(null);

  const [qualification, setQualification] = useState("");
  const [qualificationOther, setQualificationOther] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [interestOther, setInterestOther] = useState("");
  const [otherService, setOtherService] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleInterestChange = (label: string, checked: boolean) => {
    if (label === "Other") setOtherService(checked);

    if (checked) {
      setInterests((prev) => [...prev, label]);
    } else {
      setInterests((prev) => prev.filter((item) => item !== label));
      if (label === "Other") setInterestOther("");
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);
    setStatus("idle");

    const formData = new FormData(formRef.current);

    const interestFinal = otherService
      ? [...interests.filter((i) => i !== "Other"), interestOther]
      : interests;

    const qualificationFinal =
      qualification === "Other" ? qualificationOther : qualification;

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("phone"),
      qualification: qualificationFinal,
      science: formData.get("science"),
      interests: interestFinal.join(", "),
      message: formData.get("message") || "",
    };

    emailjs
      .send("service_e85z9kv", "template_o98pok7", data, "HYPHiGDRPLjBWpwKH")
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        setQualification("");
        setQualificationOther("");
        setOtherService(false);
        setInterestOther("");
        setInterests([]);
      })
      .catch((err) => {
        console.error("EmailJS Error", err);
        setStatus("error");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <section
      className="relative py-24 px-4"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-2xl border border-gray-200">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-3">
            Get in Touch
          </h2>
          <div className="h-1 w-24 mx-auto bg-yellow-400 rounded-full mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Your Gateway to Becoming a Professional Aviator
          </h3>
          <p className="text-gray-600 text-md md:text-lg">
            Start your flight journey with expert mentorship and unwavering
            support.
          </p>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {[
            {
              label: "Name",
              name: "name",
              type: "text",
              icon: <User size={18} />,
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              icon: <Mail size={18} />,
            },
            {
              label: "Mobile number",
              name: "phone",
              type: "tel",
              icon: <Phone size={18} />,
            },
          ].map(({ label, name, type, icon }) => (
            <div key={label} className="relative">
              <div className="absolute top-2.5 left-3 text-gray-500">
                {icon}
              </div>
              <input
                type={type}
                name={name}
                required
                placeholder={label}
                className="w-full pl-10 pr-4 py-2 border rounded-md outline-none focus:ring-2 ring-blue-300"
              />
            </div>
          ))}

          {/* Educational Qualification */}
          <div className="relative">
            <div className="absolute top-2.5 left-3 text-gray-500">
              <Building2 size={18} />
            </div>
            <select
              name="qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md outline-none focus:ring-2 ring-blue-300"
              required
            >
              <option value="">Select Qualification</option>
              <option>10th Pass</option>
              <option>12th Pass</option>
              <option>Diploma</option>
              <option>Graduate</option>
              <option>Postgraduate</option>
              <option>Other</option>
            </select>
          </div>
          {qualification === "Other" && (
            <input
              type="text"
              name="qualification_other"
              value={qualificationOther}
              onChange={(e) => setQualificationOther(e.target.value)}
              placeholder="Please specify"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 ring-blue-300"
              required
            />
          )}

          {/* Physics & Math */}
          <div>
            <label className="font-semibold block mb-1 text-sm">
              Studied Physics & Math in 10+2?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="science" value="Yes" required /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="science" value="No" /> No
              </label>
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="font-semibold block mb-2 text-sm">
              Are you looking for:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Ground School Classes",
                "Assistance with Computer Number",
                "Pilot Career Counseling",
                "DGCA Exams Guidance",
                "License Conversion Help",
                "Flight training in India",
                "Flight training abroad",
                "Other",
              ].map((label) => (
                <label key={label} className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={label}
                    onChange={(e) =>
                      handleInterestChange(label, e.target.checked)
                    }
                  />{" "}
                  {label}
                </label>
              ))}
            </div>
            {otherService && (
              <input
                type="text"
                name="interest_other"
                value={interestOther}
                onChange={(e) => setInterestOther(e.target.value)}
                placeholder="Please specify"
                className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 ring-blue-300"
                required
              />
            )}
          </div>

          {/* Message (Optional) */}
          <div className="relative">
            <div className="absolute top-3 left-3 text-gray-500">
              <MessageSquare size={18} />
            </div>
            <textarea
              rows={4}
              name="message"
              placeholder="Anything you'd like us to know?"
              className="w-full pl-10 pr-4 py-2 border rounded-md outline-none focus:ring-2 ring-blue-300"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={submitting}
              className={`px-6 py-3 rounded-md font-bold text-white transition ${
                submitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-green-600 font-semibold">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 font-semibold">
                Oops, something went wrong.
              </p>
            )}
          </div>
        </form>

        {/* Divider */}
        <hr className="my-10 border-t-2 border-gray-200 w-3/4 mx-auto" />

        {/* Facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-navy-blue font-[Times_New_Roman] mb-10">
          <div className="col-span-1 md:col-span-1">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm leading-tight">
              Instructor-Led
              <br />
              Sessions
            </p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <p className="text-2xl font-bold">DGCA</p>
            <p className="text-sm leading-tight">Syllabus Aligned</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold">0 → ✈</p>
            <p className="text-sm leading-tight">
              From First Flight to
              <br />
              Final Exam
            </p>
          </div>
        </div>
        {/* Contact Box */}
        <div className="w-full max-w-lg mx-auto bg-white border border-yellow-400 rounded-xl p-6 flex flex-col gap-4 items-start shadow-sm">
          <a
            href="tel:+916366790320"
            className="flex items-center gap-4 text-navy-blue hover:text-blue-700"
          >
            <div className="bg-gray-200 p-2 rounded-full">
              <Phone className="h-5 w-5 text-navy-blue" />
            </div>
            <span className="font-bold text-sm md:text-base">
              +91 6366790320
            </span>
          </a>
          <a
            href="mailto:vortexwingsinst@gmail.com"
            className="flex items-center gap-4 text-navy-blue hover:text-blue-700"
          >
            <div className="bg-gray-200 p-2 rounded-full">
              <Mail className="h-5 w-5 text-navy-blue" />
            </div>
            <span className="font-bold text-sm md:text-base">
              vortexwingsinst@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
