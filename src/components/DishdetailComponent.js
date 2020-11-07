import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

class DishDetail extends Component {
    render() {
        const comments = this.props.dish.comments.map((obj) => {
            return (
                <div key={obj.id}>
                    <CardBody>
                        <CardTitle>{obj.author}</CardTitle>
                        <CardSubtitle>{obj.rating} star rating</CardSubtitle>
                        <CardText>{obj.comment}</CardText>
                        <CardSubtitle>{obj.date}</CardSubtitle>
                    </CardBody>
                </div>
            )
        });

        return (
            <div className="row m-1">
                <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            {comments}
                        </CardBody>
                    </Card>
                </div>

            </div>

        );
    }
}

export default DishDetail;