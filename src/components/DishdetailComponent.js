import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

class DishDetail extends Component {
    renderDish(dish) {
        if (dish) {
            return (
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return <div></div>
        }
    }

    renderComments(dish) {
        if (dish) {
            const comments = dish.comments.map((obj) => {
                return (
                    <div key={obj.id}>
                        <CardBody>
                            <CardTitle>{obj.author}</CardTitle>
                            <CardSubtitle>{obj.rating} star rating</CardSubtitle>
                            <CardText>{obj.comment}</CardText>
                            <CardSubtitle>
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(obj.date)))}
                            </CardSubtitle>
                        </CardBody>
                    </div>
                )
            });
            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

    }

    render() {
        return (
            <div className="row m-1">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>

            </div>

        );
    }
}

export default DishDetail;