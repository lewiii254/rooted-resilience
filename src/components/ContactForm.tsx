import { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call when backend is ready)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center animate-fade-in-up">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="flex items-center gap-2 text-sm font-sans text-foreground mb-2">
          <User size={16} className="text-accent" />
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-background/50 border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all ${
            errors.name ? 'border-destructive' : 'border-border'
          }`}
          placeholder="Enter your name"
          maxLength={100}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="flex items-center gap-2 text-sm font-sans text-foreground mb-2">
          <Mail size={16} className="text-accent" />
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-background/50 border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all ${
            errors.email ? 'border-destructive' : 'border-border'
          }`}
          placeholder="your@email.com"
          maxLength={255}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="flex items-center gap-2 text-sm font-sans text-foreground mb-2">
          <MessageSquare size={16} className="text-accent" />
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 bg-background/50 border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none ${
            errors.message ? 'border-destructive' : 'border-border'
          }`}
          placeholder="Tell us how you'd like to get involved or share your thoughts..."
          maxLength={1000}
        />
        <div className="flex justify-between mt-1">
          {errors.message ? (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground">{formData.message.length}/1000</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-wood w-full flex items-center justify-center gap-3 text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
            <span className="relative z-10">Sending...</span>
          </>
        ) : (
          <>
            <Send size={18} className="relative z-10" />
            <span className="relative z-10">Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
