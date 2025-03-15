import React, { useState, useRef } from "react";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const donationAmounts = [25, 50, 100, 250, 500];

const DonateSection = () => {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  function useInView(ref: React.RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry?.isIntersecting ?? false);
        },
        { threshold: 0.1 },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref]);

    return isIntersecting;
  }

  const isInView = useInView(sectionRef);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setCustomAmount("");
      setAmount(null);
    } else if (/^\d*\.?\d{0,2}$/.test(value)) {
      setCustomAmount(value);
      setAmount(parseFloat(value));
    }
  };

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      toast.error("The donation amount must be greater than zero");

      return;
    }

    // Simulate form submission
    toast.success("Thank you for your donation!");

    // Reset form
    setName("");
    setEmail("");
    setAmount(50);
    setCustomAmount("");
    setIsRecurring(false);
  };

  return (
    <section id="donate" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="bg-secondary-50 text-secondary-700 mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium">
            Support Our Cause
          </span>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Make a Difference Today
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
          <p className="text-lg text-gray-600">
            Your donation directly supports our programs to connect orphaned
            children with loving families.
          </p>
        </div>

        <div
          className={`mx-auto max-w-2xl ${isInView ? "animate-scale-in" : "opacity-0"}`}
        >
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-center text-white">
              <h3 className="mb-2 text-2xl font-bold">Donate to Yallakafala</h3>
              <p>
                Every donation brings a child closer to finding a loving home
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="mb-8">
                <label className="mb-4 block font-medium text-gray-700">
                  Select donation amount
                </label>
                <div className="mb-4 grid grid-cols-3 gap-3">
                  {donationAmounts.map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={cn(
                        "rounded-lg border-2 py-3 font-medium transition-all duration-200",
                        amount === value
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-200 hover:border-primary/30 hover:bg-gray-50",
                      )}
                      onClick={() => handleAmountClick(value)}
                    >
                      ${value}
                    </button>
                  ))}
                </div>

                <div className="relative mt-4">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500">$</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="block w-full rounded-lg border-2 border-gray-200 py-3 pl-8 pr-4 focus:border-primary focus:outline-none focus:ring-primary/30"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={() => setIsRecurring(!isRecurring)}
                    className="sr-only"
                  />
                  <div
                    className={`relative h-5 w-10 rounded-full transition-colors duration-200 ease-in-out ${isRecurring ? "bg-primary" : "bg-gray-300"}`}
                  >
                    <div
                      className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${isRecurring ? "translate-x-5 transform" : ""}`}
                    ></div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Make this a monthly donation
                  </span>
                </label>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:outline-none focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:outline-none focus:ring-primary/30"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                {isRecurring ? "Donate Monthly" : "Donate Now"}
              </Button>

              <p className="mt-4 text-center text-sm text-gray-500">
                Your donation is tax-deductible. You will receive a receipt via
                email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
