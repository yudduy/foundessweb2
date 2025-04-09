"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have this component
import { Label } from "@/components/ui/label"; // Assuming you have this component
import { XIcon, CheckCircleIcon, Loader2 } from "lucide-react";

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.details || "Submission failed");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", title: "", reason: "" }); // Clear form on success

    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred.");
      console.error("Waitlist submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 p-4 animate-fadeIn">
      <div className="bg-[#1a1a1a] rounded-lg p-6 max-w-md w-full relative text-white">
        <button
          onClick={() => {
            onClose();
            setSubmitStatus("idle"); // Reset status on close
            setErrorMessage("");
          }}
          className="absolute top-4 right-4 text-white/70 hover:text-white disabled:opacity-50"
          disabled={isSubmitting}
        >
          <XIcon size={20} />
        </button>

        {submitStatus === "success" ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-16 h-16 bg-[#e8ff6b]/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircleIcon className="h-8 w-8 text-[#e8ff6b]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Successfully Joined!</h3>
            <p className="text-white/70 mb-6">
              Thank you for joining the waitlist. We'll be in touch shortly!
            </p>
            <Button
              onClick={() => {
                onClose();
                setSubmitStatus("idle");
              }}
              className="bg-[#e8ff6b] text-black rounded-full hover:bg-[#d9f059]"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-6 text-center">Join the Waitlist</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#333] border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#333] border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="title" className="block text-sm font-medium text-white/80 mb-1">Title</Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Your Role (e.g., Founder, CEO, Investor)"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="bg-[#333] border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="reason" className="block text-sm font-medium text-white/80 mb-1">Reason for Joining</Label>
                <Textarea
                  id="reason"
                  name="reason"
                  placeholder="Briefly tell us why you're interested"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="bg-[#333] border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50 min-h-[80px]"
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus === "error" && (
                 <p className="text-sm text-red-500">Error: {errorMessage}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-[#e8ff6b] text-black hover:bg-[#d9f059] font-medium disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                   "Submit"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
