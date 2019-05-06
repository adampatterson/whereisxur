import React from "react";
const DefaultManifestState = { data: null };
const API_KEY = "e11fc97c6507401087d9544f2117c0ed";
export const ManifestContext = React.createContext(DefaultManifestState);

export default class ManifestProvider extends React.Component {
  state = DefaultManifestState;
  componentDidMount() {
    this.getManifest();
  }

  async getManifest() {
    // overview of manifest w/ links to files
    const responseManifest = await fetch(
      "https://www.bungie.net/Platform/Destiny2/Manifest/",
      { headers: { "X-API-Key": API_KEY } }
    );
    // converting raw response to json object
    const responseManifestJSON = await responseManifest.json();

    // grabing the english manifest URL
    const manifestURL = responseManifestJSON.Response.jsonWorldContentPaths.en;

    // "now we're fetchin-it" - lowlines 2019
    const responseManifestData = await fetch(
      "https://www.bungie.net" + manifestURL
    );

    // converting raw response to json object. again
    const responseManifestDataJSON = await responseManifestData.json();

    // telling the console what is in there
    console.log(responseManifestDataJSON, "manifest");
    this.setState({ data: responseManifestDataJSON });
  }
  render() {
    return (
      <ManifestContext.Provider value={this.state}>
        {this.props.children}
      </ManifestContext.Provider>
    );
  }
}

export function withManifestContext(Component) {
  return function WrapperComponent(props) {
    return (
      <ManifestContext.Consumer>
        {context => <Component {...props} manifestContext={context} />}
      </ManifestContext.Consumer>
    );
  };
}
