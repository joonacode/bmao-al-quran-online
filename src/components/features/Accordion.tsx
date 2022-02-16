import { useState } from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

interface AccordionProps {
  data:
    | {
        short: string;
        long: string;
      }
    | undefined;
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [accordionActive, setAccordionActive] = useState(1);
  const toggleAccordion = () => {
    setAccordionActive((prev) => (prev === 1 ? 2 : 1));
  };
  return (
    <>
      <AccordionItem
        onClick={toggleAccordion}
        isActive={accordionActive === 1}
        title='Tafsir Singkat'
        description={data?.short}
      />
      <AccordionItem
        onClick={toggleAccordion}
        isActive={accordionActive === 2}
        title='Tafsir Panjang'
        description={data?.long}
      />
    </>
  );
};

interface AccordionItemProps {
  isActive: boolean;
  title: string;
  description: string | undefined;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  isActive = false,
  title,
  description,
  onClick,
}) => {
  return (
    <div className={`px-3 py-4 border-t-[1px] border-t-gray-200 dark:border-t-gray-600/50`}>
      <div onClick={onClick} className=' cursor-pointer flex items-center justify-between'>
        <h5 className='font-bold text-lg'>{title}</h5>
        <span>
          {isActive ? <BiChevronUp className='text-2xl' /> : <BiChevronDown className='text-2xl' />}
        </span>
      </div>
      {isActive && (
        <div className='mt-4'>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
