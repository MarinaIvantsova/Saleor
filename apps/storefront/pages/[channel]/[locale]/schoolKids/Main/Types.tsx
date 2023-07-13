import clsx from "clsx";

const TYPESITEMS = [
  {
    id: 0,
    subtitle: "Развитие 10 видов интеллекта",
    text: "Учимся общаться, развивать эмоциональный, творческий интеллект и многое другое",
    className: `before:bg-first-arrow before:w-[182px] before:h-[61px] before:bg-182px before:-top-[15%] before:right-[20%]
  md:before:bg-first-arrow-tablet md:before:w-[135px] md:before:h-[45px] md:before:bg-135px md:before:-top-0 md:before:left-[60%] 
  xs:before:bg-first-arrow-m xs:before:w-[66px] xs:before:h-[174px] xs:before:bg-66px xs:before:top-[100%] xs:before:-left-[2%] 
  xs:pt-0
  `,
  },
  {
    id: 1,
    subtitle: "Языковое погружение",
    text: "Занятия проходят полностью на английском языке, независимо от типа задания",
    className: `2xl:pl-[195px] 2xl:pr-[35px] 2xl:pt-0 2xl:pb-[45px] 2xl:mb-[130px] 
  md:!pr-0 md:pl-[125px] md:!pb-[45px] md:!pt-0 md:mb-[75px]
  before:bg-second-arrow before:w-[115px] before:h-[126px] before:bg-115px before:top-[72%] before:left-[28%] 
  md:before:w-[64px] md:before:h-[49px] md:before:bg-64px md:before:top-[70%] md:before:left-[30%] xs:before:w-[81px] xs:before:h-[71px] xs:before:bg-81px
  xs:pb-[20px] xs:!mb-[205px] xs:!pl-[45px] xs:!ml-auto xs:pt-0 xs:before:top-[85%] xs:before:left-[70%] xs:before:transform xs:before:-rotate-[45deg]
  `,
  },
  {
    id: 2,
    subtitle: "Педагоги — носители языка",
    text: "Занятия ведут преподаватели из США, Великобритании и Канады, для которых английский язык является родным",
    className: `2xl:before:bg-third-arrow 2xl:before:w-[115px] 2xl:before:h-[126px] 2xl:before:bg-115px 2xl:before:-top-[25%] 2xl:before:left-[40%]
  xs:before:bg-third-arrow xs:before:w-[57px] xs:before:h-[72px] xs:before:bg-57px xs:before:-top-[25%] xs:before:-left-[1%]`,
  },
  {
    id: 3,
    subtitle: "Небольшие группы",
    text: "Дети занимаются в группах до 5 человек, что позволяет применять индивидуальный подход к каждому",
    className: `2xl:pl-[195px] 2xl:pr-[35px] 2xl:pt-0 2xl:-mt-[25px] 2xl:mb-[60px] before:bg-fourth-arrow before:w-[153px] before:h-[87px] before:top-[40%] before:left-[10%]
    md:!pr-0 md:pl-[125px] md:!pb-[60px] md:!pt-0 md:mb-[75px] md:-mt-[22px]
    md:before:bg-fourth-arrow md:before:w-[110px] md:before:h-[50px] md:before:bg-110px md:before:top-[45%] md:before:left-0 
    xs:mt-0 xs:-mt-[26px] xs:mb-[60px] xs:before:bg-fourth-arrow-m xs:before:w-[71px] xs:before:h-[200px] xs:before:bg-71px xs:before:-top-[100%] xs:before:left-[75%]
    xs:!pl-[45px] xs:!ml-auto xs:mb-[10px] xs:pb-[15px]`,
  },
];

const commomClassName = `relative before:absolute w-[50%] pt-[45px] pr-[160px] 2xl:pb-[130px]
 md:pt-[35px] md:pr-[40px] md:pb-[75px]
 xs:w-[90%] xs:pt-[35px] xs:pr-0 xs:mb-[25px] before:bg-no-repeat`;

function Types() {
  return (
    <section className="w-[70%] mt-[130px] mx-auto 2xl:min-w-[1000px] md:w-[90%] md:min-w-[680px] xs:w-[90%] xs:mt-[20px] xs:min-w-[290px] xs:max-w-[380px]">
      <h2 className="visually-hidden">Виды обучения</h2>
      <ul
        className="relative flex flex-wrap py-0 pl-0 mb-0 list-none
       before:absolute before:bg-laughing before:transform before:translate-x-[20%] before:z-10
       before:-top-[3%] before:left-[25%] before:w-[332px] before:h-[381px] md:before:w-[225px] before:bg-no-repeat 
       md:before:bg-225px md:before:top-[7%] md:before:h-[257px] md:before:translate-x-[30%] 2xl:before:bg-332px xs:flex-column 
       xs:before:w-[184px] xs:before:h-[210px] xs:before:top-auto xs:before:bottom-[40%] xs:before:bg-184px xs:before:-translate-x-[10%]"
      >
        {TYPESITEMS.map((item, index) => {
          return (
            <li key={item.id} className={clsx(commomClassName, item.className)}>
              <h3 className="mb-[8px] 2xl:text-[20px] 2xl:leading-[28px] md:text-[18px] md:leading-[25px] xs:text-[16px] xs:leading-[22px] font-montserrat font-medium text-layoutTextColor">
                {item.subtitle}
              </h3>
              <p className="2xl:max-w-[320px] 2xl:text-[16px] 2xl:leading-[23px] md:w-[90%] xs:w-full text-[14px] leading-[20px] font-montserrat text-layoutTextColor ">
                {item.text}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Types;
