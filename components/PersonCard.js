import Image from 'next/image';

const PersonCard = ({ person, primaryColor, secondaryColor, tertiaryColor, logo }) => {
  return (
    <div className={`flex flex-col shrink-0 items-center justify-center p-2 bg-${primaryColor} rounded-lg shadow-md border-b-[8px] border-${tertiaryColor} lg:p-4`}>
      <div className={`relative overflow-hidden ring-[4px] ring-${tertiaryColor} rounded-md aspect-square w-full`}>
        {person.captain && (
          <div className={`absolute z-30 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 p-1 bg-${tertiaryColor} text-[#ffcc01]  rounded-full shadow-md right-2 bottom-2`}>
            <svg aria-hidden="true" data-prefix="fas" data-icon="crown" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" viewBox="0 0 640 512">
              <path
                fill="currentColor"
                d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
              />
            </svg>
          </div>
        )}
        <Image src={`/images/${person.image}`} alt="Picture of the author" layout="fill" objectFit="cover" />
      </div>
      <div className="relative z-30 flex items-center justify-center w-full -top-7 -mb-7">
        <div className={`w-14 h-14 text-[44px] text-${primaryColor}  leading-[50px] text-center border-${tertiaryColor} border-[4px] bg-${tertiaryColor} shadow-md rounded-full`}>{logo}</div>
      </div>
      <div className="mt-3 text-center">
        <h3 className={`flex items-center flex-col justify-center font-bold text-${tertiaryColor} text-[26px] lg:text-[32px] leading-8 uppercase`}>
          <span className="italic block text-[20px] lg:text-[24px]font-normal mx-1 md:mx-2">{person.firstName}</span>
          <span className={`text-${secondaryColor}`}>{person.lastName}</span>
        </h3>
      </div>
    </div>
  );
};

export default PersonCard;
