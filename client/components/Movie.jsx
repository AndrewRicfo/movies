import React from 'react';
import ReactModal from 'react-modal';

import './Movie.less';
import './MovieModal.less';

const Movie = React.createClass({

    getInitialState () {
        return {
            showModal: false
        };
  },

  handleOpenModal () {
    this.setState({ showModal: true });
  },
  
  handleCloseModal () {
    this.setState({ showModal: false });
  },

    render() {

        return (
            <div className='Movie'>
                <span className='Movie__del-icon' onClick={this.props.onDelete}> × </span>
                <div onClick={this.handleOpenModal}>
                {
                    this.props.title
                    ?
                        <h4 className='Movie__title'>{this.props.title}</h4>
                    :
                        null
                }
                <div className='Movie__text'>{this.props.children}</div>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="ModalMovie"
                  onRequestClose={this.handleCloseModal}
                  className="Modal"
                  overlayClassName="Overlay"
                >
                <p>Movie name: {this.props.title}</p>
                <p>Year: {this.props.year}</p>
                <p>Format: {this.props.format}</p>
                <p>Starring: {this.props.starring}</p>
                <button className ='Modal__button' onClick={this.handleCloseModal}>Hide info</button>
                </ReactModal>
                </div>
            </div>
            
        );
    }
});

export default Movie;
