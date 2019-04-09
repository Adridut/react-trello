import React, {Component} from 'react'
import {storiesOf} from '@storybook/react'

import Board from '../src'
import {t} from '../locales'
import update from 'immutability-helper'
import Modal from 'react-modal'


const data = require('./data/base.json')

const smallData = require('./data/data-sort')

export let lang = localStorage.getItem('lang')

class NewCard extends Component {

  updateField = (field, evt) => {
    this.setState({[field]: evt.target.value})
  }

  handleAdd = () => {
    this.props.onAdd(this.state)
  }

  render() {
    const {onCancel} = this.props
    return (
      <div style={{background: 'white', borderRadius: 3, border: '1px solid #eee', borderBottom: '1px solid #ccc'}}>
        <div style={{padding: 5, margin: 5}}>
          <div>
            <div style={{marginBottom: 5}}>
              <input type="text" onChange={evt => this.updateField('title', evt)} placeholder="Title"/>
            </div>
            <div style={{marginBottom: 5}}>
              <input type="text" onChange={evt => this.updateField('description', evt)} placeholder="Description"/>
            </div>
          </div>
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    )
  }
}

storiesOf('Editable Board', module)
  .add(
    'Add/Delete Cards',
    () => {

      // let eventBus = undefined
      //
      // let isOpen = localStorage.getItem('modal') === 'true'
      //
      // const setEventBus = (handle) => {
      //   eventBus = handle
      // }

      const shouldReceiveNewData = nextData => {
        console.log('Board has changed')
        console.log(nextData)
      }

      const handleCardDelete = (cardId, laneId) => {
        console.log(`Card: ${cardId} deleted from lane: ${laneId}`)
      }

      const handleCardAdd = (card, laneId) => {
        console.log(`New card added to lane ${laneId}`)
        console.dir(card)
      }

      const changeLang = (event) => {
        localStorage.setItem('lang', event.target.value)
        window.location.reload()
      }

      // const modifyCardTitle = (cardId, metadata, laneId) => {
      //   localStorage.setItem('modal', 'true')
      //   window.location.reload()
      //   // eventBus.publish({type: 'REMOVE_CARD', laneId: laneId, cardId: cardId})
      //   // eventBus.publish({
      //   //   type: 'ADD_CARD',
      //   //   laneId: laneId,
      //   //   card: {id: cardId, title: 'Buy Milk', label: '15 mins', description: 'Also set reminder'}
      //   // })
      // }
      //
      // const closeModal = () => {
      //   localStorage.setItem('modal', 'false')
      //   window.location.reload()
      // }


      return (
        <div>
          {/*<Modal*/}
            {/*isOpen={isOpen}*/}
            {/*onRequestClose={closeModal}*/}
            {/*contentLabel="Example Modal"*/}
          {/*>*/}
            {/*<button onClick={closeModal}>close</button>*/}
            {/*<div>Update card</div>*/}
            {/*<form>*/}
              {/*<div>*/}
                {/*<p>{t('title')}</p>*/}
                {/*<input type="text" name="title"/>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<p>{t('label')}</p>*/}
                {/*<input type="text" name="label"/>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<p>{t('description')}</p>*/}
                {/*<input type="text" name="description"/>*/}
              {/*</div>*/}
            {/*</form>*/}
          {/*</Modal>*/}
          <label>
            {t('pick_language')}
            <select style={{margin: 5}} onChange={changeLang}>
              <option value="en" selected={lang === 'en'}>{t('english')}</option>
              <option value="fr" selected={lang === 'fr'}>{t('french')}</option>
            </select>
          </label>
          <Board
            data={data}
            draggable
            id="EditableBoard1"
            onDataChange={shouldReceiveNewData}
            onCardDelete={handleCardDelete}
            onCardAdd={handleCardAdd}
            editable
            laneDraggable={false}
          />
        </div>

      )
    },
    {info: 'Add/delete cards or delete lanes'}
  )
  .add(
    'Custom Buttons',
    () => {
      return <Board data={data} editable hideCardDeleteIcon addCardLink={<button>New Card</button>}/>
    },
    {info: 'Allow editable elements on the board to be customized'}
  )
  .add(
    'New Card Template',
    () => {
      return <Board data={data} editable newCardTemplate={<NewCard/>} addCardTitle="Click to add"/>
    },
    {info: 'Pass a custom new card template to add card'}
  )
  .add(
    'Add New Lane',
    () => {
      return (
        <Board
          data={smallData}
          editable
          canAddLanes
          onLaneAdd={t => console.log('You added a line with title ' + t.title)}
        />
      )
    },
    {info: 'Allow adding new lane'}
  )
