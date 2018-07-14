/*global google*/
import React from 'react';
import React, { Component } from "react";s
import GoogleMapReact from 'google-map-react';
import LocationDot from './LocationDot';
//import GoogleIcon from './GoogleIcon';
import CustomIcon from './CustomIcon';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Map extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    center: {
      lat: 27.8283,
      lng: -98.5795
    },
    zoom: 3.5
  };



  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCu7rsf9wfUgHKspaVJ7wbXT9KQywq0ixI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            <CustomIcon
            customClass="arts"
            lat={43.5353}
            lng={-110.8300}
            text={''}
            messageTitle="Jackson Hole Therapeutic Riding Association"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://bloximages.newyork1.vip.townnews.com/jhnewsandguide.com/content/tncms/assets/v3/editorial/4/99/49920841-1cea-5ca9-9d76-be65f8264244/552c31641389b.image.jpg"
            messageInfo="https://jhtra.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={44.2619}
            lng={-88.4154}
            text={''}
            messageTitle="The Building for Kids"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://www.roadtripsforfamilies.com/wp-content/uploads/2016/01/Appleton-The-Building-for-Kids.jpg"
            messageInfo="https://buildingforkids.org/calendar/spectrum-saturday/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={38.3498}
            lng={-81.6326}
            text={''}
            messageTitle="Clay Center Discovery Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://media-cdn.tripadvisor.com/media/photo-s/03/2e/f2/80/clay-center-for-the-arts.jpg"
            messageInfo="https://www.theclaycenter.org/discovery-museum/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={35.2418}
            lng={-82.4162}
            text={''}
            messageTitle="Talisman Summer Camps"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWa2M5504TRSK1Eqkd8wyAR051ccSR2A6pT4z37lxLVMAo6kB"
            messageInfo="https://talismancamps.com/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={47.6197}
            lng={-122.3511}
            text={''}
            messageTitle="Pacific Science Center"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9QwSyNStcbU49fru_v_mo55FPepIztlJtxak5EWZ-vMLPh0OlA"
            messageInfo="https://www.pacificsciencecenter.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={36.0892}
            lng={-86.7415}
            text={''}
            messageTitle="Nashville Zoo"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVZE6gjNlPrwnO61D8ijuCc8uZUeK7jJ97G3eTU5y49O7_qms"
            messageInfo="https://www.nashvillezoo.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={41.4901}
            lng={-71.3128}
            text={''}
            messageTitle="Ryan Family Newport Game Room"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://ryanfamily.com/newsite/wp-content/uploads/2015/02/tea-cups.jpg"
            messageInfo="https://ryanfamily.com/locations/game-locations/newport/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={35.4653}
            lng={-97.5179}
            text={''}
            messageTitle="Oklahoma City Botanical Gardens"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://media1.fdncms.com/okgazette/imager/u/original/2971900/botanical-garden.jpg"
            messageInfo="http://oklahomacitybotanicalgardens.com/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={44.3094}
            lng={-96.7963}
            text={''}
            messageTitle="Children's Museum of South Dakota"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://prairieplay.org/uploads/building_Signage.jpg"
            messageInfo="https://www.prairieplay.org/accessibility-facilities"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={39.9598}
            lng={-83.0070}
            text={''}
            messageTitle="Center of Science and Industry"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://fthmb.tqn.com/BQzI-AjK6CGgfUKxCRGxDIlUe40=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/14102244231_676c932445_k-56a404695f9b58b7d0d4f301.jpg"
            messageInfo="https://cosi.org/kids/sensory-friendly-experiences"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={46.8446}
            lng={-96.8550}
            text={''}
            messageTitle="Red River Zoo"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://livability.com/sites/default/files/7730909AJB2811.jpg"
            messageInfo="https://redriverzoo.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={39.8143}
            lng={-74.9222}
            text={''}
            messageTitle="Diggerland"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://www.diggerlandusa.com/wp-content/uploads/2013/11/attractions_nz1_dig_a_round_001.jpg"
            messageInfo="https://www.diggerlandusa.com/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={38.9072}
            lng={-77.0369}
            text={''}
            messageTitle="Smithsonian Museums"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Smithsonian_logo_color.svg/2000px-Smithsonian_logo_color.svg.png"
            messageInfo="https://www.si.edu/accessibility/matm"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={36.0752}
            lng={-79.7861}
            text={''}
            messageTitle="Greensboro Children's Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://1.bp.blogspot.com/_8k60KyYvTjQ/TOluU4VaNrI/AAAAAAAACrs/K-AIcAVYx3Q/s1600/IMG_4240.JPG"
            messageInfo="http://www.gcmuseum.com/visit/accessibility.php"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={40.7859}
            lng={-73.9773}
            text={''}
            messageTitle="Children's Museum of Manhattan"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://cdn.mntm.me/b4/91/a2/Children_s_Museum_of_Manhattan-New_York-NY-b491a2890eb9445590f9d402dfd1bfe0_c.jpg"
            messageInfo="https://cmom.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={35.0931}
            lng={-106.6791}
            text={''}
            messageTitle="ABQ Biopark"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFleFN-OXK3bZqj66Ba9RnpuRp6HbbdWyeY2NvBh4Uemhb0s6"
            messageInfo="http://www.cabq.gov/culturalservices/biopark"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={36.9758}
            lng={-121.8889}
            text={''}
            messageTitle="Shared Adventures"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://image.santacruzsentinel.com/storyimage/NE/20150718/NEWS/150719686/AR/0/AR-150719686.jpg&maxh=400&maxw=667"
            messageInfo="https://www.sharedadventures.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={39.5296}
            lng={-119.8138}
            text={''}
            messageTitle="Arts for All Nevada"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://www.artsforallnevada.org//wp-content/uploads/2015/01/Green-trim-LM-ext-Court-St-300x196.jpg"
            messageInfo="https://www.artsforallnevada.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={41.2565}
            lng={-95.9345}
            text={''}
            messageTitle="Omaha Children's Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://www.livingasunshinelife.com/wp-content/uploads/2016/08/Omaha-Childrens-Museum-Wiggle-Room-1024x768.jpg"
            messageInfo="http://www.ocm.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={38.6367}
            lng={-90.2932}
            text={''}
            messageTitle="St Louis Zoo"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://www.stlzoo.org/files/5213/8115/8629/Polar_Bear_Point_Bear_viewing_rendering_Saint_Louis_Zoo.jpg"
            messageInfo="https://www.stlzoo.org/visit/zooservices"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={32.3287}
            lng={-90.1573}
            text={''}
            messageTitle="Mississippi Children's Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://nairegion3.files.wordpress.com/2015/09/sand-play.jpg"
            messageInfo="https://mschildrensmuseum.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={44.7678}
            lng={-93.1967}
            text={''}
            messageTitle="Minnesota Zoo"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://img.apmcdn.org/d867a6e85b0a3e6b6ca8e9a1d195e0cc01bf811e/uncropped/dd951f-20120619-061812dolphin05.jpg"
            messageInfo="http://mnzoo.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={42.4768}
            lng={-83.1500}
            text={''}
            messageTitle="Detroit Zoo"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://image.theoaklandpress.com/storyimage/OP/20160425/NEWS/160429674/AR/0/AR-160429674.jpg&maxh=400&maxw=667"
            messageInfo="https://detroitzoo.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={42.3519}
            lng={-71.0500}
            text={''}
            messageTitle="Boston Children's Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://res.cloudinary.com/mommy-nearest/image/upload/c_fill,h_450,w_800/v1433262428/n0rdqh3xf5cfhhbxrwiz.jpg"
            messageInfo="http://www.bostonchildrensmuseum.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={39.2851}
            lng={-76.6083}
            text={''}
            messageTitle="National Aquarium"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2016/06/baltdolphin-1000x480.jpg"
            messageInfo="https://www.aqua.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={43.6540}
            lng={-70.2622}
            text={''}
            messageTitle="Children's Museum & Theatre of Maine"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://3.bp.blogspot.com/-uigYdRqt8g4/UAY0FgyMLbI/AAAAAAAAHFQ/7ZEkXC-Woks/s1600/DSC_0125.JPG"
            messageInfo="http://www.kitetails.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.9448}
            lng={-90.0682}
            text={''}
            messageTitle="Louisiana Children's Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://www.cityprofile.com/forum/attachments/louisiana/20555-new-orleans-louisiana-children"
            messageInfo="https://www.lcm.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={41.6904}
            lng={-91.6000}
            text={''}
            messageTitle="The Iowa Children's Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://media-cdn.tripadvisor.com/media/photo-s/0c/7c/4c/83/photo0jpg.jpg"
            messageInfo="https://theicm.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={39.8106}
            lng={-86.1579}
            text={''}
            messageTitle="Children's Museum of Indianapolis"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://victory.downtownindy.org/images/cms/childrten-s-museum-exterior1_web_1414699037.jpg"
            messageInfo="https://www.childrensmuseum.org/#"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={41.8781}
            lng={-87.6298}
            text={''}
            messageTitle="Chicago Children's Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://c1.staticflickr.com/5/4664/39387506744_93d01f2866_b.jpg"
            messageInfo="https://www.chicagochildrensmuseum.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={39.8279}
            lng={-88.9128}
            text={''}
            messageTitle="Children's Museum of Illinois"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://s3-media3.fl.yelpcdn.com/bphoto/uuB6ggjS7uuvi7KZuJoUyg/258s.jpg"
            messageInfo="https://www.childrensmuseumofil.com/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={43.6055}
            lng={-116.2732}
            text={''}
            messageTitle="Aquarium of Boise"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://media-cdn.tripadvisor.com/media/photo-s/03/0b/02/22/idaho-aquarium.jpg"
            messageInfo="http://www.aquariumboise.net/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={39.7345}
            lng={-75.5605}
            text={''}
            messageTitle="Delaware Children's Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://delawarechildrensmuseum.org/wp-content/uploads/2016/08/Aviary-Photo_130392674271532383.png"
            messageInfo="http://delawarechildrensmuseum.org"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={38.2527}
            lng={-85.7585}
            text={''}
            messageTitle="The Kentucky Center"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://cdn-az.allevents.in/banners/d9076ba625dc5ee7d7570e6f56e1b5d2-rimg-w700-h420-gmir.jpg"
            messageInfo="http://www.kentuckycenter.org/about/access-services/sensory-friendly-services"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={39.7438}
            lng={-94.5405}
            text={''}
            messageTitle="The Grand"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://d1bdyioujieohw.cloudfront.net/assets/bubble_trouble-bbce0ed94264d725e25a4f79ec1e7604b5dd0aa7398cb704332500eefbc18d6c.jpg"
            messageInfo="https://www.thegrandwilmington.org/sensory-friendly"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={36.1881}
            lng={-94.5405}
            text={''}
            messageTitle="Ability Tree"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://www.klrc.com/assets/Uploads/_resampled/SetWidth250-ability-tree-inc-300x182.jpg"
            messageInfo="https://www.abilitytree.org/ar-programs/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={45.5085}
            lng={-122.7177}
            text={''}
            messageTitle="Portland Children's Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://pitstopsforkids.com/wp-content/uploads/2014/01/portland-cm-store.jpg"
            messageInfo="https://www.portlandcm.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={61.2161}
            lng={-149.8857}
            text={''}
            messageTitle="Anchorage Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://res.cloudinary.com/simpleview/image/upload/crm/anchorage/2016-Anchorage-Museum-Silet-Disco0-42213a675056a36_42213e9a-5056-a36a-0abafc8d3ffe49e4.jpg"
            messageInfo="https://www.anchoragemuseum.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={33.4504}
            lng={-112.0646}
            text={''}
            messageTitle="Children's Museum of Phoenix"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://childrensmuseumofphoenix.org/wp-content/uploads/2011/12/Climber-In-the-Tub.jpg"
            messageInfo="https://childrensmuseumofphoenix.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={43.6693}
            lng={-92.9747}
            text={''}
            messageTitle="Spam Museum"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://www.roadsideamerica.com/attract/images/mn/MNAUSspam_2016prov1.jpg"
            messageInfo="http://www.spam.com/museum"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={35.7951}
            lng={-83.5312}
            text={''}
            messageTitle="Dollywood"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://media-cdn.tripadvisor.com/media/photo-s/03/83/6e/b7/dollywood.jpg"
            messageInfo="https://www.dollywood.com/themepark/Guest-Services/Accessibility"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={33.4860}
            lng={-86.7795}
            text={''}
            messageTitle="Birmingham Zoo"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://media.al.com/birmingham-news/photo/2012/08/11443810-large.jpg"
            messageInfo="https://www.birminghamzoo.com/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={44.4280}
            lng={-110.5885}
            text={''}
            messageTitle="Yellowstone National Park"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmediad.publicbroadcasting.net%2Fp%2Fkufm%2Ffiles%2Fstyles%2Fx_large%2Fpublic%2F201707%2F18342290_1682811778400836_8508417880170915315_n_0.jpg"
            messageInfo="https://www.nps.gov/yell/index.htm/index.htm"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={44.5553}
            lng={-72.7957}
            text={''}
            messageTitle="Smugglers' Notch"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.insidethegate.com%2Fwp-content%2Fuploads%2F2011%2F11%2FSmuggsWinterFamily.jpg"
            messageInfo="https://www.smuggs.com"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={39.4858}
            lng={-106.0344}
            text={''}
            messageTitle="Breckenridge Outdoor Education Center"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.boec.org%2Fwp-content%2Fuploads%2F2008%2F02%2Fi-can-do-this.jpg"
            messageInfo="https://www.boec.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={32.7353}
            lng={-117.1490}
            text={''}
            messageTitle="San Diego Zoo"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRqqepo2g9pe_rB6ZyGi-mikogaglPkHiYQN3Ob56ocUqaPZkhjSw"
            messageInfo="http://zoo.sandiegozoo.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={34.0007}
            lng={-81.0348}
            text={''}
            messageTitle="EdVenture"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://pbs.twimg.com/profile_images/793165529821356040/2HE1a2fS_400x400.jpg"
            messageInfo="https://www.edventure.org/programs"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.9012}
            lng={-81.3124}
            text={''}
            messageTitle="Colonial Quarters Tour"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://i.pinimg.com/originals/aa/ca/9e/aaca9e3d4a5a012d70f7ba734b736c5c.jpg"
            messageInfo="http://www.colonialquarter.com/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={33.7634}
            lng={-84.3951}
            text={''}
            messageTitle="Georgia Aquarium"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://res.cloudinary.com/simpleview/image/fetch/c_limit,f_auto,q_75,w_1200/https://res.cloudinary.com/simpleview/image/upload/crm/sandysprings/PWP_5515-listing-68b98ca25056b3a_68b99193-5056-b3a8-49c41e9fb73e2c6e.jpg"
            messageInfo="https://www.georgiaaquarium.org/experience/visit/plan-your-visit/accessibility"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={40.1842}
            lng={-74.8722}
            text={''}
            messageTitle=""
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc=""
            messageInfo=""
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={42.002707}
            lng={-87.661236}
            text={''}
            messageTitle="Elmwood Park Zoo"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://www.sbramada.com/resourcefiles/mainimages/santa-barbara-zoo-at-california-top.jpg"
            messageInfo="http://www.elmwoodparkzoo.org/amenities-and-accessibility.php"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={34.4204}
            lng={-119.6664}
            text={''}
            messageTitle="Santa Barbara Zoo"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://montco.today/wp-content/uploads/sites/2/2017/12/EPZ-giraffe.jpg"
            messageInfo="https://www.sbzoo.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.5392}
            lng={-98.3930}
            text={''}
            messageTitle="Morgan's Wonderland"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs.abcnews.com%2Fimages%2FLifestyle%2FHT-morgans-wonderland-jpo-170615_16x9_992.jpg"
            messageInfo="https://morganswonderland.com"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={43.0750}
            lng={-89.3893}
            text={''}
            messageTitle="Children's Theatre of Madison"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Fhost.madison.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F9%2Fd0%2F9d09a096-613e-11e0-b2bd-001cc4c002e0%2F4d9df7de3cc79.image.jpg"
            messageInfo="https://ctmtheater.org/see-a-show/accessible-performances"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={47.5873}
            lng={-122.3020}
            text={''}
            messageTitle="Seattle Children's PlayGarden"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://static.wixstatic.com/media/338eb8_d4839881e1454858a597fbbfe558ee8f.jpg/v1/fill/w_817,h_613,al_c,q_90,usm_0.66_1.00_0.01/338eb8_d4839881e1454858a597fbbfe558ee8f.webp"
            messageInfo="https://www.childrensplaygarden.org/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.7858}
            lng={-95.6349}
            text={''}
            messageTitle="Jumpstreet"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTa1SyzhPovbvCCnzETZcCg7Dh9EUSI8WD4NT2JJJTBg32ClKkR"
            messageInfo="https://www.gotjump.com/texas/katy/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.6197}
            lng={-95.6349}
            text={''}
            messageTitle="Houston Museum of Natural Science at Sugar Land"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSz5Q6nWGQj_JV2n3HAz3ryRcj5pzs8rqMgwwipoCGDnnMhQC2m"
            messageInfo="http://www.hmns.org/hmns-at-sugar-land/events/p-a-w-s-reading-program/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.7858}
            lng={-95.8244}
            text={''}
            messageTitle="Explorative Park"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia.bizj.us%2Fview%2Fimg%2F7054222%2Fdsc8195e*1200xx3216-1809-0-164.jpg"
            messageInfo="http://willowforkdrainagedistrict.com/parks/exploration-park/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.7858}
            lng={-95.8244}
            text={''}
            messageTitle="We Rock the Spectrum Kids Gym"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcScS9JMnnWvFKstgTJwemAvUPRi5Px9aLB1FtWw0ybsZsSHotAH2w"
            messageInfo="http://www.werockthespectrumkaty.com/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.761993}
            lng={-95.366302}
            text={''}
            messageTitle="Main Street Theater"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTFADeSXsXwwiy2C8sh5Ozl5QFmJfeadNwHf0rVfFVPM4OqEDr0vw"
            messageInfo="http://www.mainstreettheater.com/info/accommodations.html"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.7604}
            lng={-95.3698}
            text={''}
            messageTitle="Sky High Trampoline Sports"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fclt.skyhighsports.com%2Fwp-content%2Fuploads%2Fsites%2F10%2F2015%2F08%2FLeap.jpg"
            messageInfo="https://skyhighsports.com/things-to-do/special-needs-jump-time/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.7221}
            lng={-95.3896}
            text={''}
            messageTitle="Houston Museum of Natural Sciences"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcache-graphicslib.viator.com%2Fgraphicslib%2Fthumbs360x240%2F40629%2FSITours%2Fhouston-museum-of-natural-science-general-admission-in-houston-370112.jpg"
            messageInfo="http://www.hmns.org/visit/accessibility/"
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={40.7587}
            lng={-73.9787}
            text={''}
            messageTitle="Rockefeller Center"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FTcnOOlWn12cFxv1uWrkQ5PK3i9U%3D%2F0x0%3A2000x1333%2F1200x800%2Ffilters%3Afocal(840x507%3A1160x827)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F57775973%2Frock_center_christmas_tree.0.jpg"
            messageInfo="https://www.rockefellercenter.com/family-friendly/            "
            size="10px"
          />
            <CustomIcon
            customClass="arts"
            lat={29.7227}
            lng={-95.3851}
            text={''}
            messageTitle="Children's Museum of Houston"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.cmhouston.org%2Ffiles%2Fflowworks_main.jpg"
            messageInfo="https://www.cmhouston.org/accessibility"
            size="10px"
          />
          <CustomIcon
            customClass="arts"
            lat={29.7604}
            lng={-95.3698}
            text={''}
            messageTitle="Houston Space Center"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://www.roamingrobert.com/wp-content/uploads/2016/04/Space-Center-Houston.png"
            messageInfo="https://spacecenter.org/special-events/sensory-friendly-evening/"
            size="10px"
          />
          <CustomIcon
            customClass="arts"
            lat={45.4985}
            lng={-108.9416}
            text={''}
            messageTitle="Erik's Ranch"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fwww.eriksranch.org%2Fwp-content%2Fuploads%2F2015%2F10%2FScreen-Shot-2015-11-18-at-11.45.34-AM.png"
            messageInfo="http://www.eriksranch.org/"
            size="10px"
          />
          <CustomIcon
            customClass="arts"
            lat={40.4927}
            lng={-108.9416}
            text={''}
            messageTitle="Dinosaur National Monument"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcREShpjXXSmN25EqJYtgLflVJLXEPVL7y8rDMOoA8GI9aD3PDnp"
            messageInfo="https://www.nps.gov/dino/index.htm"
            size="10px"
          />
          <CustomIcon
            customClass="arts"
            lat={40.5321}
            lng={-111.8940}
            text={''}
            messageTitle="Living Planet Aquarium"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://c1.staticflickr.com/8/7546/15641686387_bcb98c5689_b.jpg"
            messageInfo="https://thelivingplanet.com/"
            size="10px"
          />
          <CustomIcon
            customClass="arts"
            lat={27.9880}
            lng={-81.6916}
            text={''}
            messageTitle="LegoLand"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://www.wheretraveler.com/sites/default/files/styles/wt17_promoted_large/public/images/LEGOLANDFLORIDA-DUPLOVALLEY-002.jpg?itok=PAohGik1&timestamp=1405365132"
            messageInfo="https://www.legoland.com/florida/planning-your-visit/special-situations/"
            size="10px"
          />
          <CustomIcon
            customClass="arts"
            lat={28.4152}
            lng={-81.4554}
            text={''}
            messageTitle="Discovery Cove"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://seaworld.scdn3.secure.raxcdn.com/orlando/-/media/discovery-cove-orlando/images/header/navigation-child-items/dolphin-smooch_236x133.ashx?version=1_201804105636&h=133&w=236&la=en&hash=74ED8D10918EC98A5B989D79CA3307C070711206"
            messageInfo="https://discoverycove.com/orlando/help/guests-with-disabilities/"
            size="10px"
          />
          <CustomIcon
            customClass="arts"
            lat={28.4743}
            lng={-81.4678}
            text={''}
            messageTitle="Universal Studios"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://www.ptmg.com/img/meetings/357310.jpg"
            messageInfo="https://www.universalorlando.com/web/en/us/plan-your-visit/accessibility-information/index.html"
            size="10px"
          />
          <CustomIcon
            customClass="arts"
            lat={33.8121}
            lng={-117.91909}
            text={''}
            messageTitle="DisneyLand"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Cinderella_Castle_at_Magic_Kingdom.jpg/362px-Cinderella_Castle_at_Magic_Kingdom.jpg"
            messageInfo="https://disneyland.disney.go.com/guest-services/guests-with-disabilities/"
            size="10px"
          />
          <CustomIcon
            customClass="arts"
            lat={28.3852}
            lng={-81.5639}
            text={''}
            messageTitle="Disney World"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/arts.png"
            messageSrc="http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_66/cw_288/ch_162/APL/uploads/2014/10/cat_5-1.jpg"
            messageInfo="https://disneyworld.disney.go.com/guest-services/guests-with-disabilities/"
            size="10px"
          />
            <CustomIcon
            customClass="swimming"
            lat={21.1619}
            lng={-86.8515}
            text={''}
            messageTitle="Club Med Cancun"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/swimming.png"
            messageSrc="https://media-server.clubmed.com/image/jpeg/400/225/crop/center/60/http%3A%2F%2Fns.clubmed.com%2Famn%2F2018%2Fresorts%2FCancun%2FPiscine_Aguamarina_Cam_2_v2_MHNA_2.jpg"
            messageInfo="https://www.clubmedus/r/Cancun-Yucatan/y"
            size="10px"
          />
            <CustomIcon
            customClass="swimming"
            lat={21.3388}
            lng={-158.1229}
            text={''}
            messageTitle="Aulani Resort"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/swimming.png"
            messageSrc="https://i1.wp.com/tripswithtykes.com/wp-content/uploads/2017/11/Disney-Aulani-Splurges-Aulani-at-Night.jpg?fit=800%2C530&ssl=1"
            messageInfo="https://www.disneyaulani.com/?CMP=OKC-aul_lodging_gmap_417"
            size="10px"
          />
            <CustomIcon
            customClass="swimming"
            lat={33.6891}
            lng={-78.8867}
            text={''}
            messageTitle="Myrtle Beach"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/swimming.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.myrtlebeachlife.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2014%2F06%2FDayatBeach9.jpg"
            messageInfo="https://championautismnetwork.com/can-card/"
            size="10px"
          />
            <CustomIcon
            customClass="swimming"
            lat={43.5869}
            lng={-89.7818}
            text={''}
            messageTitle="Wilderness Resort"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/swimming.png"
            messageSrc="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.wildernessresort.com%2Fwp-content%2Fuploads%2F2017%2F05%2FIndoor-Wild-West-600x400-c-default.jpg"
            messageInfo="https://www.wildernessresort.com/"
            size="10px"
          />
            <CustomIcon
            customClass="swimming"
            lat={27.7428}
            lng={-82.7505}
            text={''}
            messageTitle="St Petersburg Beach"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/swimming.png"
            messageSrc="https://www.kimptonhotels.com/blog/wp-content/uploads/2016/08/st-pete-beach-130d8cc5.jpg"
            messageInfo="https://www.visitstpeteclearwater.com/communities/st-pete-beach"
            size="10px"
          />
            <CustomIcon
            customClass="swimming"
            lat={18.3140}
            lng={-78.3371}
            text={''}
            messageTitle="Beaches Resorts Negril, Jamaica"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/swimming.png"
            messageSrc="http://cdn.sandals.com/beaches/v11/slideshows/resorts/bng/homeTopSlider/7.jpg"
            messageInfo="http://www.beaches.com/autsim-friendly-resorts/"
            size="10px"
          />
            <CustomIcon
            customClass="swimming"
            lat={21.7876}
            lng={-72.1970}
            text={''}
            messageTitle="Beaches Resorts Turks and Caicos"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/swimming.png"
            messageSrc="http://www.destination360.com/caribbean/images/s/beaches-resort.jpg"
            messageInfo="http://www.beaches.com/autsim-friendly-resorts/"
            size="10px"
          />
            <CustomIcon
            customClass="swimming"
            lat={18.4050}
            lng={-76.9801}
            text={''}
            messageTitle="Beaches Resorts Ocho Rios, Jamaica"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/swimming.png"
            messageSrc="http://www.visitjamaica.com/Media/Default/Gallery/Vendors/Beaches%20Ocho%20Rios/bbo-01.jpg"
            messageInfo="http://www.beaches.com/autsim-friendly-resorts/"
            size="10px"
          />
            <CustomIcon
            customClass="swimming"
            lat={27.2443}
            lng={-80.3119}
            text={''}
            messageTitle="Club Med Sandpiper Bay"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/swimming.png"
            messageSrc="https://www.haysfaraway.co.uk/imagelibrary/deal-image-gallery/1429/https___ns_clubmed_com_ipmm_1-MEDIA_01_VILLAGES_1_1MER_SANDPIPER-BAY_77-PHOTOS_SANCA111006.jpg"
            messageInfo="http://www.clubmed.us/r/Sandpiper-Bay/y"
            size="10px"
          />
            <CustomIcon
            customClass="lodging"
            lat={37.3484}
            lng={-76.7310}
            text={''}
            messageTitle="Great Wolf Lodge"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/lodging.png"
            messageSrc="https://images.familyvacationcritic.com/gwl-williamsburg-planning.jpg"
            messageInfo="https://www.greatwolf.com/williamsburg"
            size="10px"
          />
            <CustomIcon
            customClass="lodging"
            lat={12.0870}
            lng={-68.8966}
            text={''}
            messageTitle="Dolphin Suites Curacao"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/lodging.png"
            messageSrc="https://r-fa.bstatic.com/xdata/images/xphoto/1920x810/34817620.jpg?k=f77815654673d5d7db549b15d53fa70cb1e7a28359693c91f7487ce1a781faeb&o="
            messageInfo="http://www.dolphinsuites-curacao.com/"
            size="10px"
          />
            <CustomIcon
            customClass="lodging"
            lat={40.9227}
            lng={-73.9648}
            text={''}
            messageTitle="The Clinton Inn Hotel"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/lodging.png"
            messageSrc="https://s3-media3.fl.yelpcdn.com/bphoto/qrHyE44LTLCfHZ8YZTPutg/ls.jpg"
            messageInfo="http://www.clinton-inn.com/"
            size="10px"
          />
            <CustomIcon
            customClass="lodging"
            lat={21.0812}
            lng={-86.7737}
            text={''}
            messageTitle="Fiesta Americana Condesa Cancun"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/lodging.png"
            messageSrc="https://images.oyster.com/photos/pool--v2279137-w902.jpg"
            messageInfo="https://www.fiestamericana.com/web/fiesta-americana-condesa-cancun-all-inclusive"
            size="10px"
          />
            <CustomIcon
            customClass="lodging"
            lat={27.9454}
            lng={-82.5330}
            text={''}
            messageTitle="Crowne Plaza Tampa Westshore"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/lodging.png"
            messageSrc="https://assets.hospitalityonline.com/photos/employers/237740/310990_l.jpg"
            messageInfo="https://www.cptampawestshore.com/"
            size="10px"
          />
            <CustomIcon
            customClass="lodging"
            lat={33.8016}
            lng={-117.9165}
            text={''}
            messageTitle="Sheraton Park Anaheim"
            markerSrc="https://maps.google.com/mapfiles/kml/shapes/lodging.png"
            messageSrc="http://www.anaheimblog.net/wp-content/uploads/2017/08/sheraton-park-AB-feat.jpg"
            messageInfo="http://www.sheratonparkanaheim.com/rooms"
            size="10px"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;