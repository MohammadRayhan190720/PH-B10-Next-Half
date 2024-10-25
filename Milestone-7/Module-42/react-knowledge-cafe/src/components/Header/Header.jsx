import Profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between mt-5 pb-5 border-b-2'>
      <h1 className="text-4xl">Knowledge Cafe </h1>
      <img src={Profile}></img>

    </div>
  );
};

export default Header;