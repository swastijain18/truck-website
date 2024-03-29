
import React, { useContext, useState, useEffect } from 'react'
import Truckcontext from "../context/Truckcontext";
import Router from 'next/router';
import Image from 'next/Image';


const Banner = (props) => {
    const context = useContext(Truckcontext);
    const { fetchlocation, froml, tol } = context;
    const [type, settype] = useState('Load');
    const [from, setfrom] = useState();
    const [to, setto] = useState();
    // const [tid, settid] = useState();
    // const [fid, setfid] = useState();
    function getfrom(e) {
        setfrom(e.target.value);
        fetchlocation(e.target.value, 'from');
    }
    function getto(e) {
        setto(e.target.value);
        fetchlocation(e.target.value, 'to');
    }
    function gettype(e) {
        settype(e.target.value);
    }
    const handleClick = () => {
        let url = "http://localhost:3000/search/" + type + "?from=" + from + "&to=" + to
        Router.push(url);
    }

    return (
        <>
            <section >
                <div className='row head-banner'>
                    <div className='col-lg-5 col-sm-12 mx-lg-5 text-left left-head'>

                        <h1>Reduce Your Telecom Costs by Switching to the Cloud </h1>
                        <h5 className='my-4'>Streamline all of your business practises, from the Customer Relationship to the Sales to Project management .</h5>

                        <button className="my-sm-0 px-4 py-2 blue-btn"> <a
                            type="button" style={{ "color": "white", "textdecoration": "none" }}
                            href="/">Download App</a></button>
                    </div>
                </div>

                <div className="searchdiv">
                    <form>
                        <div className="styf" id="form-control">
                            <div className="form-card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4 my-2">
                                            <div className="form-group">
                                                <input type="text" name="s" placeholder="Enter Your Location"
                                                    className="form-control" list="from" onChange={getfrom} />
                                                <datalist id="from">
                                                    {froml.map((e) => {
                                                        return (<option key={e.id}
                                                        >{e.District},{e.State}</option>)
                                                    })}
                                                </datalist>
                                            </div>
                                        </div>
                                        <div className="col-md-4 my-2">
                                            <div className="form-group">
                                                <input type="text" name="d" placeholder="Enter Your Destination"
                                                    className="form-control" list="to" onChange={getto} />
                                                <datalist id="to">
                                                    {tol.map((e) => {
                                                        return (<option>{e.District},{e.State}</option>)
                                                    })}
                                                </datalist>
                                            </div>
                                        </div>
                                        <div className="col-md-2 my-2">
                                            <div className="form-group">
                                                <select name="type" className="btn-primary form-control" onChange={gettype}>
                                                    <option value="Load">Load</option>
                                                    <option value="Lorry">Lorry</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2 my-2">
                                            <div>
                                                <button type="button" name="submit" className="form-control find-btn" value="Find" onClick={handleClick} >Find</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        </>
    );
}

export default Banner;