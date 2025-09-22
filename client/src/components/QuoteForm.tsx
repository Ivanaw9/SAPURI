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

const quoteFormSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  company: z.string().optional(),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
  productName: z.string().min(1, "Pilih produk"),
  quantity: z.string().min(1, "Jumlah harus diisi"),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

interface QuoteFormProps {
  productName?: string;
  trigger?: React.ReactNode;
}

export default function QuoteForm({ productName, trigger }: QuoteFormProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
        title: "Permintaan Penawaran Berhasil!",
        description: "Tim kami akan menghubungi Anda dalam 1x24 jam. Terima kasih!",
      });
      
      setOpen(false);
      form.reset();
    } catch (error) {
      toast({
        title: "Gagal Mengirim",
        description: "Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.",
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
            Minta Penawaran
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Permintaan Penawaran</DialogTitle>
          <DialogDescription>
            Isi formulir di bawah ini untuk mendapatkan penawaran harga terbaik dari tim kami.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap *</Label>
            <Input
              id="name"
              {...form.register("name")}
              placeholder="Nama lengkap Anda"
              data-testid="input-quote-name"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Nama Perusahaan</Label>
            <Input
              id="company"
              {...form.register("company")}
              placeholder="Nama perusahaan (opsional)"
              data-testid="input-quote-company"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
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
            <Label htmlFor="phone">Nomor Telepon/WhatsApp *</Label>
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
            <Label htmlFor="productName">Produk yang Diminati *</Label>
            <Select
              value={form.watch("productName")}
              onValueChange={(value) => form.setValue("productName", value)}
            >
              <SelectTrigger data-testid="select-quote-product">
                <SelectValue placeholder="Pilih produk" />
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
            <Label htmlFor="quantity">Jumlah yang Dibutuhkan *</Label>
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
            <Label htmlFor="message">Pesan Tambahan</Label>
            <Textarea
              id="message"
              {...form.register("message")}
              placeholder="Jelaskan kebutuhan spesifik Anda (opsional)"
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
              {isSubmitting ? "Mengirim..." : "Kirim Permintaan"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleWhatsAppContact}
              className="w-full"
              data-testid="button-quote-whatsapp"
            >
              Chat via WhatsApp
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}