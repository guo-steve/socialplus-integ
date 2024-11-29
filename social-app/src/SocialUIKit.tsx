import { AmityUiKitSocial, AmityUiKitProvider } from "@amityco/ui-kit";

const theme = {
  palette: {
    primary: '#FF0000',
  }
}

const socialLogin = async (userId: string) => {
  const url = 'http://localhost:5000/social/login'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  })

  return (await response.json()).authenticationToken
}

const SocialUIKit = ({ userId = '' }) => {
  return (
    <AmityUiKitProvider
      apiKey={process.env.REACT_APP_SOCIAL_PLUS_API_KEY ?? ''}
      apiRegion='sg'
      getAuthToken={async () => socialLogin(userId)}
      userId={userId}
      displayName={userId} // displayName is optional
      theme={theme}
    >
      <AmityUiKitSocial />
    </AmityUiKitProvider>
  );
};

export default SocialUIKit;
