import React from "react";

import card from "../../img/card.jpeg";
import card2 from "../../img/card2.jpeg";
import card3 from "../../img/card3.jpeg";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

function cardPage() {
  return (
    <div>
      <CardGroup>
        <Card className="m-4 vh-30" style={{ width: "25px" }}>
          <Card.Img variant="top" src={card} />
          <Card.Body className="m-4 vh-50">
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              longer.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card className="m-4">
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card className="m-4">
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default cardPage;
