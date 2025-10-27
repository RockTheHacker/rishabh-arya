"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { ContactFormSchema } from "@/lib/schemas";
import { FadeInSection } from "@/components/common/fade-in-section";
import { Loader2, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import Link from "next/link";

export default function ContactSection() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    const { name, email, message } = values;
    const whatsappMessage = `Hello, I'm ${name} (${email}).\n\nMy project inquiry is:\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.phone.replace(/\D/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    form.reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card">
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary font-headline sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg leading-8 text-foreground">
                Have a project in mind or want to collaborate? I'd love to hear
                from you.
              </p>
               <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-foreground">
                <Link href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </Link>
                <Link href={`tel:${SITE_CONFIG.contact.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+{SITE_CONFIG.contact.phone}</span>
                </Link>
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-12 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                        <Input placeholder="your.email@example.com" {...field} />
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
                          placeholder="Tell me about your project..."
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Send on WhatsApp
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
