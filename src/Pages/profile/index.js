import { Fragment } from 'react'
import { useSelector } from 'react-redux'
// ** Custom Components
import UILoader from '@components/ui-loader'
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col, Button } from 'reactstrap'

// ** Demo Components
import ProfilePoll from './ProfilePolls'
import ProfileAbout from './ProfileAbout'
import ProfilePosts from './ProfilePosts'
import ProfileHeader from './ProfileHeader'
import ProfileTwitterFeeds from './ProfileTwitterFeeds'
import ProfileLatestPhotos from './ProfileLatestPhotos'
import ProfileSuggestedPages from './ProfileSuggestedPages'
import ProfileFriendsSuggestions from './ProfileFriendsSuggestions'

// ** Styles
import '@styles/react/pages/page-profile.scss'

const Profile = (props) => {
  const { data } = props
  const component = useSelector(state => state.componentSlice.component)
  console.log(component)
  return (
    <Fragment>
      {/* <Breadcrumbs title='Profile' data={[{ title: 'Profile' }]} /> */}
      {data !== null ? (
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
              </Row> : component === "repo" ? <Row>
              <h1>{component}</h1>
            </Row> : <Row>
                <h1>Medellin is a city of Graffiti:</h1>
              </Row> 
          }
          {/* <section id='profile-info'>
            this section requires a state called data, and block
            <Row>
              <Col lg={{ size: 3, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}>
                <ProfileAbout data={data.userAbout} />
                <ProfileSuggestedPages data={data.suggestedPages} />
                <ProfileTwitterFeeds data={data.twitterFeeds} />
              </Col>
              <Col lg={{ size: 6, order: 2 }} sm={{ size: 12 }} xs={{ order: 1 }}>
                <ProfilePosts data={data.post} />
              </Col>
              <Col lg={{ size: 3, order: 3 }} sm={{ size: 12 }} xs={{ order: 3 }}>
                <ProfileLatestPhotos data={data.latestPhotos} />
                <ProfileFriendsSuggestions data={data.suggestions} />
                <ProfilePoll data={data.polls} />
              </Col>
            </Row>
            <Row>
              <Col className='text-center' sm='12'>
                <Button color='primary' className='border-0 mb-1 profile-load-more' size='sm' onClick={handleBlock}>
                  <UILoader blocking={block} overlayColor='rgba(255,255,255, .5)'>
                    <span> Load More</span>
                  </UILoader>
                </Button>
              </Col>
            </Row>
          </section> */}
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
