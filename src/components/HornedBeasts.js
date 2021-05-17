import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: 0
        }
    }
    handleClick = () => {
        this.setState({
            vote: this.state.vote + 1,
        })
    }
    render() {
        return (
            <div>
                {/* <h2>{this.props.title}</h2>
                <img src={this.props.imgURL} alt={"Markhor"} onClick={this.handleClick} />
                <p>{this.props.description}</p>
                <Button variant="outline-primary" className={'button'}>Primary</Button>{' '}
                <p>{this.state.vote}</p> */}
                <Card style={{ width: '18rem' }} className="Container">
                    <Card.Img variant="top" src={this.props.imgURL} alt={"Markhor"}  />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text className='vote'>
                            {this.state.vote}
                        </Card.Text>
                        <Button variant="warning" onClick={this.handleClick}>Vote</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Footer;