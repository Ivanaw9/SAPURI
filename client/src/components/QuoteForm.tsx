import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface QuoteFormProps {
  productName?: string;
  trigger?: React.ReactNode;
}

export default function QuoteForm({ productName, trigger }: QuoteFormProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const quoteFormSchema = z.object({
    name: z.string().min(2, t('quote.validation.nameMin')),
    company: z.string().optional(),
    email: z.string().email(t('quote.validation.emailInvalid')),
    phone: z.string().min(10, t('quote.validation.phoneMin')),
    productName: z.string().min(1, t('quote.validation.productRequired')),
    quantity: z.string().min(1, t('quote.validation.quantityRequired')),
    message: z.string().optional(),
  });

  type QuoteFormData = z.infer<typeof quoteFormSchema>;

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      productName: productName || "",
      quantity: "1",
      message: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      // todo: remove mock functionality - integrate with real API
      console.log("Quote request submitted:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('quote.success.title'),
        description: t('quote.success.message'),
      });
      
      setOpen(false);
      form.reset();
    } catch (error) {
      toast({
        title: t('quote.error.title'),
        description: t('quote.error.message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const phone = "6281234567890"; // todo: replace with real WhatsApp number
    const productText = productName ? `Produk: ${productName}` : "";
    const message = `Halo, saya tertarik untuk mendapatkan penawaran ${productText}. Mohon informasi lebih lanjut.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button data-testid="button-quote-form-trigger">
            {t('quote.title')}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('quote.title')}</DialogTitle>
          <DialogDescription>
            {t('quote.subtitle')}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('quote.name')} {t('quote.required')}</Label>
            <Input
              id="name"
              {...form.register("name")}
              placeholder={t('quote.name')}
              data-testid="input-quote-name"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">{t('quote.company')}</Label>
            <Input
              id="company"
              {...form.register("company")}
              placeholder={`${t('quote.company')} ${t('quote.optional')}`}
              data-testid="input-quote-company"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('quote.email')} {t('quote.required')}</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="email@example.com"
              data-testid="input-quote-email"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t('quote.phone')} {t('quote.required')}</Label>
            <Input
              id="phone"
              {...form.register("phone")}
              placeholder="08xxxxxxxxxx"
              data-testid="input-quote-phone"
            />
            {form.formState.errors.phone && (
              <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="productName">{t('quote.product')} {t('quote.required')}</Label>
            <Select
              value={form.watch("productName")}
              onValueChange={(value) => form.setValue("productName", value)}
            >
              <SelectTrigger data-testid="select-quote-product">
                <SelectValue placeholder={t('quote.product')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="STARWIN Large Format Printer">STARWIN Large Format Printer</SelectItem>
                <SelectItem value="Falcon M-Series Automatic Press">Falcon M-Series Automatic Press</SelectItem>
                <SelectItem value="Glazing Line Industrial">Glazing Line Industrial</SelectItem>
                <SelectItem value="Sublimation Printer Pro">Sublimation Printer Pro</SelectItem>
                <SelectItem value="Screen Printing Equipment">Screen Printing Equipment</SelectItem>
                <SelectItem value="Ceramic Equipment">Ceramic Equipment</SelectItem>
                <SelectItem value="Lainnya">Lainnya</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.productName && (
              <p className="text-sm text-destructive">{form.formState.errors.productName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">{t('quote.quantity')} {t('quote.required')}</Label>
            <Input
              id="quantity"
              {...form.register("quantity")}
              placeholder="1"
              data-testid="input-quote-quantity"
            />
            {form.formState.errors.quantity && (
              <p className="text-sm text-destructive">{form.formState.errors.quantity.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('quote.message')}</Label>
            <Textarea
              id="message"
              {...form.register("message")}
              placeholder={`${t('quote.message')} ${t('quote.optional')}`}
              className="min-h-[80px]"
              data-testid="textarea-quote-message"
            />
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full"
              data-testid="button-quote-submit"
            >
              {isSubmitting ? `${t('quote.submit')}...` : t('quote.submit')}
              <Send className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleWhatsAppContact}
              className="w-full"
              data-testid="button-quote-whatsapp"
            >
              {t('quote.whatsappChat')}
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}