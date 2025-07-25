"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactContent, ContactInfo } from "@/data/contact";
import * as z from "zod";
import Section from "@/components/sections/section-wrapper";
import { useRef } from "react";
import { Mail, Github, Linkedin, CheckCircle } from "lucide-react";

// Form schema for validation
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

interface ContactSectionProps {
  contactContent: ContactContent;
  contactInfo: ContactInfo;
}

export function ContactSection({
  contactContent,
  contactInfo,
}: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
    }, 1000);
  }

  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "mail":
        return <Mail />;
      case "github":
        return <Github />;
      case "linkedin":
        return <Linkedin />;
      default:
        return null;
    }
  };

  return (
    <Section id="contact" sectionRef={sectionRef}>
      <Section.Header
        title={contactContent.title}
        subtitle={contactContent.subtitle}
      />
      <Section.Content>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle>{contactContent.contactInfo.title}</CardTitle>
              <CardDescription>
                {contactContent.contactInfo.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-primary">{renderIcon(item.icon)}</div>
                  <Link
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.text}
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle>{contactContent.contactForm.title}</CardTitle>
              <CardDescription>
                {contactContent.contactForm.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-6">
                  <div className="text-green-500 mb-2">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {contactContent.contactForm.successTitle}
                  </h3>
                  <p className="text-center text-muted-foreground">
                    {contactContent.contactForm.successMessage}
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    {contactContent.contactForm.successButton}
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? contactContent.contactForm.submittingButton
                        : contactContent.contactForm.submitButton}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </Section.Content>
    </Section>
  );
}
