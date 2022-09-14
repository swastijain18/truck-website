import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="faq-box">
      <div>
        <h2 className="mb-5 text-center">FAQ's</h2>

        <div className="row my-3" >
          <div className="col-md-4"><b>Delivery</b></div>
          <div className="col">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-4"><b>Delivery</b></div>
          <div className="col-md-8">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-4"><b>Delivery</b></div>
          <div className="col-md-8">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-4"><b>Delivery</b></div>
          <div className="col-md-8">
            <Accordion>
              <Accordion.Item eventKey="">
                <Accordion.Header>Accordion Item</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
