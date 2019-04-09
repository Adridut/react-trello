import React, {Component} from 'react'
import {t} from '../../locales'
import Modal from 'react-modal'


class UpdateModal extends Component {

  constructor(props) {
    super(props);
    this.state = {title: '', label: '', description:''};

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLabelChange = this.handleLabelChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.card) {
      this.setState(nextProps.card)
    }
  }


  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }


  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleLabelChange(event) {
    this.setState({label: event.target.value});
  }

  submit(){
    this.props.onClick(this.state)
  }

  render() {
    const {isOpen, onClick, onRequestClose, card} = this.props
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal">
        <div>Update card</div>
        <form>
          <div>
            <p>{t('title')}</p>
            <input type="text" name="title" placeholder={t('title')} value={this.state.title} onChange={this.handleTitleChange}/>
          </div>
          <div>
            <p>{t('label')}</p>
            <input type="text" name="label"  placeholder={t('label')} value={this.state.label} onChange={this.handleLabelChange}/>
          </div>
          <div>
            <p>{t('description')}</p>
            <input type="text" name="description"  placeholder={t('description')} value={this.state.description} onChange={this.handleDescriptionChange}/>
          </div>
          <button onClick={this.submit}>close</button>
        </form>
      </Modal>
    )
  }
}


export default UpdateModal
