import React from 'react';
import Card from '..//Card/index';

import Plants from '..//..//Assets/Images/Plants.png';
import Snap from '..//..//Assets/Images/Snap.png';
import Zoo from '..//..//Assets/Images/Zoo.png';


class Carousel extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                items: [
                    {
                        id:0,
                        title: 'Just Plant It',
                        subTitle: 'A Planters Guide to HousePlants',
                        imgSrc: Plants ,
                        link: 'https://blooming-brook-59963.herokuapp.com/',
                        selected: false
                    },
                    {
                        id:1,
                        title: 'Snap Shot',
                        subTitle: 'A Photographers Portfolio',
                        imgSrc: Snap,
                        link: 'https://glacial-coast-63666.herokuapp.com/',
                        selected: false
                    },
                    {
                        id:2,
                        title: 'Zoo Kepers Digest',
                        subTitle: 'A catalog for all things Animals',
                        imgSrc:Zoo,
                        link: 'https://thawing-journey-84707.herokuapp.com/',
                        selected: false
                    },
                ]
            }
        }

        handleCardClick = (id, card) => {
            let items = [...this.state.items];

            items[id].selected = items[id].selected ? false : true;

            items.forEach(item => {
                if(item.id !==id) {
                    item.selected = false;
                }
            });

            this.setState({
                items
            });
        }

        makeItems = (items) => {
            return items.map(item=>{
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }

        render() {
            return (
               <Container fluid={true}>
                   <Row className="justify-content-around">
                       {this.makeItems(this.state.items)}
                   </Row>
               </Container>
            );
        }

}

export default Carousel;