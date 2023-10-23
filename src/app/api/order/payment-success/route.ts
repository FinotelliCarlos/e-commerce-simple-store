import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const POST = async (request: Request) => {
  const signature = request.headers.get("stripe-signature");

  const text = await request.text();

  const event = stripe.webhooks.constructEvent(
    text,
    signature as string,
    process.env.STRIPE_WEBHOOK_STRIPE_KEY,
  );

  if (event.type === "checkout.session.completed") {
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ["line_items"],
      },
    );

    const lineItems = sessionWithLineItems.line_items;

    //create order
  }

  return NextResponse.json({ received: true });
};