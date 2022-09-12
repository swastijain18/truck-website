import Head from 'next/Head'
import React from 'react'
import Navbar from './components/Navbar'
import Script from "next/script";
import Profile from './User/Profile';
import Router from 'next/router';

export const Otp = () => {
    const Nextpage=()=>{
        let url = "http://localhost:3000/User/Profile"
      Router.push(url);
    }
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                    crossOrigin="anonymous"
                />
            </Head>

            <div className="row">
                <div className="col-md-6 mt-5">
                    <div className="my-5 mx-5 photod">

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="my-5 mx-5 divs">
                        <h1 className="text-center">
                            Verify the OTP
                        </h1>
                        <h5 className="text-muted text-center my-3">Enter the OTP you have recieved on your phone number</h5>
                        <div className='my-5 d-flex justify-content-center'>
                            <input
                                type="number"
                                inputMode="numeric"
                                pattern="\d"
                                title="Numeric"
                                id="code1"
                                name="tfaValue"
                                className="text-center inpsotp w-8 xxs:w-12 mx-1"
                                maxLength="1"
                                required
                            />

                            <input
                                type="number"
                                inputMode="numeric"
                                pattern="\d"
                                title="Numeric"
                                id="code2"
                                name="tfaValue"
                                className="text-center inpsotp w-8 xxs:w-12 mx-1"
                                maxLength="1"
                                required
                            />

                            <input
                                type="number"
                                inputMode="numeric"
                                pattern="\d"
                                title="Numeric"
                                id="code3"
                                name="tfaValue"
                                className="text-center w-8 inpsotp xxs:w-12 mx-1"
                                maxLength="1"
                                required
                            />

                            <input
                                type="number"
                                inputMode="numeric"
                                pattern="\d"
                                title="Numeric"
                                id="code4"
                                name="tfaValue"
                                className="text-center w-8 inpsotp xxs:w-12 mx-1"
                                maxLength="1"
                                required
                            />
                        </div>
                        <div className='text-center my-3'>
                            <p>
                                Didn't recieve Otp code <a style={{ "color": " #f36546", "textDecorationLine": "underline  " }}>Resend Code in </a>
                            </p>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-cus my-5 my-sm-0 px-4 py-2 bt btnlogin" data-bs-toggle="modal" data-bs-target="#exampleModal"> <a
                                type="button" style={{ "textdecoration": "none" }} onClick={Nextpage}
                                >Verify</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex flex-column justify-content-center" style={{"marginLeft":"32px"}}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control inputwidth" id="name" aria-describedby="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control inputwidth" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city" className="form-label">Enter Your City</label>
                                <input type="text" name="s" className="form-control inputwidth" list="from" />
                                <datalist id="from">
                                    <option>Gurgaon</option>
                                </datalist>
                            </div>
                            <div className="form-group my-3">
                            <label htmlFor="email" className="form-label">Select Category</label>
                                <select name="type" className="btn-primary form-control inputwidth">
                                    <option value="Load">Truck Owner</option>
                                    <option value="Lorry">Loads Owner</option>
                                </select>
                            </div>
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                crossOrigin="anonymous"
            />
        </>
    )
}
export default Otp