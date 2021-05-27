import { Component } from "react";
import "./index.css";

const socialMediaAppsData = [
  {
    id: 0,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/linkedin-logo-img.png",
    name: "linkedIn",
    siteUrl: "https://www.linkedin.com/in/anil-kumar-mallula-601299169/",
  },
  {
    id: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/instagram-logo-img.png",
    name: "instagram",
    siteUrl: "https://www.instagram.com/aspiring_anil/",
  },
  {
    id: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/facebook-logo-img.png",
    name: "facebook",
    siteUrl: "https://www.facebook.com/mallulaanil/",
  },
  {
    id: 4,
    imageUrl:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    name: "github",
    siteUrl: "https://github.com/ANILMALLULA",
  },
];

class SocialMediaSection extends Component {
  renderSocialMediaAppsList = () =>
    socialMediaAppsData.map((app) => (
      <a href={app.siteUrl} key={app.id}>
        <img className='app-logo' src={app.imageUrl} alt={app.name} />
      </a>
    ));

  render() {
    return (
      <div className='social-media-section'>
        {this.renderSocialMediaAppsList()}
      </div>
    );
  }
}

export default SocialMediaSection;
