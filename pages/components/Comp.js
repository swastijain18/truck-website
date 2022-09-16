import Image from "next/Image";

const Comp = () => {
    return (
        <div>
            <div className="my-5">
                <div className="d-flex justify-content-center py-3">

                    <div className="col-lg-6 mx-4 text-center">
                        <h1>Easy to Book</h1>
                        <h4>

                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;
                        </h4>
                    </div>
                    <div className="col-lg-5 d-none d-md-block">
                        <Image src="/truck.jpg" width={550} height={400} alt="Picture of the author" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comp;