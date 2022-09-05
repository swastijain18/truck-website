
import React, {useContext, useState , useEffect} from 'react'
import Truckcontext from "../context/Truckcontext";
import Router from 'next/router';


const Banner = (props) => {
    const context = useContext(Truckcontext);
    const {submit ,froml,tol} = context;
    const [type, settype] = useState('Load');
    const [from, setfrom] = useState();
    const [to, setto] = useState();
    // const [tid, settid] = useState();
    // const [fid, setfid] = useState();
function getfrom(e){
        setfrom(e.target.value);
        submit(e.target.value,'from');
    }
function getto(e){
        setto(e.target.value);
        submit(e.target.value,'to');
    }
function gettype(e){
        settype(e.target.value);
    }
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
                        <h5 className="desh2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, molestias.ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, molestias.ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, molestias.ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, molestias.ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, molestias.ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, molestias.</h5>
                    </div>
                    <div className="col-md-7">
                    </div>
                </div>

                <div className="searchdiv mt-5">
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
                                                    {froml.map((e)=>{
                                                      return(<option key={e.id}
                                                      >{e.District},{e.State}</option>)
                                                    })}
                                                </datalist>
                                            </div>
                                        </div>
                                        <div className="col-md-4 my-2">
                                            <div className="form-group">
                                                <input type="text" name="d" placeholder="Enter Your Destination"
                                                    className="form-control" list="to" onChange={getto}/>
                                                     <datalist id="to">
                                                    {tol.map((e)=>{
                                                      return(<option>{e.District},{e.State}</option>)
                                                    })}
                                                </datalist>
                                            </div>
                                        </div>
                                        <div className="col-md-2 my-2">
                                            <div className="form-group">
                                                <select name="type" className="btn-primary form-control"  onChange={gettype}>
                                                    <option value="Load">Load</option>
                                                    <option value="Lorry">Lorry</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2 my-2">
                                            <div className="form-group">
                                                <input type="button" name="submit" className="form-control" value="Find" onClick={handleClick}/>
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