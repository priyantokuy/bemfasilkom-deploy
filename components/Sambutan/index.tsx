"use client"
import React,{useLayoutEffect,useRef,useEffect} from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
// import LocomotiveScroll from 'locomotive-scroll';

export default function Index() {
    
  // const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true
  // });const boxRef = useRef();
  const boxRef:any = useRef();
  const boxRef1:any = useRef();
  useEffect(() => {
    const animateBoxRef = gsap.fromTo(
        boxRef.current,
        { autoAlpha: 0, x: -100,animationDuration: 1},
        { autoAlpha: 1, duration: 1, x: 0, ease: 'power3.out',animationDuration: .5 }
      );
      const animateBoxRef1 = gsap.fromTo(
        boxRef1.current,
        { opacity: 0, x: 400 },
        { opacity: 1, duration: 1, x: 0, ease: 'power3.out', animationDuration: 1 }
      );
      // Set up ScrollTrigger to trigger animations when .trigger-element enters the viewport
      const setupScrollTrigger = () => {
            // Set up ScrollTrigger to trigger animations when .trigger-element enters and leaves the viewport
    ScrollTrigger.create({
        animation: animateBoxRef,
        trigger: boxRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnterBack: ()=> animateBoxRef.play(),
        onLeaveBack:()=> animateBoxRef.reverse(),
        // onEnter: ()=> animateBoxRef.play(),
        onLeave: ()=> animateBoxRef.reverse()
      });
    
        ScrollTrigger.create({
          animation: animateBoxRef1,
          trigger: boxRef1.current,
          start: 'top 80%',
          end: 'bottom 20%',
          onEnterBack: ()=> animateBoxRef1.play(),
          onLeaveBack:()=> animateBoxRef1.reverse(),
          onLeave: ()=> animateBoxRef1.reverse()
        });
      };    
      setupScrollTrigger();
  }, []);
  return (
    <section data-scroll-container className=' mt-[13vh] h-fit  flex flex-col-reverse lg:flex-row py-4 justify-evenly box-border    lg:h-fit  lg:m-0 lg:p-5   lg:mx-auto lg:px-10'>
        <section ref={boxRef} data-scroll-section className='flex h-full lg:max-w-[283px] lg:w-[30%]  '>
            <section className='mt-8 w-full lg:mt-0 lg:w-fit h-full flex lg:flex-col items-center justify-between  '>
                <figure className='w-[40%] h-[40%] lg:w-fit lg:h-fit flex flex-col items-center lg:mb-10'>
                    <Image className='rounded-full overflow-hidden ' src={'/cover.png'} width={200} height={200} alt='avatar'/>
                    <figcaption className='text-center mt-2'>
                        <p className='text-xs min-[357px]:text-sm  lg:text-xl'>Daud Arya Putra</p>
                        <p className='text-xs lg:text-xl font-bold text-typedBlue'>Ketua Bem</p>
                    </figcaption>
                </figure>
                <figure className='w-[40%] h-[40%] lg:w-fit lg:h-fit flex flex-col items-center'>
                    <Image className='rounded-full overflow-hidden mb-1' src={'/cover.png'} width={200} height={200} alt='avatar'/>
                    <figcaption className='text-center mt-2'>
                        <p className='text-xs min-[357px]:text-sm lg:text-xl'>Fatma Ratnaja</p>
                        <p className='text-xs lg:text-xl font-bold text-typedBlue'>Wakil Ketua Bem</p>
                    </figcaption>
                </figure>
            </section>
        </section>

        <section ref={boxRef1} className='h-full w-full lg:max-w-[703px] lg:w-fit lg:h-fit box-border flex    '>
            <section className='h-full w-fit flex flex-col flex-wrap  lg:flex-nowrap gap-6 lg:gap-12 box-border text-justify lg:px-6 '>
                <div className='flex flex-col flex-wrap text-center lg:text-start'>
                    <h2 className='text-4xl lg:text-9xl tracking-[.9rem] font-semibold drop-shadow-cust-1 text-white  '>PERSEPSI</h2>
                    <span className='text-lg lg:text-2xl tracking-[.23rem] font-semibold text-typedBlue'>Ketua & Wakil Badan Eksekutif Mahasiswa</span>
                </div>
                <div className='flex flex-col flex-wrap'>
                    <p className='text-xs lg:text-sm leading-5'>
                      {/* {Events.deskripsi.length > 1500
                                ? Events.deskripsi.slice(0, 1500) + "..."
                                : Events.deskripsi} */}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus minus facilis dicta velit, nihil corporis enim optio eius quibusdam animi fugit tempora sunt dolores quae ullam deleniti quod praesentium? Voluptas numquam natus perspiciatis consequuntur et corrupti sed est beatae repudiandae officiis architecto earum id eveniet error, iste dicta similique ratione molestiae veritatis quas aperiam blanditiis. Dolorum velit quidem modi quae error laudantium, dolore corporis enim optio sed ea, maxime dolor cupiditate excepturi nemo consequatur provident, blanditiis alias aperiam praesentium deleniti pariatur quas. Dolorum, quis dolor porro deserunt explicabo sunt adipisci delectus molestiae! Quisquam cupiditate inventore error vel illum deleniti eos, repellat accusamus voluptas odit ipsam earum dignissimos. Facere, quos repellendus sequi expedita atque dolor nihil laudantium officia est iusto earum ad laborum corporis omnis. Amet excepturi atque nostrum provident modi tempora, accusantium asperiores possimus pariatur omnis. Sint harum corrupti dolor odio maiores officiis est facilis fuga enim dolorem ipsam illo suscipit doloremque voluptatibus, atque magni beatae, ad accusantium expedita accusamus, eligendi amet porro? Earum sapiente odio ut cupiditate minima maiores at culpa deserunt vel vitae illum libero officia voluptatem quisquam in excepturi exercitationem voluptatum, ullam qui? Minima, numquam velit quisquam et, ea dolorem nihil odio pariatur recusandae eligendi rem eum.
                      </p>
                </div>
            </section>
        </section>
    </section>
  )
}
