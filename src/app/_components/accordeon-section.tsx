import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

export default function AccordeonSection({ content, ...props }: any) {
  return (
    <div className='mx-auto text-center md:max-w-[58rem]'>
      <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4'>
        Iremos desenvolver uma plataforma LMS (Learning Management System),
        utilizando Next.js 14 e as melhores tecnologias do mercado. Veja o
        conteúdo abaixo...
      </p>
      <Accordion type='single' collapsible className='w-full'>
        {content.map((item: any) => (
          <AccordionItem value={`item-${item.id}`} key={item.id}>
            <AccordionTrigger>
              <div className='space-y-1 text-left'>
                <h4 className='text-sm font-medium leading-none'>
                  {item.title}
                </h4>
                <p className='text-sm text-muted-foreground'>
                  {`Disponível em ${item.data}`}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className='text-left'>
              {item.episodes.map((episode: any) => (
                <>
                  <div key={episode.id} className='text-sm'>
                    {`Ep-${episode.id}: ${episode.title}`}
                  </div>
                  <Separator className='my-2' />
                </>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}