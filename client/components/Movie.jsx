import React from 'react';
import ReactModal from 'react-modal';
import './Movie.less';
import './MovieModal.less';

class Movie extends React.Component {

 constructor(props, context) {

    super(props, context);

    this.state = {
      showModal: false,
    };

  this.handleOpenModal = this.handleOpenModal.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this);

 };

  handleOpenModal() {
    this.setState({ showModal: true });
  };
  
  handleCloseModal() {
    this.setState({ showModal: false });
  };

    render() {
        return (
            <div className='Movie'>
                <span className='Movie__del-icon' onClick={this.props.onDelete}> × </span>
                <div className='Movie__content' onClick={this.handleOpenModal}>
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
                <p><b>Movie name:</b> {this.props.title}</p>
                <p><b>Release year:</b> {this.props.year}</p>
                <p><b>Format:</b> {this.props.format}</p>
                <p><b>Starring:</b> {this.props.starring}</p>
                <button className ='Modal__button' onClick={this.handleCloseModal}>Hide info</button>
                </ReactModal>
                </div>
            </div>
            
        );
    };
};

export default Movie;