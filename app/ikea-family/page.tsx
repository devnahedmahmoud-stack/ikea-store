"use client";

import Image from "next/image"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IkeaFamilySchema, type IkeaFamilyFormData, NATIONALITIES } from "@/schemas/IkeaFamilySchema";
import { useState } from "react";

const IkeaFamilyPage = () => {
  const today = new Date().toISOString().split("T")[0]
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
    reset,
  } = useForm<IkeaFamilyFormData>({
    resolver: zodResolver(IkeaFamilySchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "female",
      dob: "",
      postcode: "",
      address: "",
      nationality: "",
      terms: false,
    },
  });

  async function onSubmit(data: IkeaFamilyFormData) {
    try {
      setSubmitError("");
      setSubmitSuccess(false);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("IKEA Family Registration:", data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      setSubmitError("An error occurred. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-200">IKEA Family</p>
              <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
                Join IKEA Family for exclusive offers and everyday inspiration.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200">
                Get member-only discounts, free workshops, home furnishing inspiration, and extra protection on selected products.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-950 shadow-lg shadow-slate-950/10 hover:bg-slate-100"
                >
                  Discover benefits
                </a>
                <a
                  href="#offers"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20"
                >
                  View offers
                </a>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 shadow-2xl shadow-slate-950/20">
              <Image
                src="/now-in-ikea/family-offer.png"
                alt="IKEA Family offer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            {
              title: "Member prices",
              description:
                "Save on seasonal products and everyday essentials with IKEA Family-only offers.",
            },
            {
              title: "Inspiration & events",
              description:
                "Attend member workshops, design events and get access to curated home styling ideas.",
            },
            {
              title: "Extra protection",
              description:
                "Enjoy additional product protection and easy returns on selected purchases.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">{card.title}</h2>
              <p className="mt-4 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="register" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200/20 bg-slate-800/80 p-10 shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
            <div className="mb-10 space-y-3">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Register now</p>
              <h2 className="text-4xl font-semibold">Not a member yet? Join Now!</h2>
              <p className="max-w-3xl text-slate-300">
                Sign up in seconds to receive exclusive deals, free workshops, and inspiration tailored for your home.
              </p>
            </div>

            <form className="grid gap-6 sm:grid-cols-[1fr_1fr] sm:items-end" onSubmit={handleSubmit(onSubmit)} noValidate>
              
              
              {submitError && (
                <div className="rounded-2xl border border-red-400/50 bg-red-950/40 p-4 text-sm text-red-200 sm:col-span-2">
                  {submitError}
                </div>
              )}

              <div>
                <label className="space-y-2 text-sm text-slate-200 block">
                  <span>First name <span className="text-red-500">*</span></span>
                  <input
                    type="text"
                    placeholder="Your first name"
                    {...register("firstName")}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400"
                  />
                </label>
                <div className="h-5">
                  {errors.firstName && (
                    <p className="text-xs text-red-400 mt-1">{errors.firstName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="space-y-2 text-sm text-slate-200 block">
                  <span>Last name <span className="text-red-500">*</span></span>
                  <input
                    type="text"
                    placeholder="Your last name"
                    {...register("lastName")}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400"
                  />
                </label>
                <div className="h-5">
                  {errors.lastName && (
                    <p className="text-xs text-red-400 mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="space-y-2 text-sm text-slate-200 block">
                  <span>Email address <span className="text-red-500">*</span></span>
                  <input
                    type="email"
                    placeholder="example@ikea.com"
                    {...register("email")}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400"
                  />
                </label>
                <div className="h-5">
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="space-y-3 text-sm text-slate-200">
                  <span className="block">Gender <span className="text-red-500">*</span></span>
                  <div className="grid gap-3 grid-cols-2">
                    {[
                      { value: "female", label: "Female" },
                      { value: "male", label: "Male" },                    
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 transition hover:border-sky-400"
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...register("gender")}
                          className="h-5 w-5 rounded-full border-slate-400 bg-white text-sky-400 focus:ring-sky-400"
                        />
                        <span className="text-slate-950">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="h-5">
                  {errors.gender && (
                    <p className="text-xs text-red-400 mt-1">{errors.gender.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="space-y-2 text-sm text-slate-200 block">
                  <span>Date of birth <span className="text-red-500">*</span></span>
                  <input
                    type="date"
                    max={today}
                    {...register("dob")}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400"
                  />
                </label>
                <div className="h-5">
                  {errors.dob && (
                    <p className="text-xs text-red-400 mt-1">{errors.dob.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="space-y-2 text-sm text-slate-200 block">
                  <span>Phone number <span className="text-red-500">*</span></span>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    {...register("postcode")}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400"
                  />
                </label>
                <div className="h-5">
                  {errors.postcode && (
                    <p className="text-xs text-red-400 mt-1">{errors.postcode.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="space-y-2 text-sm text-slate-200 block">
                  <span>Address <span className="text-red-500">*</span></span>
                  <input
                    type="text"
                    placeholder="Your address"
                    {...register("address")}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400"
                  />
                </label>
                <div className="h-5">
                  {errors.address && (
                    <p className="text-xs text-red-400 mt-1">{errors.address.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="space-y-2 text-sm text-slate-200 block">
                  <span>Nationality <span className="text-red-500">*</span></span>
                  <select
                    {...register("nationality")}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 cursor-pointer"
                  >
                    <option value="">Select your nationality</option>
                    {NATIONALITIES.map((nat) => (
                      <option key={nat} value={nat}>
                        {nat}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="h-5">
                  {errors.nationality && (
                    <p className="text-xs text-red-400 mt-1">{errors.nationality.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 rounded-2xl border border-slate-700 bg-slate-900/90 p-4 text-sm text-slate-200">
                  <input
                    type="checkbox"
                    {...register("terms")}
                    className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800 text-sky-400 focus:ring-sky-400"
                  />
                  <span>
                    I agree to the IKEA Family <a href="#" className="text-sky-300 underline hover:text-sky-200">terms and conditions</a> and privacy policy.
                  </span>
                </label>
                <div className="h-5">
                  {errors.terms && (
                    <p className="text-xs text-red-400 mt-1">{errors.terms.message}</p>
                  )}
                </div>
              </div>
{submitSuccess && (
                <div className="rounded-2xl border border-emerald-400/50 bg-emerald-950/40 p-4 text-sm text-emerald-200 sm:col-span-2">
                  ✓ Successfully registered for IKEA Family!
                </div>
              )}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  //disabled={!isDirty || !isValid || isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-8 py-4 text-sm font-semibold text-slate-950 transition"
                >
                  {isSubmitting ? "Registering..." : "Register now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="offers" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Member offer</p>
              <h2 className="text-4xl font-semibold text-slate-950">Current IKEA Family highlights</h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Join today to unlock extra value on products, exclusive events, and free delivery promotions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Monthly member price",
                detail: "Save up to 25% on selected products every month.",
              },
              {
                title: "Family workshops",
                detail: "Unlock invitations to free in-store workshops and styling sessions.",
              },
              {
                title: "Free delivery offer",
                detail: "Get free delivery on accessory purchases over 250 EGP.",
              },
            ].map((offer) => (
              <div key={offer.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Offer</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{offer.title}</h3>
                <p className="mt-4 text-slate-600">{offer.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default IkeaFamilyPage
