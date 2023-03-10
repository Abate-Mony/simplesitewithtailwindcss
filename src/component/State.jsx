import illustration from './../img/illustration-intro.svg'
const State = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse md:flex md:flex-row 
items-center px-6 mx-auto mt-10 space-y-0 md:space-y-6">
                {/* left item here  */}
                <div className="flex- mb-32  py-4
space-y-12   md:w-1/2">
                    <h1 className=" text-4xl text-center font-bold md:text-5xl md:text-left max-w-md">
                        Bring everyone together to build better products
                    </h1>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eius obcaecati iure ab fuga vel dignissimos. Et excepturi odio molestias.
                    </p>

                    <div className="flex justify-center items-center md:justify-start">

                        <a href="#" className='p-3
px-6 pt-2 text-white bg-brightRed
rounded-full baseline hover:bg-brightRedLight '>
                            Get Started
                        </a>

                    </div>

                </div>
                <div className='md:w-1/2  py-4'>
                <img src={illustration} alt="illustration" />
                
                </div>



            </div>
        </section>
    )
}

export default State