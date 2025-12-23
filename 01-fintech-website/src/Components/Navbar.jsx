import {Link} from 'react-router-dom';


const Navbar = () => {

  const navLinks = [
  {
    title: "Founders",
    href: "/founders",
  },
  {
    title: "Guide",
    href: "/guide",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Log In",
    href: "/login",
  },
];


  return (
    <div className='flex justify-between items-center px-4 py-4'>
      <a href="/"> <img src="/logo.svg" alt="logo.svg" height={80} width={80} />  </a>
      <div className='flex justify-center items-center gap-8'>
        {navLinks.map((elem , idx) => {
          return (
              <a className='text-neutral-800 font-medium hover:text-neutral-500 transition duration-200' href={elem.href}>  {elem.title} </a>
          )
        })}
        <button className='bg-[#2579F4] px-4 py-2 rounded-lg hover:bg-[#2262C7] text-white font-bold text-lg trasition duration-150 ease-in-out tracking-wide shadow-lg text-shadow-md'> Get Started</button>
      </div>
    </div>
  )
}

export default Navbar