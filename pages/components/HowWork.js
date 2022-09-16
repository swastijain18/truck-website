import Image from 'next/Image'
import React from 'react'

const HowWork = () => {
    return (
        <section className='mt-5'>
            <h1 className='text-center' style={{ marginTop: "5.5rem" }}>How We Works</h1>
            {/* <div className='my-5 container d-flex justify-content-center'>
        <div className="col-md-4 mx-4 desc my-3">
            <i className="fa-solid fa-truck  my-1 fa-5x desi" style={{"width":"100%" , "textAlign":"center"}}></i>
                <div>
                    <h3 className="textc mt-4">This is Lit</h3>
                   <p className="textc"> The company itself is a very successful company. Easy, fun. The company itself is a very successful company. For some, troubles. For some, troubles. For some, troubles. For some, troubles. For some, troubles. For some, trouble.
                    </p>
                </div>
        </div>
        <div className="col-md-4 mx-4 desc my-3">
            <i className="fa-solid fa-truck fa-5x desi my-1"  style={{"width":"100%" , "textAlign":"center"}}></i>
                <div>
                    <h3 className="textc mt-4">This is Lit</h3>
                    <p className="textc">The company itself is a very successful company. Easy, fun. The company itself is a very successful company. For some, troubles. For some, troubles. For some, troubles. For some, troubles. For some, troubles. For some, trouble.</p>
                </div>
        </div>
        <div className="col-md-4 mx-4 desc my-3">
            <i className="fa-solid fa-truck fa-5x  my-1 desi"  style={{"width":"100%" , "textAlign":"center"}}></i>
                <div>
                    <h3 className="textc mt-4">This is Lit</h3>
                   <p className="textc">The company itself is a very successful company. Easy, fun. The company itself is a very successful company. For some, troubles. For some, troubles. For some, troubles. For some, troubles. For some, troubles. For some, trouble.
                    </p>
                </div>
        </div>

             </div> */}
            <div class="px-1 px-md-4 pb-5 mx-auto d-none d-lg-block">
                <div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-12">
                            <ul id="progressbar" class="text-center">
                                <li class="active step0"></li>
                                <li class="active step0"></li>
                                <li class="active step0"></li>
                                <li class="step0"></li>
                                <li class="step0"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center top">
                        <div class="row d-flex justify-content-center text-center icon-content">
                            <img class="icon" src="https://i.imgur.com/9nnc9Et.png" />

                            <p class="font-weight-bold">Order<br />Processed</p>

                        </div>
                        <div class="row d-flex  justify-content-center text-center icon-content">
                            <img class="icon" src="https://i.imgur.com/GiWFtVu.png" />
                            <div class="">
                                <p class="font-weight-bold">Order<br />Designing</p>
                            </div>
                        </div>
                        <div class="row d-flex  justify-content-center text-center icon-content">
                            <img class="icon" src="https://i.imgur.com/u1AzR7w.png" />
                            <div class="">
                                <p class="font-weight-bold">Order<br />Shipped</p>
                            </div>
                        </div>
                        <div class="row d-flex  justify-content-center text-center icon-content">
                            <img class="icon" src="https://i.imgur.com/TkPm63y.png" />
                            <div class="">
                                <p class="font-weight-bold">Order<br />En Route</p>
                            </div>
                        </div>
                        <div class="row d-flex  justify-content-center text-center icon-content">
                            <img class="icon" src="https://i.imgur.com/HdsziHP.png" />
                            <div class="">
                                <p class="font-weight-bold">Order<br />Arrived</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="px-1 px-md-4 pb-5 mx-auto d-block d-sm-none">
                <div className='d-flex justify-content-center'>

                    {/* <div class="row d-flex justify-content-center">
                        <div class="col-6">
                            <Image src="/1.png" width={130} height={130}/>
                            
                        </div>
                    </div> */}

                    
                    <div class="top col-12">
                        <div class="d-flex text-center icon-content">
                            <div class="col-6 mx-4">
                                <Image src="/1.png" width={130} height={130} />
                            </div>
                            <img class="icon" src="https://i.imgur.com/9nnc9Et.png" />
                            <p class="font-weight-bold">Order<br />Processed</p>
                        </div>

                        <div class=" d-flex text-center icon-content">
                            <div class="col-6 mx-4">
                                <Image src="/1.png" width={130} height={130} />
                            </div>
                            <img class="icon" src="https://i.imgur.com/GiWFtVu.png" />

                            <p class="font-weight-bold">Order<br />Designing</p>

                        </div>

                        <div class=" d-flex text-center icon-content">
                            <div class="col-6 mx-4">
                                <Image src="/1.png" width={130} height={130} />
                            </div>
                            <img class="icon" src="https://i.imgur.com/u1AzR7w.png" />

                            <p class="font-weight-bold">Order<br />Shipped</p>

                        </div>

                        <div class=" d-flex text-center icon-content">
                            <div class="col-6 mx-4">
                                <Image src="/2.png" width={130} height={130} />
                            </div>
                            <img class="icon" src="https://i.imgur.com/TkPm63y.png" />

                            <p class="font-weight-bold">Order<br /> Route</p>

                        </div>

                        <div class=" d-flex text-center icon-content">
                            <div class="col-6 mx-4">
                                <Image src="/2.png" width={130} height={130} />
                            </div>
                            <img class="icon" src="https://i.imgur.com/HdsziHP.png" />

                            <p class="font-weight-bold">Order<br />Arrived</p>
                        </div>

                    </div>
                </div>
            </div>

        </section >
    )
}


export default HowWork