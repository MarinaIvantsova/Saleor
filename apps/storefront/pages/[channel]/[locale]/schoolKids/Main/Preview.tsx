import EnrollButton from "../Button/EnrollButton";

function Preview() {
  return (
    <>
      <h1 className="visually-hidden">Школа английского языка для детей Clever Baby</h1>
      <div
        className="flex justify-center items-center 2xl:min-h-[512px] 2xl:bg-[url('/main-photo.svg')] 2xl:bg-no-repeat 2xl:bg-100% md:bg-[url('/main-photo-tablet.svg')]
             md:bg-100% md:bg-no-repeat md:min-h-[441px] xs:bg-[url('/main-photo-mobile.svg')] xs:bg-no-repeat xs:bg-100% xs:min-h-[304px]"
      >
        <section
          className="relative 2xl:w-[70%] 2xl:pt-[136px] 2xl:pb-[180px] before:absolute before:bg-[url('/car.svg')] before:top-[10%] before:-left-[15%]
         2xl:before:w-[106px] 2xl:before:h-[84px] after:absolute after:top-[10%] after:left-[100%] 2xl:after:content-cloudIcon md:w-[90%] md:before:-top-[20%]
        md:before:-left-[5%] md:before:bg-[length:58px] md:before:w-[58px] md:before:h-[46px] xs:w-[85%] xs:py-[60px] xs:before:top-[4%] xs:before:-left-[5%]
        xs:before:bg-[length:48px] xs:before:w-[48px] xs:before:h-[38px]"
        >
          <h2 className="mb-[2px] font-rubik 2xl:text-[42px] 2xl:leading-[45px] text-layoutTextColor md:text-[42px] xs:text-[28px] font-medium">
            Английский язык
          </h2>
          <p className="font-rubik font-medium text-[18px] leading-25 text-layoutTextColor xs:text-[16px]">
            для детей <span whitespace-nowrap>от 2 до 7 лет</span>
          </p>
          <p
            className="2xl:w-[40%] min-w-[375px] mt-[30px] mb-[45px] md:w-[40%] xs:w-[40%] xs:min-w-[225px] text-layoutTextColor xs:text-[14px] font-montserrat text-[16px]
           leading-[22px]"
          >
            Гармоничное развитие детей <span whitespace-nowrap>и обучение</span> через полное
            погружение <span whitespace-nowrap>в языковую</span> среду
          </p>

          <EnrollButton />
        </section>
      </div>
    </>
  );
}

export default Preview;
