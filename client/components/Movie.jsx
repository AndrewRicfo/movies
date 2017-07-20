import React from 'react';

import './Movie.less';

const Movie = React.createClass({
    render() {

        return (
            <div className='Movie'>
                <span className='Movie__del-icon' onClick={this.props.onDelete}> × </span>
                {
                    this.props.title
                    ?
                        <h4 className='Movie__title'>{this.props.title}</h4>
                    :
                        null
                }
                <div className='Movie__text'>{this.props.children}</div>
            </div>
        );
    }
});

export default Movie;
