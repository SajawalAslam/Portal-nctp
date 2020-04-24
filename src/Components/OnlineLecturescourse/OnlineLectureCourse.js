import React, { Component } from 'react'
import './OnlineLectureCourse.scss'
import EnrolNav from '../EnrolNav/Enrolnav'
import SideNav from '../Sidenav/Sidemenu'


export default class OnlineLectureCourse extends Component {
  render() {
    return (
      <div>
          <EnrolNav/>
            <div className="side"><SideNav/></div>

            <div className="d-flex justify-content-center">
            <div className="container mt-5">
                    <div class="card text-color mb-3 " style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my">
                    <button type="button" class="btn text-center onlinelec-course-card-sec2-btn">View Course</button>
                    </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
}
