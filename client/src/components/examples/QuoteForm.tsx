import QuoteForm from '../QuoteForm'
import { Button } from '@/components/ui/button'

export default function QuoteFormExample() {
  return (
    <div className="p-8">
      <QuoteForm 
        productName="STARWIN Large Format Printer"
        trigger={<Button>Minta Penawaran Demo</Button>}
      />
    </div>
  )
}