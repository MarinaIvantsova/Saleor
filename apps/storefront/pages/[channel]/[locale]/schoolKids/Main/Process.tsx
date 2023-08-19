function Process() {
  return (
    <section className="2xl:mt-[118px] md:mt-[98px] xs:mt-[55px] xs:mx-auto">
      <div
        className="flex relative flex-wrap mx-auto w-[90%] 2xl:w-[70%] before:absolute before:bg-no-repeat 2xl:before:bg-[url('/girl.svg')] before:top-[5%] 
      before:-left-[15%] before:w-[105px] before:h-[115px] after:absolute after:bg-[url('/rocket.svg')] after:bg-no-repeat after:-top-[15%] after:left-[85%]
       2xl:after:w-[135px] 2xl:after:h-[68px] md:after:bg-[length:101px] md:after:w-[101px] md:after:h-[50px] xs:min-w-[290px] xs:after:-top-[7%] xs:after:left-[80%]
        xs:after:w-[67px] xs:after:h-[34px] xs:after:bg-[length:67px]"
      >
        <h2
          className="2xl:mb-[70px] md:mb-[30px] xs:text-[22px] xs:leading-[30px] xs:mb-[28px] w-full font-rubik text-[36px] text-layoutTextColor leading-[50px] text-center
         font-medium"
        >
          Как проходит обучение
        </h2>
        <div className="w-[40%]">
          <h3
            className="w-[90%] mb-[20px] 2xl:text-[20px] 2xl:leading-[30px] md:text-[18px] xs:text-[16px] xs:min-w-[176px] xs:leading-[22px] text-layoutTextColor
           font-montserrat font-medium"
          >
            Играя&nbsp;— обучаем, обучая&nbsp;— развиваем
          </h3>
          <div className="w-[85%] xs:min-w-[280px] 2xl:text-[16px] 2xl:leading-[23px] md:text-[14px] md:leading-[20px] font-montserrat text-layoutTextColor xs:text-[14px]">
            <p className="mb-[12px]">
              <span whitespace-nowrap>Мы взяли</span> все самое лучшее из традиционных
              <span whitespace-nowrap>и современных</span> методик обучения
              <span whitespace-nowrap>и современныхи развития</span> детей. Обучение английскому
              языку происходит легко <span whitespace-nowrap>и интересно</span>, ведь малыши
              <span whitespace-nowrap>не зубрят</span> материал по учебникам,
              <span whitespace-nowrap>а познают</span> его через игру, сказки, книги и&nbsp;музыку.
            </p>
            <p>
              Наша методика также включает <span whitespace-nowrap>в себя</span> обучение
              <span whitespace-nowrap>по программе</span> Cambridge. Благодаря этому, наши ученики
              без труда сдают международные <span whitespace-nowrap>и государственные</span>{" "}
              экзамены.
            </p>
          </div>
        </div>
        <div className="md:w-[50%] md:min-w-[355px] xs:w-full xs:min-w-[290px]">
          <h3
            className="mb-[20px] 2xl:text-[20px] 2xl:leading-[30px] md:w-[70%] md:text-[18px] xs:w-[80%] xs:mt-[35px] xs:text-[16px] xs:leading-[22px] text-layoutTextColor
           font-montserrat font-medium"
          >
            Посмотрите, как проходят наши занятия
          </h3>
          <div className="md:w-[355px] md:h-[270px] xs:w-[290px] xs:h-[260px]">
            <video
              className="block w-[430px] h-[230px] rounded-xl object-cover bg-transparent"
              controls
              poster="/baby-video.svg"
            >
              <source src="/sample.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
