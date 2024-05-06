import image1 from "../../public/banner/1.jpg";
import image2 from "../../public/banner/2.jpg";
import image3 from "../../public/banner/3.jpg";
import image4 from "../../public/banner/4.jpg";
import image5 from "../../public/banner/5.jpg";
import image6 from "../../public/banner/6.jpg";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image1} className="w-full" />
          <div className="absolute flex justify-end gap-2 md:gap-4 transform -translate-y-1/2 right-10 bottom-0 z-50">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-slate-800 h-full w-full flex flex-col justify-center gap-8">
            <div className="mx-10 text-3xl md:text-4xl lg:text-5xl w-full md:max-w-[300px] lg:max-w-[400px] font-bold">
              Affordable Price For Car Servicing
            </div>
            <div className="mx-10 text-xl md:text-2xl max-w-full md:max-w-[400px] lg:max-w-[600px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </div>
            <div>
              <button className="Discover More"></button>
              <button className="Latest Project"></button>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={image2} className="w-full" />
          <div className="absolute flex justify-end gap-2 md:gap-4 transform -translate-y-1/2 right-10 bottom-0 z-50">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-slate-800 h-full w-full flex flex-col justify-center gap-8">
            <div className="mx-10 text-3xl md:text-4xl lg:text-5xl w-full md:max-w-[300px] lg:max-w-[400px] font-bold">
              Affordable Price For Car Servicing
            </div>
            <div className="mx-10 text-xl md:text-2xl max-w-full md:max-w-[400px] lg:max-w-[600px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </div>
            <div>
              <button className="Discover More"></button>
              <button className="Latest Project"></button>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image3} className="w-full" />
          <div className="absolute flex justify-end gap-2 md:gap-4 transform -translate-y-1/2 right-10 bottom-0 z-50">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>

          <div className="absolute top-0 left-0 bg-gradient-to-r from-slate-800 h-full w-full flex flex-col justify-center gap-8">
            <div className="mx-10 text-3xl md:text-4xl lg:text-5xl w-full md:max-w-[300px] lg:max-w-[400px] font-bold">
              Affordable Price For Car Servicing
            </div>
            <div className="mx-10 text-xl md:text-2xl max-w-full md:max-w-[400px] lg:max-w-[600px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </div>
            <div>
              <button className="Discover More"></button>
              <button className="Latest Project"></button>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image4} className="w-full" />
          <div className="absolute flex justify-end gap-2 md:gap-4 transform -translate-y-1/2 right-10 bottom-0 z-50">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-slate-800 h-full w-full flex flex-col justify-center gap-8">
            <div className="mx-10 text-3xl md:text-4xl lg:text-5xl w-full md:max-w-[300px] lg:max-w-[400px] font-bold">
              Affordable Price For Car Servicing
            </div>
            <div className="mx-10 text-xl md:text-2xl max-w-full md:max-w-[400px] lg:max-w-[600px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </div>
            <div>
              <button className="Discover More"></button>
              <button className="Latest Project"></button>
            </div>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={image5} className="w-full" />
          <div className="absolute flex justify-end gap-2 md:gap-4 transform -translate-y-1/2 right-10 bottom-0 z-50">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-slate-800 h-full w-full flex flex-col justify-center gap-8">
            <div className="mx-10 text-3xl md:text-4xl lg:text-5xl w-full md:max-w-[300px] lg:max-w-[400px] font-bold">
              Affordable Price For Car Servicing
            </div>
            <div className="mx-10 text-xl md:text-2xl max-w-full md:max-w-[400px] lg:max-w-[600px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </div>
            <div>
              <button className="Discover More"></button>
              <button className="Latest Project"></button>
            </div>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={image6} className="w-full" />
          <div className="absolute flex justify-end gap-2 md:gap-4 transform -translate-y-1/2 right-10 bottom-0 z-50">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-slate-800 h-full w-full flex flex-col justify-center gap-8">
            <div className="mx-10 text-3xl md:text-4xl lg:text-5xl w-full md:max-w-[300px] lg:max-w-[400px] font-bold">
              Affordable Price For Car Servicing
            </div>
            <div className="mx-10 text-xl md:text-2xl max-w-full md:max-w-[400px] lg:max-w-[600px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </div>
            <div>
              <button className="Discover More"></button>
              <button className="Latest Project"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
