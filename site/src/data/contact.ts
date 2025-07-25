// Contact information items
export const contactInfo = [
  {
    icon: "mail",
    text: "ragavaraaj@example.com",
    link: "mailto:ragavaraaj@example.com",
  },
  {
    icon: "github",
    text: "github.com/ragavaraaj",
    link: "https://github.com/ragavaraaj",
  },
  {
    icon: "linkedin",
    text: "linkedin.com/in/ragavaraaj",
    link: "https://linkedin.com/in/ragavaraaj",
  },
];

// Section content
export const contactContent = {
  title: "Get In Touch",
  subtitle: "Have a question or want to work together? Feel free to reach out!",
  contactInfo: {
    title: "Contact Information",
    subtitle: "Feel free to reach out through any of these channels",
  },
  contactForm: {
    title: "Send Me a Message",
    subtitle: "I'll get back to you as soon as possible",
    submitButton: "Send Message",
    submittingButton: "Sending...",
    successTitle: "Message Sent!",
    successMessage: "Thank you for reaching out. I'll get back to you soon.",
    successButton: "Send Another Message",
  },
};

export type ContactInfo = typeof contactInfo;
export type ContactContent = typeof contactContent;

export interface ContactPageData {
  contactInfo: ContactInfo;
  contactContent: ContactContent;
}