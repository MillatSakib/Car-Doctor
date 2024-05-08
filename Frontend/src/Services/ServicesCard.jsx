import { Link } from "react-router-dom";

const ServicesCard = ({ data }) => {
  return (
    <div>
      <div className="card h-[100%] w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={data?.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data?.title}</h2>
          <p>Price: $ {data?.price}</p>
          <div className="card-actions justify-end">
            <Link to={`/service/${data._id}`} className="btn btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
