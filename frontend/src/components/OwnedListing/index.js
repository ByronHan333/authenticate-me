import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom";
import * as listingsActions from '../../store/listing'
import SingleListingGrid from '../SingleListingGrid'
import Map from '../Map'
import defaultHome from "../../assets/images/defaultHome.png"

const OwnedListing = () => {
  const sessionUser = useSelector(state => state.session.user);
  const listings = useSelector(state => state.listings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listingsActions.fetchListings())
  },[dispatch])

  if (!sessionUser) {
    return <Redirect to="/" />
  }

  let ownedListings = Object.values(listings).filter(l => l.hostId==sessionUser.id);

  // let homeList = ownedListings?.map(home => {
  //   return <li key={home.id} className="home-card">
  //     <ul className="home-card-ul">
  //       <li><img src={home.photo} className="home-profile-pic" alt="nan"/></li>
  //       <li><p>{home.title}</p></li>
  //       <li><p>{home.description}</p></li>
  //       <li><p>${home.price} night</p></li>
  //     </ul>
  //   </li>
  // })

  return (
    <div className="index">
      <div className="index-listings">
        <ul className="index-ul">
        {Object.values(ownedListings).map(home => {
          return (
          <li key={home.id} className="home-card">
            <SingleListingGrid home={home}/>
          </li>
          )
        })}
        </ul>
      </div>
      <div className="index-map">
        {/* <h1>Map</h1> */}
        <Map />
      </div>
    </div>
  )
}

export default OwnedListing
