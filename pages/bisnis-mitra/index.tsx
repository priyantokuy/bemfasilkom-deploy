import React,{useEffect,useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setStatePageVisit } from '../../store/pageVisitSlices'
import Particles from "react-tsparticles";
import particlesConfig from '../../components/Assets/Particles'
import Typed from 'typed.js'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image'
import { DocumentHead } from "../../components/DocumentHead";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function Index() {
	const dispatch = useDispatch()
	const typedRef = useRef(null) 
	const refService = useRef<HTMLDivElement>(null)
	const refBenefit = useRef<HTMLDivElement>(null)
	const refPortofolio = useRef<HTMLDivElement>(null)
	const refTestimonials = useRef<HTMLDivElement>(null)
	useEffect(() => {
		dispatch(setStatePageVisit({page:'Bisnis-Mitra'}))
        const typed = new Typed(typedRef.current, {
          strings: ['Website','Android App','Desktop App','UI/UX'], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,
          smartBackspace: true,
          loop: true,
          showCursor: true,
          cursorChar: "|"
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, [dispatch]);
	
  const responsive = {
	superLargeDesktop: {
	  // the naming can be any, depends on you.
	  breakpoint: { max: 4000, min: 3000 },
	  items: 5
	},
	desktop: {
	  breakpoint: { max: 3000, min: 1200 },
	  items: 3
	},
	tablet: {
	  breakpoint: { max: 1200, min: 840 },
	  items: 2
	},
	mobile: {
	  breakpoint: { max: 840, min: 0 },
	  items: 1
	}
  };

  useEffect(()=>{
    const animation ={
      service: gsap.fromTo(refService.current,{autoAlpha:0,x:200},{autoAlpha:1,x:0}),
	  benefit:gsap.fromTo(refBenefit.current,{autoAlpha:0,x:-200},{autoAlpha:1,x:0}),
      portofolio:gsap.fromTo(refPortofolio.current,{autoAlpha:0,y:100},{autoAlpha:1,y:0,ease:'power3.out'}),
	  testimonials:gsap.fromTo(refTestimonials.current,{autoAlpha:0,y:200},{autoAlpha:1,y:0,ease:'power3.out'})
    }

    ScrollTrigger.create({
      animation: animation.service,
      trigger: '.scroll-trigger',
      start: 'top center',
      end: 'bottom 30%',
      markers: false,
      onLeaveBack:()=>animation.service.reverse(),
	  onLeave:()=>gsap.to(refService.current,{autoAlpha:0,x:-200}),
	  onEnterBack:()=>gsap.to(refService.current,{autoAlpha:1,x:0})
    })
    ScrollTrigger.create({
      animation: animation.benefit,
      trigger: '.scroll-trigger-benefit',
      start: 'top center',
      end: 'bottom 30%',
      markers: false,
      onLeaveBack:()=>animation.benefit.reverse(),
	  onLeave:()=>gsap.to(refBenefit.current,{autoAlpha:0,x:200}),
	  onEnterBack:()=>gsap.to(refBenefit.current,{autoAlpha:1,x:0})
    })
    ScrollTrigger.create({
      animation: animation.portofolio,
      trigger: '.scroll-trigger-portofolio',
      start: 'top center',
      end: 'bottom+=100px top',
      markers: false,
      onLeaveBack:()=>animation.portofolio.reverse(),
	  onLeave:()=>gsap.to(refPortofolio.current,{autoAlpha:0,y:-200}),
	  onEnterBack:()=>gsap.to(refPortofolio.current,{autoAlpha:1,y:0,ease:'power3.out'})
    })
    ScrollTrigger.create({
      animation: animation.testimonials,
      trigger: '.scroll-trigger-testimonials',
      start: 'top center',
      end: 'bottom 30%',
      markers: false,
      onLeaveBack:()=>animation.testimonials.reverse(),
    })
  },[])
  return (
    <>
	  <DocumentHead pageTitle="Bisnis Mitra" />
      <section id='hero' className="relative h-[120vh] w-full border-box transition-all duration-500 object-fill bg-[length:100%_100%] bg-hero-pattern">
        <Particles className='particles-js h-full w-full absolute' options={particlesConfig} />
        <div className="header-4-1 absolute top-[20vh] z-100">
          <div className='w-screen'>
            <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
              <div
                className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
                <p className="mb-8 text-medium text-white">
                  We can build a <span  ref={typedRef} className="font-semibold"></span>
                </p>
                <h1 className="text-white sm:text-4xl lg:text-5xl text-2xl mb-8 font-semibold sm:leading-tight">
                  Empower your business journey with us.
                </h1>
                <div
                  className="inline-block items-center mx-auto lg:mx-0 lg:flex justify-center lg:mt-12 lg:space-x-12 md:space-x-2 sm:space-x-3 space-x-0">
                  <button
                    className="z-10 btn-fill bg-white inline-flex font-semibold text-orange-500 text-base py-4 px-6 rounded-xl mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 text-center lg:justify-end justify-center flex pr-0">
                <img id="hero" className='w-[20em] h-[20em] lg:w-fit lg:h-fit'
                  src="assets/image/il_jet.svg"
                  alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='service' className="h-full w-full border-box bg-white">

		<div className="our-service">
			<div className="scroll-trigger-benefit container lg:px-32 md:px-8 sm:px-12 px-5 pt-20 pb-12 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="text-4xl font-semibold title-font mb-2.5 text-medium-black">
						3 Keys Benefit
					</h1>
					<h2
						className="text-base font-light title-font mx-12 lg:w-full md:w-full sm:w-3/6 sm:mx-auto text-medium-black">
						You can easily manage your business with a powerful tools
					</h2>
				</div>

				<div ref={refBenefit} className="flex lg:flex-row flex-col -m-4">
					<div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-4 pb-12 flex-col">
							<div className="items-center text-center">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-2.png"
										alt="" />
								</div>
							</div>
							<div className="flex-grow">
								<h4 className="font-medium text-center text-2xl mb-2.5 text-medium-black">
									Easy to Operate
								</h4>
								<p className="leading-relaxed text-base text-center tracking-wide text-gray">
									This can easily help you to <br /> grow up your business fast
								</p>
							</div>
						</div>
					</div>
					<div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-12 flex-col">
							<div className="items-center text-center">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-3.png"
										alt="" />
								</div>
							</div>
							<div className="flex-grow">
								<h4 className="font-medium text-center text-2xl mb-2.5 text-medium-black">
									Real-Time Analytic
								</h4>
								<p className="leading-relaxed text-base text-center tracking-wide text-gray">
									With real-time analytics, you <br /> can check data in real time
								</p>
							</div>
						</div>
					</div>
					<div className="px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
							<div className="items-center text-center">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-4.png"
										alt="" />
								</div>
							</div>
							<div className="flex-grow">
								<h4 className="font-medium text-center text-2xl mb-2.5 text-medium-black">
									Very Full Secured
								</h4>
								<p className="leading-relaxed text-base text-center tracking-wide text-gray">
									With real-time analytics, we <br /> will guarantee your data
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			
		</div>
	</section>

  <section className="h-full w-full border-box ">
		<div className="scroll-trigger our-service">
			<div className="container lg:px-20 md:px-8 sm:px-12 px-5 pt-20 pb-12 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="text-4xl font-semibold title-font mb-2.5 text-medium-black">
						What We Can do
					</h1>
					<h2
						className="text-base font-light title-font mx-12 lg:w-full md:w-full sm:w-3/6 sm:mx-auto text-gray-500">
						Excepteur sint occaecat cupidatat non proident
					</h2>
				</div>

				<div ref={refService} className="flex w-full flex-wrap md:justify-between md:gap-5 md:flex-row box-border flex-col my-4">
					<div className="card px-4 md:w-[47%] md:px-4 lg:px-4 xl:w-1/5 my-4 md:my-0 md:mx-0 mx-4">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
							<div className="items-center text-start">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="assets/image/icon_service.svg"
										alt="" />
								</div>
							</div>
							<div className="flex-grow">
								<h4 className="font-medium text-start text-lg mb-2.5 text-medium-black">
									Web Development 
								</h4>
								<p className="leading-relaxed tracking-wide text-sm text-start text-gray-500">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
								</p>
							</div>
						</div>
					</div>
					<div className="card px-4 md:px-4 lg:px-4 xl:w-1/5 md:w-[47%] my-4 md:my-0 md:mx-0 mx-4">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
							<div className="items-center text-start">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="assets/image/icon_service.svg"
										alt="" />
								</div>
							</div>
							<div className="flex-grow">
								<h4 className="font-medium text-start text-lg mb-2.5 text-medium-black">
									Web Development 
								</h4>
								<p className="leading-relaxed text-sm text-start tracking-wide text-gray-500">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
								</p>
							</div>
						</div>
            
					</div>
					<div className="card px-4 md:px-4 lg:px-4 xl:w-1/5 md:w-[47%] my-4 md:my-0 md:mx-0 mx-4">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
							<div className="items-center text-start">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="assets/image/icon_service.svg"
										alt="" />
								</div>
							</div>
							<div className="flex-grow">
								<h4 className="font-medium text-start text-lg mb-2.5 text-medium-black">
									Web Development 
								</h4>
								<p className="leading-relaxed text-sm text-start tracking-wide text-gray-500">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
								</p>
							</div>
						</div>
            
					</div>
					<div className="card px-4 md:px-4 lg:px-4 xl:w-1/5 md:w-[47%] my-4 md:my-0 md:mx-0 mx-4">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
							<div className="items-center text-start">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="assets/image/icon_service.svg"
										alt="" />
								</div>
							</div>
							<div className="flex-grow">
								<h4 className="font-medium text-start text-lg mb-2.5 text-medium-black">
									Web Development 
								</h4>
								<p className="leading-relaxed text-sm text-start tracking-wide text-gray-500">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
								</p>
							</div>
						</div>
            
					</div>
				</div>
			</div>
		</div>
	</section>
  <section id='portofolio' className="h-full w-full border-box bg-white">
		<div className="our-service">
			<div className="scroll-trigger-portofolio container lg:px-32 md:px-8 sm:px-12 px-5 pt-20 pb-12 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="text-4xl font-semibold title-font mb-2.5 text-medium-black">
						Our Portofolio
					</h1>
					<h2
						className="text-base font-light title-font mx-12 lg:w-full md:w-full sm:w-3/6 sm:mx-auto text-gray-500">
						Excepteur sint occaecat cupidatat non proident
					</h2>
				</div>

				<div ref={refPortofolio} className="flex lg:gap-10 md:flex-row flex-col justify-between flex-wrap box-content">
					<div className="card px-4 md:px-4 lg:px-4 md:w-[47%] my-4">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
							<div className="flex-grow">
								<h4 className="font-medium text-start text-lg mb-2.5 text-medium-black">
									Doku App
								</h4>
								<p className="leading-relaxed tracking-wide text-sm text-start text-gray-500">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
								</p>
							</div>
              				<div className="items-center text-center">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="assets/image/porto-1.png"
										alt="" />
								</div>
							</div>
								<p className="text-sm text-end text-orange-500 hover:cursor-pointer">
									View demo
								</p>
						</div>
					</div>						
					<div className="card px-4 md:px-4 lg:px-4 md:w-[47%] my-4">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
							<div className="flex-grow">
								<h4 className="font-medium text-start text-lg mb-2.5 text-medium-black">
									Doku App
								</h4>
								<p className="leading-relaxed tracking-wide text-sm text-start text-gray-500">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
								</p>
							</div>
              				<div className="items-center text-center">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="assets/image/porto-1.png"
										alt="" />
								</div>
							</div>
								<p className="text-sm text-end text-orange-500 hover:cursor-pointer">
									View demo
								</p>
						</div>
					</div>						
					<div className="card px-4 md:px-4 lg:px-4 md:w-[47%] my-4">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
							<div className="flex-grow">
								<h4 className="font-medium text-start text-lg mb-2.5 text-medium-black">
									Doku App
								</h4>
								<p className="leading-relaxed tracking-wide text-sm text-start text-gray-500">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
								</p>
							</div>
              				<div className="items-center text-center">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="assets/image/porto-1.png"
										alt="" />
								</div>
							</div>
								<p className="text-sm text-end text-orange-500 hover:cursor-pointer">
									View demo
								</p>
						</div>
					</div>						
					<div className="card px-4 md:px-4 lg:px-4 md:w-[47%] my-4">
						<div className="flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col">
							<div className="flex-grow">
								<h4 className="font-medium text-start text-lg mb-2.5 text-medium-black">
									Doku App
								</h4>
								<p className="leading-relaxed tracking-wide text-sm text-start text-gray-500">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
								</p>
							</div>
              				<div className="items-center text-center">
								<div className="inline-flex items-center justify-center rounded-full mb-6">
									<img src="assets/image/porto-1.png"
										alt="" />
								</div>
							</div>
								<p className="text-sm text-end text-orange-500 hover:cursor-pointer">
									View demo
								</p>
						</div>
					</div>						
				</div>
			</div>
		</div>
	</section>
  <section id='testimonials' className="scroll-trigger-testimonials h-full w-full border-box bg-white">
		<div ref={refTestimonials} className="testimonials">
			<div className="container lg:px-32 md:px-8 sm:px-12 px-5 pt-20 pb-12 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="text-4xl font-semibold title-font mb-2.5 text-medium-black">
						Testimonials
					</h1>
					<h2
						className="text-base font-light title-font mx-12 lg:w-full md:w-full sm:w-3/6 sm:mx-auto text-gray-500">
						Excepteur sint occaecat cupidatat non proident
					</h2>
				</div>
				<Carousel className='flex gap-4' responsive={responsive} containerClass="carousel-container" itemClass="carousel-item-gap" autoPlay={true} autoPlaySpeed={3000} arrows={false} showDots={true} infinite={true} swipeable={true} dotListClass="custom-dot-list-style">
						<div className="testimonial-content  py-4 px-9 h-[12rem] border-2 box-border border-orange-500 rounded-xl flex flex-col justify-evenly items-center gap-4">
							<div className='h-[50%] flex items-center text-center'>
								<p className="testimonial-text text-gray-800 text-[.8em]">Lorem ipsum dolor sifwfwffwqfqwfqfqfqwfqwqfqwfq t amet, consectetur adipiscing elit.</p>
							</div>
							<figure className='flex h-[40%] justify-center items-center gap-3 w-full'>
								<div className=''>
									<Image className='rounded-full overflow-hidden' src={'/cover.png'} width={60} height={60} alt='avatar'/>
								</div>
								<figcaption className='h-full flex flex-col justify-center text-center pb-3'>
									<p className="testimonial-author text-black text-[.8em] font-bold">John Doe</p>
									<p className="testimonial-author text-slate-500 text-[.8em] font-bold">Head of Marketing</p>
								</figcaption>
							</figure>
						</div>
						<div className="testimonial-content  py-4 px-9 h-[12rem] border-2 box-border border-orange-500 rounded-xl flex flex-col justify-evenly items-center gap-4">
							<div className='h-[50%] flex items-center text-center flex-wrap'>
								<p className="testimonial-text text-gray-800 text-[.8em]">Lorem ipsum dolor sifwfwffwqfqwfqfqfqwfqwqfqwfq t amet, consectetur adipiscing elit.</p>
							</div>
							<figure className='flex h-[40%] justify-center items-center gap-3 w-full'>
								<div className=''>
									<Image className='rounded-full overflow-hidden' src={'/cover.png'} width={60} height={60} alt='avatar'/>
								</div>
								<figcaption className='h-full flex flex-col justify-center text-center pb-3'>
									<p className="testimonial-author text-black text-[.8em] font-bold">John Doe</p>
									<p className="testimonial-author text-slate-500 text-[.8em] font-bold">Head of Marketing</p>
								</figcaption>
							</figure>
						</div>
						<div className="testimonial-content  py-4 px-9 h-[12rem] border-2 box-border border-orange-500 rounded-xl flex flex-col justify-evenly items-center gap-4">
							<div className='h-[50%] flex items-center text-center flex-wrap'>
								<p className="testimonial-text text-gray-800 text-[.8em]">Lorem ipsum dolor sifwfwffwqfqwfqfqfqwfqwqfqwfq t amet, consectetur adipiscing elit.</p>
							</div>
							<figure className='flex h-[40%] justify-center items-center gap-3 w-full'>
								<div className=''>
									<Image className='rounded-full overflow-hidden' src={'/cover.png'} width={60} height={60} alt='avatar'/>
								</div>
								<figcaption className='h-full flex flex-col justify-center text-center pb-3'>
									<p className="testimonial-author text-black text-[.8em] font-bold">John Doe</p>
									<p className="testimonial-author text-slate-500 text-[.8em] font-bold">Head of Marketing</p>
								</figcaption>
							</figure>
						</div>
						<div className="testimonial-content  py-4 px-9 h-[12rem] border-2 box-border border-orange-500 rounded-xl flex flex-col justify-evenly items-center gap-4">
							<div className='h-[50%] flex items-center text-center flex-wrap'>
								<p className="testimonial-text text-gray-800 text-[.8em]">Lorem ipsum dolor sifwfwffwqfqwfqfqfqwfqwqfqwfq t amet, consectetur adipiscing elit.</p>
							</div>
							<figure className='flex h-[40%] justify-center items-center gap-3 w-full'>
								<div className=''>
									<Image className='rounded-full overflow-hidden' src={'/cover.png'} width={60} height={60} alt='avatar'/>
								</div>
								<figcaption className='h-full flex flex-col justify-center text-center pb-3'>
									<p className="testimonial-author text-black text-[.8em] font-bold">John Doe</p>
									<p className="testimonial-author text-slate-500 text-[.8em] font-bold">Head of Marketing</p>
								</figcaption>
							</figure>
						</div>
				</Carousel>
				
      

			</div>

		
		</div>
	</section>
  </>
  )
}
