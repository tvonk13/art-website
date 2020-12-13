import Prismic from 'prismic-javascript';

const apiEndpoint = process.env.REACT_APP_PRISMIC_API_ENDPOINT;
const accessToken = process.env.REACT_APP_PRISMIC_ACCESS_TOKEN;

const Client = Prismic.client(apiEndpoint, { accessToken });

export default Client;