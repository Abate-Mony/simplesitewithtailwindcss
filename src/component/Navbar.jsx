import logo from './../img/logo.svg'
const Navbar = () => {
    return (
        <nav className="relative  shadow   p-6 py-3 ">
            <div className="flex items-center justify-between mx-auto container">
                <div className="pt2">
                    <img src={logo} alt="logo image here" />
                </div>

                <div className="space-x-6 capitalize hidden md:flex ">
                    <a href="#" className='hover:text-darkGrayishBlue' >
                        Price
                    </a>
                    <a href="#" className='hover:text-darkGrayishBlue'>
                        Product
                    </a>
                    <a href="#" className='hover:text-darkGrayishBlue'>
                        about us
                    </a>
                    <a href="#" className='hover:text-darkGrayishBlue'>
                        careers
                    </a>
                    <a href="#" className='hover:text-darkGrayishBlue'>
                        communit
                    </a>
                </div>
                <a href="#" className='p-3
px-6 pt-2 text-white bg-brightRed
rounded-full baseline hover:bg-brightRedLight hidden md:block'>
                    Get Started
                </a>
            </div>
        </nav>
    )
}

export default Navbar