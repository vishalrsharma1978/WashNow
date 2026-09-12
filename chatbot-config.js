/* ==========================================================================
   WashNow Chatbot — OWNER-EDITABLE CONFIGURATION FILE
   --------------------------------------------------------------------------
   This is the "environment" file for the WashBot assistant.
   Non-developers can safely edit the values below to change what the
   chatbot says. You do NOT need to touch any other file.

   HOW TO EDIT:
   1. Change botName, greeting, or any answer text between the quotes "".
   2. To add a new question, copy one { ... } block inside "questionnaire"
      and edit its "question", "keywords" and "answer".
   3. "keywords" are the words a visitor might type. If a visitor's message
      contains any of these words, the matching "answer" is shown.
   4. Keep the punctuation (commas, quotes, braces) exactly as shown.
   5. Save the file and refresh the website.

   IMPORTANT: Any question that does NOT match a keyword below will make the
   bot politely direct the visitor to the "Contact Us" section.
   ========================================================================== */

window.WASHNOW_CHATBOT_CONFIG = {

  /* ---- General assistant settings ---- */
  botName: "WashBot",
  greeting: "Hi! 👋 I'm WashBot, the WashNow assistant. Ask me about our hospitality & healthcare laundry services, turnaround times, locations, or pricing.",

  /* The id of the Contact section on the page (do not change unless the
     section id in index.html changes). */
  contactSectionId: "contact",

  /* Shown when the bot cannot match a question. {contact} is replaced with a
     clickable button that scrolls the visitor to the Contact Us section. */
  fallbackMessage: "That's a great question — I don't have an answer to that one yet. Please reach out to our team directly and we'll be happy to help. {contact}",

  /* Label on the button that appears in the fallback message. */
  contactButtonLabel: "Go to Contact Us",

  /* ---- Owner contact details (shown by the 'contact' answer) ---- */
  contact: {
    phone: "1800-889-WASH (9274)",
    email: "commercial@washnow.in",
    location: "Pune, Maharashtra, India"
  },

  /* ==========================================================================
     THE QUESTIONNAIRE — edit / add / remove questions here.
     Each entry:
       question  : the text shown as a suggested quick-reply chip
       keywords  : words that trigger this answer (lowercase)
       answer    : the reply the bot gives
     ========================================================================== */
  questionnaire: [
    {
      question: "What services do you offer?",
      keywords: ["service", "services", "what do you offer", "offerings", "what can you do", "laundry service"],
      answer: "WashNow is a commercial laundry & linen management company for hotels and hospitals. We handle guest-room linen & terry, spa/pool towels, F&B and banquet linen, patient bedding, OT & surgical textiles, ICU linen, staff uniforms & scrubs, plus total dock-to-closet linen management."
    },
    {
      question: "Do you serve hotels & hospitality?",
      keywords: ["hotel", "hospitality", "resort", "guest room", "banquet", "spa", "restaurant", "hotels"],
      answer: "Yes! For hospitality we manage guest-room linen (300–1000 TC), plush spa & pool terry, and F&B/banquet linen with turmeric, saffron and curry stain extraction — all climate-tuned for Indian monsoon humidity and hard water."
    },
    {
      question: "Do you serve hospitals & healthcare?",
      keywords: ["hospital", "healthcare", "health care", "medical", "clinic", "surgical", "patient", "nabh", "infection", "icu"],
      answer: "Absolutely. Our healthcare laundry uses physically segregated, NABH-compliant barrier washing with 85°C thermal disinfection for patient bedding, OT & surgical drapes, ICU/isolation linen, scrubs and gowns — with swab-test validation for every batch."
    },
    {
      question: "Where are you located?",
      keywords: ["where are you", "location", "located", "which city", "pune", "service area", "based in"],
      answer: "We're starting fresh in Pune, Maharashtra, bringing deep experience in hospitality and business management. Contact us to check service availability for your property."
    },
    {
      question: "What is your turnaround time?",
      keywords: ["turnaround", "how long", "how fast", "how quickly", "sla", "same day", "tat", "delivery time"],
      answer: "We operate a rapid dock-to-closet model with up to a 4.5-hour wash cycle and a 99.8% on-time SLA. Uniforms and scrubs typically have a 24-hour turnaround."
    },
    {
      question: "How is pricing / a quote decided?",
      keywords: ["price", "pricing", "cost", "quote", "rate", "charges", "how much", "proposal", "estimate"],
      answer: "Pricing is customised to your property type, daily linen volume and service mix. Use the 'Request Proposal' button or the Linen ROI calculator on the site for an estimate — or share your details in the Contact Us section for a tailored quote."
    },
    {
      question: "Do you offer pickup & delivery?",
      keywords: ["pickup", "pick up", "collection", "collect linen", "transport", "logistics", "delivery and pickup"],
      answer: "Yes — we provide scheduled pickup and climate-controlled delivery as part of our total linen management, so your teams always have clean linen on hand."
    },
    {
      question: "How do you handle the monsoon & humidity?",
      keywords: ["monsoon", "humidity", "rain", "weather", "damp", "mold", "mildew", "odor", "smell"],
      answer: "We use ozone sanitization and dehumidified drying to under 0.4% moisture, eliminating musty odor and mildew even during long Indian monsoons — with a zero-musty guarantee."
    },
    {
      question: "Are you eco-friendly / sustainable?",
      keywords: ["eco", "sustainable", "sustainability", "water saving", "environment", "green", "recycle", "energy"],
      answer: "Very. Our EcoPure™ process uses ~4.5L of water per kg (vs ~16L industry average), recycles 85%+ of process water, and softens hard water via 5-stage RO for gentle, residue-free results."
    },
    {
      question: "How can I contact you?",
      keywords: ["contact", "reach", "call", "phone", "email", "talk", "speak", "connect", "get in touch", "number"],
      answer: "You can reach the WashNow team by phone at 1800-889-WASH (9274) or email commercial@washnow.in. We're based in Pune. You can also use the Contact Us form on this page and we'll get back within 2 hours."
    }
  ]
};
