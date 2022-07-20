import { Fragment } from 'react'
import { useSelector } from 'react-redux'
// ** Custom Components
import UILoader from '@components/ui-loader'

// ** Reactstrap Imports
import { Row, Col} from 'reactstrap'

// ** Demo Components
import ProfileHeader from './ProfileHeader'
import RepoCard from '../../@core/components/repoCard/RepoCard'


// ** Styles
import '@styles/react/pages/page-profile.scss'

const Profile = (props) => {
  const component = useSelector(state => state.componentSlice.component)
  const { langObj, repos } = props
  return (
    <Fragment>
      <div id='user-profile'>
          <Row>
            <Col sm='12'>
              <ProfileHeader {...props} />
            </Col>
          </Row>
          {
            component &&
            component === "user" ? <Row>
                <h1>{component}</h1>
              </Row> : component === "repo" ? (<Row className='d-flex justify-content-center align-items-center mb-1'>
                  {
                    repos && repos.map(repo => (
                      <Col key={repo.id} sm="12" md="6" lg="4" xl="3" className='mb-1'>
                        <RepoCard repo={repo}/>
                      </Col>
                    ))
                  }  
              </Row>) : component === "contribute" ? <Row>
                <h1>{component}</h1>
              </Row> : <Row>
                <p>{langObj?.bio}</p>
              </Row> 
          }
        </div>
    </Fragment>
  )
}

export default Profile
