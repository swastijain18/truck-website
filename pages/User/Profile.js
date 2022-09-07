import React from 'react'
import Image from 'next/image'
import Navbarp from './Navbarp'
import { useContext } from 'react'
import Head from "next/Head";
import Script from "next/script";
import Truckcontext from "../context/Truckcontext";
import Truckstate from '../context/Truckstate';

const Profile = () => {
    return (
        <>

            <Head>
                <title>Your Dasboard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                    crossOrigin="anonymous" />
            </Head>
            <div class="row">
                <div className='col-md-3 sidenav'style={{"height":"100vh", "backgroundColor":"rgb(255,138,41)"}}>
                    <h2 class="text-center my-5">Truck</h2>
                    <div className="anish justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li className="nav-item mx-5">
                                <a className="nav-link " href="#">Home</a>
                            </li>

                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                        </ul>
                        <div id="bottom" class="d-flex justify-content-center">
                            <div class="mx-3">
                                <a href=""> About Us</a>
                            </div >
                            <div class="mx-3">
                                <a href=""> Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 mx-5 profilediv">
                    <div className='my-2'>
                        <h2>My Profile</h2>
                    </div>
                    <div className='text-center'>
                        <Image src="/profile.jpg" height={100} width={100} className="imgp" />
                        <h4>Your Pic</h4>
                    </div>
                    <div>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" class="form-control inputwidth" id="name" aria-describedby="name" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control inputwidth" id="email" />
                            </div>
                            <div className="form-group">
                                <label for="city" class="form-label">Enter Your City</label>
                                <input type="text" name="s" className="form-control inputwidth" list="from" />
                                <datalist id="from">
                                    <option>Gurgaon</option>
                                </datalist>
                            </div>
                            <div className="form-group my-3">
                            <label for="email" class="form-label">Select Category</label>
                                <select name="type" className="btn-primary form-control inputwidth">
                                    <option value="Load">Truck Owner</option>
                                    <option value="Lorry">Loads Owner</option>
                                </select>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
            <Script src="https://kit.fontawesome.com/c378079259.js" crossOrigin="anonymous" />
        </>
    )
}

export default Profile