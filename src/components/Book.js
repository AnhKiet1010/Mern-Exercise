import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Button
} from "reactstrap";
import axios from "axios";
import { Redirect } from 'react-router-dom';

class Book extends Component {
    constructor(props) {
        super();

        this.state = {
            book: []
        };
    }

  componentDidMount() {
      axios
        .get("/book")
        .then(res => {
          res.data ? 
          this.setState({book: res.data}) : this.setState({book: []})
        })
        .catch(function(error) {
          console.log(error);
        });
    }

  render() {
      return (
        <Container>
          <h2>Bestseller!</h2>
          <Row>
            {this.state.book.map((item) => (
              <Col sm="4" >
                <Card>
                  <CardImg top src={item.image} alt="Card image cap" height={200} />
                  <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardTitle>{item.price}</CardTitle>
                      <Button>
                        Add to Card
                      </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
}
export default Book;