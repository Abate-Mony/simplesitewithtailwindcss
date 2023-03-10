import avatar from './../img/avatar-ali.png'
const Testimonial = () => {
    return (
        <section id="testimonials ">

            <div className=" space-y-7 container mx-auto my-20">
                <h1 className='text-center'>Whats rent gfdfasdfsadfjiofhioh about Manage ?</h1>
                <div className="flex flex-wrap px-5 md:ps-0 ">
                    <div className="flex text-center flex-col items-center space-y-5 justify-center    md:w-1/3">
                        <div className="img">
                            <img src={avatar} className="h-20 w-20" alt="image here " />
                        </div>
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, saepe aliquid! Doloremque!</p>
                    </div>
                    <div className="flex text-center flex-col items-center space-y-5 justify-center  md:w-1/3">
                        <div className="img">
                            <img src={avatar} className="h-20 w-20" alt="image here " />
                        </div>
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, saepe aliquid! Doloremque!</p>
                    </div>
                    <div className="flex text-center flex-col items-center space-y-5 justify-center  md:w-1/3">
                        <div className="img">
                            <img src={avatar} className="h-20 w-20" alt="image here " />
                        </div>
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, saepe aliquid! Doloremque!</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonial