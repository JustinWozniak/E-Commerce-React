import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

class ShopPage extends React.Component {
  unSubscribeFromSnapshot = null

  componentDidMount() {
    //JUST NOTICED TYPO IN FIRESTORE TOO LATE TO CHANGE NOW COLLECTIONS
    const collectionRef = firestore.collection('collecions')
    collectionRef.onSnapshot(async snapshot => {
      const collection = convertCollectionsSnapshotToMap(snapshot)
      console.log(collection)
    })
  }


  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
}




export default ShopPage
