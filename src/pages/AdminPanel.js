import React from 'react'
import AdminCSS from './AdminCSS.module.css'
// import {logo_transparent} from './icons/logo_transparent.png'

const AdminPanel = () => {
  return (
    <div className={AdminCSS.Outer}>

      <div className={AdminCSS.nav}>
        <img className={AdminCSS.logo} src="./images/logoLight.png" />
        <ul>
          <li className={AdminCSS.navItem}><a href="">Dashboard</a> </li>
          <li className={AdminCSS.navItem}><a href="">Requests</a></li>
          <li className={AdminCSS.navItem}><a href="">Profiles</a></li>
        </ul>
      </div>

      <div className={AdminCSS.colRight}>
        <div className={AdminCSS.reqContainer}>

          <h2 className={AdminCSS.header}>Requests</h2>

          <div className={AdminCSS.reqLists}>
            <div className={AdminCSS.reqCard}>
              <img className={AdminCSS.reqImg} src="/images/Categories/bikes.jpg" alt="bike" />
              <div className={AdminCSS.reqDetails}>
                <p>Profile:</p>
                <p>Product:</p>
                <p>Price:</p>
                <p>Desc:</p>
              </div>
              <div className={AdminCSS.btn}>
                <button className={AdminCSS.btnApprove} type="button">Approve</button>
                <button className={AdminCSS.btnDeny} type="button">Deny</button>
              </div>
            </div>

            <div className={AdminCSS.reqCard}>
              <img className={AdminCSS.reqImg} src="/images/Categories/cars.jpg" alt="cars" />
              <div className={AdminCSS.reqDetails}>
                <p>Profile:</p>
                <p>Product:</p>
                <p>Price:</p>
                <p>Desc:</p>
              </div>
              <div className={AdminCSS.btn}>
                <button className={AdminCSS.btnApprove} type="button">Approve</button>
                <button className={AdminCSS.btnDeny} type="button">Deny</button>
              </div>
            </div>

            <div className={AdminCSS.reqCard}>
              <img className={AdminCSS.reqImg} src="/images/Categories/gadgets.jpg" alt="gadgets" />
              <div className={AdminCSS.reqDetails}>
                <p>Profile:</p>
                <p>Product:</p>
                <p>Price:</p>
                <p>Desc:</p>
              </div>
              <div className={AdminCSS.btn}>
                <button className={AdminCSS.btnApprove} type="button">Approve</button>
                <button className={AdminCSS.btnDeny} type="button">Deny</button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>


  )
}

export default AdminPanel