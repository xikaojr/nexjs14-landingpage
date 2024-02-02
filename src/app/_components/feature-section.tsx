import AccordeonSection from './accordeon-section'
import TechStackSection from './tech-stack-section';
import {
  NextJs,
  Php,
  React,
  Pgsql
} from '@/components/stack-icons';

const content: [] = [];

function FeatureSection() {
  return (
    <section
      id='feature'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Tech Stack
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          As principais Stacks.
        </p>
      </div>

      <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4'>
        <div className='relative overflow-hidden'>
          <div className='flex h-[100px] flex-row gap-6 border-b-[2px] border-indigo-200 fill-current'>
            <Php />
            <NextJs />
            <React />
            <Pgsql />
          </div>
        </div>
      </div>
      {content.length > 0 ?? <AccordeonSection content={content} />}
    </section>
  );
}

export default FeatureSection;
