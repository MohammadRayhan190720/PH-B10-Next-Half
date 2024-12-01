import image1 from '../assets/images/cups/Rectangle 9.png'
import image2 from '../assets/images/cups/Rectangle 10.png'
import image3 from '../assets/images/cups/Rectangle 11.png'
import image4 from '../assets/images/cups/Rectangle 12.png'
import image5 from '../assets/images/cups/Rectangle 13.png'
import image6 from '../assets/images/cups/Rectangle 14.png'
import image7 from '../assets/images/cups/Rectangle 15.png'
import image8 from '../assets/images/cups/Rectangle 16.png'
const FollowUs = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="text-center mt-10 lg:nt-16">
        <p>Follow Us Now</p>
        <h3 className="text-4xl lg:text-5xl font-bold ">Follow On Instragram</h3>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
      </div>
    </div>
  );
};

export default FollowUs;