import React from 'react';
import Instagram from '../containers/contact/instagram';

import fbImage from '../../assets/images/fb.png';
import googleImage from '../../assets/images/google.jpg';
import leetcodeImage from '../../assets/images/leetcode.png';
import igImage from '../../assets/images/instagram.png';
import gitImage from '../../assets/images/github.png';

export default class Contact extends React.Component {

    constructor() {
        super();
        this.messageSpeed = 15;
        this.timeout = [];
        this.state = {
            message: '將鼠標移至圖示上以檢視提示訊息',
            curHover: 'none',
            showModal: false,
            onModal: 'none'
        };
        this.messageEn = {
            'fb': 'Chat with me by using private message, I will respond as soon as I can',
            'google': 'I commonly use Gmail, please send me an email and start our conversation',
            'ig': 'Click to view my personal feeds, coming from Instagram API',
            'gh': 'Source code including Foodhub and this website are stored on the github, feel free to leave your comments and discuss with me',
            'leet': 'Sometimes I practice algorithm on Leetcode to make my logical of thinking'
        }
        this.messageCH = {
            'fb': '發送私人訊息給我，我會以最快的時間回覆',
            'google': '寄信到我的 gmail 信箱，我每天都會確認是否有新的信件',
            'ig': '串接了 Instramg API，將顯示我最新的四則動態',
            'gh': '此個人網站以及協助 FoodBank 所開發的進存銷系統的程式碼皆放在 Github 上，歡迎留下給我的建議或是與我一起討論',
            'leet': '我偶爾會使用 leetcode 練習對 Javascript 的熟練度以及邏輯思考'
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                this.setState({ showModal: false });
            }
        });
    }

    render() {

        return (
            <main id="main">

                <div className="container">

                    <div id="contactBlock">
                        <h3 className="page-title text-center">
                            歡迎點開下方的圖示與我取得聯繫
                        </h3>
                        <div className="topspace">
                            <a href="https://m.me/zizi.zheng.1" target="_blank" rel="noopener noreferrer">
                                <img id="fbImg" className="animated pulse"
                                    src={fbImage} alt="fb icon"
                                    onMouseOver={() => this.onHover('fb')} />
                            </a>
                            {/*<a href="https://plus.google.com/u/0/111683413001408758628" target="_blank">*/}
                            <a>
                                <img id="gooImg" className="animated pulse" src={googleImage} alt="google icon" onMouseOver={() => this.onHover('google')}
                                />
                            </a>
                            {/*<a href="https://www.instagram.com/zizi_bartz/" target="_blank">*/}
                            <a>
                                <img className="animated pulse" src={igImage} alt="instagram icon" onMouseOver={() => this.onHover('ig')}
                                    onClick={() => this.toggleModal(igImage)} />
                            </a>
                            <a href="https://github.com/zizizheng" target="_blank" rel="noopener noreferrer">
                                <img className="animated pulse" src={gitImage} alt="github icon" onMouseOver={() => this.onHover('gh')} />
                            </a>
                            <a href="https://leetcode.com/zizizheng/" target="_blank" rel="noopener noreferrer">
                                <img id="leetImg" className="animated pulse" src={leetcodeImage} alt="leetcode icon" onMouseOver={() => this.onHover('leet')} />
                            </a>
                        </div>

                        <div className="message">
                            <span className="lead">{this.state.message}</span>
                        </div>

                    </div>

                </div>

                {this.state.showModal ? <Instagram src={this.state.onModal} /> : ''};
            </main>
        );
    }

    onHover(s) {
        if (this.state.curHover === s) return;

        this.setState({ curHover: s });
        this.timeout.forEach((t) => { clearTimeout(t) });
        this.timeout = [];
        let output = '', to;
        for (let i = 0; i < this.messageCH[s].length; i++) {
            //eslint-disable-next-line
            to = setTimeout(() => {
                output += this.messageCH[s][i];
                this.setState({ message: output });
            }, i * this.messageSpeed);
            this.timeout.push(to);
        }
    }

    toggleModal(src) {
        this.setState({ showModal: !this.state.showModal, onModal: src });
    }

    // <h3 className="page-title text-center">
    //     Wanna know more about me or Chat with me ? <br /> </h3>
    //     <h3 className="page-title text-center">
    //         You can find my trace in the following commiunities and websites
    // </h3>);

}