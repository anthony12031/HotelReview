import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import apolloConfig from './aws-exports';

const url = apolloConfig.aws_appsync_graphqlEndpoint;
const region = apolloConfig.aws_appsync_region;
const auth = {
    type: apolloConfig.aws_appsync_authenticationType,
    apiKey: apolloConfig.aws_appsync_apiKey
}
const link = ApolloLink.from([
    createAuthLink({url, region, auth}),
    createSubscriptionHandshakeLink({ url, region, auth})
])
const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;