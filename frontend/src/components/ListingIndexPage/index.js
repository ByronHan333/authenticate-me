import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as listingsActions from '../../store/listing'

function ListingIndexPage() {
  const dispatch = useDispatch()
  const listings = useSelector(state => state.listings)

  useEffect(() => {
    dispatch(listingsActions.getListings())
  },[dispatch])

  return (
    <>
    <h1>ListingIndexPage</h1>
    <ul>
      {Object.values(listings)?.map(item => {
        return <li key={item.id}> {item.title}, {item.description}, {item.price} </li>
      })}
    </ul>
    </>
  )
}

export default ListingIndexPage;
