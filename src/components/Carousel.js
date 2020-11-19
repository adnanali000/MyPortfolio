import React from 'react';
import youtube from '../assets/images/youtube.png';
import google from '../assets/images/google.png';
import twitter from '../assets/images/twitter.png';
import Card from '../components/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items:[
                {
                    id:0,
                    title:'Youtube',
                    subTitle: 'The videos platform',
                    imgSrc: youtube,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id:1,
                    title:'Google',
                    subTitle: 'Google Web Page',
                    imgSrc: google,
                    link: 'https://google.com',
                    selected: false
                },{
                    id:2,
                    title:'twitter',
                    subTitle: 'A news platform',
                    imgSrc: twitter,
                    link: 'https://twitter.com',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id,card)=>{
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item =>{
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items)=>{
        return items.map(item => {
            return <Card item={item} click = {(e => this.handleCardClick(item.id,e))} key={item.id} />
        })

    }







    render(){
    return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)} 

            </Row>
        </Container>
    );
}
}

export default Carousel;