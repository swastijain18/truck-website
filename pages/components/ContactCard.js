import Image from "next/Image";

const ContactCard = (props) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="text-center contact">
                <div className="card-body">
                    <Image src={props.img} width={50} height={50} />
                    <h5>{props.head}</h5>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;