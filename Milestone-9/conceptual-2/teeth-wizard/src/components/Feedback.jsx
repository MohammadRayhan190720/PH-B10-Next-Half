import moment from 'moment'
const Feedback = ({feedback}) => {
  console.log(feedback)
  const{name,userImg,review} = feedback ;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img className="w-20 h-20 rounded-full" src={userImg} alt="Shoes"  />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        <p className='font-semibold italic'>{review}</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;