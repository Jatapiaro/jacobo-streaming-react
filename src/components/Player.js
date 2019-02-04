import React from 'react';

export default class Player extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.youtube &&
                    <iframe width="320" height="240" 
                        src={`https://www.youtube.com/embed/${this.props.source}`}
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                }
                {
                    this.props.youtube === false && this.props.audioOnly === false &&
                    <video width="320" height="240" autoplay={false} controls>
                        <source src={this.props.source} type="video/ogg" />
                    </video>
                }
                {
                    this.props.youtube === false && this.props.audioOnly === true &&
                    <audio autoplay={false} controls>
                        <source src={this.props.source} type="audio/ogg" />
                    </audio>
                }
            </div>
        )
    }

}

Player.defaultProps = {
    audioOnly: true,
    source: '',
    youtube: false,
}

