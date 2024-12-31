import image1 from '../assets/home/slide1.jpg'
import DynamicTitle from './shared/DynamicTitle';
const ChefRecomand = () => {
  return (
    <div className='mt-10'>
      <DynamicTitle subHeading={'Should Try'} Heading={'CHEF RECOMONDS'}></DynamicTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img src={image1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Salad!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, iste sunt! Sapiente voluptates veniam voluptatem
              dignissimos? Vel quas eius odit?
            </p>
            <div className="card-actions justify-center">
              <button className="btn border-b-black border-b-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img src={image1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Salad</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolore dicta rerum corporis consequuntur at alias qui inventore in
              quaerat.
            </p>
            <div className="card-actions justify-center">
              <button className="btn border-b-black border-b-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={image1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Salad</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, excepturi eius consectetur impedit sequi nobis ad et
              facilis odio placeat?
            </p>
            <div className="card-actions justify-center">
              <button className="btn border-b-black border-b-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomand;