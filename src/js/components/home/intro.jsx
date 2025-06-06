import React from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { navAction } from '../../action/navAction';

class Intro extends React.Component {

    render() {
        return (
            <div className={this.props.style}>
                <div>
                    <p className="lead text-muted text-center">
                        哈囉，這是我的個人網站<br />
                        關於我的一切請到
                        <Link to="/about" onClick={() => this.changePage(navAction('about'))}> About</Link> 探個究竟，其中包含我的專業技能以及個人經歷<br />
                        <Link to="/portfolio" onClick={() => this.changePage(navAction('portfolio'))}>Portfolio</Link> 有我近期所開發的作品介紹以及碩士論文<br />
                        <Link to="/contact" onClick={() => this.changePage(navAction('contact'))}>Contact</Link> 提供你聯絡我的方式以及其他平台的資訊<br />
                    </p>
                    <p className="lead text-center"><strong>Hope You Enjoy!</strong></p>
                </div>
            </div>
        );
    }

    inEnglish() {
        return (
            <div>
                <p className="lead text-muted text-center">
                    Hi, this is my personal page.<br />
                    Self-introduction is presented in
                        <Link to="/about" onClick={() => this.changePage(navAction('about'))}> About</Link>, including my programing skills and my personal experience.<br />
                    <Link to="/portfolio" onClick={() => this.changePage(navAction('portfolio'))}>Portfolio</Link> shows the recent works I have done, and the introduction of my master's dissertation.<br />
                    <Link to="/contact" onClick={() => this.changePage(navAction('contact'))}>Contact</Link> contains any information that can contact me, please check it.<br />
                </p>
                <p className="lead text-center"><strong>Hope You Enjoy!</strong></p>
            </div>
        );
    }

    changePage(v) {
        this.props.dispatch(v);
    }
}

export default connect()(Intro);