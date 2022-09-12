
import React, { useContext, useState, useEffect } from 'react'
import Truckcontext from "../context/Truckcontext";
import Router from 'next/router';
import Image from 'next/Image';


const Banner = (props) => {
    const context = useContext(Truckcontext);
<<<<<<< HEAD
    const {fetchlocation ,froml,tol} = context;
=======
    const { fetchlocation, froml, tol } = context;
>>>>>>> 44a27d1a72441de0242eb65ef1dc5511e32eea7a
    const [type, settype] = useState('Load');
    const [from, setfrom] = useState();
    const [to, setto] = useState();
    // const [tid, settid] = useState();
    // const [fid, setfid] = useState();
<<<<<<< HEAD
function getfrom(e){
        setfrom(e.target.value);
        fetchlocation(e.target.value,'from');
=======
    function getfrom(e) {
        setfrom(e.target.value);
        fetchlocation(e.target.value, 'from');
>>>>>>> 44a27d1a72441de0242eb65ef1dc5511e32eea7a
    }
    function getto(e) {
        setto(e.target.value);
<<<<<<< HEAD
        fetchlocation(e.target.value,'to');
=======
        fetchlocation(e.target.value, 'to');
>>>>>>> 44a27d1a72441de0242eb65ef1dc5511e32eea7a
    }
    function gettype(e) {
        settype(e.target.value);
    }
<<<<<<< HEAD
const handleClick=()=>{
    let url = "http://localhost:3000/search/"+type+"?from="+from+"&to="+to
    Router.push(url);
}
   
    return (
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="col-md-5">
                        <h1>Loading Walle</h1>
                        <h5 className="desh2">The company itself is a very successful company. Easy, fun. The company itself is a very successful company. For some, troubles. For some, troubles. For some, troubles. For some, troubles. For some, troubles. For some, trouble.</h5>
                    </div>
                    <div className="col-md-7">
                    </div>
=======
    const handleClick = () => {
        let url = "http://localhost:3000/search/" + type + "?from=" + from + "&to=" + to
        Router.push(url);
    }

    return (
        <>
            <section className="mt-5" >
                <div style={{ marginTop: "-48px" }}>

                    <Image src="/red-truck.jpg" width={1300} height={450} alt="truck" style={{ width: "100%", opacity: "0.3" }} />

                    <h1 className='heading'>Reduce Your Telecom Costs by Switching to the Cloud <h5 className="desh2">Streamline all of your business practises, from the Customer Relationship to the Sales to Project management and billing together with a solitary resolution.</h5></h1>
                    
>>>>>>> 44a27d1a72441de0242eb65ef1dc5511e32eea7a
                </div>

                <div className="searchdiv">
                    <form>
                        <div className="mx-2 styf" id="form-control">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4 my-2">
                                            <div className="form-group">
                                                <input type="text" name="s" placeholder="Enter Your Location"
                                                    className="form-control" list="from" onChange={getfrom} />
                                                <datalist id="from">
<<<<<<< HEAD
                                                    {froml.map((e)=>{
                                                      return(<option key={e.id}
                                                      >{e.District},{e.State}</option>)
=======
                                                    {froml.map((e) => {
                                                        return (<option key={e.id}
                                                        >{e.District},{e.State}</option>)
>>>>>>> 44a27d1a72441de0242eb65ef1dc5511e32eea7a
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
                                            <div className="form-group">
                                                <input type="button" name="submit" className="form-control" value="Find" onClick={handleClick} />
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