import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      service: data.get("service"),
      suburb: data.get("suburb"),
      message: data.get("message"),
      receivedAt: new Date().toISOString(),
    };

    // Demo build: the endpoint accepts the submission and logs it server-side.
    // Before launch, wire this to Formspree, Resend, or the client's preferred delivery target.
    console.info("[cederhof-roofing] contact form submission", payload);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown error";
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
