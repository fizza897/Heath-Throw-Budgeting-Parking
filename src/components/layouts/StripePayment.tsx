// import { convertToSubcurrency } from "@/lib/utils";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe, Stripe } from "@stripe/stripe-js";
// import CheckoutPage from "../forms/CheckoutPage";
// let stripePromise: Promise<Stripe | null>;
// if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY == undefined) {
//   stripePromise = loadStripe("");
// } else {
//   stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
// }


// export default function StripePayment({ amount, formData }: { amount: number, formData: any }) {
  
//   console.log("Price: ",amount)
//   return (
//     <main className="max-w-6xl mx-auto p-1 text-black text-center m-1 rounded-md bg-white">
//       {((amount != undefined && !Number.isNaN(amount))) ? <Elements
//         stripe={stripePromise}
//         options={{
//           mode: "payment",
//           amount: convertToSubcurrency(amount),
//           currency: "gbp",
//         }}
//       >
//         <CheckoutPage amount={amount} formData={formData} />
//       </Elements> : <h1 className="text-4xl font-extrabold mb-2 text-green-600">
//         Fill all the fields first
//       </h1>}
//     </main>
//   );
// }
