import React, { Component } from 'react';
import Modal from '../../components/contact/modal';
import fetchJsonp from 'fetch-jsonp';

class Instagram extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: 'ig',
            src: this.props.src,
            bio: '',
            full_name: '',
            username: '',
            profile_picture: '',
            medias: [],
        };
        this.fetched = false;
        this.timer = null;

    }
    componentDidMount() {
        this.timer = setTimeout(this.fetchData.bind(this), 50);
    }
    render() {
        return (
            <Modal data={this.state}>

            </Modal>
        );
    }
    fetchData() {
        if (!this.fetched) {
            let profile = 'https://api.instagram.com/v1/users/self/?access_token=1719925228.bca275e.68132251ec524787817be421003451ef';
            let media = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1719925228.bca275e.68132251ec524787817be421003451ef&count=4';

            fetchJsonp(profile)
                .then((response) => response.json())
                .then((data) => {
                    this.fetched = true;
                    if (this.timer) {
                        clearTimeout(this.timer);
                        this.timer = null;
                    }
                    this.setState({
                        bio: data.data.bio,
                        full_name: data.data.full_name,
                        profile_picture: data.data.profile_picture,
                        followed_by: data.data.counts.followed_by,
                        follows: data.data.counts.follows
                    });
                })
                .catch((error) => console.error(error));
            fetchJsonp(media)
                .then((response) => response.json())
                .then((data) => {
                    let medias = [];
                    let source;
                    let internel_text;
                    for (let i = 0; i < data.data.length; i++) {
                        internel_text = data.data[i].caption.text.split(/(?:\r\n|\r|\n)/g);
                        source = data.data[i].type === 'video' ?
                            <div key={i}>
                                <video controls>
                                    <source src={data.data[i].videos.low_bandwidth.url} type="video/mp4" />
                                </video>
                                <p>{internel_text}</p>
                            </div>
                            :
                            <div key={i}>
                                <img src={data.data[i].images.low_resolution.url} alt="post from ig" />
                                <p>{internel_text}</p>
                            </div>;
                        medias.push(source);
                    }
                    this.setState({ medias: medias });

                })
                .catch((error) => console.error(error));

        }
    }
}

export default Instagram;

