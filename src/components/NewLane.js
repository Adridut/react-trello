import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {LaneTitle, NewLaneButtons, Section} from '../styles/Base'
import EditableLabel from './widgets/EditableLabel'
import {AddButton, CancelButton} from '../styles/Elements'
import {t} from '../../locales'


class NewLane extends Component {
  updateField = (field, value) => {
    this.setState({[field]: value})
  }

  handleAdd = () => {
    this.props.onAdd(this.state)
  }

  render() {
    const {onCancel} = this.props
    return (
        <Section>
          <LaneTitle>
            <EditableLabel placeholder="title" onChange={val => this.updateField('title', val)} autoFocus/>
          </LaneTitle>
          <NewLaneButtons>
            <AddButton onClick={this.handleAdd}>{t('add')}</AddButton>
            <CancelButton onClick={onCancel}>{t('cancel')}</CancelButton>
          </NewLaneButtons>
        </Section>
    )
  }
}

NewLane.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
}
NewLane.defaultProps = {}

export default NewLane
