import React from 'react';

export default class Player extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.audioOnly === false &&
                    <video width="320" height="240" autoplay="false" controls>
                        <source src={this.props.source} type="video/ogg" />
                    </video>
                }
                {
                    this.props.audioOnly === true &&
                    <audio controls>
                        <source src={this.props.source} type="audio/ogg" />
                    </audio>
                }
            </div>
        )
    }

}

Player.defaultProps = {
    audioOnly: true,
    source: ''
}

