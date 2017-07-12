import React from 'react';
import sound from '../../../assets/images/band_photo/sound.jpg';
import coffee from '../../../assets/images/band_photo/coffee.jpg';
import logo from '../../../assets/images/band_photo/logo.png'

export default class SlideShow extends React.Component {
    constructor() {
        super();
        this.photos = [sound, coffee, logo];
        this.styles = ["show-photo side left", "show-photo center", "show-photo side right"];
        this.state = {
            style: {
                left: this.styles[0], center: this.styles[1], right: this.styles[2]
            }
        };
        this.index = 1;
        this.photoClick = this.photoClick.bind(this);
    }
    render() {
        return (
            <div id="slideShow">
                <h3><em>Performance Photos</em></h3>
                <div className="slider">
                    <img className={this.state.style.left} src={this.photos[0]} alt="left photo" />
                    <div className="arrow leftArrow" onClick={() => this.photoClick(-1)}>&#10094;</div>
                    <img className={this.state.style.center} src={this.photos[1]} alt="center photo" />
                    <div className="arrow rightArrow" onClick={() => this.photoClick(1)}>&#10095;</div>
                    <img className={this.state.style.right} src={this.photos[2]} alt="right photo" />
                </div>
            </div>
        );
    }

    photoClick(v) {
        this.index += v;
        this.index = (this.index + this.styles.length) % this.styles.length;
        let left = (this.index - 1 + this.styles.length) % this.styles.length;
        let right = (this.index + 1 + this.styles.length) % this.styles.length;
        this.setState({
            style: {
                left: this.styles[left],
                center: this.styles[this.index],
                right: this.styles[right]
            }
        });
    }
}