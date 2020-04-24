import React, { Component } from 'react'
import './Home.scss'
import EnrolNav from '../EnrolNav/Enrolnav'
import SideNav from '../Sidenav/Sidemenu'
import img1 from './static/media/CUSTOMER_TESTIMONIALS-512.596bb2b8.png'
import img2 from './static/media/Group-icon.abc00c88.png'
import img3 from './static/media/telegram-icon.c95607f0.png'
import img4 from './static/media/accountant-clipart-male-1.54adcbae.png'
import img5 from './static/media/png_book.1d94fcef.png'
import img6 from './static/media/examColorIcon.90f8c51b.png'
import img7 from './static/media/announcementsIcon.dc668063.png'
import img8 from './static/media/literature-icon.c574be30.png'


export default class Home extends Component {
  render() {
    return (
      <div >
          

          <EnrolNav/>
          <div className="d-flex">
            <div className="side">
              <SideNav/>
              </div>
              <div className="container pt-5">
                <div class="Homepage-heading">Welcome to NCTP Student Portal</div>
                <div class="Homepage-onlineInfo">You will be able to view lectures anytime online once they are available on portal</div>
                

                <div class="Homepage-links-cont ">
                    <table>
                        <tbody class="flexer ">
                            <tr class="mr-3 ml-3">
                                <td>
                                    <img src={img1} />
                                </td>
                                <th>Join Slack Channel</th>
                            </tr>
                            <tr class="mr-3 ml-3"><td><img src={img2} /></td><th>Facebook Group</th></tr><tr><td><img src={img3}/></td><th>Telegram Group</th></tr>
                            
                            <tr class="mr-3 ml-3"><td><img src={img4} /></td><th>Syllabus</th></tr><tr><td><img src={img5} /></td><th>Text Books</th></tr>
                            
                            <tr class="mr-3 ml-3"><td><img src={img6} /></td><th>Exam Details</th></tr><tr><td><img src={img7} /></td><th>Announcements</th></tr>
                            
                            <tr class="mr-3 ml-3"><td><img src={img8} /></td><th>Course Catalog</th></tr></tbody></table>
                </div>

                <div className="border rounded mt-4 p-3 " style={{backgroundColor:'lightgrey'}}>
                    <p className="text-center text-danger font-weight-bolder"><b>STAY HOME, STAY SAFE, AND LEARN TO EARN BY DEVELOPING SOFTWARE</b></p>
                    <p className=" text-danger font-weight-bold">Due to (COVID-19) coronavirus pandemic PIAIC has opened online admissions for all Pakistanis and waived the fees of 1st quarter, also there will be no entry test. Just apply in any course according to your city and generate voucher of zero cost for online, you don't need to submit voucher and there is not any further process. After voucher generation wait for 24 to 36 hours and your status will be updated then you can watch online videos at you own time.</p>
                </div> 
              </div>
           </div>
      </div>
    )
  }
}
