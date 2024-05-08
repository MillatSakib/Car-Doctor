import image1 from "../../public/parts.jpg";
import image2 from "../../public/person.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <h2 className="text-2xl font-bold my-4">About Us</h2>
              <h3 className="text-4xl font-bold my-4 w-[370px]">
                We are qualified & of experience in this field
              </h3>
              <div>
                <p className="my-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>

                <p className="my-2">
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable.
                </p>
              </div>
              <button className="btn btn-warning text-base-300">
                Get More Info
              </button>
            </div>
          </div>

          <div className="card shrink-0 w-[50vw] max-w-sm shadow-2xl relative">
            <div>
              <img src={image2} alt="" />
            </div>
            <div className="absolute bottom-0 right-1">
              <img src={image1}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
